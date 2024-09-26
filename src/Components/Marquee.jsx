import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed='.1' className="w-full py-28 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]">
      <div className="text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap overflow-hidden">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          className="text-[25vw] leading-none font-founders font-semibold -mt-[4vw] -mb-[2vw] pr-20"
        >
          WE ARE OCHI
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          className="text-[25vw] leading-none font-founders font-semibold -mt-[4vw] -mb-[2vw] pr-20"
        >
          WE ARE OCHI
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;


