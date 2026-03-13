import { useEffect, useState, createContext, useContext } from "react";
import axios from "axios";

export const authcontext = createContext();

const AuthProvider = ({ children }) => {

  const [blog, setblog] = useState([]);
  const [profile, setprofile] = useState(null);
  const [isAuthentication, setisAuthentication] = useState(false);

  useEffect(() => {

    const fetchprofile = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:3433/api/user/myprofile",
          { withCredentials: true }
        );

        setprofile(data);
        setisAuthentication(true);

      } catch (error) {
        console.log(error);
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
        console.log(error);
      }
    };

    fetchblog();
    fetchprofile();

  }, []);

  return (
    <authcontext.Provider value={{ blog, profile, isAuthentication }}>
      {children}
    </authcontext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => useContext(authcontext);