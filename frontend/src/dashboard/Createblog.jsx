import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

const Createblog = () => {
  const [title, settitle] = useState("");
  const [cat, setcategoury] = useState("");
  const [blogImage, setblogImage] = useState(null);
  const [about, setabout] = useState("");

  const handlesubmit = async (e) => {
    e.preventDefault();

    const formdata = new FormData();
    formdata.append("title", title);
    formdata.append("cat", cat);
    formdata.append("blogImage", blogImage);
    formdata.append("about", about);

    try {
      const { data } = await axios.post(
        "http://localhost:3433/api/blog/create",
        formdata,
        { withCredentials: true }
      );

      console.log(data);
      toast.success("Blog Created");

      settitle("");
      setcategoury("");
      setblogImage(null);
      setabout("");
    } catch (error) {
      console.log(error);
      toast.error("Blog not create");
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 flex items-start justify-center p-10">
      <form
        onSubmit={handlesubmit}
        className="w-full max-w-xl bg-white rounded-xl shadow-lg p-8 space-y-6"
      >
        <h1 className="text-3xl font-bold text-gray-800 text-center">
          Create New Blog
        </h1>

        <div className="flex flex-col gap-2">
          <label className="text-gray-600 font-medium">Blog Title</label>
          <input
            type="text"
            placeholder="Enter blog title"
            value={title}
            onChange={(e) => settitle(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-400 outline-none"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-gray-600 font-medium">Category</label>
          <input
            type="text"
            placeholder="Enter category"
            value={cat}
            onChange={(e) => setcategoury(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-400 outline-none"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-gray-600 font-medium">Blog Image</label>
          <input
            type="file"
            onChange={(e) => setblogImage(e.target.files[0])}
            className="border border-gray-300 rounded-lg px-3 py-2 bg-white"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-gray-600 font-medium">About Blog</label>
          <textarea
            value={about}
            onChange={(e) => setabout(e.target.value)}
            placeholder="Write something about your blog..."
            className="border border-gray-300 rounded-lg px-3 py-2 h-32 resize-none focus:ring-2 focus:ring-green-400 outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition"
        >
          Create Blog
        </button>
      </form>
    </div>
  );
};

export default Createblog;