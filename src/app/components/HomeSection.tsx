import Image from "next/image";

const HomeSection = () => {
  return (
    <section className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        {/* Hero Content */}
        <h1 className="text-5xl font-bold mb-4">Welcome to My Blog</h1>
        <p className="text-lg mb-6">
          Discover engaging stories, insightful articles, and much more!
        </p>
        
        {/* Call to Action */}
        <div className="flex justify-center space-x-4">
          <button className="bg-white text-purple-600 px-6 py-3 rounded-full shadow-lg font-semibold hover:bg-purple-200 transition">
            Get Started
          </button>
          <button className="bg-transparent border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition">
            Learn More
          </button>
        </div>

        {/* Blog Image */}
        <div className="mt-10">
          <Image
           src="/img1.jpeg"
            alt="Blog illustration"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
