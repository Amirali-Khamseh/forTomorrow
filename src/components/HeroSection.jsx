import React from "react";

function HeroSection() {
  return (
    <>
      <div className="h-screen bg-purple-200  flex items-center flex-col md:px-[20rem]   p-[5rem] ">
        <h1 className=" text-4xl md:text-8xl  text-center font-bold tracking-tight text-gray-900 mt-[8rem]">
          Offset your CO2 emissions reliably, in Europe
        </h1>
        <h2 className="text-4xl md:text-6xl tracking-tight text-gray-900 text-center mt-2 ">
          Live carbon neutral today with
        </h2>
        <h2 className="text-4xl md:text-6xl tracking-tight text-gray-900 text-center mt-2 ">
          with a climate subscription
        </h2>

        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="https://www.fortomorrow.eu/en#our-approach"
            className="focus:outline-none text-white bg-purple-950 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-xl px-5 py-2.5"
          >
            Learn more
          </a>
          <a
            href="https://www.fortomorrow.eu/en/co2-offsetting-companies"
            className="flex items-center focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-xl px-5 py-2.5  dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          >
            <span>For organizations</span>
            <svg
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              focusable="false"
              class="icon icon--chevron-right "
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline
                points="9 18 15 12 9 6"
                stroke="#F8FFF9"
                fill="none"
                stroke-width="2px"
              ></polyline>
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
