import React from 'react'
import {Routes , Route, Navigate} from 'react-router-dom'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Toaster} from 'react-hot-toast';

import Home from './home/Home';
import Course from './components/Course';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import { useAuth } from './context/AuthProvider';

const App = () => {
   const [authUser,setAuthUser]=useAuth();
    console.log(authUser);

  return (
    <div>
    
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route
         path='/course' 
        element={ authUser ? <Course/> : <Navigate to="/signup"/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Footer/>
      <Toaster/>
   
    </div>
  )
}

export default App
