/* eslint-disable no-unused-vars */
import React from "react";

const Ad = () => {
  return (
    <div  className="w-full h-auto pb-20  bg-[#CDEA68]">
      <div className="flex flex-col items-center justify-center p-20 leading-none text-[15vh] font-bold">
        <h1>READY</h1>
        <h1>TO START</h1>
        <h1>THE PROJECT ?</h1>
      </div>
      <div className=" flex justify-center ">
        <div className="flex gap-10 items-center bg-black rounded-full px-10  py-5">
          <span className="text-[1.2vw] text-white">START THE PROJECT</span>
          <div className="w-3 h-3 rounded-full bg-white"></div>
        </div>
      </div>
      <div className="flex justify-center">
        <span className="text-[1.5vw] p-5">or</span>
      </div>
      <div className=" flex justify-center">
        <div className="flex gap-10 items-center border-[1px] border-black rounded-full px-10  py-5">
          <span className="text-[1.2vw] text-black">
            vishamanofficial@gmail.com
          </span>
          <div className="w-3 h-3 rounded-full bg-black"></div>
        </div>
      </div>
    </div>
  );
};

export default Ad;
