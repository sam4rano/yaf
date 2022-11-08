import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (

    
    <nav className="navbar">
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-md">
        <Link to="/" className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">YAF</span>
        </Link>
        <Link
          to="/about"
          className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
        >
          About
        </Link>
        <Link to="/gallery">
          <span
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Gallery
          </span>
        </Link>
        <Link to="/event">
          <span
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Event
          </span>
        </Link>
        <Link to="/support">
          <span
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
          >
            Support
          </span>
        </Link>
        <Link
          to="/contact"
          className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
        >
            <span
              href="#resp"
              className="inline-block p-[13px] text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            >
              Contact
            </span>
        </Link>
      </nav>

      {/* <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/gallery">Gallery</Link>
      <Link to="/event">Event</Link>
      <Link to="/support">Support</Link>
      <Link to="/contact">Contact Us</Link> */}
    </nav>
  );
};

export default Navbar;
