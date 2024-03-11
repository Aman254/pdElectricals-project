import React from "react";
import aboutimg from "../assets/aboutimg.jpg";
const aboutUs = () => {
  return (
    <div className="flex justify-between">
      <div className="m-4 p-2 w-1/2">
        <span className="text-gray-700 font-bold text-4xl">AboutUs</span>
        <div
          className="text-gray-600 text-xl font-medium mt-8 w-fit p-10 rounded-3xl ml-4 
         shadow-2xl border border-gray-200  cursor-pointer transition-all hover:border-gray-700"
        >
          <span className="">
            Welcome to our website, your premier destination for reliable
            andefficient services in Mathura, India. At{" "}
            <strong>PDElectricals</strong>, we specialize in providing top-notch
            solutions for all your diesel generator installation and service
            needs, alongside a comprehensive range of electrical and earthing
            services. With a commitment to excellence and customer satisfaction,
            we strive to deliver exceptional service tailored to meet your
            specific requirements. Our team of skilled professionals is
            dedicated to ensuring that your generator and electrical systems
            operate seamlessly, providing you with peace of mind and
            uninterrupted power supply. Whether you require installation,
            maintenance, or repair services, we have the expertise and resources
            to handle it all efficiently. By leveraging the latest technology
            and industry best practices, we guarantee superior results that
            exceed your expectations. Trust <strong>PDElectricals</strong> to be
            your trusted partner for all your generator, electrical, and
            earthing service needs in Mathura and beyond.
          </span>
        </div>
      </div>
      <div>
        <img
          src={aboutimg}
          alt=""
          className=" h-[45rem] shadow-sm rounded-lg "
        />
      </div>
    </div>
  );
};

export default aboutUs;
