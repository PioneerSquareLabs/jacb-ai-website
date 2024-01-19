
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faBell, faUsers } from '@fortawesome/free-solid-svg-icons';

const CtaComponent = () => {
  const [email, setEmail] = useState('');

  const isValidEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!isValidEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        alert('Thank you for joining the waitlist!');
        setEmail('');
      } else {
        alert('There was an issue submitting your email. Please try again later.');
      }
    } catch (error) {
      alert('There was an error submitting your email. Please try again later.');
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto bg-indigo-900 rounded-3xl shadow-lg shadow-blue-300/20 p-10">
      <div className="flex flex-col space-y-5">
        <div className="text-5xl text-center text-white">
          <span>Be Among the First to</span>
          <span className="block text-pink-400">Elevate your Coding</span>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 items-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full max-w-lg p-3 rounded-full text-gray-400 bg-white/10 focus:outline-none focus:ring-2 focus:ring-pink-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="w-52 h-12 bg-pink-400 rounded-full text-indigo-900 uppercase font-medium hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2"
          >
            Join the Waitlist
          </button>
        </form>
        <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
          <div className="flex-1">
            <div className="flex space-x-2 items-center">
              <FontAwesomeIcon icon={faStar} className="text-pink-400 w-8 h-8" />
              <div>
                <h3 className="text-lg font-medium text-white">Early Access</h3>
                <p className="text-sm text-gray-400">Get a head start in experiencing and influencing the future of AI coding.</p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex space-x-2 items-center">
              <FontAwesomeIcon icon={faBell} className="text-blue-400 w-8 h-8" />
              <div>
                <h3 className="text-lg font-medium text-white">Exclusive Updates</h3>
                <p className="text-sm text-gray-400">Stay informed with the latest developments and updates as JACoB evolves.</p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex space-x-2 items-center">
              <FontAwesomeIcon icon={faUsers} className="text-yellow-400 w-8 h-8" />
              <div>
                <h3 className="text-lg font-medium text-white">Community Influence</h3>
                <p className="text-sm text-gray-400">Be part of a community that's shaping JACoB to be the best AI coding assistant.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaComponent;