import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { useState } from "react";
import { FaCode } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToHome = () => {
    const contactSection = document.getElementById("home");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToAbout = () => {
    const contactSection = document.getElementById("about");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToEducation = () => {
    const contactSection = document.getElementById("education");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToServices = () => {
    const contactSection = document.getElementById("services");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToSkills = () => {
    const contactSection = document.getElementById("skills");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToProject = () => {
    const contactSection = document.getElementById("projects");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="flex flex-col " id="home">
        <div className="flex flex-row justify-between items-center h-[10vh] bg-light-black px-10">
          <div className="flex items-center justify-center py-2 pr-6 gap-x-2">
            <FaCode size={40} className="text-cyan-400" />
            <h1 className="text-3xl text-white font-radios">
              <span className="text-4xl font-bold tracking-widest text-cyan-300 ">
                Z
              </span>
              OHAIB
            </h1>
          </div>
          <div className="flex items-center justify-center gap-x-10 ">
            <div className="items-center justify-center hidden md:flex">
              {" "}
              <Link
                onClick={scrollToHome}
                className="px-6 py-2 text-sm lg:text-[16px] text-white font-radios"
              >
                Home
              </Link>
              <Link
                className="px-6 py-2 text-sm lg:text-[16px] text-white font-radios"
                onClick={scrollToAbout}
              >
                About
              </Link>
              <Link
                className="px-6 py-2 text-sm lg:text-[16px] text-white font-radios"
                onClick={scrollToEducation}
              >
                Experience
              </Link>
              <Link
                className="px-6 py-2 text-sm lg:text-[16px] text-white font-radios"
                onClick={scrollToServices}
              >
                Services
              </Link>
              <Link
                className="px-6 py-2 text-sm lg:text-[16px] text-white font-radios"
                onClick={scrollToSkills}
              >
                Skills
              </Link>
              <Link
                className="px-6 py-2 text-sm lg:text-[16px] text-white font-radios"
                onClick={scrollToProject}
              >
                Projects
              </Link>
              <Link
                className="px-6 py-2 text-sm lg:text-[16px] text-white font-radios"
                onClick={scrollToContact}
              >
                Contact
              </Link>
            </div>
            {open ? (
              <ImCross
                size={30}
                className="text-cyan-300 md:hidden"
                onClick={() => {
                  setOpen(false);
                }}
              />
            ) : (
              <GiHamburgerMenu
                size={30}
                className="text-cyan-300 md:hidden"
                onClick={() => {
                  setOpen(true);
                }}
              />
            )}
          </div>
        </div>
      </div>
      <div
        id="hs-offcanvas-example"
        className={`flex flex-col justify-start items-start gap-y-8 hs-overlay [--auto-close:lg] hs-overlay-open:translate-x-0 fixed top-0 start-0 bottom-0 p-4 z-[60] w-64 bg-white border-e border-gray-200 pt-7 pb-10 overflow-y-auto transition-transform duration-500 ease-in-out transform ${
          open ? "translate-x-0" : "-translate-x-full"
        } block end-auto bottom-0
  [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 dark:bg-neutral-800 dark:border-neutral-700`}
      >
        <div className="flex items-center justify-center py-2 mx-auto">
          <h1 className="text-3xl text-white font-radios">
            <span className="text-4xl font-extrabold tracking-widest text-cyan-300 ">
              Z
            </span>
            OHAIB
          </h1>
        </div>
        <Link
          onClick={scrollToHome}
          className="px-6 py-2 text-sm lg:text-[16px] text-white font-radios"
        >
          Home
        </Link>
        <Link
          className="px-6 py-2 text-sm lg:text-[16px] text-white font-radios"
          onClick={scrollToAbout}
        >
          About
        </Link>
        <Link
          className="px-6 py-2 text-sm lg:text-[16px] text-white font-radios"
          onClick={scrollToEducation}
        >
          Experience
        </Link>
        <Link
          className="px-6 py-2 text-sm lg:text-[16px] text-white font-radios"
          onClick={scrollToServices}
        >
          Services
        </Link>
        <Link
          className="px-6 py-2 text-sm lg:text-[16px] text-white font-radios"
          onClick={scrollToSkills}
        >
          Skills
        </Link>
        <Link
          className="px-6 py-2 text-sm lg:text-[16px] text-white font-radios"
          onClick={scrollToProject}
        >
          Projects
        </Link>
        <Link
          className="px-6 py-2 text-sm lg:text-[16px] text-white font-radios"
          onClick={scrollToContact}
        >
          Contact
        </Link>
      </div>
    </>
  );
};

export default Navbar;
