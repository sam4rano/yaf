
// import { FaBars, FaTimes } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import React, { useState } from "react";


// const NavToggle = () => {

//   let [open, setOpen] = useState(false);

//   return (
//     <>
//       <div className="w-full fixed flex bg-teal-500 p-md">
//         <div className="flex flex-row justify-evenly bg-teal-500">
//           <Link to="/" className="text-white">
//             <span className="font-bold text-xl ">YAF</span>
//           </Link>
//           <div
//             onClick={() => setOpen(!open)}
//             className="text-xl text-white cursor-pointer md:hidden"
//           >
//             <ion-icon name={open ? "close" : "menu"}></ion-icon>
//           </div>
          // <ul
          //   className={`flex flex-row sm:flex-col justify-between gap-md pl-sm ${
          //     open ? "top-20" : "top-[490px]"
          //   }`}
          // >
          //   <Link
          //     to="/about"
          //     className="block text-[16px] mt-4 lg:inline-block lg:mt-0 p-[13px] text-white md:text-sm px-4 py-2 leading-none rounded hover:text-teal-500 hover:bg-white"
          //   >
          //     ABOUT
          //   </Link>
          //   <Link to="/gallery">
          //     <span
          //       href="#responsive-header"
          //       className="block text-[16px] mt-4 lg:inline-block lg:mt-0 mr-4 p-[13px] text-white md:text-sm px-4 py-2 leading-none rounded hover:border-transparent hover:text-teal-500 hover:bg-white"
          //     >
          //       GALLERY
          //     </span>
          //   </Link>
          //   <Link to="/event">
          //     <span
          //       href="#responsive-header"
          //       className="block text-[16px] mt-4 lg:inline-block lg:mt-0 p-[13px] text-white md:text-sm px-4 py-2 mr-4 leading-none rounded hover:border-transparent hover:text-teal-500 hover:bg-white"
          //     >
          //       EVENT
          //     </span>
          //   </Link>
          //   <Link to="/support">
          //     <span
          //       href="#responsive-header"
          //       className="block text-[16px] mt-4 lg:inline-block lg:mt-0 text-white p-[13px] md:text-sm px-4 py-2 leading-none rounded hover:border-transparent hover:text-teal-500 hover:bg-white"
          //     >
          //       SUPPORT
          //     </span>
          //   </Link>
          //   <Link
          //     to="/contact"
          //     className="block bg-[#f1c40f] text-[16px] mt-4 lg:inline-block lg:mt-0 text-white p-[13px] md:text-sm px-4 py-2 leading-none rounded hover:border-transparent hover:text-teal-500 hover:bg-white"
          //   >
          //     CONTACT US
          //   </Link>
          // </ul>
//         </div>
//       </div>
//     </>
//   );
// }

// export default NavToggle


import React, { useState } from "react";

import { Link } from "react-router-dom";

const NavToggle = () => {

  let [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-teal-500 py-4 md:px-10 px-7">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-white"
        >
          <span className="text-3xl text-white mr-1 pt-2">
            <ion-icon name="logo-ionic"></ion-icon>
          </span>
          YAF
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute text-white right-8 top-6 pb-md cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-teal-500 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
            
          <Link
            to="/about"
            className="block text-[16px] mt-4 lg:inline-block lg:mt-0 p-[13px] text-white md:text-sm px-4 py-2 leading-none rounded hover:text-teal-500 hover:bg-white"
          >
            ABOUT
          </Link>
          <Link to="/gallery">
            <span
              href="#responsive-header"
              className="block text-[16px] mt-4 lg:inline-block lg:mt-0 mr-4 p-[13px] text-white md:text-sm px-4 py-2 leading-none rounded hover:border-transparent hover:text-teal-500 hover:bg-white"
            >
              GALLERY
            </span>
          </Link>
          <Link to="/event">
            <span
              href="#responsive-header"
              className="block text-[16px] mt-4 lg:inline-block lg:mt-0 p-[13px] text-white md:text-sm px-4 py-2 mr-4 leading-none rounded hover:border-transparent hover:text-teal-500 hover:bg-white"
            >
              EVENT
            </span>
          </Link>
          <Link to="/support">
            <span
              href="#responsive-header"
              className="block text-[16px] mt-4 lg:inline-block lg:mt-0 text-white p-[13px] md:text-sm px-4 py-2 leading-none rounded hover:border-transparent hover:text-teal-500 hover:bg-white"
            >
              SUPPORT
            </span>
          </Link>
          <Link
            to="/contact"
            className="block bg-[#f1c40f] text-[16px] mt-4 lg:inline-block lg:mt-0 text-white p-[13px] md:text-sm px-4 py-2 leading-none rounded hover:border-transparent hover:text-teal-500 hover:bg-white"
          >
            CONTACT US
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default NavToggle;