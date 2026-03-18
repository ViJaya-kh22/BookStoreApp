import React from 'react'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const [authUser,setAuthUser]=useAuth();
    const navigate = useNavigate();

    const handleLogOut = () =>{
     try {
        setAuthUser(null);

        localStorage.removeItem("user");

        toast.success("Logout successfully!");

        navigate("/");
        
     } catch (error) {
         toast.error("Error " + error.message);
     }
    }

  return (
    <>
      <button 
      className='px-3 py-2 bg-red-500 text-white cursor-pointer'
      onClick={handleLogOut}>
        Logout
      </button>
    </>
  )
}

export default Logout
