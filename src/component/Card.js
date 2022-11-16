// import React from 'react'
// import imgTwo from "../images/72.svg";

// const Card = () => {
//   return (
//     <div
//       href="#"
//       style={{ backgroundImage: `url(${imgTwo})`, backgroundRepeat:'no-repeat',backgroundAttachment:'fixed', backgroundSize:'cover', display:'flex'}}
//       className="flex flex-col h-[400px] items-center w-full bg-white rounded-lg border shadow-md md:flex-row md:max-w-2xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
//     >
    
//       <div className="flex flex-col justify-center align-middle p-4 absolute top-[8rem] leading-normal bg-teal-500">
//         <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
//           Noteworthy technology acquisitions 2021
//         </h5>
//         <p className="mb-3 font-normal text-center text-gray-700 dark:text-gray-400">
//           Here are the biggest enterprise technology acquisitions of 2021 so
//           far, in reverse chronological order.
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Card



import React from "react";

const Card = () => {
  return (
    <section className="h-[500px] w-full mt-[4rem] mb-[3rem]">
      <div className="w-full p-[1rem] h-[480px] m-auto bg-white rounded-md shadow-xl ring-2 ring-teal-500 lg:max-w-xl">
        <h1 className="text-3xl pb-lg font-semibold text-center text-teal-500 underline uppercase decoration-wavy">
          CONTACT US
        </h1>
        <form className="flex flex-col gap-md">
          <div class="mb-5 w-full group">
            <h2>Name</h2>
            <input
              type="email"
              name="floating_email"
              id="floating_email"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-teal-500 peer"
              placeholder=" "
              required
            />
          </div>
          <div class="mb-5 w-full group">
            <h2>Phone Number</h2>

            <input
              type="email"
              name="floating_email"
              id="floating_email"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-teal-500 peer"
              placeholder=" "
              required
            />
          </div>
          <div class="mb-8 w-full group">
            <h2>Email address</h2>

            <input
              type="email"
              name="floating_email"
              id="floating_email"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-teal-500 peer"
              placeholder=" "
              required
            />
          </div>
          <div class="mb-6 w-full group">
            <h2 className="pb-[10px]">Your message</h2>
            <textarea
              id="message"
              rows="4"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-teal-500 focus:ring-teal-500 focus:border-blue-500 dark:bg-gray-700 dark:border-teal-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500 p-[8px]"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <div class="mb-6 w-full group">
            <button
              type="submit"
              class="text-white p-[1rem] text-md bg-teal-500 hover:bg-[#f1c40f] focus:ring-4 focus:outline-none focus:ring-teal-500 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-teal-500 dark:hover:bg-[#f1c40f] dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Card;


    // <form className="h-[400px] flex flex-col justify-center align-middle min-h-screen overflow-hidden">
    //   <div className="mb-6 w-full group">
    //     <input
    //       type="email"
    //       nameName="floating_email"
    //       id="floating_email"
    //       class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
    //       placeholder=" "
    //       required
    //     />
    //     <label
    //       for="floating_email"
    //       className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    //     >
    //       Email address
    //     </label>
    //   </div>
    //   <div className="relative z-0 mb-6 w-full group">
    //     <input
    //       type="password"
    //       name="floating_password"
    //       id="floating_password"
    //       className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
    //       placeholder=" "
    //       required
    //     />
    //     <label
    //       for="floating_password"
    //       className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    //     >
    //       Password
    //     </label>
    //   </div>
    //   <div class="mb-6 w-full group">
    //     <input
    //       type="password"
    //       name="repeat_password"
    //       id="floating_repeat_password"
    //       className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
    //       placeholder=" "
    //       required
    //     />
    //     <label
    //       for="floating_repeat_password"
    //       class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    //     >
    //       Confirm password
    //     </label>
    //   </div>
    //   <div class="grid md:grid-cols-2 md:gap-6">
    //     <div class="relative z-0 mb-6 w-full group">
    //       <input
    //         type="text"
    //         name="floating_first_name"
    //         id="floating_first_name"
    //         className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
    //         placeholder=" "
    //         required
    //       />
    //       <label
    //         for="floating_first_name"
    //         className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    //       >
    //         First name
    //       </label>
    //     </div>
    //     <div class="relative z-0 mb-6 w-full group">
    //       <input
    //         type="text"
    //         name="floating_last_name"
    //         id="floating_last_name"
    //         className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
    //         placeholder=" "
    //         required
    //       />
    //       <label
    //         for="floating_last_name"
    //         className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    //       >
    //         Last name
    //       </label>
    //     </div>
    //   </div>
    //   <div className="grid md:grid-cols-2 md:gap-6">
    //     <div className="relative z-0 mb-6 w-full group">
    //       <input
    //         type="tel"
    //         pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
    //         name="floating_phone"
    //         id="floating_phone"
    //         className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
    //         placeholder=" "
    //         required
    //       />
    //       <label
    //         for="floating_phone"
    //         className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    //       >
    //         Phone number (123-456-7890)
    //       </label>
    //     </div>
    //     <div className="relative z-0 mb-6 w-full group">
    //       <input
    //         type="text"
    //         name="floating_company"
    //         id="floating_company"
    //         className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
    //         placeholder=" "
    //         required
    //       />
    //       <label
    //         for="floating_company"
    //         className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    //       >
    //         Company (Ex. Google)
    //       </label>
    //     </div>
    //   </div>
    //   <button
    //     type="submit"
    //     class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    //   >
    //     Submit
    //   </button>
    // </form>