// // import React, { useState } from "react";
// // import { Link } from "react-router-dom";
// // import { FaBars, FaTimes } from "react-icons/fa";

// // import { Transition } from "@headlessui/react";

// // const Navbar = () => {
// //   const [isOpen, setIsOpen] = useState(false);

// //   return (
// //     <div>
// //       <nav className="bg-teal-500 w-full p-lg ">
// //         <div className="w-">
// //           <Link
// //             to="/"
// //             className="w-1/2 flex items-center flex-shrink-0 text-white mr-6"
// //           >
// //             <span className="font-bold text-xl tracking-tight ">YAF</span>
// //           </Link>
// //           <div className="w-1/2">
// //             <Link
// //               to="/about"
// //               className="block mt-4 lg:inline-block lg:mt-0 p-[13px] text-white text-sm px-4 py-2 leading-none rounded hover:text-teal-500 hover:bg-white"
// //             >
// //               About
// //             </Link>
// //             <Link to="/gallery">
// //               <span
// //                 href="#responsive-header"
// //                 className="block mt-4 lg:inline-block lg:mt-0 mr-4 p-[13px] text-white text-sm px-4 py-2 leading-none rounded hover:border-transparent hover:text-teal-500 hover:bg-white"
// //               >
// //                 Gallery
// //               </span>
// //             </Link>
// //             <Link to="/event">
// //               <span
// //                 href="#responsive-header"
// //                 className="block mt-4 lg:inline-block lg:mt-0 p-[13px] text-white text-sm px-4 py-2 mr-4 leading-none rounded hover:border-transparent hover:text-teal-500 hover:bg-white"
// //               >
// //                 Event
// //               </span>
// //             </Link>
// //             <Link to="/support">
// //               <span
// //                 href="#responsive-header"
// //                 className="block mt-4 lg:inline-block lg:mt-0 text-white p-[13px] text-sm px-4 py-2 leading-none rounded hover:border-transparent hover:text-teal-500 hover:bg-white"
// //               >
// //                 Support
// //               </span>
// //             </Link>
// //             <div>
// //               <Link
// //                 to="/contact"
// //                 className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white leading-none"
// //               >
// //                 <span
// //                   href="#resp"
// //                   className="inline-block p-[13px] text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
// //                 >
// //                   Contact Us
// //                 </span>
// //               </Link>
// //             </div>
// //           </div>
// //           <div className="flex items-center justify-between h-16">
// //             <div className="-mr-2 flex md:hidden">
// //               <button
// //                 onClick={() => setIsOpen(!isOpen)}
// //                 type="button"
// //                 className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
// //                 aria-controls="mobile-menu"
// //                 aria-expanded="false"
// //               >
// //                 <span className="sr-only">Open main menu</span>
// //                 {!isOpen ? (
// //                   <svg
// //                     className="block h-6 w-6"
// //                     xmlns="http://www.w3.org/2000/svg"
// //                     fill="none"
// //                     viewBox="0 0 24 24"
// //                     stroke="currentColor"
// //                     aria-hidden="true"
// //                   >
// //                     <path
// //                       strokeLinecap="round"
// //                       strokeLinejoin="round"
// //                       strokeWidth="2"
// //                       d="M4 6h16M4 12h16M4 18h16"
// //                     />
// //                   </svg>
// //                 ) : (
// //                   <svg
// //                     className="block h-6 w-6"
// //                     xmlns="http://www.w3.org/2000/svg"
// //                     fill="none"
// //                     viewBox="0 0 24 24"
// //                     stroke="currentColor"
// //                     aria-hidden="true"
// //                   >
// //                     <path
// //                       strokeLinecap="round"
// //                       strokeLinejoin="round"
// //                       strokeWidth="2"
// //                       d="M6 18L18 6M6 6l12 12"
// //                     />
// //                   </svg>
// //                 )}
// //               </button>
// //             </div>
// //           </div>
// //         </div>

