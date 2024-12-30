import Link from "next/link";
import Image from "next/image";
const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "How to Learn Next.js",
      description: "Discover the best practices and resources for learning Next.js.",
      image:  "/b2.jpg",
    },
    {
      id: 2,
      title: "React vs Next.js: Which is Better?",
      description: "A comprehensive comparison of React and Next.js for your projects.",
      image: "/b1.webp",
    },
    {
      id: 3,
      title: "Understanding Dynamic Routing in Next.js",
      description: "Master dynamic routing in Next.js with this detailed guide.",
      image:"/b3.png",
    },
    // Add more blog posts as necessary
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-800">Latest Blog Posts</h2>
          <p className="text-gray-600 mt-2">Stay updated with the latest trends in technology and development.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
              width={500}
              height={300}
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">{post.title}</h3>
                <p className="text-gray-600 mt-2">{post.description}</p>
                <Link href={`/blog/${post.id}`} className="text-blue-500 hover:underline mt-4 inline-block">
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
