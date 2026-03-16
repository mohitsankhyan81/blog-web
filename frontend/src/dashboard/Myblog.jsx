import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Myblog = () => {
  const [blog, setblog] = useState([]);

  useEffect(() => {
    const fetchblogdata = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:3433/api/blog/myblog`,
          { withCredentials: true }
        );
        setblog(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchblogdata();
  }, []);

  const handledelete = async (id) => {
    try {
      const res = await axios.delete(
        `http://localhost:3433/api/blog/delete/${id}`,
        { withCredentials: true }
      );

      toast.success(res.data.message || "Blog deleted successfully");

      setblog((prev) => prev.filter((item) => item._id !== id));
    } catch (error) {
      toast.error(error.response?.data?.message || "Fail to delete blog");
    }
  };

  return (
    <div className="w-full p-6">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blog.map((item) => (
  <div
    key={item._id}
    className="border rounded-lg overflow-hidden bg-white shadow hover:shadow-lg transition"
  >

    <Link to={`/blog/${item._id}`}>
      <img
        src={item.blogImage?.url}
        alt={item.title}
        className="w-full h-44 object-cover"
      />
    </Link>

    <div className="p-4 space-y-2">

      <Link to={`/blog/${item._id}`}>
        <h2 className="text-lg font-semibold hover:text-blue-600">
          {item.title}
        </h2>
      </Link>

      <p className="text-sm text-gray-600 line-clamp-2">
        {item.about}
      </p>

      <p className="text-sm text-green-600">
        {item.category}
      </p>

      <div className="flex gap-3 pt-2">

        <Link
          to={`/blog/update/${item._id}`}
          className="text-blue-600 text-sm bg-blue-100 px-3 py-1 rounded hover:bg-blue-200"
        >
          Update
        </Link>

        <button
          onClick={() => handledelete(item._id)}
          className="text-red-600 text-sm bg-red-100 px-3 py-1 rounded hover:bg-red-200"
        >
          Delete
        </button>

      </div>
    </div>
  </div>
))}
      </div>
    </div>
  );
};

export default Myblog;