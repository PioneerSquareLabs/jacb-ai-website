/* eslint-disable @typescript-eslint/no-unsafe-argument */
import React, { useState, useEffect } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import tsx from "react-syntax-highlighter/dist/cjs/languages/prism/tsx";
import { docco } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { type CodeSnippet } from "./api/challenge"; // Update this path to the actual location of your types

SyntaxHighlighter.registerLanguage("tsx", tsx);

type ReturnType = {
  snippets: CodeSnippet[];
  screenshot: string;
  description: string;
};

const CodeComparison: React.FC = () => {
  const [currentChoice, setCurrentChoice] = useState<number>(1);
  const [snippets, setSnippets] = useState<CodeSnippet[]>([]);
  const [screenshot, setScreenshot] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchSnippets = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/challenge");
      if (!response.ok) throw new Error("Network response was not ok");
      const data: ReturnType = await response.json();
      setSnippets(data.snippets);
      setScreenshot(data.screenshot);
      setDescription(data.description);
      setIsLoading(false);
    } catch (error) {
      console.error("There was a problem with fetching snippets:", error);
      setIsLoading(false);
    }
  };
  const handleChoice = async (chosenSnippet: CodeSnippet) => {
    try {
      const response = await fetch("/api/challenge/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          snippetId: chosenSnippet.id,
          snippetName: chosenSnippet.snippetName,
          winningPlugin: chosenSnippet.plugin,
          losingPlugin: snippets.find(
            (snippet) => snippet.id !== chosenSnippet.id,
          )?.plugin,
        }),
      });

      if (!response.ok) throw new Error("Network response was not ok");

      if (currentChoice < 20) {
        await fetchSnippets();
        setCurrentChoice((prevChoice) => prevChoice + 1);
      } else {
        window.location.href = "/finished";
      }
    } catch (error) {
      console.error("Error submitting choice:", error);
    }
  };
  useEffect(() => {
    void fetchSnippets();
  }, []);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="flex flex-col p-4">
      <p className="mb-4 text-lg font-semibold">Choice {currentChoice} of 20</p>
      <div className="mx-auto mb-8 flex h-auto max-w-xl">
        <img src={screenshot} alt="Screenshot" className="rounded-lg" />
      </div>
      <div className="mx-auto mb-8">
        <p className="mb-4 text-lg font-semibold">{description}</p>
      </div>
      <div className="mx-auto grid gap-4 text-xs md:grid-cols-2">
        {snippets.map((snippet, index) => (
          <div key={snippet.id} className="rounded-lg border p-4 shadow-sm">
            <SyntaxHighlighter language="tsx" style={docco}>
              {snippet.code}
            </SyntaxHighlighter>
            <button
              className="mt-4 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
              onClick={() => handleChoice(snippet)}
            >
              Choose Option {index + 1}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CodeComparison;
