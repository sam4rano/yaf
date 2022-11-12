import Footer from "./Footer";
import imgOne from '../images/sam.jpg'
import imgTwo from "../images/sam4.jpg";
import imgThree from "../images/sam2.jpg";
import imgFour from "../images/sam3.jpg";

const About = () => {
  return (
    <>
      <div className="flex p-md -full h-[80vh] flex-col sm:h-full md:h-full">
        <div className=" pb-[70px]">
          <h1 className="text-2xl text-gray-900 font-bold mb-2 p-md sm:text-lg sm:font-medium">
            ABOUT US
          </h1>
          <div className="flex flex-col sm:text-sm">
            <p className="text-gray-700 text-base mb-4 p-md sm:text-sm">
              Youth Alive Initiative is a non-profit inter-denominational
              initiative of Joel Ayodele Adelani, our core value are nurturing
              and building capacity for a purpose driven young generation.
            </p>
            <p className="text-gray-700 text-base mb-4 p-md sm:text-sm">
              Youth are not only the strength of a nation but also life of every
              family, It is our wish to impact and reach out to this young
              generation, impacting knowledge driving a change is what we are
              aiming at.
            </p>
            <p className="text-gray-700 text-base p-md sm:text-sm">
              We strive at delivering top notch mentorship to the young
              generation and providing all the necessary tools for a dynamic
              growth
            </p>
          </div>
        </div>
        <div className="flex flex-col align-middle justify-center h-screen pb-[70px] sm:text-sm sm:h-full md:h-full">
          <h2 className="text-center text-2xl font-bold pb-[70px] sm:text-sm">
            ALIGHT TEAM
          </h2>
          <div className="flex flex-row flex-wrap pb-[30px] m-[10px] justify-center align-middle sm:h-full sm:mb-[-10rem] md:h-full">
            <div className="max-w-sm sm:w-full bg-white rounded-2xl border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 sm:max-h-[300px] sm:mb-[100px] md:mb-[100px]">
              <a href="#c">
                <img
                  className="rounded-full w-[150px] sm:w-[150px] h-[150px] sm:h-[150px] text-center mx-auto pt-sm  sm:flex sm:align-middle justify-center relative top-[-3rem] sm:relative sm:top-[-2rem]"
                  src={imgOne}
                  alt=""
                />
              </a>
              <div className="p-[20px]">
                <a href="#c">
                  <h2 className="mb-2 font-bold tracking-tight text-center text-gray-900 dark:text-white">
                    Oyerinde Samuel
                  </h2>
                  <h4 className="mb-2 font-normal tracking-tight text-center text-gray-900 dark:text-white">
                    Software Enngineer || Project Manager
                  </h4>
                </a>

                <a
                  href="#c"
                  className="inline-flex items-center p-sm py-2 px-3 text-sm font-medium text-center text-white bg-teal-500 rounded-lg hover:bg-[#f1c40f] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                </a>
              </div>
            </div>
            <div className="max-w-sm sm:w-full bg-white rounded-2xl border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 sm:max-h-[300px] sm:mb-[100px] sm:pb-2xl md:mb-[100px]">
              <a href="#c">
                <img
                  className="rounded-full w-[150px] sm:w-[150px] h-[150px] sm:h-[150px] text-center mx-auto pt-sm  sm:flex sm:align-middle justify-center relative top-[-3rem] sm:relative sm:top-[-2rem]"
                  src={imgTwo}
                  alt=""
                />
              </a>
              <div className="p-[20px]">
                <a href="#c">
                  <h2 className="mb-2 font-bold tracking-tight text-center text-gray-900 dark:text-white">
                    Oyerinde Samuel
                  </h2>
                  <h4 className="mb-2 font-normal tracking-tight text-center text-gray-900 dark:text-white">
                    Software Enngineer || Project Manager
                  </h4>
                </a>
                <a
                  href="#c"
                  className="inline-flex items-center p-sm py-2 px-3 text-sm font-medium text-center text-white bg-teal-500 rounded-lg hover:bg-[#f1c40f] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                </a>
              </div>
            </div>
            <div className="max-w-sm sm:w-full bg-white rounded-2xl border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 sm:max-h-[300px] sm:mb-[100px] sm:pb-2xl md:mb-[100px]">
              <a href="#c">
                <img
                  className="rounded-full w-[150px] sm:w-[150px] h-[150px] sm:h-[150px] text-center mx-auto pt-sm  sm:flex sm:align-middle justify-center relative top-[-3rem] sm:relative sm:top-[-2rem]"
                  src={imgThree}
                  alt=""
                />
              </a>
              <div class="p-[20px]">
                <a href="#c">
                  <h2 className="mb-2 font-bold tracking-tight text-center text-gray-900 dark:text-white">
                    Oyerinde Samuel
                  </h2>
                  <h4 className="mb-2 font-normal tracking-tight text-center text-gray-900 dark:text-white">
                    Software Enngineer || Project Manager
                  </h4>
                </a>
                <a
                  href="#c"
                  className="inline-flex p-sm items-center py-2 px-3 text-sm font-medium text-center text-white bg-teal-500 rounded-lg hover:bg-[#f1c40f] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                </a>
              </div>
            </div>
            <div className="max-w-sm sm:w-full bg-white rounded-2xl border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 sm:max-h-[300px] sm:mb-[100px] sm:pb-2xl md:mb-[100px]">
              <a href="#c">
                <img
                  className="rounded-full w-[150px] sm:w-[150px] h-[150px] sm:h-[150px] text-center mx-auto pt-sm  sm:flex sm:align-middle justify-center relative top-[-3rem] sm:relative sm:top-[-2rem]"
                  src={imgFour}
                  alt=""
                />
              </a>
              <div className="p-[20px]">
                <a href="#c">
                  <h2 className="mb-2 font-bold tracking-tight text-center text-gray-900 dark:text-white ">
                    Oyerinde Samuel
                  </h2>
                  <h4 className="mb-1 font-normal tracking-tight text-center text-gray-900 dark:text-white">
                    Software Enngineer || Project Manager
                  </h4>
                </a>
                <a
                  href="#c"
                  className="inline-flex items-center justify-center p-sm py-2 px-3 text-sm font-medium text-center text-white bg-teal-500 rounded-lg hover:bg-[#f1c40f] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:text-sm"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="pt-[450px] mt-[60px] sm:mt-[30px] sm:pt-[40px] md:pt-[30px] md:mt-[30px]">
        <Footer />
      </section>
    </>
  );
};

export default About;
