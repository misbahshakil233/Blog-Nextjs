import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="text-black">
      <div className="container mx-auto px-4 py-6 text-center">
        {/* Blog Icon */}
        <div className="flex justify-center">
          <div className="relative bg-gray-700 rounded-full w-28 h-28 flex items-center justify-center">
            {/* Circular Border Animation */}
            <div className="absolute inset-0 border-4 border-blue-500 rounded-full animate-spin"></div>

            <Image
              src="/img1.jpeg"
              alt="Blog Icon"
              height={300}
              width={300}
              className="rounded-full animate-pulse"
            />
          </div>
        </div>

        {/* Header Content */}
        <h1 className="text-4xl font-bold mt-4 flex justify-center items-center font-serif italic text-gray-800">
          <i className="fas fa-pen-nib mr-2 text-blue-500"></i> My Blog Website
        </h1>
        <p className="italic text-gray-500 mt-2 text-lg transform hover:scale-105 transition duration-300">
          Discover insights, stories, and more!
        </p>
      </div>

      {/* Navigation Bar */}
      <nav className="py-4 bg-white text-black">
        <ul className="flex justify-center space-x-6 text-black">
          <li>
            <Link href="/" className="hover:text-gray-700 transition text-purple-700">
              Home
            </Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-gray-700 transition text-purple-700">
              Blogs
            </Link>
          </li>
          <li>
            <Link href="#about"className="hover:text-gray-700 transition text-purple-700">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-700 transition text-purple-700">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
