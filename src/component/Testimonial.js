import React from 'react'

const Testimonial = () => {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        class="carousel slide relative carousel-dark"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner relative w-full overflow-hidden">
          <div class="carousel-item active relative float-left w-full text-center">
            <p class="text-xl italic mx-auto text-gray-700 max-w-4xl">
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
              error amet numquam iure provident voluptate esse quasi, voluptas
              nostrum quisquam!"
            </p>
            <div class="mt-12 mb-6 flex justify-center">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                class="rounded-full w-24 h-24 shadow-lg"
                alt="smaple im1"
              />
            </div>
            <p class="text-gray-500">- Anna Morian</p>
          </div>
          <div class="carousel-item relative float-left w-full text-center">
            <p class="text-xl italic mx-auto text-gray-700 max-w-4xl">
              "Neque cupiditate assumenda in maiores repudiandae mollitia
              adipisci maiores repudiandae mollitia consectetur adipisicing
              architecto elit sed adipiscing elit."
            </p>
            <div class="mt-12 mb-6 flex justify-center">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(31).webp"
                class="rounded-full w-24 h-24 shadow-lg"
                alt="smaple im2"
              />
            </div>
            <p class="text-gray-500">- Teresa May</p>
          </div>
          <div class="carousel-item relative float-left w-full text-center">
            <p class="text-xl italic mx-auto text-gray-700 max-w-4xl">
              "Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur est laborum neque
              cupiditate assumenda in maiores."
            </p>
            <div class="mt-12 mb-6 flex justify-center">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
                class="rounded-full w-24 h-24 shadow-lg"
                alt="smaple im"
              />
            </div>
            <p class="text-gray-500">- Kate Allise</p>
          </div>
        </div>
        <button
          class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            class="carousel-control-prev-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            class="carousel-control-next-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Testimonial