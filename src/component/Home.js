import React from 'react'
import HeroSection from './HeroSection';
import WhoWeAre from './WhoWeAre';
import WhatDefine from './WhatDefine';
import Footer from './Footer';
import WhatWeDo from './WhatWeDo';
import Navbar from './Navbar';
import NavToggle from "./NavToggle";


const Home = () => {
  return (
    <>
      <NavToggle />
      <HeroSection />
      <br />
      <WhoWeAre />
      <WhatDefine />
      <WhatWeDo />
      <Footer />
    </>
  );
}

export default Home