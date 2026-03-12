import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [name,setname]=useState("");
  const [email,setemail]=useState("");
  const [phone,setphone]=useState("");
  const [role,setrole]=useState("");
  const [photo,setphoto]=useState("");
  const [education,seteducation]=useState("");
  const [password,setpassword]=useState("");

  const handleRegister=async(e)=>{
    e.preventDefault();
    const formdata=new FormData()
    formdata.append('name',name)
    formdata.append('email',email)
    formdata.append('phone',phone)
    formdata.append('role',role)
    formdata.append('photo',photo)
    formdata.append('education',education)
    formdata.append('password',password)
    try{
        const {data}=await axios.post("http://localhost:3433/api/user/register",formdata,{
          withCredentials:true
        });
        console.log(data)
        setname("")
        setemail("")
        setpassword("")
        setphone("")
        setphoto(null)
        setrole("")
        seteducation("")
    }
    catch(error){
        console.log(error);
    }
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form className="w-full max-w-sm bg-white p-6 rounded shadow space-y-3" onSubmit={handleRegister}>

        <div className="text-xl font-semibold text-center">
          Crazy<span className="text-sky-500">Blog</span>
        </div>

        <h1 className="text-lg text-center font-medium">Register</h1>

        <select value={role} onChange={e=>setrole(e.target.value)} className="w-full border px-3 py-2 rounded">
          <option value="">Select Role</option>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>

        <input type="text" placeholder="Your Name" value={name} onChange={e=>setname(e.target.value)} className="w-full border px-3 py-2 rounded"/>

        <input type="text" placeholder="Your Email" value={email} onChange={e=>setemail(e.target.value)} className="w-full border px-3 py-2 rounded"/>

        <input type="number" placeholder="Your Phone" value={phone} onChange={e=>setphone(e.target.value)} className="w-full border px-3 py-2 rounded"/>

        <input type="password" placeholder="Your Password" value={password} onChange={e=>setpassword(e.target.value)} className="w-full border px-3 py-2 rounded"/>

        <select value={education} onChange={e=>seteducation(e.target.value)} className="w-full border px-3 py-2 rounded">
          <option value="">Select your Education</option>
          <option value="BCA">BCA</option>
          <option value="MCA">MCA</option>
          <option value="BBA">BBA</option>
          <option value="MBA">MBA</option>
        </select>
        <div>
            <input type="file"  onChange={e=>setphoto(e.target.files[0])} className="w-full border px-3 py-2 rounded"/>
        </div>

        <p className="text-sm text-center">
          Already registered? <Link to="/login" className="text-sky-500">Login Now</Link>
        </p>

        <button type="submit" className="w-full bg-sky-500 text-white py-2 rounded hover:bg-sky-600">
          Register
        </button>

      </form>
    </div>
  );
};

export default Register;