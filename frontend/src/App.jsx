import React from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './components/Home.jsx'
import { Route, Routes, useLocation } from 'react-router-dom'
import Blogs from './pages/Blogs.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Dashboard from './pages/Dashboard.jsx'
import { Toaster } from "react-hot-toast";
import Creator from './pages/Creator.jsx'
import Updateblog from './dashboard/Updateblog.jsx'
import Detail from './pages/Detail.jsx'
import NotFount from './pages/NotFount.jsx'
const App = () => {
  const location=useLocation();
  const hideNavbarFooter=["/dashboard","/login","/register"].includes(
    location.pathname
  )

  return (
    <div>
      {!hideNavbarFooter && <Navbar/>}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/creator'element={<Creator/>}></Route>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>


        <Route path='/blog/:id' element={<Detail/>}/>
        <Route path='/blog/update/:id' element={<Updateblog />}/>

        <Route path='*' element={<NotFount/>}/>
      </Routes>
      <Toaster/>
      {!hideNavbarFooter && <Footer/>}
    </div>
  )
}

export default App
