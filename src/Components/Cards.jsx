const Cards = () => {
  return (
    <div className="w-full h-screen bg-zinc-900 flex gap-5 items-center px-32">
      <div className="cardContainer w-1/2 h-[50vh]">
        <div className="card relative rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute left-10 bottom-10 px-2 py-1 border-2 border-[#CCE968] rounded-full text-[#CCE968]">
            ©2020-2024
          </button>
        </div>
      </div>

      <div className="cardContainer flex gap-5 w-1/2 h-[50vh]">
        <div className="card relative rounded-xl w-1/2 h-full bg-[#212121] flex items-center justify-center">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
          />
          <button className="absolute left-10 bottom-10 px-2 py-1 border-2 rounded-full ">
            RATING5.0 ON CLUTH
          </button>
        </div>

        <div className="card relative rounded-xl w-1/2 h-full bg-[#212121] flex items-center justify-center">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
          />
          <button className="absolute left-10 bottom-10 px-2 py-1 border-2  rounded-full">
            BUDINESS BOOTCAMP ALUMINI
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
