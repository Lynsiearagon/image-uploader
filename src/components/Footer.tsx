const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center pt-10 md:gap-4 text-center text-blue-600">
      <p>Lynsie Aragon</p>
      <span className="hidden md:block text-gray-700 ">|</span>
      <p>Software Engineer</p>
      <span className=" hidden md:block text-gray-700 ">|</span>
      <p>Lynsie.aragon@gmail.com</p>
      <span className=" hidden md:block text-gray-700 ">|</span>
      <a
        href="https://www.linkedin.com/in/lynsie-aragon-dev/"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
    </div>
  );
};

export default Footer;
