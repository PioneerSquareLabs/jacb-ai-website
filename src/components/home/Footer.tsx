const Footer = () => {
  return (
    <div className="mt-12 md:mt-24">
      <p>&copy; {new Date().getFullYear()} jacb.ai All rights reserved.</p>
      <a
        href="https://www.psl.com/legal"
        target="_blank"
        rel="noopener noreferrer"
      >
        Privacy Policy
      </a>
    </div>
  );
};

export default Footer;
