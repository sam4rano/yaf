import React from 'react'
import { Link } from "react-router-dom";

const JoinUs = () => {
  return (
    <div className="mt-[14rem] sm:mt-[8rem] flex flex-col justify-center align-middle text-center border-0 bg-[#e6eaef] w-[30%] sm:w-[40%] text-sm sm:text-[14px] px-4 py-2 leading-none rounded text-white border-white hover:text-teal-500">
      <h1 className="text-gray-600  text-xl p-md sm:text-sm md:text-[16px]">
        Nurturing a confident and Capable youth to become leaders, contributors,
        collaborators & impact driven
      </h1>
      <h1 className="text-gray-600  text-xl p-md sm:text-sm md:text-[16px]">
        Join the train as a contributor & partaker
      </h1>
      <Link
        to="/contact"
        className="ml-[8rem] sm:ml-[2rem] text-center align-middle mb-md sm:w-[100px] w-[120px] md:w-[100px] md:ml-[80px] mt-4 lg:inline-block lg:mt-0 p-[10px]  text-white text-sm px-4 py-2 leading-none rounded bg-[#f1c40f] hover:text-teal-500 hover:bg-white"
      >
        <span className="font-bold m sm:font-semi-bold text-xl tracking-tight p-md sm:text-[14px] md:text-[14px]">
          JOIN US
        </span>
      </Link>
    </div>
  );
}

export default JoinUs

// absolute sm:top-[16rem] sm:w-[300px] md:top-[15rem] md:left-[10rem] md:w-[300px] top-[12rem]