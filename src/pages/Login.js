import React, { useState } from "react";
import { Link } from "react-router-dom";
import SignupImg from "../assets/signUpageimg.jpg";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div className="flex gap-10">
      <div className="sm:block hidden">
        <img src={SignupImg} alt="" className="h-[48rem] w-[44rem]" />
      </div>
      <div className="sm:m-14 m-10 sm:w-1/2 w-full rounded-lg sm:mt-16 mt-20">
        <div className="w-full text-center">
          <span className=" font-bold sm:text-4xl text-2xl text-gray-900 ">
            Login to Your Account
          </span>
        </div>
        <div className="w-full text-center mt-2">
          <span className="text-gray-600">Welcome Back</span>
        </div>
        <div className="text-center w-full border mt-4  hover:bg-gray-200 cursor-pointer transition-all">
          <button className="">
            <span className="flex items-center gap-2 text-[18px] p-2 font-medium">
              {" "}
              <FcGoogle className="h-10" />
              Continue with Google
            </span>{" "}
          </button>
        </div>
        <div className="mt-6">
          <span className="text-[17px] font-medium">Name</span>
        </div>
        <input
          type="text"
          className="w-full appearance-none border border-gray-300  py-2 px-4 text-gray-900 font-normal
           leading-tight focus:outline-none hover:border-gray-500"
          placeholder="Enter Your Name..."
        />
        <div className="mt-6">
          <span className="text-[17px] font-medium">Email</span>
        </div>
        <input
          type="email"
          className="w-full appearance-none border border-gray-300  py-2 px-4 text-gray-900 font-normal
           leading-tight focus:outline-none hover:border-gray-500"
          placeholder="Enter Your Email..."
        />
        <div className="mt-6">
          <span className="text-[17px] font-medium">Password</span>
        </div>
        <input
          type="Password"
          className="w-full appearance-none border border-gray-300  py-2 px-4 text-gray-900 font-normal
           leading-tight focus:outline-none hover:border-gray-500"
          placeholder="Enter Your Password..."
        />
        <button className="w-full  bg-gray-900 hover:bg-black sm:mt-6 mt-8 p-4 text-[20px] font-medium text-white transition-all">
          Login
        </button>

        <div className="w-full text-center mt-4">
          Don't have an Account?
          <span to="/signup" className="cursor-pointer pl-2 font-bold">
            <Link to="/signup">SignUp</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
