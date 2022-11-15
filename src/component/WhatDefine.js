import React from 'react';
import imgOne from '../images/impact.svg';

const WhatDefine = () => {
  return (
    <div className="flex justify-center sm:h-auto scroll-m-lg sm:mb-[80px] md:pb-[60px]">
      <div className="flex flex-row justify-between rounded-lg bg-white max-h-[500px] md:h-auto sm:flex-col">
        <div className="w-[50%] p-6 flex flex-col justify-center bg-teal-500 hover:bg-[#f1c40f] sm:w-full align-middle">
          <h3 className="text-white text-xl font-bold mb-2 p-md sm:font-medium sm:text-md sm:text-center sm:pt-md">
            WHAT DEFINE US
          </h3>
          <p className="text-white text-base mb-2 p-md sm:text-[13px] sm:text-center">
            Young alight initiative is an initiative that brings together young
            individuals who want to make a difference in their generation. A
            youthful generation driven to serve as an example of excellence and
            godliness. This initiative will be dedicated and committed to
            nurturing and building capacity for a purpose driven young
            generation. The core watchword is standing for what is right,
            equipping and training the upcoming generation to create a society
            free from social vices and corruption.
          </p>
        </div>
        <img
          className="w-1/2 h-9 md:h-auto object-cover md:w-48 pr-md rounded-t-lg md:rounded-none md:rounded-l-lg sm:w-full"
          src={imgOne}
          alt="card mg"
        />
      </div>
    </div>
  );
}

export default WhatDefine