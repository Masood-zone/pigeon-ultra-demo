import React, { useState } from "react";
import { pigeon } from "../../assets/images/index";
import { Link, useNavigate } from "react-router-dom";
import { NAV_LINKS } from "./data";

function Navbar() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [onScroll, setOnScroll] = useState(false);

  const toggleVisibleButton = () => {
    setIsVisible(!isVisible);
  };

  const toggleVisibleScroll = () => {
    if (window.scrollY >= 90) {
      setOnScroll(true);
    } else {
      setOnScroll(false);
    }
  };

  window.addEventListener("scroll", toggleVisibleScroll);

  return (
    <nav className="sticky max-w-full mx-auto top-0 mb-2 px-0 py-0 max-md:py-0 ">
      <div className="flex items-center w-full mx-auto justify-between z-[1] max-md:justify-center">
        {/* Main-logo */}
        <div
          role="button"
          onClick={() => {
            navigate("/");
          }}
          className="w-[65%] mx-4"
        >
          <img
            src={pigeon}
            alt="main-logo"
            className="max-md:w-[50%] w-[130px] ml-24"
          />
        </div>
        {/* Links */}
        <div className="w-[70%] flex items-center justify-center">
          <ul className="flex items-center gap-1 max-md:hidden">
            {NAV_LINKS.map((link) => (
              <li
                key={link.id}
                className="text-[13px] capitalize font-bold px-4 text-bs-gray"
              >
                <Link to={link.path}> {link.name}</Link>
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
