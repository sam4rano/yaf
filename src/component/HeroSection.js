import React, { useState } from "react";
import imgOne from "../images/img_1.jpg";


const imgContainer = [
  {
    url: "img_1",
    title: "church",
    caption: "First Slide",
  },
  {
    url: "img_2",
    title: "church",
    caption: "Second Slide",
  },
  {
    url: "img_3",
    title: "church",
    caption: "Third Slide",
  },
  {
    url: "img_4",
    title: "church",
    caption: "Third Slide",
  },
];

const HeroSection = () => {
 
  return (
    <>
      {imgContainer.map((item, index) => (
        <div key={index} className="col-sm-12">
          <img
            src={require("../images/" +
              item.url +
              ".jpg")}
            className="img-fluid"
            alt={item.title}
          />
          <h1>{item.caption}</h1>
        </div>
      ))}
      {/* <div className="w-full select-none relative">
        <img src={imgOne} alt="img_2" />
        <img src={imgContainer.url} />
        <div className="absolute w-full top-1/2 aspect-w-16 aspect-h-9 transform -translate-y-1/2 px-3 flex justify-between items-center">
          <button >Previous</button>
          <button>Next</button>
        </div>
      </div> */}
    </>
  );
};

export default HeroSection;
