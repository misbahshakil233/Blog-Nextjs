"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
const blogDetails: Record<string, { title: string; image: string; content: string }> = {
  1: {
    title: "How to Learn Next.js",
    image: "/b2.jpg",
    content: "Next.js is a powerful React framework for building production-ready applications...",
  },
  2: {
    title: "React vs Next.js: Which is Better?",
    image: "/b1.webp",
    content: "React and Next.js are both great tools, but choosing the right one depends on your project...",
  },
  3: {
    title: "Understanding Dynamic Routing in Next.js",
    image: "/b3.png",
    content: "Dynamic routing allows you to create pages based on dynamic data...",
  },
  4: {
    title: "Understanding Dynamic Routing in Next.js",
    image:  "/b4.jpg",
    content: "Dynamic routing allows you to create pages based on dynamic data...",
  },
  5: {
    title: "Understanding Dynamic Routing in Next.js",
    image: "/b5.png",
    content: "Dynamic routing allows you to create pages based on dynamic data...",
  },
  6: {
    title: "Understanding Dynamic Routing in Next.js",
    image:  "/b6.jpeg",
    content: "Dynamic routing allows you to create pages based on dynamic data...",
  },
  7: {
    title: "Understanding Dynamic Routing in Next.js",
    image:  "/b7.jpeg",
    content: "Dynamic routing allows you to create pages based on dynamic data...",
  },
  8: {
    title: "Understanding Dynamic Routing in Next.js",
    image:  "/b8.jpeg",
    content: "Dynamic routing allows you to create pages based on dynamic data...",
  },
  9: {
    title: "Understanding Dynamic Routing in Next.js",
    image:  "/b9.jpeg",
    content: "Dynamic routing allows you to create pages based on dynamic data...",
  },
  // Add similar details for all 9 blog posts
};

const BlogPage = () => {
  const params = useParams();
  const id = Array.isArray(params?.id) ? params?.id[0] : params?.id;

  const blog = id ? blogDetails[id] : null;

  // Comment state
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState<string>("");

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  if (!blog) {
    return <p className="text-center text-red-500">Blog post not found!</p>;
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-4xl font-bold text-center mb-6">{blog.title}</h1>
      <Image
        src={blog.image}
        alt={blog.title}
        width={500}
            height={300}
            
        className="rounded-lg w-full h-72 object-cover mb-6"
      />
      <p className="text-lg text-gray-700 mb-8">{blog.content}</p>

      {/* Comments Section */}
      <div className="border-t pt-6">
        <h2 className="text-2xl font-bold mb-4">Comments</h2>

        {/* Existing Comments */}
        <ul className="mb-4">
          {comments.length > 0 ? (
            comments.map((comment, index) => (
              <li
                key={index}
                className="bg-gray-100 p-3 rounded-lg mb-2 shadow-sm text-gray-800"
              >
                {comment}
              </li>
            ))
          ) : (
            <p className="text-gray-500">No comments yet. Be the first to comment!</p>
          )}
        </ul>

        {/* Add New Comment */}
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write your comment..."
            className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleAddComment}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Add Comment
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
