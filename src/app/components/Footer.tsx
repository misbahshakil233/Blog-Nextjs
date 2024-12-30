import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          {/* Logo or Title */}
          <div className="text-center sm:text-left mb-4 sm:mb-0">
            <h2 className="text-2xl font-bold">My Blog Website</h2>
            <p className="text-gray-400 mt-2">All rights reserved. &copy; 2024</p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col sm:flex-row sm:space-x-6 justify-center items-center">
            <Link href="/" className="text-gray-300 hover:text-white mb-2 sm:mb-0">
              Home
            </Link>
            <Link href="/blog" className="text-gray-300 hover:text-white mb-2 sm:mb-0">
              Blogs
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-white mb-2 sm:mb-0">
              About
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-white mb-2 sm:mb-0">
              Contact
            </Link>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook text-gray-300 hover:text-white text-2xl"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter text-gray-300 hover:text-white text-2xl"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram text-gray-300 hover:text-white text-2xl"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin text-gray-300 hover:text-white text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
