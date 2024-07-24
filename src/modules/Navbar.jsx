import { Link } from "react-router-dom";
import image from "../images/zohaib_Haider__1_-removebg-preview.png";
import { FaBars, FaCross } from "react-icons/fa";
import { useState } from "react";
import { MdCancel } from "react-icons/md";
const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const openMenu = () => {
    setMenu(true);
  };
  const closeMenu = () => {
    setMenu(false);
  };
  return (
    <div className="flex flex-row justify-between items-center p-4 bg-light-black h-[10%] w-full">
      <div
        className={`flex items-center justify-center ${
          !menu ? "w-[20%]" : "w-0"
        }`}
      >
        <img src={image} alt="logo" className="h-16 w-27" />
      </div>
      <div
        className={`w-[100%] xl:w-[70%] ${
          menu === true
            ? "flex opacity-100 visible"
            : "flex w-0 h-0 opacity-0 invisible"
        }hidden xl:opacity-100 xl:flex flex-col transition-all duration-300 items-center justify-center shadow-lg xl:mx-28 xl:flex-row xl:bg-light-black bg-fade-black shadow-greens xl:shadow-none 2xl:gap-x-12 gap-x-6`}
      >
        <MdCancel
          onClick={closeMenu}
          className={`flex ${
            menu === true ? "flex" : "hidden"
          } xl:hidden text-2xl left-[47%] top-3 text-white font-radios hover:text-[#2fff86] relative after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-left transition-all duration-500 ease-in-out cursor-pointer`}
        >
          Contact
        </MdCancel>
        <Link>
          <p className="py-1 text-lg text-white font-radios hover:text-[#2fff86] relative inline-block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-left transition-all duration-500 ease-in-out cursor-pointer">
            Home
          </p>
        </Link>
        <Link>
          <p className="py-1 text-lg text-white font-radios hover:text-[#2fff86] relative inline-block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-left transition-all duration-500 ease-in-out cursor-pointer">
            About
          </p>
        </Link>
        <Link>
          <p className="py-1 text-lg text-white font-radios hover:text-[#2fff86] relative inline-block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-left transition-all duration-500 ease-in-out cursor-pointer">
            Services
          </p>
        </Link>
        <Link>
          <p className="py-1 text-lg text-white font-radios hover:text-[#2fff86] relative inline-block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-left transition-all duration-500 ease-in-out cursor-pointer">
            Skills
          </p>
        </Link>
        <Link>
          <p className="py-1 text-lg text-white font-radios hover:text-[#2fff86] relative inline-block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-left transition-all duration-500 ease-in-out cursor-pointer">
            Projects
          </p>
        </Link>
        <Link>
          <p className="py-1 text-lg text-white font-radios hover:text-[#2fff86] relative inline-block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-left transition-all duration-500 ease-in-out cursor-pointer">
            Resume
          </p>
        </Link>
        <Link>
          <p className="py-1 text-lg text-white font-radios hover:text-[#2fff86] relative inline-block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-left transition-all duration-500 ease-in-out cursor-pointer">
            Contact
          </p>
        </Link>
      </div>
      <FaBars
        onClick={openMenu}
        className={`flex ${
          menu === true ? "hidden" : "flex"
        } xl:hidden text-lg text-white font-radios hover:text-[#2fff86] relative after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-left transition-all duration-500 ease-in-out cursor-pointer`}
      >
        Contact
      </FaBars>
    </div>
  );
};

export default Navbar;
