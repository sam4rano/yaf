
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

