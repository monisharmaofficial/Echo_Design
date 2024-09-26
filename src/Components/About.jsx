const About = () => {
  return (
    <div className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-[#212121]">
      <h1 className="font-montreal text-[4vw] leading-[4.5vw] tracking-tighter">
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and
        hire great peo­ple.
      </h1>

      <div className="w-full border-t-[1px] mt-20 border-[#a1b562] flex pt-10">
        <h3 className="w-1/2 text-[#31381a] text-lg ">What you can expect:</h3>
        <div className="w-2/3 max-w-96 flex items-center flex-col gap-6 text-lg text-[#31381a] m-2">
          <p>
            We create tailored presentations to help you persuade your
            colleagues, clients, or investors. Whether it’s live or digital,
            delivered for one or a hundred people.
          </p>
          <p>
            We believe the mix of strategy and design (with a bit of coffee) is
            what makes your message clear, convincing, and captivating.
          </p>
        </div>

        <div className="w-60 ml-32 flex flex-col text-lg text-[#31381a] mt-20">
          <h2>S:</h2>
          <a href="#">Instagram</a>
          <a href="#">Behance</a>
          <a href="#">Facebook</a>
          <a href="#">Linkedin</a>
        </div>
      </div>

      <div className="w-full border-t-[1px] pt-10 mt-24 border-[#a1b562] flex justify-between">
        <div className="1/2">
          <h1 className="text-6xl tracking-tight">Our approach:</h1>
          <button className="px-6 uppercase flex gap-8 items-center text-md py-3 bg-zinc-900 mt-8 rounded-full text-white">
            Read More <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2 h-[65vh] rounded-3xl bg-[#90a350] ">
          <img
            className="object-cover object-center rounded-3xl"
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
