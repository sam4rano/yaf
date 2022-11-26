// import React, { useState } from 'react';
// import people from './Data';
// import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';


// const Testimonial = () => {
//   const [index, setIndex] = useState(0);
//   const { name, job, image, text } = people[index];
//   const checkNumber = (number) => {
//     if (number > people.length - 1) {
//       return 0;
//     }
//     if (number < 0) {
//       return people.length - 1;
//     }
//     return number;
//   };
//   const nextPerson = () => {
//     setIndex((index) => {
//       let newIndex = index + 1;
//       return checkNumber(newIndex);
//     });
//   };
//   const prevPerson = () => {
//     setIndex((index) => {
//       let newIndex = index - 1;
//       return checkNumber(newIndex);
//     });
//   };
//   const randomPerson = () => {
//     let randomNumber = Math.floor(Math.random() * people.length);
//     if (randomNumber === index) {
//       randomNumber = index + 1;
//     }
//     setIndex(checkNumber(randomNumber));
//   };

//   return (
//     <article className='review bg-white py-[1.5rem] shadow-md transition-all text-center'>
//       <div className='img-container relative w-[150px] h-[150px] border-[50%] m-auto mb-[1.5rem]'>
//         <img src={image} alt={name} className='person-img w-full block h-full object-cover border-[50%] relative' />
//         <span className='quote-icon absolute top-[0] left-[0] w-[2.5rem] h-[2.5rem] grid place-items-center'>
//           <FaQuoteRight />
//         </span>
//       </div>
//       <h4 className='author'>{name}</h4>
//       <p className='job'>{job}</p>
//       <p className='info'>{text}</p>
//       <div className='button-container'>
//         <button className='prev-btn' onClick={prevPerson}>
//           <FaChevronLeft />
//         </button>
//         <button className='next-btn' onClick={nextPerson}>
//           <FaChevronRight />
//         </button>
//       </div>
//       <button className='random-btn' onClick={randomPerson}>
//         surprise me
//       </button>
//     </article>
//   );
// };

// export default Testimonial;

// import React, { useState, useEffect } from "react";
// import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
// import People from "./People";
// import data from "./data";
// const Testimonial = ()=> {
//   const [people, setPeople] = useState(data);
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const lastIndex = people.length - 1;
//     if (index < 0) {
//       setIndex(lastIndex);
//     }
//     if (index > lastIndex) {
//       setIndex(0);
//     }
//   }, [index, people]);

//   useEffect(() => {
//     let slider = setInterval(() => {
//       setIndex(index + 1);
//     }, 3000);
//     return () => clearInterval(slider);
//   }, [index]);

//   return (
//     <section className="section w-[90vw] m-auto-[5rem] min-w-full-[1170px]">
//       <div className="title text-center mb-[2rem]">
//         <h2 className="flex align-middle justify-center font-semibold">reviews</h2>
//         <div className="underline w-[6rem] h-[0.25rem] bg-slate-600"></div>
//       </div>
//       <div className="section-center">
//         {people.map((person, personIndex) => {
//           return (
//             <People
//               key={person.id}
//               {...person}
//               personIndex={personIndex}
//               index={index}
//             />
//           );
//         })}
//         <button className="prev" onClick={() => setIndex(index - 1)}>
//           <FiChevronLeft />
//         </button>
//         <button className="next" onClick={() => setIndex(index + 1)}>
//           <FiChevronRight />
//         </button>
//       </div>
//     </section>
//   );
// }

// export default Testimonial;
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {useState} from 'react'


const Testimonial = () => {

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
  return (
    <Slider {...settings}>
      <section className="flex flex-col justify-center align-middle p-md overflow-hidden">
        <h1 className="text-center p-md">Testimonial</h1>
        <div className="flex flex-row justify-between p-md ">
          <div className="">
            <img
              src="https://res.cloudinary.com/sam4rano/image/upload/v1624884324/Sam300LPics/IMG_20210428_161909_l9g8lg.jpg"
              alt=""
              className="w-[100px] h-[100px] rounded-2xl"
            />
            <h4>Joe louis</h4>
            <p className="text-[12px]">
              Id adipisicing qui esse sunt ullamco voluptate voluptate cupidatat
              aliquip occaecat. Cupidatat ad anim culpa et duis ex duis est.
            </p>
          </div>
          <div className="">
            <img
              src="https://res.cloudinary.com/sam4rano/image/upload/v1624884333/Sam300LPics/IMG_20210427_171241_yqmbpv.jpg"
              alt=""
              className="w-[100px] h-[100px] rounded-2xl "
            />
            <h4>Mark Frazer</h4>
            <p className="text-[12px]">
              Id adipisicing qui esse sunt ullamco voluptate voluptate cupidatat
              aliquip occaecat. Cupidatat ad anim culpa et duis ex duis est.
            </p>
          </div>
          <div className="flex flex-col justify-center align-middle">
            <img
              src="https://res.cloudinary.com/sam4rano/image/upload/v1624884339/Sam300LPics/IMG_20210428_161904_o1zcl2.jpg"
              alt=""
              className="w-[100px] h-[100px] rounded-2xl"
            />
            <h4>Sam Oye</h4>
            <p className="text-[12px]">
              Id adipisicing qui esse sunt ullamco voluptate voluptate cupidatat
              aliquip occaecat. Cupidatat ad anim culpa et duis ex duis est.
            </p>
          </div>
          <div className="">
            <img
              src="https://res.cloudinary.com/sam4rano/image/upload/v1624884318/Sam300LPics/IMG_20210428_161758_row7y0.jpg"
              alt=""
              className="w-[100px] h-[100px] rounded-2xl"
            />
            <h4>Gbenga Oye</h4>
            <p className="text-[12px]">
              Id adipisicing qui esse sunt ullamco voluptate voluptate cupidatat
              aliquip occaecat. Cupidatat ad anim culpa et duis ex duis est.
            </p>
          </div>
        </div>
      </section>
    </Slider>
  );
}

export default Testimonial