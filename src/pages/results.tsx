import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";

const Results: React.FC = () => {
  const { data, status } = useSession();
  const [userId, setUserId] = useState<string | null>(null);
  const [pluginScores, setPluginScores] = useState<
    { pluginName: string; rating: number }[]
  >([]);

  useEffect(() => {
    if (status === "loading") return;
    let currentUserId: string | null = null;
    if (data?.user) {
      currentUserId = data.user.id;
    } else {
      currentUserId = localStorage.getItem("userId");
      if (!currentUserId) {
        currentUserId =
          Date.now().toString(36) + Math.random().toString(36).substring(2, 8);
        localStorage.setItem("userId", currentUserId);
      }
    }
    setUserId(currentUserId);

    const fetchRatings = async () => {
      try {
        let _currentUserId: string | null = currentUserId;
        if (window.location.search.includes("all=1")) {
          _currentUserId = null;
        }
        const response = await fetch(
          `/api/challenge/ratings?snippet_name=all&user_id=${_currentUserId}`,
        );
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setPluginScores(
          data[0].pluginScores as { pluginName: string; rating: number }[],
        );
      } catch (error) {
        console.error(
          "There was a problem with fetching plugin scores:",
          error,
        );
      }
    };

    if (currentUserId) {
      void fetchRatings();
    }
  }, [data, status]);

  return (
    <div className="min-h-screen w-full bg-gray-100 p-4">
      <div className="mx-auto max-w-4xl rounded-lg bg-beige p-8 shadow-sm">
        <header className="text-center">
          <h1 className="text-2xl font-bold text-dark-blue md:text-4xl">
            Thanks for voting!{" "}
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Here are the elo rankings for your choices
          </p>
        </header>
        <div className="mt-8">
          <ul className="space-y-4">
            {pluginScores
              .sort((a, b) => b.rating - a.rating)
              .map((plugin, index) => (
                <li
                  key={plugin.pluginName}
                  className="flex items-center justify-between rounded-lg bg-white p-4 shadow"
                >
                  <div className="flex items-center">
                    <span className="mr-4 text-lg font-medium text-gray-500">
                      {index + 1}.
                    </span>
                    <img
                      src={`/images/logos/${plugin.pluginName.toLowerCase()}.jpg`}
                      alt={`${plugin.pluginName} logo`}
                      className="mr-4 h-10 w-10 rounded-full"
                    />
                    <span className="text-lg font-medium capitalize text-gray-800">
                      {plugin.pluginName === "screenshot"
                        ? "screenshot-to-code"
                        : plugin.pluginName}
                    </span>
                  </div>
                  <span className="rounded bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-800">
                    {plugin.rating.toFixed(0)}
                  </span>
                </li>
              ))}
          </ul>
        </div>
        <Link href="/" className="mt-8 block text-center text-blue-500">
          Back to home
        </Link>
      </div>
    </div>
  );
};

export default Results;
