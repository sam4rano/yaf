import React from 'react'

const Card = () => {
  return (
    <div class="flex justify-center p-[20px]">
      <div class="flex flex-row rounded-lg bg-white shadow-lg">
        <img
          class=" w-[50%] h-9 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
          src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
          alt=""
        />
        <div class="w-[50%] p-6 flex flex-col justify-start">
          <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
          <p class="text-gray-700 text-base mb-4">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <p class="text-gray-600 text-xs">Last updated 3 mins ago</p>
        </div>
      </div>
    </div>
  );
}

export default Card