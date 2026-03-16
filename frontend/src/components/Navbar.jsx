import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider.jsx";
import toast from "react-hot-toast";
import axios from "axios";

const Navbar = () => {
  const { profile, isAuthentication, setisAuthentication, loading } = useAuth();
  const navigator = useNavigate();

  const handlelogout = async (e) => {
    try {
      e.preventDefault();
      await axios.get(`http://localhost:3433/api/user/logout`, {
        withCredentials: true,
      });

      toast.success("Logout Successfully");
      setisAuthentication(false);
      navigator("/login");
    } catch (error) {
      console.log("Log out error ", error);
      toast.error("Fail to logout");
    }
  };

  return (
    <nav className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <div className="text-xl font-semibold">
          Crazy<span className="text-sky-400">Blogs</span>
        </div>

        <ul className="flex items-center space-x-6">
          <li><Link to="/" className="hover:text-sky-400">Home</Link></li>
          <li><Link to="/blogs" className="hover:text-sky-400">Blogs</Link></li>
          <li><Link to="/creator" className="hover:text-sky-400">Creators</Link></li>
          <li><Link to="/about" className="hover:text-sky-400">About</Link></li>
          <li><Link to="/contact" className="hover:text-sky-400">Contact</Link></li>
        </ul>

        <div className="flex items-center space-x-3">

          {!loading && isAuthentication && profile?.role !== "user" && (
            <Link
              to="/dashboard"
              className="px-4 py-1.5 bg-sky-500 text-black rounded"
            >
              Dashboard
            </Link>
          )}

          {!isAuthentication ? (
            <Link
              to="/login"
              className="px-4 py-1.5 bg-white text-black rounded"
            >
              Login
            </Link>
          ) : (
            <button
              onClick={handlelogout}
              className="px-4 py-1.5 bg-white text-black rounded"
            >
              Logout
            </button>
          )}

        </div>

      </div>
    </nav>
  );
};

export default Navbar;