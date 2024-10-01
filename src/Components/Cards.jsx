/* eslint-disable no-unused-vars */
import React from "react";

const Cards = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.1"
      className="w-full h-auto pt-20 pb-20 flex flex-col md:flex-row items-center px-5 md:px-20 gap-5"
    >
      {/* First Card */}
      <div className="cardcontainer w-full md:w-1/2 h-[45vh] md:h-[60vh]">
        <div className="card relative w-full h-full bg-[#004D43] rounded-2xl flex items-center justify-center">
          <span className="text-[#CDEA68] text-[8vw] md:text-[4vw] font-medium">
            echo
          </span>
          <button className="absolute left-3 bottom-5 md:left-5 md:bottom-10 text-[#CDEA68] text-[3vw] md:text-[1vw] px-3 md:px-5 py-1 border-[1px] border-[#CDEA68] rounded-full">
            &copy; 2019-2022
          </button>
        </div>
      </div>

      {/* Second and Third Cards */}
      <div className="cardcontainer w-full md:w-1/2 h-[90vh] md:h-[60vh] flex flex-col md:flex-row gap-5">
        {/* Second Card */}
        <div className="card relative w-full md:w-1/2 h-full bg-[#212121] rounded-2xl flex items-center justify-center">
          <img
            className="w-24 md:w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
          />
          <button className="absolute left-3 bottom-5 md:left-5 md:bottom-10 text-white text-[3vw] md:text-[1vw] px-3 md:px-5 py-1 border-[1px] border-white rounded-full">
            RATING 5.0 ON CLUTCH
          </button>
        </div>

        {/* Third Card */}
        <div className="card relative w-full md:w-1/2 h-full bg-[#212121] rounded-2xl flex items-center justify-center">
          <img
            className="w-24 md:w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
          />
          <button className="absolute left-3 bottom-5 md:left-5 md:bottom-10 text-white text-[3vw] md:text-[1vw] px-3 md:px-5 py-1 border-[1px] border-white rounded-full">
            BUSINESS BOOTCAMP
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
