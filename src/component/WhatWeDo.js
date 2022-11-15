import React from 'react'
import imgOne from '../images/mentoring.svg';
import imgTwo from "../images/network.svg";
import imgThree from "../images/smart.svg";
import imgFour from "../images/teamwork.svg";

const WhatWeDo = () => {
  return (
    <div className="flex flex-col bg-gray-300 sm:h-auto p-[25px] mb-[1rem]">
      <div className="text-2xl font-bold mb-4 p-md flex justify-center text-center text-white">
        WHAT WE DO
      </div>
      <div className="flex flex-row sm:flex-col">
        <div className="flex flex-row justify-between sm:flex-col">
          <div className="flex flex-col rounded-md m-md w-[300] p-sm bg-white hover:bg-[#f1c40f] hover:text-white">
            <h1 className="font-[500] text-center">Mentoring</h1>
            <img src={imgOne} alt="img_one" className="flex" />
          </div>
          <div className=" flex flex-col rounded-md m-md w-[300] p-sm bg-white hover:bg-[#f1c40f] hover:text-white">
            <h1 className="font-[500] text-center">Networking</h1>
            <img src={imgTwo} alt="img_two" />
          </div>
        </div>
        <div className="flex flex-row justify-between sm:flex-col">
          <div className="flex flex-col rounded-md m-md p-sm w-[300] bg-white hover:bg-[#f1c40f] hover:text-white">
            <h1 className="font-[500] text-center">Smart</h1>
            <img src={imgThree} alt="img_three" />
          </div>
          <div className="flex flex-col rounded-md m-md p-sm w-[300] bg-white hover:bg-[#f1c40f] hover:text-white">
            <h1 className="font-[500] text-center">Teamwork</h1>
            <img src={imgFour} alt="img_four" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatWeDo