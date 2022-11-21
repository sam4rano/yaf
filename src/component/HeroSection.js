

import React from "react";
import imgOne from "../images/Happy.jpeg";
import { Link } from "react-router-dom";
import JoinUs from "./JoinUs";

const HeroSection = () => {

  
  return (
    <div
      className="h-full hover:bg-gray-100 pt-[3rem]"
      style={{
        backgroundImage: `url(${imgOne})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "600px",
        width: "100%",
        paddingTop:"20px"
      }}
    >
      <div className="flex align-middle justify-items-center">
        <JoinUs />
      </div>
      {/* <div className="absolute sm:top-[16rem] sm:w-[300px] md:top-[15rem] md:left-[10rem] md:w-[300px] top-[12rem] text-center border-0 inline-block bg-[#f1c40f] w-[30%] left-md text-sm px-4 py-2 leading-none rounded text-white border-white hover:text-teal-500">
        <h1 className="text-white  text-xl p-md sm:text-sm md:text-[16px]">
          Nurturing a confident and Capable youth to become leaders,
          contributors, collaborators & impact driven
        </h1>
        <h1 className="text-white  text-xl p-md sm:text-sm md:text-[16px]">
          Join the train as a contributor & partaker
        </h1>
        <Link
          to="/contact"
          className="block mb-md sm:w-[100px] md:w-[100px] sm:ml-[100px] md:ml-[80px] mt-4 lg:inline-block lg:mt-0 p-[10px]  text-white text-sm px-4 py-2 leading-none rounded bg-teal-500 hover:text-teal-500 hover:bg-white"
        >
          <span className="font-bold text-xl tracking-tight p-md sm:text-sm md:text-[14px]">
            JOIN US
          </span>
        </Link>
      </div> */}
    </div>
  );
};

export default HeroSection;
