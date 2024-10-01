/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

const Eyes = () => {
  const [rotate, setRotate] = useState(0);
  useEffect(() => {
    window.addEventListener("mousemove", (event) => {
      let PositionX = event.clientX;
      let PositionY = event.clientY;
      let DeltaPositionX = PositionX - window.innerWidth / 2;
      let DeltaPositionY = PositionY - window.innerHeight / 2;
      let angle =
        Math.atan2(DeltaPositionY, DeltaPositionX) * (180 / Math.PI) - 180;
      setRotate(angle);
    });
  }, [rotate]);
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <div
        data-scroll
        data-scroll-section
        data-scroll-speed="-.1"
        className=' relative w-full min-h-screen bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'
      ></div>
      <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
        <div className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100">
          <div className="relative w-[9vw] h-[9vw] rounded-full bg-zinc-900">
            <span className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-white">
              PLAY
            </span>
            <div
              style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }}
              className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] line w-full h-10"
            >
              <div className="w-6 h-6 rounded-full bg-zinc-100"></div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100">
          <div className="relative w-[9vw] h-[9vw] rounded-full bg-zinc-900">
            <span className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-white">
              PLAY
            </span>
            <div
              style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }}
              className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] line w-full h-10"
            >
              <div className="w-6 h-6 rounded-full bg-zinc-100"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eyes;
