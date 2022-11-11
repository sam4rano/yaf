import Footer from "./Footer";
import imgOne from '../images/sam.jpg'
import imgTwo from "../images/sam4.jpg";
import imgThree from "../images/sam2.jpg";
import imgFour from "../images/sam3.jpg";

const About = () => {
  return (
    <>
      <div className="flex p-md -full h-[70vh] flex-col">
        <div className="">
          <h1 className="text-2xl text-gray-900 font-bold mb-2 p-md">
            ABOUT US
          </h1>
          <div className="flex flex-col ">
            <p className="text-gray-700 text-base mb-4 p-md">
              Youth Alive Initiative is a non-profit inter-denominational
              initiative of Joel Ayodele Adelani, our core value are nurturing
              and building capacity for a purpose driven young generation.
            </p>
            <p className="text-gray-700 text-base mb-4 p-md">
              Youth are not only the strength of a nation but also life of every
              family, It is our wish to impact and reach out to this young
              generation, impacting knowledge driving a change is what we are
              aiming at.
            </p>
            <p className="text-gray-700 text-base p-md">
              We strive at delivering top notch mentorship to the young
              generation and providing all the necessary tools for a dynamic
              growth
            </p>
          </div>
        </div>
        <div className="flex flex-col align-middle justify-center h-screen">
          <h2 className="text-center text-2xl font-bold p-[40px] ">
            ALIGHT TEAM
          </h2>
          <div className="flex flex-row flex-wrap pb-[100px] m-[10px] justify-center align-middle">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <a href="#c">
                <img class="rounded-t-lg w-[100px] h-[100px]" src={imgOne} alt="" />
              </a>
              <div class="p-[20px]">
                <a href="#c">
                  <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <a
                  href="#c"
                  class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  
                </a>
              </div>
            </div>
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <a href="#c">
                <img class="rounded-t-lg w-[100px] h-[100px]" src={imgTwo} alt="" />
              </a>
              <div class="p-[20px]">
                <a href="#c">
                  <h5 class="mb-2 text-xl font-semibold  tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <a
                  href="#c"
                  class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                
                </a>
              </div>
            </div>
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <a href="#c">
                <img class="rounded-t-lg w-[100px] h-[100px]" src={imgThree} alt="" />
              </a>
              <div class="p-[20px]">
                <a href="#c">
                  <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <a
                  href="#c"
                  class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                
                </a>
              </div>
            </div>
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <a href="#c">
                <img
                  class="rounded-t-lg w-[100px] h-[100px]"
                  src={imgFour}
                  alt=""
                />
              </a>
              <div class="p-[20px]">
                <a href="#c">
                  <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <a
                  href="#c"
                  class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
        
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="pt-[400px] mt-[60px]">
        <Footer />
      </section>
    </>
  );
};

export default About;
