import { type Message as DatabaseMessage } from "@prisma/client";
import { ChatCompletionStreamingRunner } from "openai/lib/ChatCompletionStreamingRunner";
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { createChat } from "~/apis/ChatAPI";
import { createMessage } from "~/apis/MessagesAPI";
import {
  DEFAULT_CHAT_SESSION_TITLE,
  DEFAULT_MESSAGE,
  type Message,
  type Pages,
  type Product,
  type Prompt,
  Role,
  SpecialPhrases,
  type ChatSession,
} from "~/types";
import { Chat } from "./Chat";

const TOP_HEADER_HEIGHT = 66;

const REVIEW_UNDERSTANDING_MESSAGE = {
  role: "assistant",
  content: SpecialPhrases.REVIEW_UNDERSTANDING,
} as Message;

const PROCEED_TO_RECOMMENDATIONS_MESSAGE = {
  role: "assistant",
  content: SpecialPhrases.PROCEED_TO_RECOMMENDATIONS,
} as Message;

type Props = {
  product: Product;
  prompt: Prompt;
  currentPage: Pages;
  chatSession?: ChatSession;
  setChatSession: (chatSession: ChatSession) => void;
  headerHeight?: number;
  onReviewUnderstanding?: () => void;
  onProceedToRecommendations?: () => void;
  onGenerateTitle: (chatSessionId: string) => Promise<void>;
};

export interface ChatComponentHandle {
  handleChat: (message: Message) => void;
}

const ChatComponentInner: React.ForwardRefRenderFunction<
  ChatComponentHandle,
  Props
