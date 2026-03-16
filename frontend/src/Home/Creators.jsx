import React, { useEffect, useState } from "react";
import axios from "axios";

const Creators = () => {
  const [admin, setadmin] = useState([]);

  useEffect(() => {
    const admindata = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:3433/api/user/admins",
          { withCredentials: true }
        );
        console.log('data is', data);
        setadmin(data);
      } catch (error) {
        console.log("err", error.response);
      }
    };
    admindata();
  }, []);
  console.log('data is', )
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Admin
      </h1>

      {admin && admin?.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 place-items-center">
          {admin?.slice(0, 5).map((item) => ( // <-- only first 5 admins
            <div
              key={item._id}
              className="flex flex-col items-center bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
            >
              <img
                src={item.photo?.url}
                alt={item.name}
                className="w-24 h-24 rounded-full object-cover mb-3"
              />
              <h2 className="text-gray-700 font-semibold">{item.name}</h2>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No Admin Found</p>
      )}
    </div>
  );
};

export default Creators;