import Image from "next/image";
const About = () => {
    return (
      <section className="bg-gray-100 py-12 mt-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">About Us</h2>
            <p className="text-gray-600 mt-2">Learn more about our journey and vision</p>
          </div>
  
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* About Text */}
            <div className="text-center md:text-left md:w-1/2">
              <h3 className="text-2xl font-semibold text-gray-800">Our Story</h3>
              <p className="text-gray-600 mt-4">
                Welcome to our blog website! We are a group of passionate writers and creators
                dedicated to providing insightful content on various topics. From tech tutorials to
                lifestyle tips, our goal is to share knowledge and inspire our readers to learn,
                grow, and explore new ideas. Whether youre a beginner or an expert, theres
                something here for everyone. Join us on this exciting journey!
              </p>
            </div>
  
            {/* About Image */}
            <div className="mt-6 md:mt-0 md:w-1/3">
              <Image
                src="/about.jpeg"// Replace with your image path
                alt="About Us Image"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
                width={500}
                height={300}
              />
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;
  