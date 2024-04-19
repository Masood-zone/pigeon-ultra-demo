import React, { useState } from "react";
import { pigeon } from "../../assets/images/index";
import { Link, useNavigate } from "react-router-dom";
import { NAV_LINKS } from "./data";

function Navbar() {
  const navigate = useNavigate();
  const [onScroll, setOnScroll] = useState(false);

  const toggleVisibleScroll = () => {
    if (window.scrollY >= 20) {
      setOnScroll(true);
    } else {
      setOnScroll(false);
    }
  };

  window.addEventListener("scroll", toggleVisibleScroll);

  return (
    <nav
      className={
        onScroll
          ? "sticky max-w-full mx-auto top-0 mb-2 px-0 py-0 max-md:py-0 z-[1] h-[70px] overflow-hidden bg-gradient-to-b from-[#FEF3E6] to-[#FDF9F3] shadow-xl"
          : "sticky max-w-full mx-auto top-0 mb-2 px-0 py-0 max-md:py-0 z-[1]"
      }
    >
      <div className="flex items-center w-full mx-auto justify-between z-[1] max-md:justify-center">
        {/* Main-logo */}
        <div
          role="button"
          onClick={() => {
            navigate("/");
          }}
          className="w-auto scale-75 mx-4"
        >
          <img
            src={pigeon}
            alt="main-logo"
            className={`max-md:w-[30%] w-[130px] ml-24 ${
              onScroll ? "w-[110px]" : "w-[130px]"
            }`}
          />
        </div>
        {/* Links */}
        <div className="w-[70%] flex items-center justify-center">
          <ul className="flex items-center gap-1 max-lg:hidden">
            {NAV_LINKS.map((link) => (
              <li
                key={link.id}
                className="relative text-[13px] capitalize font-bold px-4 pb-1 text-bs-gray hover:border-b-2 hover:border-bs-orange transition duration-300 ease-in"
              >
                <a href={link.path} className="relative z-10">
                  {link.name}
                </a>
                <div className="absolute inset-x-0 bottom-0 h-1 bg-bs-orange transform scale-x-0 transition-transform duration-300 ease-in origin-left hover:scale-x-100"></div>
              </li>
            ))}
          </ul>

          <button className="px-2 bg-bs-yellow text-white py-3 rounded-md text-sm max-md:py-2">
            <Link to="/shops" target="_blank">
              Login as Shop
            </Link>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
