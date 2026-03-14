import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthProvider.jsx";

const Blogs = () => {
  const { blog } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">

      <div className="max-w-6xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-bold mb-3">Our Blogs</h1>
        <p className="text-gray-600">
          Discover ideas, stories and knowledge written by our community.
          Read the latest articles and explore different topics.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {blog?.map((item) => (
          <Link key={item._id} to={`/blog/${item._id}`}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">

              <img
                src={item?.blogImage?.url}
                alt=""
                className="w-full h-48 object-cover"
              />

              <div className="p-5">
                <h2 className="text-xl font-semibold mb-2">
                  {item.title}
                </h2>

                <p className="text-gray-600 text-sm mb-3">
                  {item.about?.slice(0, 120)}...
                </p>

                <span className="text-blue-600 text-sm font-medium">
                  {item.cat}
                </span>
              </div>

            </div>
          </Link>
        ))}
      </div>

    </div>
  );
};

export default Blogs;