> = (
  {
    product,
    prompt,
    currentPage,
    chatSession,
    setChatSession,
    headerHeight = TOP_HEADER_HEIGHT,
    onReviewUnderstanding,
    onProceedToRecommendations,
    onGenerateTitle,
  },
  ref,
) => {
  useImperativeHandle(ref, () => ({
    handleChat(message: Message) {
      handleSend(message);
    },
  }));

  const [height, setHeight] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [responding, setResponding] = useState<boolean>(false);
  const [_chatSession, _setChatSession] = useState<ChatSession | undefined>(
    chatSession,
  );
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [isAtBottom, setIsAtBottom] = useState(true);
  const [uiMessages, setUiMessages] = useState<Message[] | DatabaseMessage[]>(
    _chatSession?.messages || [DEFAULT_MESSAGE],
  );

  useEffect(() => {
    if (_chatSession) {
      setChatSession(_chatSession);
    }
  }, [_chatSession]);

  useEffect(() => {
    if (_chatSession) {
      const obj = _chatSession;
      //@ts-ignore
      obj.messages = uiMessages;
      setChatSession(obj);
    }
  }, [uiMessages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    setIsAtBottom(true);
  };

  // check if at bottom when sidebar scrolls
  const checkIfAtBottom = () => {
    if (!sidebarRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = sidebarRef.current;
    const _isAtBottom = scrollHeight - scrollTop <= clientHeight + 120;
    setIsAtBottom(_isAtBottom);
  };

  // set scroll listener when sidebar ref changes
  useEffect(() => {
    const chatSidebar = sidebarRef.current;
    if (!chatSidebar) return;

    chatSidebar.addEventListener("scroll", checkIfAtBottom);

    return () => {
      chatSidebar.removeEventListener("scroll", checkIfAtBottom);
    };
  }, [sidebarRef]);

  // Generate a title after loading if there's no title yet
  useEffect(() => {
    if (
      loading ||
      !chatSession ||
      chatSession.title !== DEFAULT_CHAT_SESSION_TITLE
    ) {
      return;
    }

    if (chatSession.messages && chatSession.messages.length > 1) {
      onGenerateTitle(chatSession.id || "");
    }
  }, [loading]);

  // set height when window height changes
  const handleResize = () => {
    const windowHeight = window.innerHeight;
    setHeight(windowHeight - headerHeight);
  };

  // set height when header height changes
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [headerHeight]);

  // scroll to bottom when messages change
  useEffect(() => {
    if (uiMessages.length > 0 && messagesEndRef.current && isAtBottom) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [uiMessages]);

  function setMessagesAndChatSession(messages: DatabaseMessage[]) {
    const obj = messages;
    setUiMessages(obj);
    const session = _chatSession;
    if (session) {
      session.messages = messages;
      _setChatSession(session);
    }
  }

  const handleSend = async (message: Message | DatabaseMessage) => {
    let response, data;
    const updatedMessages = [...uiMessages, message];

    //@ts-ignore
    setMessagesAndChatSession(updatedMessages);
    setLoading(true);
    setResponding(true);

    response = await createChat({
      product: product,
      messages: updatedMessages as DatabaseMessage[],
      prompt: prompt,
    });

    if (!response.ok || !response.body) {
      setLoading(false);
      throw new Error(response.statusText);
    }

    const runner = ChatCompletionStreamingRunner.fromReadableStream(
      response.body,
    );
    if (!runner) {
      setLoading(false);
      throw new Error("No reader");
    }
    let completedText = "";
    let isFirst = true;

    while (!runner.ended) {
      for await (const chunk of runner) {
        // The chunk is already a parsed object, but let's ensure it's in the expected format
        if (!chunk.choices[0]?.delta) {
          continue;
        }
        const chunkValue = chunk.choices[0].delta.content || ""; // Assuming chunk.data is the content we're interested in
        const curMessages = _chatSession?.messages || uiMessages;
        completedText += chunkValue;
        if (isFirst) {
          const updatedMessage: Message = {
            role: "assistant",
            content: chunkValue,
          } as Message;
          isFirst = false;
          setMessagesAndChatSession([
            ...curMessages,
            updatedMessage,
          ] as DatabaseMessage[]);
        } else {
          const lastMessage = curMessages[curMessages.length - 1];
          if (lastMessage) {
            const updatedMessage = {
              ...lastMessage,
              content: completedText,
            };
            //@ts-ignore
            setMessagesAndChatSession([
              ...curMessages.slice(0, -1),
              updatedMessage,
            ]);
          }
        }
      }
    }
    setLoading(false);
    updatedMessages.push({ role: Role.ASSISTANT, content: completedText });
    // @ts-ignore
    setUiMessages(updatedMessages);
    setResponding(false);

    // let _chatSession = chatSession;
    // if we don't have a chat session, create a new one
    if (!_chatSession) {
      const response = await fetch("/api/chat_sessions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: "New Chat Session",
          summary: "",
          promptTemplateId: prompt.template.id,
          productId: product.id,
        }),
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const session = (await response.json()) as ChatSession;
      if (session) {
        session.messages = uiMessages as DatabaseMessage[];
      }
      _setChatSession(session);
    }

    // save the new user message to the database
    await createMessage({
      content: message.content,
      role: message.role as Role,
      ownerId: product.ownerId,
      productId: product.id,
      chatSessionId: _chatSession?.id,
    });

    // save the assistant response to the database
    await createMessage({
      content: completedText,
      role: Role.ASSISTANT,
      ownerId: product.ownerId,
      productId: product.id,
      chatSessionId: _chatSession?.id,
    });
  };

  const handleReset = () => {
    setMessagesAndChatSession([]);
  };

  return (
    <div
      className="z-50 flex h-screen items-center justify-center"
      style={{ height }}
    >
      <div className="relative z-50 h-full w-full max-w-4xl">
        <Chat
          messages={
            onReviewUnderstanding && uiMessages.length > 1
              ? // &&
                // !_chatSession?.threadId
                // remove it for now since it blocked all the sessions that has thread id
                uiMessages[uiMessages.length - 1]?.content ===
                SpecialPhrases.PROCEED_TO_RECOMMENDATIONS
                ? uiMessages
                : ([...uiMessages, REVIEW_UNDERSTANDING_MESSAGE] as Message[])
              : uiMessages
          }
          loading={loading}
          onSend={handleSend}
          isResponding={responding}
          onReset={handleReset}
          shouldHideLogo={true}
          onReviewUnderstanding={onReviewUnderstanding}
          onProceedToRecommendations={onProceedToRecommendations}
          messagesEndRef={messagesEndRef}
          sidebarRef={sidebarRef}
          checkIfAtBottom={checkIfAtBottom}
          scrollToBottom={scrollToBottom}
          isAtBottom={isAtBottom}
        />
      </div>
    </div>
  );
};

const ChatComponent = forwardRef(ChatComponentInner);
export default ChatComponent;
