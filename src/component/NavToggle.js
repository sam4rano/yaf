
import React, { useState } from "react";

import { Link } from "react-router-dom";

const NavToggle = () => {

  let [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="sm:flex flex justify-between bg-teal-500 py-4 md:px-7 px-7">
        <Link to="/"
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-white"
        >
          <span className="text-3xl text-white mr-1 pt-2">
            <ion-icon name="logo-ionic"></ion-icon>
          </span>
          YAF
        </Link>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl text-white right-8 top-6 pb-md cursor-pointer md:hidden lg:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`md:flex sm:items-center md:pb-0 pb-12 absolute lg:flex lg:flex-row lg:justify-end md:static lg:absolute lg:top-[2rem]  bg-teal-500  md:z-auto z-[-1] left-0 w-full md:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          <Link
            to="/about"
            className="block text-[16px] mt-4 lg:inline-block lg:mt-0 p-[13px] text-white md:text-sm px-4 py-2 leading-none rounded hover:text-teal-500 hover:bg-white"
          >
            ABOUT
          </Link>
          <Link to="/gallery">
            <span
              href="#responsive-header"
              className="block text-[16px] mt-4 lg:inline-block lg:mt-0 mr-4 p-[13px] text-white md:text-sm px-4 py-2 leading-none rounded hover:border-transparent hover:text-teal-500 hover:bg-white"
            >
              GALLERY
            </span>
          </Link>
          <Link to="/event">
            <span
              href="#responsive-header"
              className="block text-[16px] mt-4 lg:inline-block lg:mt-0 p-[13px] text-white md:text-sm px-4 py-2 mr-4 leading-none rounded hover:border-transparent hover:text-teal-500 hover:bg-white"
            >
              EVENT
            </span>
          </Link>
          <Link to="/support">
            <span
              href="#responsive-header"
              className="block text-[16px] mt-4 lg:inline-block lg:mt-0 text-white p-[13px] md:text-sm px-4 py-2 leading-none rounded hover:border-transparent hover:text-teal-500 hover:bg-white"
            >
              SUPPORT
            </span>
          </Link>
          <Link
            to="/contact"
            className="block bg-[#f1c40f] text-[16px] mt-4 lg:inline-block lg:mt-0 text-white p-[13px] md:text-sm px-4 py-2 leading-none rounded hover:border-transparent hover:text-teal-500 hover:bg-white"
          >
            CONTACT US
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default NavToggle;