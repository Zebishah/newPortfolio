import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaInstagram } from "react-icons/fa6";
import image from "../images/imgonline-com-ua-ReplaceColor-BgXRJRCAzCepcb-removebg-preview.png";
import Education from "./Education";
import Experience from "./Experience";
import About from "./About";
import Services from "./Services";
import Skills from "./Skills";
import "../index.css";
import { useEffect, useState } from "react";
const TitlePage = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-48">
      <div className="flex flex-col lg:flex-row mx-auto items-center justify-center w-[90%] h-screen gap-x-10 ">
        <div className="flex flex-col items-start justify-center gap-y-3 w-[90%] lg:w-[40%] order-2 lg:order-1">
          <h1 className="text-6xl font-bold text-white font-radios">
            Hi, It's <span className="text-[#00e1ff]">Eren Yeager</span>{" "}
          </h1>
          <h3 className="flex text-4xl text-white gap-x-3 font-radios">
            I&apos;m a{"  "}
            <span
              className={`flex text-[#00e1ff] font-sans font-bold transition-all duration-300 ease-in-out `}
            >
              <Typewriter
                options={{
                  strings: [" Frontend Developer", " Backend Developer"],
                  autoStart: true,
                  loop: true,
                  delay: 100,
                  cursor: "|",
                  deleteSpeed: 30,
                  shuffle: true,
                  wrapperClassName: "#00e1ff",
                }}
              />
            </span>
          </h3>
          <p className="text-justify text-white font-radios">
            I’m a fresh graduate with comprehensive expertise in the MERN stack.
            My hands-on experience includes developing dynamic web projects,
            from backend logic to responsive frontend. I&apos;m passionate about
            crafting efficient and scalable applications. Eager to bring my
            skills and enthusiasm to an innovative tech team
          </p>
          <div className="flex items-center justify-center mt-2 gap-x-3">
            <Link>
              <div className="p-2 border-2 border-[#00e1ff] text-[#00e1ff] hover:text-light-black rounded-full hover:bg-[#00e1ff] hover:-translate-y-1 hover:shadow-md hover:shadow-[#00e1ff] hover:scale-110 transition-all duration-300 ease-in-out">
                <FaLinkedin size={20} className="hover:text-light-black" />
              </div>
            </Link>

            <Link>
              <div className="p-2 border-2 border-[#00e1ff] text-[#00e1ff] hover:text-light-black rounded-full hover:bg-[#00e1ff] hover:-translate-y-1 hover:shadow-md hover:shadow-[#00e1ff] hover:scale-110 transition-all duration-300 ease-in-out">
                <FaGithub size={20} className="hover:text-light-black" />
              </div>
            </Link>

            <Link>
              <div className="p-2 border-2 border-[#00e1ff] text-[#00e1ff] hover:text-light-black rounded-full hover:bg-[#00e1ff] hover:-translate-y-1 hover:shadow-md hover:shadow-[#00e1ff] hover:scale-110 transition-all duration-300 ease-in-out">
                <IoLogoWhatsapp size={20} className="hover:text-light-black" />
              </div>
            </Link>

            <Link>
              <div className="p-2 border-2 border-[#00e1ff] text-[#00e1ff] hover:text-light-black rounded-full hover:bg-[#00e1ff] hover:-translate-y-1 hover:shadow-md hover:shadow-[#00e1ff] hover:scale-110 transition-all duration-300 ease-in-out">
                <FaInstagram size={20} className="hover:text-light-black" />
              </div>
            </Link>
          </div>

          <div className="flex items-start justify-center mt-3 gap-x-5">
            <button className="bg-[#00e1ff] text-black font-radios p-3 rounded-3xl shadow-lg shadow-[#00e1ff] hover:scale-110 transition-all duration-300 ease-in-out">
              Download Cv
            </button>
            <button className="border-2 border-[#00e1ff] text-[#00e1ff] hover:text-fade-black font-radios p-3 rounded-3xl hover:shadow-md hover:shadow-[#00e1ff] hover:scale-110 transition-all duration-300 ease-in-out hover:bg-[#00e1ff]">
              Contact Me
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center p-3 w-[90%] lg:w-[40%] order-1 lg:order-2">
          <img src={image} alt="profile pic" className="h-[100%] w-[100%]" />
        </div>
      </div>
      <About />
      <Education />
      <Experience />
      <Services />
      <Skills />
    </div>
  );
};

export default TitlePage;
