import React from 'react';
import imgOne from '../images/impact.svg';

const WhatDefine = () => {
  return (
    <div class="flex justify-center p-[20px]">
      <div class="flex flex-row justify-between rounded-lg bg-white shadow-lg max-h-[400px]">
        <img
          class=" w-[50%] h-9 md:h-auto object-cover md:w-48 pr-md rounded-t-lg md:rounded-none md:rounded-l-lg"
          src={imgOne}
          alt="card mg"
        />
        <div class="w-[50%] p-6 flex flex-col justify-start">
          <h3 class="text-gray-900 text-xl font-bold mb-2 p-md">WHAT DEFINE US</h3>
          <p class="text-gray-700 text-base mb-4 p-md">
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
      </div>
    </div>
  );
}

export default WhatDefine