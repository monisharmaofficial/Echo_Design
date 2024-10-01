/* eslint-disable no-unused-vars */
import React from "react";

const Review = () => {
  return (
    <div className="w-full h-auto">
      {/* Title Section */}
      <div className="w-full border-b-[1px] border-zinc-400">
        <h1 className="text-[8vw] md:text-[4vw] p-5 md:p-20 pb-2 md:pb-5">
          Clients’ reviews
        </h1>
      </div>

      {/* Reviews Section */}
      <div className="w-full pt-5 px-5 md:pl-20 md:pr-20 flex flex-col md:flex-row">
        {/* Left Review */}
        <div className="w-full md:w-1/2 mb-10 md:mb-0">
          <div className="w-full flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 text-[4vw] md:text-[1.2vw] mb-3 md:mb-0">
              <h2>Karman Ventures</h2>
            </div>
            <div className="w-full md:w-1/2 text-[4vw] md:text-[1.2vw]">
              <h2>Services:</h2>
              <div className="flex flex-col items-start gap-2 md:gap-3 mt-2 md:m-5 md:ml-0">
                <span className="text-[3vw] md:text-[1vw] font-medium py-1 px-3 md:px-5 border-[1px] rounded-3xl border-zinc-800">
                  SALES DECK
                </span>
                <span className="text-[3vw] md:text-[1vw] font-medium py-1 px-3 md:px-5 border-[1px] rounded-3xl border-zinc-800">
                  INVESTOR DECK
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Review */}
        <div className="w-full md:w-1/2">
          <div className="w-full flex flex-col md:flex-row">
            <div className="w-full md:w-3/4 text-[4vw] md:text-[1.2vw]">
              <h2>William Barnes</h2>
              <img
                className="w-[20vw] md:w-[8vw] mt-5 md:mt-20 mb-5 md:mb-10 rounded-2xl"
                src="https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png"
                alt=""
              />
              <p className="text-[3.5vw] md:text-[1vw]">
                They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively from story to design. 5/5
              </p>
            </div>

            <div className="w-full md:w-1/4 text-[4vw] md:text-[1.2vw] flex justify-end mt-5 md:mt-0">
              <h2>READ</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
