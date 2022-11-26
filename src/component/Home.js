import React from 'react'
import HeroSection from './HeroSection';
import WhoWeAre from './WhoWeAre';
import WhatDefine from './WhatDefine';
import Footer from './Footer';
import WhatWeDo from './WhatWeDo';
import Testimonial from "./Testimonial";
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
      <Testimonial />
      <Footer />
    </>
  );
}

export default Home