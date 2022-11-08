import React from 'react'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-teal-500 flex flex-row max-h-[500px] justify-around">
      <div className="text-xl font-bold mb-2 p-md">
        <Link to="/" className="text-white-900 text-white">
          YAF
        </Link>
      </div>
      <div className="flex flex-col">
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
      <div className="flex flex-col">
        <Link to="/event" className="text-white-500 text-md p-md text-white">
          Event
        </Link>
        <Link to="/" className="text-white-500 text-md p-md text-white">
          Community
        </Link>
        <Link to="/" className="text-white-500 text-md p-md text-white">
          Training
        </Link>
        <Link to="/" className="text-white-500 text-md p-md text-white">
          Workshop
        </Link>
      </div>
      <div className="flex flex-col">
        <Link to="/event" className="text-white-500 text-md p-md text-white">
          Event
        </Link>
        <Link to="/" className="text-white-500 text-md p-md text-white">
          Community
        </Link>
        <Link to="/" className="text-white-500 text-md p-md text-white">
          Training
        </Link>
        <Link to="/" className="text-white-500 text-md p-md text-white">
          Workshop
        </Link>
      </div>
      <div className="flex flex-col">
        <p className="text-white-500 text-md p-md text-white">
          Youth Alive Initiative is a non-profit inter-denominational initiative
          of Joel Ayodele Adelani, our core value are nurturing and building
          capacity for a purpose driven young generation.
        </p>
      </div>
    </div>
  );
}

export default Footer