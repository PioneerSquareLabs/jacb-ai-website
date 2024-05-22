import { signIn } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { PopupButton } from "@typeform/embed-react";

const SignupPage = () => {
  const handleSignUp = async () => {
    try {
      const res = await signIn("github", {
        callbackUrl: `${window.location.origin}/setup`,
      });
      if (res?.error) {
        throw new Error("An error occurred during sign up. Please try again.");
      }
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <div className="flex h-screen w-full flex-col md:flex-row">
      <div className="flex flex-col items-center justify-center bg-white px-10 py-20 md:w-1/2 md:px-20 ">
        <h1 className="mx-auto mb-4 max-w-lg text-4xl  font-semibold text-base-black">
          Turn your designs into deployable code
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-lg text-base-black">
          <span className="font-bold text-red-500">Important Note:</span>{" "}
          Currently JACoB is in a limited beta preview. While JACoB has the
          potential to work across any codebase, we've focused initially on a
          limited number of languages and frameworks. Specficially, JACoB
          currently works with:{" "}
          <ul className="mt-4 list-disc pl-5">
            <li className="font-bold">TypeScript or JavaScript</li>
            <li className="font-bold">NextJS applications</li>
            <li className="font-bold">Tailwind</li>
            <li className="font-bold">Figma for designs</li>
          </ul>
        </p>

        <p className="mx-auto mt-4 max-w-lg text-lg text-base-black">
          If your application doesn't meet these requirements, you can still
          sign up to be notified when JACoB is available for your stack.
        </p>

        <PopupButton
          id={"jdnCsMO6"}
          className="focus:ring-pink-400 mt-8 flex h-12 w-[300px] max-w-xl cursor-pointer items-center justify-center rounded-full bg-pink px-8 font-medium uppercase text-indigo-900 hover:bg-pink hover:bg-pink/80 focus:outline-none focus:ring-2 focus:ring-offset-2 md:w-[400px] lg:mt-12"
          medium="jacob-waitlist"
        >
          Join the Waitlist
        </PopupButton>
      </div>
      <div className="flex flex-col items-center justify-center bg-beige px-10 py-20 md:w-1/2 md:px-20">
        <div className="w-full max-w-xl">
          <h2 className="mb-2 text-3xl text-base-black">Access the Beta</h2>
          <p className="mb-10 text-lg text-zinc-500">
            Join the community of engineers guiding the development of JACoB
          </p>
          <p className="mb-10 text-lg text-zinc-500">
            Note that JACoB works by creating pull requests directly to GitHub,
            which requires additional permissions. JACoB is open-source and can
            be self-hosted if you prefer to keep your code private.{" "}
            <a
              href="https://github.com/jacob-ai-bot/jacob"
              className="text-navy-blue"
            >
              Visit the GitHub repo for more information.
            </a>{" "}
          </p>
          <button
            onClick={handleSignUp}
            className="flex w-full items-center justify-center rounded-lg bg-navy-blue py-2.5 font-medium text-white"
          >
            <FontAwesomeIcon icon={faGithub} className="mr-2" />
            Sign Up With GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
