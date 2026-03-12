import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthProvider.jsx";

const Devotional = () => {
  const { blog } = useAuth();

  const car = blog?.filter(
    (item) => item.cat?.toLowerCase() === "tesla"
  );

  return (
    <div className="bg-gradient-to-r from-gray-100 to-gray-200 py-14">
      <div className="max-w-7xl mx-auto px-4">

        <h1 className="text-4xl font-bold text-center mb-4 text-gray-900">
          Tesla Electric Cars
        </h1>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Tesla cars are powered by advanced electric technology. 
          They provide high performance, long battery life and 
          eco-friendly driving experience with ranges up to 500-600 km.
        </p>

        {car && car.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {car.map((element) => (
              <Link to={`/blog/${element._id}`} key={element._id}>

                <div className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">

                  <div className="h-56 w-full overflow-hidden">
                    <img
                      src={element?.blogImage?.url}
                      alt={element?.title}
                      className="w-full h-full object-cover hover:scale-110 transition duration-500"
                    />
                  </div>

                  <div className="p-5">
                    <h1 className="text-lg font-bold text-gray-800 mb-3">
                      {element?.title}
                    </h1>

                    <div className="flex items-center gap-3 mt-4">
                      <img
                        src={element?.adminPhoto}
                        alt={element?.adminName}
                        className="w-9 h-9 rounded-full object-cover"
                      />

                      <div>
                        <p className="text-sm font-semibold text-gray-700">
                          {element?.adminName}
                        </p>
                        <p className="text-xs text-gray-500">
                          Tesla Category
                        </p>
                      </div>
                    </div>

                  </div>

                </div>

              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 text-lg">
            Tesla blog not found
          </div>
        )}

      </div>
    </div>
  );
};

export default Devotional;