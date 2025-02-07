import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";

const Navbar = ({ darkmode, setdarkmode }) => {
  const sidemenuRef = useRef();
  const [navScroll, setnavScroll] = useState(false);
  const openMenu = () => {
    sidemenuRef.current.style.transform = "translateX(-16rem)";
  };

  const closeMenu = () => {
    sidemenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setnavScroll(true);
      } else {
        setnavScroll(false);
      }
    });
  }, []);

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
          navScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20" : ""
        }`}
      >
        <a href="#top">
          <Image
            src={darkmode?assets.logo_dark:assets.logo}
            className="w-28 cursor-pointer mr-14"
            alt="logo"
          />
        </a>
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            navScroll ? "" : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"
          }`}
        >
          <li>
            <a href="#top" className="font-Ovo">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="font-Ovo">
              About Me
            </a>
          </li>
          <li>
            <a href="#services" className="font-Ovo">
              Services
            </a>
          </li>
          <li>
            <a href="#work" className="font-Ovo">
              My Work
            </a>
          </li>
          <li>
            <a href="#contact" className="font-Ovo">
              Contact Me
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <button onClick={()=>setdarkmode(prev=>!prev)}>
            <Image src={darkmode?assets.sun_icon:assets.moon_icon} alt="" className="w-6" />
          </button>
          <a
            href=""
            className="hidden lg:flex items-center gap-3 px-10 border border-gray-500 rounded-full ml-4 py-1 font-Ovo dark:border-white/50
            "
          >
            Contact
            <Image src={darkmode?assets.arrow_icon_dark:assets.arrow_icon} className="w-3" alt="arrow" />
          </a>
          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image src={darkmode?assets.menu_white:assets.menu_black} alt="" className="w-6" />
          </button>
        </div>

        {/* mobile menu */}

        <ul
          ref={sidemenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 items-center dark:bg-darkHover dark:text-white
          "
        >
          <div className="absolute right-6 top-6">
            <Image
              src={darkmode?assets.close_white:assets.close_black}
              alt=""
              className="w-5 cursor-pointer"
              onClick={closeMenu}
            />
          </div>

          <li>
            <a href="#top" onClick={closeMenu} className="font-Ovo">
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={closeMenu} className="font-Ovo">
              About Me
            </a>
          </li>
          <li>
            <a href="#services" onClick={closeMenu} className="font-Ovo">
              Services
            </a>
          </li>
          <li>
            <a href="#work" onClick={closeMenu} className="font-Ovo">
              My Work
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu} className="font-Ovo">
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
