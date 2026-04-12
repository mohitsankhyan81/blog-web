import React from "react";
import { useAuth } from "../context/AuthProvider.jsx";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
const Sidebar = ({ setcomponent }) => {
  const { profile, setisAuthentication } = useAuth();
  const navigate = useNavigate();
  console.log(profile?.role)
  const handleComponent = (value) => {
    setcomponent(value);
  };

  const gotohome = () => {
    navigate("/");
  };

  const handlelogout = async (e) => {
    try {
      e.preventDefault();
      await axios.get("https://blog-web-mx42.onrender.com/api/user/logout", {
        withCredentials: true,
      });
      toast.success("logout Sucessfully")
      setisAuthentication(false);
      navigate("/login")
    } catch (error) {
      console.log("Log out error ", error);
      toast.success("fail to logout");
    }
  };

  return (
    <div className="w-64 h-screen bg-gray-100 shadow-md flex flex-col items-center p-6">
      <div className="flex flex-col items-center mb-8">
        <img
          src={profile?.photo?.url}
          alt=""
          className="w-20 h-20 rounded-full object-cover mb-2"
        />
        <p className="font-semibold text-gray-700">{profile?.name}</p>
      </div>

      <div className="flex flex-col gap-3 w-full">
        <button onClick={() => handleComponent("My blog")} className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">
          MY BLOG
        </button>

        <button onClick={() => handleComponent("create blog")} className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          CREATE BLOG
        </button>

        <button onClick={() => handleComponent("my profile")} className="w-full bg-purple-500 text-white py-2 rounded hover:bg-purple-600">
          MY PROFILE
        </button>

        <button onClick={gotohome} className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600">
          HOME
        </button>

        <button onClick={handlelogout} className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600">
          LOGOUT
        </button>
      </div>
    </div>
  );
};

export default Sidebar;