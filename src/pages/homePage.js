import React from "react";
import { Link } from "react-router-dom";
import electrician from "../assets/homepageele.jpg";

const homePage = () => {
  return (
    <>
      <div className="sm:flex flex-row items-center justify-between sm:m-14 m:2 sm:p-4 sm:gap-16 ">
        <div className="sm:w-1/2 w-full sm:m-0 m-2">
          <div className="sm:mt-6 mt-8 ">
            <span className=" font-DMSans sm:text-6xl text-4xl sm:font-medium font-semibold ">
              Bringing expert home services right to your doorstep, In Mathura
            </span>
          </div>

          <div className="mt-8">
            <span className="sm:text-[20px] text-[25px] font-poppins font-normal">
              From generator rentals to electrical repairs, trust us to
              illuminate your space with seamless solutions.
            </span>
          </div>
          <div className="mt-12 ">
            <Link to="/homepage2">
              <button
                className=" border bg-black text-white font-DMSans font-medium  py-4 sm:w-1/2 w-full
         rounded-xl transition-all hover:bg-gray-800 text-[20px] "
              >
                Explore
              </button>
            </Link>
          </div>
        </div>

        <div className="sm:w-1/2 w-full sm:mt-0 mt-8">
          <img
            src={electrician}
            alt=""
            className="rounded-xl shadow-md  sm:h-[30rem] "
          />
        </div>
      </div>
    </>
  );
};

export default homePage;
