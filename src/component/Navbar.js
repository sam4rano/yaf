import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [open, isOpen] = useState(false);

  

  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-md sm:text-[14px] sm:justify-around">
      <Link
        to="/"
        className="w-1/2 flex items-center flex-shrink-0 text-white mr-6"
      >
        <span className="font-bold text-xl tracking-tight ">YAF</span>
      </Link>

      <FaBars
        onClick={() => isOpen(!open)}
        style={{ color: "white" }}
        className="lg:hidden"
      />
      <div className="flex flex-row justify-between gap-md w-1/3 md:hidden sm:hidden">
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
      <Link
        to="/contact"
        className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white leading-none"
      >
        <span
          href="#resp"
          className="inline-block p-[13px] text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
        >
          Contact Us
        </span>
      </Link>
    </nav>
  );
};

export default Navbar;


// import React, { useState } from "react";
// import { Transition } from "@headlessui/react";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <div>
//       <nav className="bg-gray-800">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16">
//             <div className="flex items-center">
//               <div className="flex-shrink-0">
//                 <img
//                   className="h-8 w-8"
//                   src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
//                   alt="Workflow"
//                 />
//               </div>
//               <div className="hidden md:block">
//                 <div className="ml-10 flex items-baseline space-x-4">
//                   <a
//                     href="#"
//                     className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
//                   >
//                     Dashboard
//                   </a>

//                   <a
//                     href="#"
//                     className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                   >
//                     Team
//                   </a>

//                   <a
//                     href="#"
//                     className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                   >
//                     Projects
//                   </a>

//                   <a
//                     href="#"
//                     className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                   >
//                     Calendar
//                   </a>

//                   <a
//                     href="#"
//                     className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                   >
//                     Reports
//                   </a>
//                 </div>
//               </div>
//             </div>
//             <div className="-mr-2 flex md:hidden">
//               <button
//                 onClick={() => setIsOpen(!isOpen)}
//                 type="button"
//                 className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
//                 aria-controls="mobile-menu"
//                 aria-expanded="false"
//               >
//                 <span className="sr-only">Open main menu</span>
//                 {!isOpen ? (
//                   <svg
//                     className="block h-6 w-6"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     aria-hidden="true"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M4 6h16M4 12h16M4 18h16"
//                     />
//                   </svg>
//                 ) : (
//                   <svg
//                     className="block h-6 w-6"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     aria-hidden="true"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M6 18L18 6M6 6l12 12"
//                     />
//                   </svg>
//                 )}
//               </button>
//             </div>
//           </div>
//         </div>

//         <Transition
//           show={isOpen}
//           enter="transition ease-out duration-100 transform"
//           enterFrom="opacity-0 scale-95"
//           enterTo="opacity-100 scale-100"
//           leave="transition ease-in duration-75 transform"
//           leaveFrom="opacity-100 scale-100"
//           leaveTo="opacity-0 scale-95"
//         >
//           {(ref) => (
//             <div className="md:hidden" id="mobile-menu">
//               <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//                 <a
//                   href="#"
//                   className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
//                 >
//                   Dashboard
//                 </a>

//                 <a
//                   href="#"
//                   className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//                 >
//                   Team
//                 </a>

//                 <a
//                   href="#"
//                   className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//                 >
//                   Projects
//                 </a>

//                 <a
//                   href="#"
//                   className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//                 >
//                   Calendar
//                 </a>

//                 <a
//                   href="#"
//                   className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//                 >
//                   Reports
//                 </a>
//               </div>
//             </div>
//           )}
//         </Transition>
//       </nav>

//       <header className="bg-white shadow">
//         <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
//           <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
//         </div>
//       </header>
//       <main>
//         <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
//           {/* <!-- Replace with your content --> */}
//           <div className="px-4 py-6 sm:px-0">
//             <div className="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
//           </div>
//           {/* <!-- /End replace --> */}
//         </div>
//       </main>
//     </div>
//   );
// }

// export default Navbar;