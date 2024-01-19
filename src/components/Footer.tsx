import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const handleSocialClick = (url) => {
    window.open(url, '_blank');
  };

  const handleSubscribe = () => {
    // Placeholder function for email subscription logic
    console.log('Subscribe to newsletter');
  };

  return (
    <div className="w-full h-48 bg-transparent flex justify-between items-center px-4">
      <div className="flex flex-col items-start">
        <div className="bg-indigo-900 w-42 h-11 rounded-lg flex items-center justify-center mb-8">
          {/* SVG icons for the logo will be added here */}
          <FontAwesomeIcon icon={faEnvelope} size="2x" className="text-white" />
        </div>
        <div className="flex">
          <div
            className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center mr-2 cursor-pointer"
            onClick={() => handleSocialClick('https://www.linkedin.com')}
          >
            <FontAwesomeIcon icon={faLinkedin} className="text-white" />
          </div>
          <div
            className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center mr-2 cursor-pointer"
            onClick={() => handleSocialClick('https://www.facebook.com')}
          >
            <FontAwesomeIcon icon={faFacebookF} className="text-white" />
          </div>
          <div
            className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center cursor-pointer"
            onClick={() => handleSocialClick('https://www.instagram.com')}
          >
            <FontAwesomeIcon icon={faInstagram} className="text-white" />
          </div>
        </div>
      </div>
      <div className="bg-transparent w-64 h-11 border border-gray-200 rounded-xl flex items-center justify-center">
        <div
          className="bg-transparent w-9 h-9 rounded-md flex items-center justify-center cursor-pointer"
          onClick={handleSubscribe}
        >
          <FontAwesomeIcon icon={faEnvelope} className="text-gray-600" />
        </div>
        <input
          type="text"
          placeholder="Your email address"
          className="w-full h-full bg-transparent pl-4 text-sm text-gray-600 placeholder-gray-600 outline-none"
          onKeyPress={(event) => {
            if (event.key === 'Enter') {
              handleSubscribe();
            }
          }}
        />
      </div>
    </div>
  );
};

export default Footer;