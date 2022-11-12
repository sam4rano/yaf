// import { Link } from "react-router-dom";
// import React, { useState, useEffect, useRef } from "react";
// import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from "react-icons/ai";

// const featuredPics = [
//   "/images/img_1.jpg",
//   "/images/img_2.jpg",
//   "/images/img_3.jpg",
//   "/images/img_4.jpg",
// ];

// let count = 0;
// let slideInterval;

// export default function HeroSection() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const slideRef = useRef();

//   const removeAnimation = () => {
//     slideRef.current.classList.remove("fade-anim");
//   };

//   useEffect(() => {
//     slideRef.current.addEventListener("animationend", removeAnimation);
//     slideRef.current.addEventListener("mouseenter", pauseSlider);
//     slideRef.current.addEventListener("mouseleave", startSlider);

//     startSlider();
//     return () => {
//       pauseSlider();
//     };
//     // eslint-disable-next-line
//   }, []);

//   const startSlider = () => {
//     slideInterval = setInterval(() => {
//       handleOnNextClick();
//     }, 3000);
//   };

//   const pauseSlider = () => {
//     clearInterval(slideInterval);
//   };

//   const handleOnNextClick = () => {
//     count = (count + 1) % featuredPics.length;
//     setCurrentIndex(count);
//     slideRef.current.classList.add("fade-anim");
//   };
//   const handleOnPrevClick = () => {
//     const picsLength = featuredPics.length;
//     count = (currentIndex + picsLength - 1) % picsLength;
//     setCurrentIndex(count);
//     slideRef.current.classList.add("fade-anim");
//   };

//   return (
//     <div ref={slideRef} className="w-full relative">
//       <div className="relative">
//         <img
//           src={featuredPics[currentIndex]}
//           alt=""
//           className="w-full max-h-[400px]"
//         />
//         <Link
//           to="/about"
//           className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
//         >
//           <button className="border-white hover:border-transparent hover:text-teal-500 hover:bg-white absolute top-[330px] right-[650px] bg-teal-500 p-[12px] text-white rounded-md">
//             JOIN US
//           </button>
//         </Link>
//       </div>

//       <div className="absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center">
//         <button
//           className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
//           onClick={handleOnPrevClick}
//         >
//           <AiOutlineVerticalRight size={30} />
//         </button>
//         <button
//           className="bg-black text-white rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
//           onClick={handleOnNextClick}
//         >
//           <AiOutlineVerticalLeft size={30} />
//         </button>
//       </div>
//     </div>
//   );
// }

import React from 'react'
import imgOne from '../images/Happy.jpeg';
import {Link} from "react-router-dom"

const HeroSection = () => {
  return (
    <div
      className="h-full hover:bg-gray-100"
      style={{
        backgroundImage: `url('${imgOne}')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "450px",
        width: "100%",
      }}
    >
      <div className="absolute top-[12rem] text-center border-0 inline-block bg-[#f1c40f] w-[30%] left-md text-sm px-4 py-2 leading-none rounded text-white border-white hover:text-teal-500">
        <h1 className="text-white  text-xl p-md">
          Nurturing a confident and Capable youth to become leaders,
          contributors, collaborators & impact driven
        </h1>
        <h1 className="text-white  text-xl p-md">
          Join the train as a contributor & partaker
        </h1>
        <Link
          to="/contact"
          className="block mb-md mt-4 lg:inline-block lg:mt-0 p-[10px]  text-white text-sm px-4 py-2 leading-none rounded bg-teal-500 hover:text-teal-500 hover:bg-white"
        >
          <span className="font-bold text-xl tracking-tight p-md">JOIN US</span>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection