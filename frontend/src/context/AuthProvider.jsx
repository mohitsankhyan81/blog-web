import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react"
import axios from "axios";
import { useContext } from "react";

export const authcontext=createContext();

const AuthProvider = ({children}) => {
    const [blog,setblog]=useState([]);
    useEffect(()=>{
        const fetchblog=async()=>{
            try{
                const response=await axios.get("http://localhost:3433/api/blog/getallblog",
                    {withCredentials:true}
                );
                setblog(response.data);
            }
            catch(error){
                console.log(error);
            }
        }
        fetchblog();
    },[])
  return (
    <authcontext.Provider value={{blog}}>
        {children}
    </authcontext.Provider>
  )
}

export default AuthProvider

export const useAuth=()=>useContext(authcontext);
