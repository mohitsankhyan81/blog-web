import React from "react";
import { Link } from "react-router-dom";

const NotFount = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">

        <h1 className="text-7xl font-bold text-gray-800 mb-4">
          404
        </h1>

        <p className="text-xl text-gray-600 mb-6">
          Page not found
        </p>

        <Link
          to="/"
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Go Back Home
        </Link>

      </div>
    </div>
  );
};

export default NotFount;