// //         <Transition
// //           show={isOpen}
// //           enter="transition ease-out duration-100 transform"
// //           enterFrom="opacity-0 scale-95"
// //           enterTo="opacity-100 scale-100"
// //           leave="transition ease-in duration-75 transform"
// //           leaveFrom="opacity-100 scale-100"
// //           leaveTo="opacity-0 scale-95"
// //         >
// //           {(ref) => (
// //             <div className="md:hidden" id="mobile-menu">
// //               <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
// //                 <Link
// //                   to="/about"
// //                   className="block mt-4 lg:inline-block lg:mt-0 p-[13px] text-white text-sm px-4 py-2 leading-none rounded hover:text-teal-500 hover:bg-white"
// //                 >
// //                   About
// //                 </Link>
// //                 <Link to="/gallery">
// //                   <span
// //                     href="#responsive-header"
// //                     className="block mt-4 lg:inline-block lg:mt-0 mr-4 p-[13px] text-white text-sm px-4 py-2 leading-none rounded hover:border-transparent hover:text-teal-500 hover:bg-white"
// //                   >
// //                     Gallery
// //                   </span>
// //                 </Link>
// //                 <Link to="/event">
// //                   <span
// //                     href="#responsive-header"
// //                     className="block mt-4 lg:inline-block lg:mt-0 p-[13px] text-white text-sm px-4 py-2 mr-4 leading-none rounded hover:border-transparent hover:text-teal-500 hover:bg-white"
// //                   >
// //                     Event
// //                   </span>
// //                 </Link>
// //                 <Link to="/support">
// //                   <span
// //                     href="#responsive-header"
// //                     className="block mt-4 lg:inline-block lg:mt-0 text-white p-[13px] text-sm px-4 py-2 leading-none rounded hover:border-transparent hover:text-teal-500 hover:bg-white"
// //                   >
// //                     Support
// //                   </span>
// //                 </Link>
// //                 <div>
// //                   <Link
// //                     to="/contact"
// //                     className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white leading-none"
// //                   >
// //                     <span
// //                       href="#resp"
// //                       className="inline-block p-[13px] text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
// //                     >
// //                       Contact Us
// //                     </span>
// //                   </Link>
// //                 </div>
// //               </div>
// //             </div>
// //           )}
// //         </Transition>
// //       </nav>
// //     </div>
// //   );
// // };

// // export default Navbar;

import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Modal from './Modal'

