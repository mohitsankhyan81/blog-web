import React from "react";
import { useAuth } from "../context/AuthProvider.jsx";
import { Link } from "react-router-dom";

const Hero = () => {
  const { blog } = useAuth();
  console.log(blog);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">
        Latest Blogs
      </h1>
      {blog && blog.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blog.slice(0, 4).map((element) => (
            <Link to={`/`} key={element._id}>
              
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
                                <div className="h-48 w-full overflow-hidden">
                  <img
                    src={element.blogImage?.url}
                    alt={element.title}
                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="p-4">
                  <h1 className="text-lg font-semibold text-gray-800 line-clamp-2">
                    {element.title}
                  </h1>
                  <div className="flex items-center mt-4 gap-3">
                    <img
                      src={element.adminPhoto}
                      alt={element.adminName}
                      className="w-10 h-10 rounded-full object-cover"
                    />

                    <div className="text-sm">
                      <p className="font-medium text-gray-700">
                        {element.adminName}
                      </p>
                      <p className="text-gray-500">New</p>
                    </div>
                  </div>
                </div>

              </div>

            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 text-lg">
          No Blogs Found
        </div>
      )}
    </div>
  );
};

export default Hero;