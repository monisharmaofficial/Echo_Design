import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed z-[999] w-full px-6 py-2 md:px-20 md:py-4 font-montreal flex justify-between items-center bg-[#F1F1F1]">
      {/* Logo */}
      <div className="logo">
        <span className="text-3xl md:text-[2.5vw] font-semibold">echo</span>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-10">
        {["Services", "Our Work", "About Us", "Insights", "Contact"].map(
          (item, index) => (
            <a
              key={index}
              className={`text-lg font-light capitalize ${
                index === 4 && "ml-32"
              }`}
            >
              {item}
            </a>
          )
        )}
      </div>

      {/* Mobile Hamburger Icon */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          <svg
            className="w-6 h-6 text-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden absolute top-16 left-0 w-full bg-[#F1F1F1] shadow-lg z-[998]`}
      >
        <div className="flex flex-col items-start gap-6 px-6 py-4">
          {["Services", "Our Work", "About Us", "Insights", "Contact"].map(
            (item, index) => (
              <a key={index} className="text-lg font-light capitalize">
                {item}
              </a>
            )
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
