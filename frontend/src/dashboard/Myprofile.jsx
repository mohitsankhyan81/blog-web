import React from "react";
import { useAuth } from "../context/AuthProvider.jsx";

const Myprofile = () => {
  const { profile } = useAuth();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-80 bg-white rounded-xl shadow-lg">

        <div className="h-28 w-full">
          <img
            src={profile?.user?.photo?.url}
            alt=""
            className="w-full h-full object-cover rounded-t-xl"
          />
        </div>

        <div className="flex justify-center -mt-10">
          <img
            src={profile?.user?.photo?.url}
            alt=""
            className="w-20 h-20 rounded-full border-4 border-white object-cover"
          />
        </div>

        <div className="text-center p-4">
          <h2 className="text-lg font-semibold">{profile?.user?.name}</h2>
          <p className="text-gray-500 text-sm">{profile?.user?.email}</p>
          <p className="text-gray-500 text-sm">{profile?.user?.number}</p>
          <p className="text-gray-600 text-sm">{profile?.user?.role}</p>
        </div>

      </div>
    </div>
  );
};

export default Myprofile;