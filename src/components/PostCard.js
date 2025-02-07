import React from "react";
import { Link } from "react-router-dom";

function PostCard({ post }) {
  return (
    <div className="bg-custom-dark-blue bg-opacity-50 p-4 rounded-lg shadow-md flex flex-col h-full">
      <h2 className="text-white text-xl font-semibold">{post.title}</h2>
      <img
        src={post.image}
        alt={post.title}
        className="w-auto h-150 object-cover rounded-md mt-4"
      />
      <p className="text-subtle-gray mt-2 flex-grow line-clamp-5">{post.excerpt}</p>
      <Link
        to={`/post/${post.id}`}
        className="text-link-color mt-4 self-start"
      >
        Read More
      </Link>
    </div>
  );
}

export default PostCard;