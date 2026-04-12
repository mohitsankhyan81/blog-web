import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Updateblog = () => {
  const { id } = useParams();
  const navigateto=useNavigate()

  const [title, settitle] = useState("");
  const [cat, setcat] = useState("");
  const [about, setabout] = useState("");
  const [blogImage, setblogImage] = useState(null);

  useEffect(() => {
    const fetchblog = async () => {
      try {
        const { data } = await axios.get(
          `https://blog-web-mx42.onrender.com/api/blog/getsingleblog/${id}`,
          { withCredentials: true }
        );
        console.log(data)
        settitle(data.title);
        setabout(data.about);
        setcat(data.cat);
        setblogImage(data?.blogImage?.url)
      } catch (error) {
        console.log(error);
      }
    };

    fetchblog();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("cat", cat);
    formData.append("about", about);
    formData.append("blogImage",blogImage)
    try {
      await axios.put(
        `https://blog-web-mx42.onrender.com/api/blog/updateblog/${id}`,
        formData,
        { withCredentials: true }
      );
      navigateto("/dashboard");
      toast.success("Blog updated successfully");
    } catch (error) {
      console.log(error);
      toast.error("Fail to update");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleUpdate}
        className="bg-white p-8 rounded-lg shadow-md w-[500px]"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Update Blog
        </h2>

        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => settitle(e.target.value)}
          className="w-full border p-2 rounded mb-4"
        />

        <input
          type="text"
          placeholder="Category"
          value={cat}
          onChange={(e) => setcat(e.target.value)}
          className="w-full border p-2 rounded mb-4"
        />

        <textarea
          placeholder="About blog"
          value={about}
          onChange={(e) => setabout(e.target.value)}
          rows="4"
          className="w-full border p-2 rounded mb-4"
        ></textarea>

        <input
          type="file"
          onChange={(e) => setblogImage(e.target.files[0])}
          className="mb-4"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded"
        >
          Update Blog
        </button>
      </form>
    </div>
  );
};

export default Updateblog;