import React from "react";
import { useAuth } from "../context/AuthProvider.jsx";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Trending = () => {
  const { blog } = useAuth();

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Trending Blog</h1>

      {blog && blog.length > 0 ? (
        <Carousel responsive={responsive}>
          {blog.slice(0, 8).map((element) => (
            <Link to={`/`} key={element._id}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">

                <div className="h-40 w-full overflow-hidden">
                  <img
                    src={element.blogImage?.url}
                    alt={element.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-3">
                  <h1 className="text-md font-semibold text-gray-800 line-clamp-2">
                    {element.title}
                  </h1>

                  <div className="flex items-center mt-3 gap-2">
                    <img
                      src={element.adminPhoto}
                      alt={element.adminName}
                      className="w-8 h-8 rounded-full object-cover"
                    />

                    <div className="text-xs">
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
        </Carousel>
      ) : (
        <div className="text-center text-gray-500 text-lg">
          Trending blog Not found
        </div>
      )}
    </div>
  );
};

export default Trending;