import React, { useEffect, useState } from "react";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Arena: React.FC = () => {
  const { data, status } = useSession();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [userId, setUserId] = useState<string | null>(null);

  // If user is logged in, set their id
  useEffect(() => {
    if (status === "loading") return;
    if (data?.user) {
      setUserId(data.user.id);
    }
    setIsLoading(false);
  }, [data, status]);

  const handleSignUp = async () => {
    try {
      const res = await signIn("github", {
        callbackUrl: `${window.location.origin}/arena`,
      });
      if (res?.error) {
        throw new Error("An error occurred during sign up. Please try again.");
      }
    } catch (error: any) {
      alert(error.message);
    }
  };
  return (
    <div className="to-pink-600 flex h-screen w-full flex-col items-center justify-center bg-gradient-to-br from-gray-100 text-not-black-black">
      <div className="max-w-2xl">
        <h1 className="mb-6 text-center text-3xl font-bold md:text-5xl">
          Welcome to the Design to Code Arena!
        </h1>
        <p className="mb-8 px-4">
          This is a structured contest where design-to-code tools battle it out.
          We have eight popular design-to-code tools along with a human-coded
          design benchmark. Brace yourself for 10 rounds of thrilling
          competition, each featuring one design and two code samples. At the
          end you will view an Elo-based ranking of the tools. Your mission,
          should you choose to accept it, is to decide which code reigns
          supreme. Let the duel commence!
        </p>
        <h2 className="mb-2 max-w-md px-4 text-xl">Evaluation Criteria:</h2>
        <ul className="mb-8 list-disc px-12 text-left">
          <li>
            <strong>Code Quality:</strong> Could this code find a home in your
            repository? Assess its maintainability and scalability. 🛠️
          </li>
          <li>
            <strong>Design Fidelity:</strong> How well does the code capture the
            essence of the design? Is it a faithful recreation or just a static
            snapshot? 🖼️ ↔️ 💾
          </li>
          <li>
            <strong>Flexibility & Best Practices:</strong> Is the code versatile
            and adaptive? See if it's responsive and follows best design
            practices. 🌊
          </li>
        </ul>
        <p className="mb-8 px-4">
          Are you ready to see how the best human-crafted code stands up against
          the top design-to-code tools? Sign in now to start voting!
        </p>
        <div className="flex w-full justify-center align-middle">
          {userId ? (
            <Link
              href="/challenge"
              className="inline-block rounded bg-violet-beauregarde px-8 py-4 text-xl font-semibold text-white shadow-lg transition-colors hover:bg-violet-beauregarde/80 focus:outline-none focus:ring-2 focus:ring-violet-beauregarde/50 focus:ring-offset-2"
            >
              {isLoading ? "Loading..." : "Start Voting"}
            </Link>
          ) : (
            <button
              onClick={handleSignUp}
              className="flex items-center justify-center rounded-lg bg-black px-8 py-2.5 font-medium text-white"
            >
              <FontAwesomeIcon icon={faGithub} className="mr-2" />
              Sign In With GitHub
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Arena;
