import React from "react";
// import { Link } from "react-scroll";
import electrician from "../assets/homepageele.jpg";
import ElectricianPoster from "../assets/ElectricianPoster.jpg";
import GeneratPoster from "../assets/GeneratorPoster.jpg";
import EarthingPoster from "../assets/EarthingPoster.jpg";

import ele1 from "../assets/ele1.jpg";
import ele2 from "../assets/ele2.jpg";
import ele3 from "../assets/ele3.jpg";
import ele4 from "../assets/ele4.jpg";

import dg1 from "../assets/dg1.jpg";
import dg2 from "../assets/dg2.jpg";
import dg3 from "../assets/dg3.jpg";
import dg4 from "../assets/dg4.jpg";

import earth1 from "../assets/earth1.jpg";
import earth2 from "../assets/earth2.jpg";
import earth3 from "../assets/earth3.jpg";
import earth4 from "../assets/earth4.jpg";

const electricData = [
  { title: "Minor Faults", image: ele1 },
  { title: "Switch Boards", image: ele2 },
  { title: "Fan Repair", image: ele3 },
  { title: "Appliance Repair", image: ele4 },
];
const dgData = [
  { title: "DG Service", image: dg1 },
  { title: "DG Rentals", image: dg2 },
  { title: "DG Installations", image: dg3 },
  { title: "New DG", image: dg4 },
];
const earthData = [
  { title: "Copper Earthing", image: earth1 },
  { title: "GI Earthing", image: earth2 },
  { title: "Chemicals", image: earth3 },
  { title: "Installations Only", image: earth4 },
];
const homePage2 = () => {
  return (
    <>
      {/* HomePage Part to startrs Here part-1 Generator*/}
      <div id="electricianSection" className="sm:m-14 m:2 sm:p-4 ">
        <div className="mb-8 mt-8">
          <span className="text-4xl font-semibold w-full">Electrical</span>
        </div>
        <div className="w-full mb-8 cursor-pointer">
          <img
            src={ElectricianPoster}
            alt=""
            className="rounded-lg transition ease-in-out delay-150  
              hover:-translate-y-1 hover:scale-110  duration-300 ..."
          />
        </div>
        <div className="sm:flex flex-row gap-4 cursor-pointer ">
          {electricData.map((item, index) => (
            <div key={index} className="sm:w-1/4 w-full">
              <div>
                <img
                  src={item.image}
                  alt=""
                  className="transition ease-in-out delay-150  
              hover:-translate-y-1 hover:scale-110  duration-50 ... rounded-lg"
                />
              </div>
              <div className="sm:mt-4 mt-2 text-center sm:mb-0 mb-4">
                <span className="sm:text-xl text-4xl font-bold sm:font-semibold">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* HomePage Part to startrs Here part-2 Electrical*/}
      <div className="sm:m-14 m:2 sm:p-4 ">
        <div className="mb-8 mt-8">
          <span className="text-4xl font-semibold  w-full">Generators</span>
        </div>
        <div className="w-full mb-8 cursor-pointer">
          <img
            src={GeneratPoster}
            alt=""
            className="rounded-lg transition ease-in-out delay-150  
              hover:-translate-y-1 hover:scale-110  duration-300 ..."
          />
        </div>
        <div className="sm:flex flex-row gap-4 cursor-pointer ">
          {dgData.map((item, index) => (
            <div key={index} className="sm:w-1/4 w-full">
              <div>
                <img
                  src={item.image}
                  alt=""
                  className="transition ease-in-out delay-150  
              hover:-translate-y-1 hover:scale-110  duration-50 ... rounded-lg"
                />
              </div>
              <div className="sm:mt-4 mt-2 text-center sm:mb-0 mb-4">
                <span className="sm:text-xl text-4xl font-bold sm:font-semibold">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* HomePage Part to startrs Here part-3 Earthing*/}
      <div className="sm:m-14 m:2 sm:p-4 ">
        <div className="mb-8 mt-8">
          <span className="text-4xl font-semibold w-full">Earthing</span>
        </div>
        <div className="w-full mb-8 cursor-pointer">
          <ul>
            <li>
              <a href="google.com">
                <img
                  src={EarthingPoster}
                  alt=""
                  className="rounded-lg transition ease-in-out delay-150  
              hover:-translate-y-1 hover:scale-110  duration-300 ..."
                />
              </a>
            </li>
          </ul>
        </div>
        <div className="sm:flex flex-row gap-4 cursor-pointer items-center">
          {earthData.map((item, index) => (
            <div key={index} className="sm:w-1/4 w-full">
              <div>
                <img
                  src={item.image}
                  alt=""
                  className="transition ease-in-out delay-150  
              hover:-translate-y-1 hover:scale-110  duration-50 ... rounded-lg"
                />
              </div>
              <div className="sm:mt-4 mt-2 text-center sm:mb-0 mb-4">
                <span className="sm:text-xl text-4xl font-bold sm:font-semibold">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default homePage2;
