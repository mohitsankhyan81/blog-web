import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email,setemail]=useState("");
  const [password,setpassword]=useState("");
  const [role,setrole]=useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form className="w-full max-w-sm bg-white p-6 rounded shadow space-y-3">
        <div className="text-xl font-semibold text-center">
            Crazy<span className="text-sky-500">Blog</span>
        </div>
        <h1 className="text-lg text-center font-medium">
            Login
        </h1>

        <select value={role} onChange={e=>setrole(e.target.value)} className="w-full border px-3 py-2 rounded">
          <option value="">Select your role</option>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>

        <input type="email" placeholder="Your Email" value={email} onChange={e=>setemail(e.target.value)} className="w-full border px-3 py-2 rounded"/>

        <input type="password" placeholder="Your Password" value={password} onChange={e=>setpassword(e.target.value)} className="w-full border px-3 py-2 rounded"/>

        <p className="text-sm text-center">Not Registered? <Link to="/register" className="text-sky-500">Register</Link></p>

        <button className="w-full bg-sky-500 text-white py-2 rounded hover:bg-sky-600">Login</button>
      </form>
    </div>
  );
};

export default Login;