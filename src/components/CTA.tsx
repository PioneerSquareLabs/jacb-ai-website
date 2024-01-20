import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faBell, faUsers } from "@fortawesome/free-solid-svg-icons";

const CtaComponent = () => {
  const [email, setEmail] = useState("");

  const isValidEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isValidEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        alert("Thank you for joining the waitlist!");
        setEmail("");
      } else {
        alert(
          "There was an issue submitting your email. Please try again later.",
        );
      }
    } catch (error) {
      alert(
        "There was an error submitting your email. Please try again later.",
      );
    }
  };

  return (
    <div className="mx-auto w-full max-w-7xl rounded-3xl bg-dark-blue p-10 shadow-lg shadow-blue-300/20">
      <div className="flex flex-col items-center">
        <h1 className="text-center text-5xl text-white">
          <span>Be Among the First to</span>
          <span className="block text-pink">Elevate your Coding</span>
        </h1>
        <form
          onSubmit={handleSubmit}
          className="mt-12 flex w-2/3 items-center space-y-4 md:flex-row md:space-x-4 md:space-y-0"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className=" mx-auto w-full rounded-full bg-white/10 p-3 text-gray-400 focus:outline-none focus:ring-2 focus:ring-pink"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="focus:ring-pink-400 flex h-12 w-[400px] max-w-xl items-center justify-center rounded-full bg-pink px-8 font-medium uppercase text-indigo-900 hover:bg-pink focus:outline-none focus:ring-2 focus:ring-offset-2"
          >
            Join the Waitlist
          </button>
        </form>
        <div className="mt-24 flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
          <div className="flex-1">
            <div className="flex items-center space-x-2">
              <div>
                <h3 className="text-lg font-medium text-white">Early Access</h3>
                <p className="text-sm text-gray-400">
                  Get a head start in experiencing and influencing the future of
                  AI coding.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-center space-x-2">
              <div>
                <h3 className="text-lg font-medium text-white">
                  Exclusive Updates
                </h3>
                <p className="text-sm text-gray-400">
                  Stay informed with the latest developments and updates as
                  JACoB evolves.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-center space-x-2">
              <div>
                <h3 className="text-lg font-medium text-white">
                  Community Influence
                </h3>
                <p className="text-sm text-gray-400">
                  Be part of a community that's shaping JACoB to be the best AI
                  coding assistant.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaComponent;
