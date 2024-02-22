import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const SignupPage = () => {
  const router = useRouter();

  const handleSignUp = async () => {
    const res = await signIn('github');
    if (res?.url) {
      router.push('/setup'); // Navigate to the setup page
    } else {
      // Display error to the user
      alert('An error occurred during sign up. Please try again.');
    }
  };

  return (
    <div className="flex flex-col md:flex-row w-full h-screen">
      <div className="md:w-1/2 flex flex-col justify-center items-center bg-white px-10 md:px-20 py-20">
        <h1 className="text-4xl font-semibold text-not-black-black mb-4">
          Turn your designs into deployable code
        </h1>
        <p className="text-lg text-not-black-black">
          The AI-powered coding assistant that turns your designs into deployable code
        </p>
      </div>
      <div className="md:w-1/2 flex flex-col justify-center items-center bg-beige px-10 md:px-20 py-20">
        <div className="w-full max-w-xl">
          <h2 className="text-3xl text-not-black-black mb-2">
            Access the Beta
          </h2>
          <p className="text-lg text-dark-beige mb-10">
            Join the community of engineers guiding the development of JACoB
          </p>
          <button
            onClick={handleSignUp}
            className="w-full py-2.5 bg-violet-beauregarde text-white rounded-lg font-medium flex justify-center items-center"
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