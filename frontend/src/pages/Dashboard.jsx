import React from "react";
import { useAuth } from "../context/AuthProvider.jsx";

const Dashboard = () => {
  const {profile,isAuthentication}=useAuth();
  console.log(profile)
  console.log(isAuthentication)
  return (
    <div>
      dashboard
    </div>
  );
};

export default Dashboard;