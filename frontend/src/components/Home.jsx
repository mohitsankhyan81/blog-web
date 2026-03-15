import React, { useEffect } from "react";
import Hero from "../Home/Hero.jsx";
import Trending from "../Home/Trending.jsx";
import Devotional from "../Home/Devotional.jsx";
import Creators from "../Home/Creators.jsx";
import { useAuth } from "../context/AuthProvider.jsx";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { isAuthentication,loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !isAuthentication) {
      navigate("/login");
    }
  }, [isAuthentication,loading,navigate]);

  return (
    <div>
      <Hero />
      <Trending />
      <Devotional />
      <Creators />
    </div>
  );
};

export default Home;