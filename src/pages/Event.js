import React from "react";
import NavToggle from "../component/NavToggle";
import Footer from "../component/Footer";

const Event = () => {
  return (
    <>
      <NavToggle />

      <div className="lg:flex shadow rounded-lg border  border-gray-400 h-[500px]">
        <div className="bg-[#f1c40f] hover:bg-teal-500 rounded-lg lg:w-2/12 py-4 block shadow-inner">
          <div className="text-center tracking-wide pt-[200px]">
            <div className="text-white font-bold text-4xl ">24</div>
            <div className="text-white font-normal text-2xl">Sept</div>
          </div>
        </div>
        <div className="w-full  sm:w-11/12 md:w-full px-1 bg-white py-5 md:px-2 lg:py-2 tracking-wide sm:pt-[50px] sm:pl-[20px] md:pt-[50px] md:pl-[20px] pt-[200px] pl-[20px]">
          <div className="flex flex-row lg:justify-start justify-center ">
            <div className="text-gray-700 font-medium text-sm text-center lg:text-left px-2">
              <i className="far fa-clock"></i> 1:30 PM
            </div>
            <div className="text-gray-700 font-medium text-sm text-center lg:text-left px-2">
              Organiser : IHC
            </div>
          </div>
          <div className="font-semibold text-gray-800 text-xl text-center lg:text-left px-2">
            International Conference Dubai
          </div>

          <div className="text-gray-600 font-medium text-sm pt-1 text-center lg:text-left px-2">
            A-142/1, A-142, Ganesh Nagar, Tilak Nagar, New Delhi, 110018
          </div>
        </div>
        <div className="flex flex-row items-center w-full lg:w-1/3 bg-white lg:justify-end justify-center px-5 py-4 lg:px-0">
          <span className="tracking-wider text-white hover:bg-teal-500 cursor-pointer bg-[#f1c40f] px-2 text-sm rounded leading-loose m-[20px] p-[10px] font-semibold">
            Going
          </span>
        </div>
      </div>
      {/* <div className="w-full h-[400px]">
        Event Page
      </div> */}
      <Footer />
    </>
  );
};

export default Event;
