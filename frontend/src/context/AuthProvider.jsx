import { useEffect, useState, createContext, useContext } from "react";
import axios from "axios";

export const authcontext = createContext();

const AuthProvider = ({ children }) => {
  const [blog, setblog] = useState([]);
  const [profile, setprofile] = useState(null);
  const [isAuthentication, setisAuthentication] = useState(false);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const fetchprofile = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:3433/api/user/myprofile",
          { withCredentials: true }
        );

        setprofile(data.user);
        setisAuthentication(true);

      } catch (error) {
        console.log("Profile error:", error);
        setisAuthentication(false);
      } finally {
        setloading(false);
      }
    };

    const fetchblog = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3433/api/blog/getallblog",
          { withCredentials: true }
        );
        setblog(response.data);
      } catch (error) {
        console.log("Blog fetch error:", error);
      }
    };

    fetchblog();
    fetchprofile();
  }, []);

  return (
    <authcontext.Provider
      value={{ blog, profile, setprofile, isAuthentication, setisAuthentication, loading }}
    >
      {children}
    </authcontext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => useContext(authcontext);