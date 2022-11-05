import React from 'react'
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/gallery">Gallery</Link>
      <Link to="/event">Event</Link>
      <Link to="/support">Support</Link>
      <Link to="/contact">Contact Us</Link>
    </nav>
  );
}

export default Navbar