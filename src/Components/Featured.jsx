
// import { motion, useAnimation } from "framer-motion";

// const Featured = () => {
//   const cards = [useAnimation(), useAnimation()]; // Two animations for two cards

//   const handleHover = (index) => {
//     cards[index].start({ y: "0" }); // Animate the text to come into view on hover
//   };

//   const handleHoverEnd = (index) => {
//     cards[index].start({ y: "100%" }); // Animate the text out of view when hover ends
//   };

//   return (
//     <div className="w-full py-20">
//       <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
//         <h1 className="text-7xl font-montreal tracking-tight">
//           Featured projects
//         </h1>
//       </div>

//       <div className="px-20">
//         <div className="cards w-full flex gap-10 mt-10">
//           {/* Card 1 */}
//           <motion.div
//             onHoverStart={() => handleHover(0)}
//             onHoverEnd={() => handleHoverEnd(0)}
//             className="cardContainer relative w-1/2 h-[75vh]"
//           >
//             <span className="text-[1.2vw] mb-4 block">FYDE</span>

//             <h1 className="absolute flex overflow-hidden text-[#CDEA68] left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-8xl">
//               {"FYDE".split("").map((item, index) => (
//                 <motion.span
//                   initial={{ y: "100%" }}
//                   animate={cards[0]}
//                   transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
//                   key={index}
//                 >
//                   {item}
//                 </motion.span>
//               ))}
//             </h1>
//             <div className="w-full h-full rounded-xl overflow-hidden">
//               <img
//                 className="w-full h-full bg-cover"
//                 src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png"
//                 alt="FYDE Project"
//               />
//             </div>

//             <div className="flex items-center  gap-3 m-5 ml-0">
//               <span className="text-[1vw] font-medium py-1 px-5 border-[1px] rounded-3xl border-zinc-400">
//                 AUDIT
//               </span>
//               <span className="text-[1vw] font-medium py-1 px-5 border-[1px] rounded-3xl border-zinc-400">
//                 COPYWRITING
//               </span>
//               <span className="text-[1vw] font-medium py-1 px-5 border-[1px] rounded-3xl border-zinc-400">
//                 SALES DESK
//               </span>
//               <span className="text-[1vw] font-medium py-1 px-5 border-[1px] rounded-3xl border-zinc-400">
//                 SLIDES DESIGN
//               </span>
//             </div>
//           </motion.div>

//           {/* Card 2 */}
//           <motion.div
//             onHoverStart={() => handleHover(1)}
//             onHoverEnd={() => handleHoverEnd(1)}
//             className="cardContainer relative w-1/2 h-[75vh]"
//           >
//             <span className="text-[1.2vw] block mb-4 ">VISE</span>

//             <h1 className="absolute flex overflow-hidden text-[#CDEA68] right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-8xl">
//               {"VISE".split("").map((item, index) => (
//                 <motion.span
//                   initial={{ y: "100%" }}
//                   animate={cards[1]}
//                   transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
//                   key={index}
//                 >
//                   {item}
//                 </motion.span>
//               ))}
//             </h1>
//             <div className="w-full h-full rounded-xl overflow-hidden">
//               <img
//                 className="w-full h-full bg-cover"
//                 src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg"
//                 alt="VISE Project"
//               />
//             </div>

//             <div className="flex items-center  gap-3 m-5 ml-0">
//               <span className="text-[1vw] font-medium py-1 px-5 border-[1px] rounded-3xl border-zinc-400">
//                 AGENCY
//               </span>
//               <span className="text-[1vw] font-medium py-1 px-5 border-[1px] rounded-3xl border-zinc-400">
//                 COMPANY PRESENTATION
//               </span>
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       <div className="px-20 mt-52">
//         <div className="cards w-full flex gap-10 mt-10">
//           {/* Card 3 */}
//           <motion.div
//             onHoverStart={() => handleHover(0)}
//             onHoverEnd={() => handleHoverEnd(0)}
//             className="cardContainer relative w-1/2 h-[75vh]"
//           >
//             <span className="text-[1.2vw] mb-4 block">Trawa</span>

//             <h1 className="absolute flex overflow-hidden text-[#CDEA68] left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-8xl">
//               {"TRAWA".split("").map((item, index) => (
//                 <motion.span
//                   initial={{ y: "100%" }}
//                   animate={cards[3]}
//                   transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
//                   key={index}
//                 >
//                   {item}
//                 </motion.span>
//               ))}
//             </h1>
//             <div className="w-full h-full rounded-xl overflow-hidden">
//               <img
//                 className="w-full h-full bg-cover"
//                 src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-1326x1101.jpg"
//                 alt="FYDE Project"
//               />
//             </div>

//             <div className="flex items-center  gap-3 m-5 ml-0">
//               <span className="text-[1vw] font-medium py-1 px-5 border-[1px] rounded-3xl border-zinc-400">
//                 BRANDED IDENTITY
//               </span>
//               <span className="text-[1vw] font-medium py-1 px-5 border-[1px] rounded-3xl border-zinc-400">
//                 DESIGN RESSEARCH
//               </span>
//               <span className="text-[1vw] font-medium py-1 px-5 border-[1px] rounded-3xl border-zinc-400">
//                 INVESTER DECK
//               </span>
//             </div>
//           </motion.div>

//           {/* Card 4 */}
//           <motion.div
//             onHoverStart={() => handleHover(1)}
//             onHoverEnd={() => handleHoverEnd(1)}
//             className="cardContainer relative w-1/2 h-[75vh]"
//           >
//             <span className="text-[1.2vw] block mb-4 ">PREMIUM BLEND</span>

