import { Link } from "react-router-dom";
import {
  FaCode,
  FaCss3,
  FaHtml5,
  FaLaptopCode,
  FaLinkedin,
  FaNodeJs,
} from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaInstagram } from "react-icons/fa6";
import image from "../images/imgonline-com-ua-ReplaceColor-BgXRJRCAzCepcb-removebg-preview (2).png";
import { FaReact } from "react-icons/fa";
import backgroundImage from "../images/27230.jpg";
const About = () => {
  return (
    <div
      className="flex flex-col items-center justify-center w-full h-auto p-12 bg-center bg-cover"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="flex flex-row mx-auto items-center justify-center w-[100%]">
        <div className="md:flex hidden items-center justify-center p-3 md:w-[40%] w-[80%]">
          <img src={image} alt="profile pic" className="h-[100%] w-[80%]" />
        </div>
        <div className="flex flex-col items-start justify-center gap-y-3 md:w-[40%] w-[80%]">
          <h1 className="text-6xl font-bold text-[#00e1ff] font-radios">
            About <span className="text-white">Me</span>{" "}
          </h1>
          <h3 className="text-4xl text-white font-radios">
            I&apos;m a{" "}
            <span className="text-[#00e1ff] font-sans font-bold">
              Web Developer
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
              <div className="p-2 border-2 border-blues text-[#00e1ff] hover:text-light-black rounded-full hover:bg-[#00e1ff] hover:-translate-y-1 hover:shadow-md hover:shadow-[#00e1ff] hover:scale-110 transition-all duration-300 ease-in-out">
                <FaLinkedin size={20} className="hover:text-light-black" />
              </div>
            </Link>

            <Link>
              <div className="p-2 border-2 border-blues text-[#00e1ff] hover:text-light-black rounded-full hover:bg-[#00e1ff] hover:-translate-y-1 hover:shadow-md hover:shadow-[#00e1ff] hover:scale-110 transition-all duration-300 ease-in-out">
                <FaGithub size={20} className="hover:text-light-black" />
              </div>
            </Link>

            <Link>
              <div className="p-2 border-2 border-blues text-[#00e1ff] hover:text-light-black rounded-full hover:bg-[#00e1ff] hover:-translate-y-1 hover:shadow-md hover:shadow-[#00e1ff] hover:scale-110 transition-all duration-300 ease-in-out">
                <IoLogoWhatsapp size={20} className="hover:text-light-black" />
              </div>
            </Link>

            <Link>
              <div className="p-2 border-2 border-blues text-[#00e1ff] hover:text-light-black rounded-full hover:bg-[#00e1ff] hover:-translate-y-1 hover:shadow-md hover:shadow-[#00e1ff] hover:scale-110 transition-all duration-300 ease-in-out">
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
      </div>
      <div className="items-start justify-center hidden mt-3 md:flex gap-x-16">
        <div className="flex flex-col items-center justify-center p-6 text-xs transition-all duration-500 ease-in-out shadow-lg cursor-pointer rounded-2xl gap-y-3 shadow-blues hover:scale-110 group hover:shadow-lg hover:shadow-blues">
          <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-500 ease-out rounded bg-blues -z-1 group-hover:w-full group-hover:h-full"></span>
          <FaReact
            className="z-10 text-blues group-hover:text-black"
            size={60}
          />
          <h1 className="z-10 text-4xl font-bold text-white group-hover:text-black">
            10+
          </h1>
          <h3 className="z-10 text-xl text-blues font-radios group-hover:text-black">
            Front-end Projects
          </h3>
        </div>

        <div className="flex flex-col items-center justify-center p-6 transition-all duration-500 ease-in-out shadow-lg cursor-pointer rounded-2xl gap-y-3 shadow-blues hover:scale-110 group hover:shadow-lg hover:shadow-blues">
          <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-500 ease-out rounded bg-blues -z-1 group-hover:w-full group-hover:h-full"></span>
          <FaNodeJs
            className="z-10 text-blues group-hover:text-black"
            size={60}
          />
          <h1 className="z-10 text-4xl font-bold text-white group-hover:text-black">
            10+
          </h1>
          <h3 className="z-10 text-xl text-blues font-radios group-hover:text-black">
            Back-end Projects
          </h3>
        </div>

        <div className="flex flex-col items-center justify-center p-6 transition-all duration-500 ease-in-out shadow-lg cursor-pointer rounded-2xl gap-y-3 shadow-blues hover:scale-110 group hover:shadow-lg hover:shadow-blues">
          <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-500 ease-out rounded bg-blues -z-1 group-hover:w-full group-hover:h-full"></span>
          <div className="flex gap-x-1">
            <FaHtml5
              className="z-10 text-blues group-hover:text-black"
              size={60}
            />
            <FaCss3
              className="z-10 text-blues group-hover:text-black"
              size={60}
            />
          </div>

          <h1 className="z-10 text-4xl font-bold text-white group-hover:text-black">
            10+
          </h1>
          <h3 className="z-10 text-xl text-blues font-radios group-hover:text-black">
            Html-Css Projects
          </h3>
        </div>

        <div className="flex flex-col items-center justify-center p-6 transition-all duration-500 ease-in-out shadow-lg cursor-pointer rounded-2xl gap-y-3 shadow-blues hover:scale-110 group hover:shadow-lg hover:shadow-blues">
          <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-500 ease-out rounded bg-blues -z-1 group-hover:w-full group-hover:h-full"></span>
          <FaCode
            className="z-10 text-blues group-hover:text-black"
            size={60}
          />

          <h1 className="z-10 text-4xl font-bold text-white group-hover:text-black">
            10+
          </h1>
          <h3 className="z-10 text-xl text-blues font-radios group-hover:text-black">
            Complete Projects
          </h3>
        </div>
      </div>
    </div>
  );
};

export default About;
