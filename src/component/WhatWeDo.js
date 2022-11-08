import React from 'react'
import imgOne from '../images/mentoring.svg';
import imgTwo from "../images/network.svg";
import imgThree from "../images/smart.svg";
import imgFour from "../images/teamwork.svg";

const WhatWeDo = () => {
  return (
    <div className="flex flex-col">
      <div className="text-xl font-bold mb-4 p-md flex justify-center text-center">
        WHAT WE DO
      </div>
      <div className="flex flex-row">
        <div className="flex flex-row justify-center">
          <div className="flex-row justify-center">
            <h1 className="font-[500] text-center">Mentoring</h1>
            <img src={imgOne} alt="img_one" />
          </div>
          <div className="">
            <h1 className="font-[500] text-center">Networking</h1>
            <img src={imgTwo} alt="img_two" />
          </div>
        </div>
        <div className="flex flex-row justify-center">
          <div className="">
            <h1 className="font-[500] text-center">Smart</h1>
            <img src={imgThree} alt="img_three" />
          </div>
          <div className="">
            <h1 className="font-[500] text-center">Teamwork</h1>
            <img src={imgFour} alt="img_four" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatWeDo