import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [blog, setblog] = useState(null);

  useEffect(() => {
    const fetchblog = async () => {
      try {
        const { data } = await axios.get(
          `https://blog-web-mx42.onrender.com/api/blog/getsingleblog/${id}`,
          { withCredentials: true }
        );
        setblog(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchblog();
  }, [id]);

  if (!blog) {
    return <div className="text-center mt-20">Loading...</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-6">
      <div className="max-w-6xl mx-auto">

        <p className="text-sm text-gray-500 uppercase mb-1">
          {blog.cat}
        </p>

        <h1 className="text-4xl font-bold mb-6">
          {blog.title}
        </h1>

        <div className="flex items-center gap-3 mb-8">
          <img
            src={blog?.adminPhoto}
            alt=""
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="font-medium text-gray-700">
            {blog?.adminName}
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">

          <img
            src={blog?.blogImage?.url}
            alt=""
            className="w-full rounded-lg shadow-md"
          />

          <p className="text-gray-700 leading-relaxed text-lg">
            {blog.about}
          </p>

        </div>

      </div>
    </div>
  );
};

export default Detail;