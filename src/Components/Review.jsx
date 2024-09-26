/* eslint-disable no-unused-vars */
import React from "react";

const Review = () => {
  return (
    <div className="w-full h-auto font-montreal">
      <div className="w-full border-b-[1px] border-zinc-400">
        <h1 className="text-[4vw] pl-20 pb-5">Clients’ reviews</h1>
      </div>

      <div className="w-full pt-5 pl-20 pr-20 flex font-montreal">
        <div className="w-1/2">
          <div className="w-full flex">
            <div className="w-1/2 text-[1.2vw]">
              <h2>Karman Ventures</h2>
            </div>
            <div className="w-1/2 text-[1.2vw]">
              <h2>Services:</h2>
              <div className="flex flex-col items-start gap-3 m-5 ml-0">
            
              <span className="text-[1vw] font-medium py-1 px-5 border-[1px] rounded-3xl border-zinc-800">
                SALES DECK
              </span>
              <span className="text-[1vw] font-medium py-1 px-5 border-[1px] rounded-3xl border-zinc-800">
                INVESTER DECK
              </span>
            </div>
            </div>
          </div>
        </div>

        <div className="w-1/2">
          <div className="w-full flex">
            <div className="w-3/4 text-[1.2vw]">
              <h2>William Barnes</h2>
              <img className="w-[8vw] mt-20 mb-10 rounded-2xl" src="https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png" alt="" />
              <p>
              They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively from story to design. 5/5
              </p>
            </div>

            <div className="w-1/4 text-[1.2vw] flex justify-end">
              <h2>READ</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
