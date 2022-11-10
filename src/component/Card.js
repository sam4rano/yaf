import React from 'react'
import imgOne from '../images/13.svg';
import imgTwo from "../images/72.svg";

const Card = () => {
  return (
    <div
      href="#"
      style={{ backgroundImage: `url(${imgTwo})`, backgroundRepeat:'no-repeat',backgroundAttachment:'fixed', backgroundSize:'cover', display:'flex'}}
      className="flex flex-col h-[400px] items-center w-full bg-white rounded-lg border shadow-md md:flex-row md:max-w-2xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      {/* <img
        className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        src={imgOne}
        alt=""
      /> */}
      <div className="flex flex-col justify-center align-middle p-4 absolute top-[8rem] leading-normal bg-teal-500">
        <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="mb-3 font-normal text-center text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </div>
    </div>
  );
}

export default Card