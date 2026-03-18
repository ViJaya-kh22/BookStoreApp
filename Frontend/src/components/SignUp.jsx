import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from 'react-hot-toast'
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

const SignUp = () => {
  const navigate = useNavigate();
  const [authUser,setAuthUser]= useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
  try {
    const res = await axios.post("http://localhost:4001/user/signup", {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    });

    toast.success("Signup successfully");

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
      
      <div className="border rounded-md p-6 w-87.5 relative">

        
        <Link to="/">
          <button
            type="button"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
        </Link>

        <h3 className="font-bold text-lg mb-4 text-center">Sign Up</h3>

        <form
          className="flex flex-col gap-3"
          onSubmit={handleSubmit(onSubmit)}
        >

          {/* Name */}
          <div>
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full py-1 pl-2 border rounded-sm"
              {...register("fullname", { required: "Required" })}
            />
            {errors.fullname && (
              <span className="text-sm text-red-500">
                {errors.fullname.message}
              </span>
            )}
          </div>

          {/* Email */}
          <div>
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter email"
              className="w-full py-1 pl-2 border rounded-sm"
              {...register("email", {
                required: "Required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email",
                },
              })}
            />
            {errors.email && (
              <span className="text-sm text-red-500">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Password */}
          <div>
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full py-1 pl-2 border rounded-sm"
              {...register("password", {
                required: "Required",
                minLength: {
                  value: 6,
                  message: "Minimum 6 characters",
                },
              })}
            />
            {errors.password && (
              <span className="text-sm text-red-500">
                {errors.password.message}
              </span>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            className="bg-pink-500 text-white py-2 rounded-sm mt-2 hover:bg-pink-600 transition cursor-pointer"
          >
            Sign Up
          </button>

          {/* Login Link */}
          <p className="text-center mt-2">
            Already have an account?
            <Link
              to="/login"
              className="underline text-blue-500 ml-1"
            >
              Login
            </Link>
          </p>

        </form>
      </div>

    </div>
  );
};

export default SignUp;