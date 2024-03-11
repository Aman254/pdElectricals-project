import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenuClick() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <div className="flex justify-between w-full p-0 m-0 ">
        <div className="sm:p-6 p-4 font-poppins font-bold text-2xl text-gray-700">
          PDElectricals
        </div>
        <div className="sm:flex  font-poppins items-center font-medium text-[18px] hidden">
          <ul className="text-gray-600  flex gap-8 cursor-pointer pr-16">
            <Link to="/home" className="hover:text-gray-900">
              Home
            </Link>
            <Link to="/about" className="hover:text-gray-900">
              About
            </Link>
            <Link to="/joinus" className="hover:text-gray-900">
              Join
            </Link>
            <Link to="/contact" className="hover:text-gray-900">
              Contact
            </Link>
            <Link to="/login" className="hover:text-gray-900">
              Login
            </Link>
          </ul>
        </div>
        {/* Hamburger Icon */}
        <div className="sm:hidden flex items-center">
          <button
            onClick={handleMenuClick}
            className="px-4 py-2 rounded-lg  transition-all text-4xl"
          >
            <IoMenu />
          </button>
        </div>
      </div>
      <div>
        {isMenuOpen && (
          <div
            className="sm:w-0 w-ful h-1/2 bg-gray-200 transition-all  shadow-sm font-poppins 
      rounded-b-lg text-2xl font-medium text-gray-700"
          >
            <div className="flex justify-between border border-gray-300  rounded-sm p-4 ">
              <button>About</button>
              <span className="p-2">
                <FaArrowRight />
              </span>
            </div>
            <div className="flex justify-between border border-gray-300  rounded-sm p-4 ">
              <button>Join</button>
              <span className="p-2">
                <FaArrowRight />
              </span>
            </div>
            <div className="flex justify-between border border-gray-300  rounded-sm p-4 ">
              <button>Contact</button>
              <span className="p-2">
                <FaArrowRight />
              </span>
            </div>
            <div className="flex justify-between border border-gray-300  rounded-sm p-4 ">
              <button>Login</button>
              <span className="p-2">
                <FaArrowRight />
              </span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default NavBar;
