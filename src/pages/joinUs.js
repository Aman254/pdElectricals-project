import React from "react";
import JoinImg from "../assets/joinusimg.jpg";
const joinUs = () => {
  return (
    <div className="flex gap-10">
      <div className="sm:block hidden">
        <img src={JoinImg} alt="" className="h-[48rem] w-[38rem] " />
      </div>
      <div className="sm:m-14 m-10 sm:w-1/2 w-full rounded-lg sm:mt-16 mt-20">
        <div className="w-full text-center">
          <span className=" font-bold sm:text-4xl text-2xl text-gray-900 ">
            Join Us
          </span>
        </div>

        <div className="mt-6">
          <span className="text-[17px] font-medium">Name</span>
        </div>
        <input
          type="text"
          required
          className="w-full appearance-none border border-gray-300  py-2 px-4 text-gray-900 font-normal
     leading-tight focus:outline-none hover:border-gray-500"
          placeholder="Enter Your Name..."
        />
        <div className="mt-6">
          <span className="text-[17px] font-medium">Email</span>
        </div>
        <input
          type="email"
          required
          className="w-full appearance-none border border-gray-300  py-2 px-4 text-gray-900 font-normal
     leading-tight focus:outline-none hover:border-gray-500"
          placeholder="Enter Your Email..."
        />
        <div className="mt-6">
          <span className="text-[17px] font-medium">Mobile</span>
        </div>
        <input
          type="Number"
          required
          className="w-full appearance-none border border-gray-300  py-2 px-4 text-gray-900 font-normal
     leading-tight focus:outline-none hover:border-gray-500"
          placeholder="Enter Your Mobile Number ..."
        />
        <div className="mt-6">
          <span className="text-[17px] font-medium">Select You Category</span>
        </div>
        <select
          className="w-full appearance-none border border-gray-300  py-2 px-4 text-gray-900 font-normal
     leading-tight focus:outline-none hover:border-gray-500"
        >
          <option>Generator</option>
          <option>Earthing</option>
          <option>Electrical </option>
        </select>
        <button className="w-full  bg-gray-900 hover:bg-black sm:mt-6 mt-8 p-4 text-[20px] font-medium text-white transition-all">
          Submit
        </button>
      </div>
    </div>
  );
};

export default joinUs;
