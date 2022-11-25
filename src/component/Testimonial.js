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

import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import People from "./People";
import data from "./data";
const Testimonial = ()=> {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <section className="section w-[90vw] m-auto-[5rem] min-w-full-[1170px]">
      <div className="title text-center mb-[2rem]">
        <h2 className="flex align-middle justify-center font-semibold">reviews</h2>
        <div className="underline w-[6rem] h-[0.25rem] bg-slate-600"></div>
      </div>
      <div className="section-center">
        {people.map((person, personIndex) => {
          return (
            <People
              key={person.id}
              {...person}
              personIndex={personIndex}
              index={index}
            />
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default Testimonial;