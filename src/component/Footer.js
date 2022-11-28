import React from 'react'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-600 flex flex-row justify-between p-sm w-full h-auto md:flex-wrap sm:flex-wrap overflow-hidden">
      <Link
        to="/"
        className=" p-sm font-bold text-2xl lg:w-1/5 cursor-pointer flex font-[Poppins] 
      text-white"
      >
        <span className="text-3xl text-grey-600 mr-1 pt-2">
          <ion-icon name="log o-ionic"></ion-icon>
        </span>
        YAF
      </Link>
      <div className="flex flex-col lg:w-1/5">
        <Link to="/about" className="text-white-500 text-md p-md text-white">
          About Us
        </Link>
        <Link to="/contact" className="text-white-500 text-md p-md text-white">
          Contact Us
        </Link>
        <Link to="/support" className="text-white-500 text-md p-md text-white">
          Support
        </Link>
        <Link to="/gallery" className="text-white-500 text-md p-md text-white">
          Gallery
        </Link>
      </div>
      <div className="flex flex-col lg:w-1/5">
        <Link to="/number" className="text-white-500 p-md  text-white">
          <span className="flex flex-row">
            <ion-icon name="call" color="white"></ion-icon>
            +2348064427860
          </span>
        </Link>
        <Link to="/email" className="text-white-500  p-md text-white">
          <span className="flex flex-row">
            <ion-icon name="send" color="white"></ion-icon>
            yaf@gmail.com
          </span>
        </Link>
        <Link to="/" className="text-white-500 text-md p-md text-white">
          Training
        </Link>
        <Link to="/" className="text-white-500 text-md p-md text-white">
          Career
        </Link>
      </div>
      <div className="flex flex-col w-1/4 lg:w-1/5">
        <Link to="/event" className="text-white-500 text-md p-md text-white">
          Event
        </Link>
        <Link to="/" className="text-white-500 text-md p-md text-white">
          Community
        </Link>
        <Link to="/" className="text-white-500 text-md p-md text-white">
          Blog
        </Link>
        <Link to="/" className="text-white-500 text-md p-md text-white">
          Workshop
        </Link>
      </div>

      <div className="flex flex-col w-1/3 sm:w-full">
        <p className="text-white-500 text-md p-md text-white sm:flex sm:justify-center w-full">
          Youth Alive Initiative is a non-profit inter-denominational initiative
          of Joel Ayodele Adelani, our core value are nurturing and building
          capacity for a purpose driven young generation.
        </p>
      </div>
      <div className="flex flex-col w-1/3 sm:w-full">
        <p className="text-white-500 text-md p-md text-white sm:flex sm:justify-center w-full">
          Copyright © YAF - 2022
        </p>
      </div>
    </div>
  );
}

export default Footer