import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";

const LandingPage = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className="w-full h-screen  text-white bg-zinc-900 pt-1"
    >
      <div className="textstructure mt-40 px-20">
        {["We create", "Eye Opening", "Presentation"].map((items, index) => {
          return (
            <div key={index} className="masker p-2">
              <div className="w-fit flex items-end overflow-hidden">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "10vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className="mr-[1vw] w-[10vw] h-[5.8vw] relative "
                  >
                    {" "}
                    <img
                      className="object-center object-cover rounded-lg"
                      src="https://cdn.dribbble.com/users/659524/screenshots/3504953/media/8d2a240b327d05c4665e68dc673c521f.jpg?resize=400x300&vertical=center"
                      alt=""
                    />{" "}
                  </motion.div>
                )}
                <h1 className="uppercase text-[9vw] leading-[7vw] tracking-wide font-founders font-light">
                  {items}
                </h1>
              </div>
            </div>
          );
        })}
      </div>

      <div className="border-t-[1px] border-zinc-700 mt-20 flex justify-between items-center py-5 px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => {
          return (
            <p
              key={index}
              className="text-md font-light tracking-tight leading-none"
            >
              {item}
            </p>
          );
        })}
        <div className="start flex items-center gap-5">
          <div className="px-5 py-2 border-[1px] border-zinc-400 rounded-full font-light text-sm">
            START THE PROECT
          </div>
          <div className="h-9 w-9 flex items-center justify-center border-[1px] border-zinc-400  rounded-full">
            <BsArrowUpRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
