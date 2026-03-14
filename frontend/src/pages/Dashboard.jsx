import React, { useState } from "react";
import { useAuth } from "../context/AuthProvider.jsx";
import Sidebar from "../dashboard/Sidebar.jsx";
import Myprofile from "../dashboard/Myprofile.jsx";
import Myblog from "../dashboard/Myblog.jsx";
import Updateblog from "../dashboard/Updateblog.jsx";
import Createblog from "../dashboard/Createblog.jsx";

const Dashboard = () => {
  const {profile,isAuthentication}=useAuth();
  console.log(profile)
  console.log(isAuthentication)
  const [component,setcomponent]=useState("My blog")
  return (
    <div>
      <div className="flex">
        <Sidebar component={component} setcomponent={setcomponent} />

     <div className="flex-1 p-6">
     {component==="my profile"?(
      <Myprofile/>
     ):component==="create blog"?(
      <Createblog/>
      ):component==="update blog"?(
      <Updateblog/>
      ):(
       <Myblog/>
       )}
  </div>
</div>
    </div>
  );
};

export default Dashboard;