import React, { type FC, useEffect, useState } from "react";

interface ChatHeaderProps {
  shouldHideLogo?: boolean;
  repos: string[];
  onSelectRepo: (repo: string) => void;
  selectedRepo: string;
}

const ChatHeader: FC<ChatHeaderProps> = ({
  shouldHideLogo = false,
  repos,
  onSelectRepo,
  selectedRepo,
}) => {
  useEffect(() => {
    const lastUsedRepo = localStorage.getItem("lastUsedRepo");
    if (lastUsedRepo && repos.includes(lastUsedRepo)) {
      onSelectRepo(lastUsedRepo);
    } else if (repos.length > 0 && repos[0] !== undefined && !selectedRepo) {
      onSelectRepo(repos[0]);
    }
  }, [repos, onSelectRepo, selectedRepo]);

  const handleSelectRepo = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newRepo = event.target.value;
    onSelectRepo(newRepo);
    localStorage.setItem("lastUsedRepo", newRepo);
  };

  const getShortRepoName = (repo: string) => {
    const shortName = repo.split("/")[1] ?? "";
    return shortName.length > 30 ? shortName.substring(0, 30) + "..." : shortName;
  };

  return (
    <div
      className={`flex items-center justify-between border-b border-gray-800 p-4 ${
        shouldHideLogo ? "hidden" : ""
      }`}
      style={{ height: "6rem" }}
    >
      <div className={`flex items-center `}>
        <img
          className="h-14 w-14 rounded-full"
          src="/images/logo.png"
          alt="JACoB Logo"
        />
        <h1 className="ml-4 text-lg text-white">JACoB</h1>
      </div>
      {repos.length > 1 ? (
        <div className="relative inline-flex">
          <svg
            className="pointer-events-none absolute right-0 top-0 m-4 h-2 w-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 412 232"
          >
            <path
              d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.763-9.763 25.592 0 35.355l181 181c9.763 9.763 25.592 9.763 35.355 0l181-181c9.762-9.763 9.762-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
              fill="#648299"
              fillRule="nonzero"
            />
          </svg
          <select
            value={selectedRepo}
            onChange={handleSelectRepo}
            className="h-10 min-w-12 appearance-none rounded-md border  border-transparent bg-blueGray-800 pl-5 pr-10 text-blueGray-400 transition-colors duration-200 ease-in-out hover:border-blueGray-700 focus:outline-none"
          >
            {repos.map((repo) => (
              <option key={repo} value={repo}>
                {getShortRepoName(repo)}
              </option>
            ))}
          </select>
        </div>
      ) : repos.length === 1 ? (
        <div className="flex h-10 cursor-default items-center rounded-md border border-transparent bg-blueGray-800 px-5 text-blueGray-400 transition-colors duration-200 ease-in-out hover:border-blueGray-700">
          <span>{getShortRepoName(selectedRepo)}</span>
        </div>
      ) : null}
    </div>
  );
};

export default ChatHeader;