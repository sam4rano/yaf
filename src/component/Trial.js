// import React, { CSSProperties } from "react";
// import { action } from "@storybook/addon-actions";
// import { Carousel } from "../src/index";

// import { withKnobs, boolean, number, text } from "@storybook/addon-knobs";

// // carousel styles
// import "../src/main.scss";
// import "../src/carousel.scss";
// import "../src/examples/presentation/presentation.scss";

// const createCarouselItemImage = (index, options = {}) => (
//   <div key={index}>
//     <img src={`/assets/${index}.jpeg`} />
//     <p className="legend">Legend {index}</p>
//   </div>
// );

// const baseChildren = <div>{[1, 2, 3, 4, 5].map(createCarouselItemImage)}</div>;

// const tooglesGroupId = "Toggles";
// const valuesGroupId = "Values";
// const mainGroupId = "Main";

// const getConfigurableProps = () => ({
//   showArrows: boolean("showArrows", true, tooglesGroupId),
//   showStatus: boolean("showStatus", true, tooglesGroupId),
//   showIndicators: boolean("showIndicators", true, tooglesGroupId),
//   infiniteLoop: boolean("infiniteLoop", true, tooglesGroupId),
//   showThumbs: boolean("showThumbs", true, tooglesGroupId),
//   useKeyboardArrows: boolean("useKeyboardArrows", true, tooglesGroupId),
//   autoPlay: boolean("autoPlay", true, tooglesGroupId),
//   stopOnHover: boolean("stopOnHover", true, tooglesGroupId),
//   swipeable: boolean("swipeable", true, tooglesGroupId),
//   dynamicHeight: boolean("dynamicHeight", true, tooglesGroupId),
//   emulateTouch: boolean("emulateTouch", true, tooglesGroupId),
//   autoFocus: boolean("autoFocus", false, tooglesGroupId),
//   thumbWidth: number("thumbWidth", 100, {}, valuesGroupId),
//   selectedItem: number("selectedItem", 0, {}, valuesGroupId),
//   interval: number("interval", 2000, {}, valuesGroupId),
//   transitionTime: number("transitionTime", 500, {}, valuesGroupId),
//   swipeScrollTolerance: number("swipeScrollTolerance", 5, {}, valuesGroupId),
//   ariaLabel: text("ariaLabel", undefined),
// });

// export default {
//   title: "01 - Basic",
//   decorators: [withKnobs],
//   component: Carousel,
// };

// export const base = () => (
//   <Carousel {...getConfigurableProps()}>{baseChildren.props.children}</Carousel>
// );

// export const vertical = () => (
//   <Carousel axis="vertical" {...getConfigurableProps()}>
//     {baseChildren.props.children}
//   </Carousel>
// );

// export const centerMode = () => (
//   <Carousel
//     infiniteLoop
//     centerMode
//     centerSlidePercentage={number("centerSlidePercentage", 80, {}, mainGroupId)}
//     {...getConfigurableProps()}
//   >
//     {baseChildren.props.children}
//   </Carousel>
// );

// export const handlers = () => (
//   <Carousel
//     onClickThumb={action("click thumb")}
//     onClickItem={action("click item")}
//     onChange={action("change")}
//   >
//     {baseChildren.props.children}
//   </Carousel>
// );

// export const withCustomStatusArrowsAndIndicators = () => {
//   const arrowStyles: CSSProperties = {
//     position: "absolute",
//     zIndex: 2,
//     top: "calc(50% - 15px)",
//     width: 30,
//     height: 30,
//     cursor: "pointer",
//   };

//   const indicatorStyles: CSSProperties = {
//     background: "#fff",
//     width: 8,
//     height: 8,
//     display: "inline-block",
//     margin: "0 8px",
//   };

//   return (
//     <Carousel
//       statusFormatter={(current, total) =>
//         `Current slide: ${current} / Total: ${total}`
//       }
//       renderArrowPrev={(onClickHandler, hasPrev, label) =>
//         hasPrev && (
//           <button
//             type="button"
//             onClick={onClickHandler}
//             title={label}
//             style={{ ...arrowStyles, left: 15 }}
//           >
//             -
//           </button>
//         )
//       }
//       renderArrowNext={(onClickHandler, hasNext, label) =>
//         hasNext && (
//           <button
//             type="button"
//             onClick={onClickHandler}
//             title={label}
//             style={{ ...arrowStyles, right: 15 }}
//           >
//             +
//           </button>
//         )
//       }
//       renderIndicator={(onClickHandler, isSelected, index, label) => {
//         if (isSelected) {
//           return (
//             <li
//               style={{ ...indicatorStyles, background: "#000" }}
//               aria-label={`Selected: ${label} ${index + 1}`}
//               title={`Selected: ${label} ${index + 1}`}
//             />
//           );
//         }
//         return (
//           <li
//             style={indicatorStyles}
//             onClick={onClickHandler}
//             onKeyDown={onClickHandler}
//             value={index}
//             key={index}
//             role="button"
//             tabIndex={0}
//             title={`${label} ${index + 1}`}
//             aria-label={`${label} ${index + 1}`}
//           />
//         );
//       }}
//     >
//       {baseChildren.props.children}
//     </Carousel>
//   );
// };

