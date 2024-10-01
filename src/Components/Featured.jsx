/* eslint-disable no-unused-vars */
import React from "react";

const Featured = () => {
  return (
    <div className="w-full py-10 md:py-20">
      {/* Title Section */}
      <div className="w-full px-5 md:px-20 border-b-[1px] border-zinc-400 pb-5 md:pb-10">
        <h1 className='font-["Neue Montreal"] text-[8vw] md:text-[4vw] tracking-tight'>
          Featured projects
        </h1>
      </div>

      {/* Project Cards */}
      <div className="px-5 md:px-20">
        {/* First Row */}
        <div className="cards flex flex-col md:flex-row w-full gap-5 md:gap-10 mt-10">
          <div className="cardcontainer relative w-full md:w-1/2 h-[50vh] md:h-[80vh]">
            <div className="flex items-center gap-3 mb-3 md:mb-5">
              <div className="h-3 w-3 md:h-5 md:w-5 rounded-full bg-black"></div>
              <span className="text-[4vw] md:text-[1.2vw]">FYDE</span>
            </div>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
              />
            </div>
            <div className="flex items-center gap-2 md:gap-3 m-2 md:m-5 ml-0">
              <span className="text-[3vw] md:text-[1vw] font-medium py-1 px-3 md:px-5 border-[1px] rounded-3xl border-zinc-800">
                AUDIT
              </span>
              <span className="text-[3vw] md:text-[1vw] font-medium py-1 px-3 md:px-5 border-[1px] rounded-3xl border-zinc-800">
                COPYWRITING
              </span>
              <span className="text-[3vw] md:text-[1vw] font-medium py-1 px-3 md:px-5 border-[1px] rounded-3xl border-zinc-800">
                SALES DESK
              </span>
              <span className="text-[3vw] md:text-[1vw] font-medium py-1 px-3 md:px-5 border-[1px] rounded-3xl border-zinc-800">
                SLIDES DESIGN
              </span>
            </div>
          </div>

          <div className="cardcontainer relative w-full md:w-1/2 h-[50vh] md:h-[80vh] mt-24 md:mt-0">
            <div className="flex items-center gap-3 mb-3 md:mb-5">
              <div className="h-3 w-3 md:h-5 md:w-5 rounded-full bg-black"></div>
              <span className="text-[4vw] md:text-[1.2vw]">VISE</span>
            </div>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt=""
              />
            </div>
            <div className="flex items-center gap-2 md:gap-3 m-2 md:m-5 ml-0">
              <span className="text-[3vw] md:text-[1vw] font-medium py-1 px-3 md:px-5 border-[1px] rounded-3xl border-zinc-800">
                AGENCY
              </span>
              <span className="text-[3vw] md:text-[1vw] font-medium py-1 px-3 md:px-5 border-[1px] rounded-3xl border-zinc-800">
                COMPANY PRESENTATION
              </span>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="cards flex flex-col md:flex-row w-full gap-5 md:gap-10 mt-24 md:mt-40">
          <div className="cardcontainer relative w-full md:w-1/2 h-[50vh] md:h-[80vh]">
            <div className="flex items-center gap-3 mb-3 md:mb-5">
              <div className="h-3 w-3 md:h-5 md:w-5 rounded-full bg-black"></div>
              <span className="text-[4vw] md:text-[1.2vw]">TRAWA</span>
            </div>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg"
                alt=""
              />
            </div>
            <div className="flex items-center gap-2 md:gap-3 m-2 md:m-5 ml-0">
              <span className="text-[3vw] md:text-[1vw] font-medium py-1 px-3 md:px-5 border-[1px] rounded-3xl border-zinc-800">
                BRANDED IDENTITY
              </span>
              <span className="text-[3vw] md:text-[1vw] font-medium py-1 px-3 md:px-5 border-[1px] rounded-3xl border-zinc-800">
                DESIGN RESEARCH
              </span>
              <span className="text-[3vw] md:text-[1vw] font-medium py-1 px-3 md:px-5 border-[1px] rounded-3xl border-zinc-800">
                INVESTOR DECK
              </span>
            </div>
          </div>

          <div className="cardcontainer relative w-full md:w-1/2 h-[50vh] md:h-[80vh] mb-20 md:mb-32 mt-24 md:mt-0">
            <div className="flex items-center gap-3 mb-3 md:mb-5">
              <div className="h-3 w-3 md:h-5 md:w-5 rounded-full bg-black"></div>
              <span className="text-[4vw] md:text-[1.2vw]">PREMIUM BLEND</span>
            </div>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png"
                alt=""
              />
            </div>
            <div className="flex items-center gap-2 md:gap-3 m-2 md:m-5 ml-0">
              <span className="text-[3vw] md:text-[1vw] font-medium py-1 px-3 md:px-5 border-[1px] rounded-3xl border-zinc-800">
                BRANDED TEMPLATE
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Button Section */}
      <div className="flex justify-center mt-10 md:mt-14">
        <div className="flex gap-5 md:gap-10 items-center bg-black rounded-full px-5 md:px-10 py-3 md:py-5">
          <span className="text-[3vw] md:text-[1vw] text-white">
            VIEW ALL CASE STUDIES
          </span>
          <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-white"></div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
