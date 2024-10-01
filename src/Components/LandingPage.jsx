import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

const LandingPage = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.8"
      className="h-auto w-auto bg-[#f1f1f1] pt-1"
    >
      {/* Text Section */}
      <div className="textStructure mt-28 md:mt-28 px-5 md:px-20">
        {["WE CREATE", "EYE-OPENING", "WEBSITES"].map((item, index) => (
          <div key={index} className="masker">
            <div className="w-fit flex items-center">
              {/* Image that appears for the second text */}
              {index === 1 && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "25vw" }}
                  transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                  className="mr-[2vw] w-[25vw] h-[15vw] md:w-[8vw] md:h-[5.4vw] rounded-md relative top-[0.5vw] overflow-hidden"
                >
                  <img
                    className="w-full h-full object-cover"
                    src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2023/11/Website-Development-alt-1.webp"
                    alt=""
                  />
                </motion.div>
              )}
              {/* Heading */}
              <h1
                key={index}
                className="text-[12vw] md:text-[7.5vw] uppercase leading-[10vw] md:leading-[6.5vw] tracking-tighter font-['Founders Grotesk'] font-medium"
              >
                {item}
              </h1>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="border-t-[1px] border-zinc-600 mt-7 mb-9 flex flex-col md:flex-row justify-between items-center px-5 md:px-20 py-5 pb-10 gap-5 md:gap-0">
        {/* Text */}
        <div className="flex flex-col md:flex-row gap-2 md:gap-10">
          {[
            "For public and private companies",
            "From the first pitch to IPO",
          ].map((item, index) => (
            <p
              key={index}
              className="font-normal text-center md:text-left tracking-tight leading-none"
            >
              {item}
            </p>
          ))}
        </div>

        {/* Start Project Button */}
        <div className="start flex items-center gap-5">
          <div className="px-5 py-2 border-[2px] border-zinc-600 font-normal text-sm md:text-md capitalize rounded-full text-center">
            <p>START THE PROJECT</p>
          </div>
          <div className="w-10 h-10 border-[2px] border-zinc-600 rounded-full flex items-center justify-center">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