// export const fixedWidth = () => (
//   <Carousel width="700px">{baseChildren.props.children}</Carousel>
// );
// export const noChildren = () => <Carousel />;
// export const noImages = () => (
//   <Carousel>
//     <div key="slide1" style={{ padding: 20, height: 150 }}>
//       Text 01
//     </div>
//     <div key="slide2" style={{ padding: 20, height: 150 }}>
//       Text 02
//     </div>
//   </Carousel>
// );

// export const dynamicHeightImages = () => (
//   <Carousel showArrows={false} dynamicHeight={true}>
//     <div key="slide1">
//       <img src="http://placehold.it/350x150" />
//     </div>
//     <div key="slide2">
//       <img src="http://placehold.it/255x150" />
//     </div>
//     <div key="slide3">
//       <img src="http://placehold.it/295x150" />
//     </div>
//     <div key="slide4">
//       <img src="http://placehold.it/310x150" />
//     </div>
//     <div key="slide5">
//       <img src="http://placehold.it/575x250" />
//     </div>
//     <div key="slide6">
//       <img src="http://placehold.it/450x150" />
//     </div>
//   </Carousel>
// );

// export const fade = () => (
//   <Carousel
//     {...getConfigurableProps()}
//     animationHandler="fade"
//     swipeable={false}
//   >
//     {baseChildren.props.children}
//   </Carousel>
// );





// import React from "react";
// import imgOne from "../images/img_4.svg";

// const Trial = () => {
//   return (
//     <>
//       <div
//         className="h-[400px] pb-[10px] PT-[0] text-center overflow-hidden bg-no-repeat bg-cover"
//         style={{ backgroundImage: `url(${imgOne})` }}
//       >
//         <div
//           className="w-full h-full overflow-hidden bg-fixed"
//           style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
//         >
//           <div className="flex justify-center items-center h-full">
//             <div className="text-white">
//               <h2 className="font-semibold text-4xl mb-4">Heading</h2>
//               <h4 className="font-semibold text-xl mb-6">Subheading</h4>
//               <a
//                 className="inline-block px-7 py-3 mb-1 border-2 border-gray-200 text-gray-200 font-medium text-sm leading-snug uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
//                 href="#!"
//                 role="button"
//                 data-mdb-ripple="true"
//                 data-mdb-ripple-color="light"
//               >
//                 Call to action
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Trial;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { FaBars, FaTimes } from "react-icons/fa";

// const Navbar = () => {
//   const [open, isOpen] = useState(false);

//   return (
//     <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-md sm:text-[14px] sm:justify-around">
//       <Link
//         to="/"
//         className="w-1/2 flex items-center flex-shrink-0 text-white mr-6"
//       >
//         <span className="font-bold text-xl tracking-tight ">YAF</span>
//       </Link>

//       <FaBars
//         onClick={() => isOpen(!open)}
//         style={{ color: "white" }}
//         className="lg:hidden"
//       />
//       <div className="flex flex-row justify-between gap-md w-1/3 md:hidden sm:hidden">
//         <Link
//           to="/about"
//           className="block mt-4 lg:inline-block lg:mt-0 p-[13px] text-white text-sm px-4 py-2 leading-none rounded hover:text-teal-500 hover:bg-white"
//         >
//           About
//         </Link>
//         <Link to="/gallery">
//           <span
//             href="#responsive-header"
//             className="block mt-4 lg:inline-block lg:mt-0 mr-4 p-[13px] text-white text-sm px-4 py-2 leading-none rounded hover:border-transparent hover:text-teal-500 hover:bg-white"
//           >
//             Gallery
//           </span>
//         </Link>
//         <Link to="/event">
//           <span
//             href="#responsive-header"
//             className="block mt-4 lg:inline-block lg:mt-0 p-[13px] text-white text-sm px-4 py-2 mr-4 leading-none rounded hover:border-transparent hover:text-teal-500 hover:bg-white"
//           >
//             Event
//           </span>
//         </Link>
//         <Link to="/support">
//           <span
//             href="#responsive-header"
//             className="block mt-4 lg:inline-block lg:mt-0 text-white p-[13px] text-sm px-4 py-2 leading-none rounded hover:border-transparent hover:text-teal-500 hover:bg-white"
//           >
//             Support
//           </span>
//         </Link>
//       </div>
      // <Link
      //   to="/contact"
      //   className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white leading-none"
      // >
      //   <span
      //     href="#resp"
      //     className="inline-block p-[13px] text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
      //   >
      //     Contact Us
      //   </span>
      // </Link>
//     </nav>
//   );
// };

// export default Navbar;


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