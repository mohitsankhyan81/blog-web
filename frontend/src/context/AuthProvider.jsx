import { useEffect, useState, createContext, useContext } from "react";
import axios from "axios";

export const authcontext = createContext();

const AuthProvider = ({ children }) => {
  const [blog, setblog] = useState([]);
  const [profile, setprofile] = useState(null);
  const [isAuthentication, setisAuthentication] = useState(false);
  const [loading, setloading] = useState(true);

      const fetchprofile = async () => {
      try {
        const { data } = await axios.get(
          `https://blog-web-mx42.onrender.com/api/user/myprofile`,
          { withCredentials: true }
        );

        setprofile(data);
        console.log(data);
        setisAuthentication(true);

      } catch (error) {
        console.log("Profile error:", error);
        setisAuthentication(false);
      } finally {
        setloading(false);
      }
    };
  useEffect(() => {

    const fetchblog = async () => {
      try {
        const response = await axios.get(
          `https://blog-web-mx42.onrender.com/api/blog/getallblog`,
          { withCredentials: true }
        );
        setblog(response.data);
      } catch (error) {
        console.log("Blog fetch error:", error);
      }
    };
    fetchprofile();
    fetchblog();
  }, []);

  return (
    <authcontext.Provider
      value={{ blog, profile, setprofile, isAuthentication, setisAuthentication, loading ,fetchprofile}}
    >
      {children}
    </authcontext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => useContext(authcontext);