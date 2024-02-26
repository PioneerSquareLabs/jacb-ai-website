import { signIn } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

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
        <h1 className="mx-auto mb-4 max-w-lg text-4xl  font-semibold text-not-black-black">
          Turn your designs into deployable code
        </h1>
        <p className="mx-auto max-w-lg text-lg text-not-black-black">
          The AI-powered coding assistant that turns your designs into
          deployable code
        </p>
      </div>
      <div className="flex flex-col items-center justify-center bg-beige px-10 py-20 md:w-1/2 md:px-20">
        <div className="w-full max-w-xl">
          <h2 className="mb-2 text-3xl text-not-black-black">
            Access the Beta
          </h2>
          <p className="mb-10 text-lg text-zinc-500">
            Join the community of engineers guiding the development of JACoB
          </p>
          <button
            onClick={handleSignUp}
            className="flex w-full items-center justify-center rounded-lg bg-violet-beauregarde py-2.5 font-medium text-white"
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
