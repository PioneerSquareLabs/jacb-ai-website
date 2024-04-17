import React from "react";
import { type Issue } from "~/types";
import gfm from "remark-gfm";
import { faCircleDot, faClipboard } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { capitalize, statusStyles } from "~/utils";
import { formatDistanceToNow } from "date-fns";
import Markdown, { type Components } from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { ToastContainer, toast } from "react-toastify";

type IssueComponentProps = {
  issue: Issue | undefined;
};

export const IssueComponent: React.FC<IssueComponentProps> = ({ issue }) => {
  const copyToClipboard = async (text: string) => {
    await navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard");
  };

  const renderers: Partial<Components | any> = {
    code: ({
      node,
      inline,
      className,
      children,
      ...props
    }: {
      node: any;
      inline: any;
      className: any;
      children: any;
    }) => {
      const match = /language-(\w+)/.exec((className as string) ?? "");
      return !inline && match ? (
        <div className="relative">
          <button
            className="absolute right-2 top-0 rounded bg-gray-800 p-1 text-white"
            onClick={() => copyToClipboard(String(children))}
          >
            <FontAwesomeIcon icon={faClipboard} />
          </button>
          <SyntaxHighlighter
            style={oneDark}
            language={match[1]}
            PreTag="div"
            {...props}
          >
            {String(children).replace(/\n$/, "")}
          </SyntaxHighlighter>
        </div>
      ) : (
        <div className={className} {...props}>
          {children}
        </div>
      );
    },
  };
  return (
    <div className="h-full w-full overflow-clip  bg-gray-900 px-2 text-gray-200">
      <div className="w-full pt-2">
        <div className="flex w-full items-center justify-between">
          <h2 className="text-lg font-semibold text-white">Issue</h2>
          {issue && (
            <a
              href={issue.link}
              target="_blank"
              className="inline-flex items-center rounded bg-blueGray-500 px-4 py-1.5 font-bold text-white  duration-200 hover:bg-blueGray-600"
            >
              <FontAwesomeIcon icon={faGithub} />
              <span className="ml-2 text-xs">Open in GitHub</span>
            </a>
          )}
        </div>
        <hr className="mt-2 border-t border-gray-700" />
      </div>
      {!issue ? (
        <div className="text-center text-gray-400">
          Waiting on GitHub Issue creation...
        </div>
      ) : (
        <div className="hide-scrollbar h-full overflow-auto pb-20 pt-2">
          <article className="rounded-lg bg-gray-800 p-6 font-mono  shadow">
            <a
              href={issue.link}
              target="_blank"
              className="font-sans text-2xl font-semibold text-light-blue"
            >
              {issue.title}
            </a>
            <div className="mb-4 mt-2 flex items-baseline justify-between">
              <div className="text-xs">
                #{issue.id} opened on{" "}
                {new Date(issue.createdAt).toLocaleDateString()} by{" "}
                {issue.author}
              </div>
              <span className={statusStyles[issue.status]}>
                <FontAwesomeIcon icon={faCircleDot} size="xs" />{" "}
                {capitalize(issue.status)}
              </span>
            </div>
            <hr className="my-3 border-t border-gray-500" />
            <Markdown
              remarkPlugins={[gfm]}
              className={`markdown markdown-issue text-sm text-blueGray-300`}
            >
              {issue.description}
            </Markdown>
          </article>
          <div className="relative py-3">
            <div className="absolute left-16 top-0 h-full w-0.5 bg-gray-600/50"></div>
          </div>
          {issue.comments.map((comment, idx) => (
            <>
              <div
                key={comment.id}
                className=" rounded-lg border border-gray-700 bg-gray-800  shadow"
              >
                <div className="flex items-center space-x-2 rounded-t-lg border-b border-gray-700 bg-gray-900 px-4 py-2">
                  <span className="text-xs font-semibold text-blueGray-200">
                    {comment.username}
                  </span>
                  <span className="text-xs text-gray-500">
                    commented{" "}
                    {formatDistanceToNow(new Date(comment.createdAt), {
                      addSuffix: true,
                    })}
                  </span>
                </div>
                <Markdown
                  remarkPlugins={[gfm]}
                  className={`markdown px-4 py-2 text-xs text-blueGray-300`}
                >
                  {comment.content}
                </Markdown>
              </div>
              <div
                className={`relative py-3 ${idx + 1 === issue.comments?.length ? "hidden" : ""}`}
              >
                <div className="absolute left-16 top-0 h-full w-0.5 bg-gray-600/50"></div>
              </div>
            </>
          ))}
          <ToastContainer />
        </div>
      )}
      <div className="ml-2 hidden whitespace-nowrap rounded-full bg-green-700 bg-purple-700 bg-red-700 text-xs text-white" />
    </div>
  );
};

export default IssueComponent;
