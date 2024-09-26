// import About from "./Components/About";
// import Cards from "./Components/Cards";
// import Eyes from "./Components/Eyes";
// import Featured from "./Components/Featured";
// import Footer from "./Components/Footer";
// import LandingPage from "./Components/LandingPage";
// import Marquee from "./Components/Marquee";
// import Navbar from "./Components/Navbar";
// import LocomotiveScroll from "locomotive-scroll";

// const App = () => {
//   const locomotiveScroll = new LocomotiveScroll();

//   return (
//     <div className="w-full min-h-screen bg-zinc-900 text-white">
//       <Navbar />
//       <LandingPage />
//       <Marquee />
//       <About />
//       <Eyes />
//       <Featured />
//       <Cards />
//       <Footer />
//     </div>
//   );
// };

// export default App;

import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";

import Navbar from "./Components/Navbar";
import LandingPage from "./Components/LandingPage";
import Marquee from "./Components/Marquee";
import About from "./Components/About";
import Eyes from "./Components/Eyes";
import Featured from "./Components/Featured";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";
import Review from "./Components/Review";
import Ad from "./Components/Ad";

const App = () => {
  useEffect(() => {
    const scrollContainer = document.querySelector("#scroll-container");

    const locomotiveScroll = new LocomotiveScroll({
      el: scrollContainer,
      smooth: true,
    });

    return () => {
      locomotiveScroll.destroy(); // Cleanup on unmount
    };
  }, []);

  return (
    <div id="scroll-container" className="w-full min-h-screen bg-zinc-900 text-white">
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <Review/>
      <Cards />
      <Ad/>
      <Footer />
    </div>
  );
};

export default App;
