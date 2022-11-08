import React from 'react'
import HeroSection from './HeroSection';
import Card from './Card';
import WhatDefine from './WhatDefine';
import Footer from './Footer';
import WhatWeDo from './WhatWeDo';

const Home = () => {
  return (
    <>
      <HeroSection />
      <br />
      <Card />
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