//             <h1 className="absolute flex overflow-hidden text-[#CDEA68] right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-8xl">
//               {"BRAND".split("").map((item, index) => (
//                 <motion.span
//                   initial={{ y: "100%" }}
//                   animate={cards[4]}
//                   transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
//                   key={index}
//                 >
//                   {item}
//                 </motion.span>
//               ))}
//             </h1>
//             <div className="w-full h-full rounded-xl overflow-hidden">
//               <img
//                 className="w-full h-full bg-cover"
//                 src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-1326x1101.png"
//                 alt="VISE Project"
//               />
//             </div>

//             <div className="flex items-center  gap-3 m-5 ml-0">
//               <span className="text-[1vw] font-medium py-1 px-5 border-[1px] rounded-3xl border-zinc-400">
//                 BRANDED TEMPLATE
//               </span>
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       <div className=" flex justify-center mt-52">
//         <div className="flex gap-10 items-center bg-black rounded-full px-10  py-5">
//           <span className="text-[1vw] text-white">VIEW ALL CASE STUDIES</span>
//           <div className="w-3 h-3 rounded-full bg-white"></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Featured;


import { motion, useAnimation } from "framer-motion";

const Featured = () => {
  const cards = [useAnimation(), useAnimation(), useAnimation(), useAnimation()]; // Four animations for four cards

  const handleHover = (index) => {
    cards[index].start({ y: "0" }); // Animate the text to come into view on hover
  };

  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" }); // Animate the text out of view when hover ends
  };

  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
        <h1 className="text-7xl font-montreal tracking-tight">
          Featured projects
        </h1>
      </div>

      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          {/* Card 1 */}
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardContainer relative w-1/2 h-[75vh]"
          >
            <span className="text-[1.2vw] mb-4 block">FYDE</span>

            <h1 className="absolute flex overflow-hidden text-[#CDEA68] left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-9xl font-semibold">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png"
                alt="FYDE Project"
              />
            </div>

            <div className="flex items-center gap-3 m-5 ml-0">
              <span className="text-[1vw] font-medium py-1 px-5 border-[1px] rounded-3xl border-zinc-400">
                AUDIT
              </span>
              <span className="text-[1vw] font-medium py-1 px-5 border-[1px] rounded-3xl border-zinc-400">
                COPYWRITING
              </span>
              <span className="text-[1vw] font-medium py-1 px-5 border-[1px] rounded-3xl border-zinc-400">
                SALES DESK
              </span>
              <span className="text-[1vw] font-medium py-1 px-5 border-[1px] rounded-3xl border-zinc-400">
                SLIDES DESIGN
              </span>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardContainer relative w-1/2 h-[75vh]"
          >
            <span className="text-[1.2vw] block mb-4">VISE</span>

            <h1 className="absolute flex overflow-hidden text-[#CDEA68] right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-9xl font-semibold">
              {"VISE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg"
                alt="VISE Project"
              />
            </div>

            <div className="flex items-center gap-3 m-5 ml-0">
              <span className="text-[1vw] font-medium py-1 px-5 border-[1px] rounded-3xl border-zinc-400">
                AGENCY
              </span>
              <span className="text-[1vw] font-medium py-1 px-5 border-[1px] rounded-3xl border-zinc-400">
                COMPANY PRESENTATION
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="px-20 mt-52">
        <div className="cards w-full flex gap-10 mt-10">
          {/* Card 3 */}
          <motion.div
            onHoverStart={() => handleHover(2)} // Corrected index
            onHoverEnd={() => handleHoverEnd(2)}
            className="cardContainer relative w-1/2 h-[75vh]"
          >
            <span className="text-[1.2vw] mb-4 block">Trawa</span>

            <h1 className="absolute flex overflow-hidden text-[#CDEA68] left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-9xl font-semibold">
              {"TRAWA".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[2]} // Corrected index
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-1326x1101.jpg"
                alt="Trawa Project"
              />
            </div>

            <div className="flex items-center gap-3 m-5 ml-0">
              <span className="text-[1vw] font-medium py-1 px-5 border-[1px] rounded-3xl border-zinc-400">
                BRANDED IDENTITY
              </span>
              <span className="text-[1vw] font-medium py-1 px-5 border-[1px] rounded-3xl border-zinc-400">
                DESIGN RESEARCH
              </span>
              <span className="text-[1vw] font-medium py-1 px-5 border-[1px] rounded-3xl border-zinc-400">
                INVESTOR DECK
              </span>
            </div>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            onHoverStart={() => handleHover(3)} // Corrected index
            onHoverEnd={() => handleHoverEnd(3)}
            className="cardContainer relative w-1/2 h-[75vh]"
          >
            <span className="text-[1.2vw] block mb-4">PREMIUM BLEND</span>

            <h1 className="absolute flex overflow-hidden text-[#CDEA68] right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-9xl font-semibold">
              {"BRAND".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[3]} // Corrected index
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-1326x1101.png"
                alt="Premium Blend Project"
              />
            </div>

            <div className="flex items-center gap-3 m-5 ml-0">
              <span className="text-[1vw] font-medium py-1 px-5 border-[1px] rounded-3xl border-zinc-400">
                BRANDED TEMPLATE
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className=" flex justify-center mt-52">
       <div className="flex gap-10 items-center bg-black rounded-full px-10  py-5">
         <span className="text-[1vw] text-white">VIEW ALL CASE STUDIES</span>
         <div className="w-3 h-3 rounded-full bg-white"></div>
         </div>
       </div>

    </div>
  );
};

export default Featured;
