import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from 'axios'
import toast from 'react-hot-toast'
import {useNavigate} from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';

const Login = () => {
  const navigate = useNavigate();
  const [authUser, setAuthUser] = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
  try {
    const res = await axios.post("http://localhost:4001/user/login", {
      email: data.email,
      password: data.password,
    });

    toast.success("Logged in successfully");

    localStorage.setItem("user", JSON.stringify(res.data.user));

    setAuthUser(res.data.user);

    navigate("/");
  } catch (error) {
    if (error.response) {
      toast.error("Error: " + error.response.data.message);
    }
  }
};

  return (
    <div className="flex min-h-screen justify-center items-center">
      <div className="border flex flex-col p-6 rounded-md w-87.5 relative">
        <h3 className="font-bold text-lg mb-4">Login</h3>
              <Link to="/">
                      <button
                        type="button"
                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                      >
                        ✕
                      </button>
                    </Link>

        <form
        className="flex flex-col gap-3"
        onSubmit={handleSubmit(onSubmit)}
        >

          <label>Email</label>
          <input
          type="email"
          className="border py-1 pl-2 rounded-sm"
          placeholder="Enter email"
          {...register("email",{required:true})}
          />
          {errors.email && <span className="text-red-500 text-sm">Required</span>}

          <label>Password</label>
          <input
          type="password"
          className="border py-1 pl-2 rounded-sm"
          placeholder="Enter password"
          {...register("password",{required:true})}
          />
          {errors.password && <span className="text-red-500 text-sm">Required</span>}

          <button className="bg-pink-500 text-white py-2 rounded-sm mt-2 cursor-pointer">
            Login
          </button>

          <p className="text-center mt-2">
            Don't have an account ?
            <Link to="/signup" className="text-blue-500 underline ml-1">
              SignUp
            </Link>
          </p>

        </form>

      </div>
    </div>
  )
}

export default Login