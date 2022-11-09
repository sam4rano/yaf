import React from 'react'
import HeroSection from './HeroSection';
import WhoWeAre from './WhoWeAre';
import WhatDefine from './WhatDefine';
import Footer from './Footer';
import WhatWeDo from './WhatWeDo';

const Home = () => {
  return (
    <>
      <HeroSection />
      <br />
      <WhoWeAre />
      <br />
      <WhatDefine />
      <br />
      <WhatWeDo />
      <br />
      <Footer />
    </>
  );
}

export default Home