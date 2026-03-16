import React from "react"
import {useState,useEffect} from "react"
import axios from "axios"

const Creator=()=>{
const [create,setcreator]=useState([])

useEffect(()=>{
const admindata=async()=>{
const {data}=await axios.get(`http://localhost:3433/api/user/admins`,{withCredentials:true})
setcreator(data)
}
admindata()
},[])

return(
<div className="bg-gray-100 min-h-screen py-12 px-6">
<h1 className="text-3xl font-bold text-center mb-10">Our Creators</h1>

<div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8">
{create && create.map((item)=>(
<div key={item._id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">

<div className="h-28 w-full overflow-hidden">
<img src={item?.photo?.url} alt={item?.name} className="w-full h-full object-cover"/>
</div>

<div className="flex flex-col items-center -mt-12 pb-6 px-4">
<img src={item.photo?.url} alt={item?.name} className="w-24 h-24 rounded-full border-4 border-white object-cover"/>

<h1 className="text-lg font-semibold mt-3">{item?.name}</h1>
<p className="text-gray-600 text-sm">{item?.email}</p>
<p className="text-gray-500 text-sm">{item?.role}</p>
</div>

</div>
))}
</div>

</div>
)
}

export default Creator