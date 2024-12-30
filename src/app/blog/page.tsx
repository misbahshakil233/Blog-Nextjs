import Link from "next/link";
import Image from "next/image";
const BlogListingPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "How to Learn Next.js",
      image: "/b2.jpg",
      description: "Discover the best practices and resources for learning Next.js.",
    },
    {
      id: 2,
      title: "React vs Next.js: Which is Better?",
      image: "/b1.webp",
      description: "A comprehensive comparison of React and Next.js for your projects.",
    },
    {
      id: 3,
      title: "Understanding Dynamic Routing in Next.js",
      image: "/b3.png",
      description: "Master dynamic routing in Next.js with this detailed guide.",
    },
    {
      id: 4,
      title: "Building a Portfolio with Next.js",
      image: "/b4.jpg",
      description: "Step-by-step guide to creating a stunning portfolio using Next.js.",
    },
    {
      id: 5,
      title: "Server-Side Rendering in Next.js",
      image: "/b5.png",
      description: "Learn the benefits and implementation of SSR in Next.js.",
    },
    {
      id: 6,
      title: "Next.js API Routes",
      image: "/b6.jpeg",
      description: "Explore how to create APIs using Next.js API routes.",
    },
    {
      id: 7,
      title: "Deploying Next.js Apps",
      image: "/b7.jpeg",
      description: "A guide to deploying Next.js applications on Vercel and other platforms.",
    },
    {
      id: 8,
      title: "Next.js and TypeScript",
      image: "/b8.jpeg",
      description: "Combine Next.js with TypeScript for a scalable and robust application.",
    },
    {
      id: 9,
      title: "Styling in Next.js",
      image: "/b9.jpeg",
      description: "Different ways to style your Next.js apps, including CSS and Tailwind.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold text-center mb-6">Blog Posts</h1>
      <ul className="grid md:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <li key={post.id} className="border rounded-lg shadow-lg p-4">
            <Image
            width={500}
            height={300}
              src={post.image}
              alt={post.title}
              className="rounded-md w-full h-48 object-cover"
            />
            <h2 className="text-xl font-bold mt-4">{post.title}</h2>
            <p className="text-gray-600 mt-2">{post.description}</p>
            <Link
              href={`/blog/${post.id}`}
              className="text-blue-500 hover:underline mt-4 block"
            >
              Read More
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogListingPage;