import { Transition } from "@headlessui/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef();

  return (
    <div className="bg-teal-500 w-full flex flex-row justify-between align-middle p-sm">
      <Link to="/" className="flex flex-shrink-0 text-white">
        <span className="font-bold text-xl tracking-tight ">YAF</span>
      </Link>
      <nav className="flex flex-row justify-evenly flex-wrap sm:text-[14px] sm:justify-around">
        <div className="-mr-2 p-md 2xl:hidden xl:hidden lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {!isOpen ? (
              <FaBars style={{ color: "white" }} className="#" />
            ) : (
              <FaTimes style={{ color: "white" }} className="#" />
            )}
          </button>
        </div>
        <div className=" flex flex-row justify-between">
          <div className="flex flex-row justify-between gap-md w-1/3 md:hidden sm:hidden pl-sm">
            <Link
              to="/about"
              className="block mt-4 lg:inline-block lg:mt-0 p-[13px] text-white text-sm px-4 py-2 leading-none rounded hover:text-teal-500 hover:bg-white"
            >
              About
            </Link>
            <Link to="/gallery">
              <span
                href="#responsive-header"
                className="block mt-4 lg:inline-block lg:mt-0 mr-4 p-[13px] text-white text-sm px-4 py-2 leading-none rounded hover:border-transparent hover:text-teal-500 hover:bg-white"
              >
                Gallery
              </span>
            </Link>
            <Link to="/event">
              <span
                href="#responsive-header"
                className="block mt-4 lg:inline-block lg:mt-0 p-[13px] text-white text-sm px-4 py-2 mr-4 leading-none rounded hover:border-transparent hover:text-teal-500 hover:bg-white"
              >
                Event
              </span>
            </Link>
            <Link to="/support">
              <span
                href="#responsive-header"
                className="block mt-4 lg:inline-block lg:mt-0 text-white p-[13px] text-sm px-4 py-2 leading-none rounded hover:border-transparent hover:text-teal-500 hover:bg-white"
              >
                Support
              </span>
            </Link>
          </div>
          <div className="#">
            <Link
              to="/contact"
              className=" lg:inline-block lg:mt-0 text-white hover:text-white leading-none"
            >
              <Modal />
              {/* <span
                href="#resp"
                className="inline-block p-[13px] text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
              >
                Contact Us
              </span> */}
            </Link>
          </div>
        </div>
      </nav>
      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div ref={ref} className="md:hidden" id="mobile-menu">
          <div className=" flex flex-row justify-between gap-md w-1/3 md:hidden sm:hidden pl-sm">
            <Link
              to="/about"
              className="block mt-4 lg:inline-block lg:mt-0 p-[13px] text-white text-sm px-4 py-2 leading-none rounded hover:text-teal-500 hover:bg-white"
            >
              About
            </Link>
            <Link to="/gallery">
              <span
                href="#responsive-header"
                className="block mt-4 lg:inline-block lg:mt-0 mr-4 p-[13px] text-white text-sm px-4 py-2 leading-none rounded hover:border-transparent hover:text-teal-500 hover:bg-white"
              >
                Gallery
              </span>
            </Link>
            <Link to="/event">
              <span
                href="#responsive-header"
                className="block mt-4 lg:inline-block lg:mt-0 p-[13px] text-white text-sm px-4 py-2 mr-4 leading-none rounded hover:border-transparent hover:text-teal-500 hover:bg-white"
              >
                Event
              </span>
            </Link>
            <Link to="/support">
              <span
                href="#responsive-header"
                className="block mt-4 lg:inline-block lg:mt-0 text-white p-[13px] text-sm px-4 py-2 leading-none rounded hover:border-transparent hover:text-teal-500 hover:bg-white"
              >
                Support
              </span>
            </Link>
          </div>
        </div>
      </Transition>
    </div>
  );
};

export default Navbar;


// import React from "react";

// export default function Navbar() {
//   const [showModal, setShowModal] = React.useState(false);
//   return (
//     <>
//       <button
//         className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
//         type="button"
//         onClick={() => setShowModal(true)}
//       >
//         Open regular modal
//       </button>
//       {showModal ? (
//         <>
//           <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
//             <div className="relative w-auto my-6 mx-auto max-w-3xl">
//               {/*content*/}
//               <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
//                 {/*header*/}
//                 <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
//                   <h3 className="text-3xl font-semibold">Modal Title</h3>
//                   <button
//                     className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
//                     onClick={() => setShowModal(false)}
//                   >
//                     <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
//                       ×
//                     </span>
//                   </button>
//                 </div>
//                 {/*body*/}
//                 <div className="relative p-6 flex-auto">
//                   <p className="my-4 text-slate-500 text-lg leading-relaxed">
//                     I always felt like I could do anything. That’s the main
//                     thing people are controlled by! Thoughts- their perception
//                     of themselves! They're slowed down by their perception of
//                     themselves. If you're taught you can’t do anything, you
//                     won’t do anything. I was taught I could do everything.
//                   </p>
//                 </div>
//                 {/*footer*/}
//                 <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
//                   <button
//                     className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
//                     type="button"
//                     onClick={() => setShowModal(false)}
//                   >
//                     Close
//                   </button>
//                   <button
//                     className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
//                     type="button"
//                     onClick={() => setShowModal(false)}
//                   >
//                     Save Changes
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
//         </>
//       ) : null}
//     </>
//   );
// }
