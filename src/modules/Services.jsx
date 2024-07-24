import { FaNodeJs, FaReact } from "react-icons/fa";
import { FiCode, FiFigma } from "react-icons/fi";
import backgroundImage from "../images/3d-dark-grunge-display-background-with-smoky-atmosphere.jpg";
const Services = () => {
  return (
    <div
      className="flex flex-col items-center justify-center w-full h-screen bg-center bg-cover gap-y-20"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h1 className="text-6xl font-semibold text-blues font-radios">
        <span className="text-white ">My</span> Services
      </h1>
      <div className="flex flex-col xl:flex-row gap-x-14 w-[100%] flex-wrap gap-y-4 justify-center items-center">
        <div className="flex flex-col items-center justify-center p-9 bg-light-black shadow-blues shadow-lg rounded-2xl gap-y-3 w-[80%] xl:w-[25%] hover:scale-110 group hover:shadow-lg hover:shadow-blues transition-all duration-500 ease-in-out cursor-pointer ">
          <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-500 ease-out rounded bg-blues -z-1 group-hover:w-full group-hover:h-full"></span>
          <FaReact
            className="z-10 text-blues group-hover:text-fade-black"
            size={60}
          />
          <h3 className="z-10 text-2xl text-blues font-radios group-hover:text-fade-black">
            Front-end Development
          </h3>
          <p className="z-10 text-sm text-justify text-white font-radios group-hover:text-fade-black">
            I specialize in creating responsive and dynamic user interfaces
            using React and Tailwind CSS. My projects are designed to be
            visually appealing and user-friendly across all devices. I ensure
            efficient state management with Redux Toolkit and implement seamless
            interactions with modern JavaScript and some other Api skills and
            some other basic concepts.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center p-9 bg-light-black shadow-blues shadow-lg rounded-2xl gap-y-3 w-[80%] xl:w-[25%] hover:scale-110 group hover:shadow-lg hover:shadow-blues transition-all duration-500 ease-in-out cursor-pointer">
          <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-500 ease-out rounded bg-blues -z-1 group-hover:w-full group-hover:h-full"></span>
          <FaNodeJs
            className="z-10 text-blues group-hover:text-fade-black"
            size={60}
          />
          <h3 className="z-10 text-2xl text-blues font-radios group-hover:text-fade-black">
            Back-end Development
          </h3>
          <p className="z-10 text-sm text-justify text-white font-radios group-hover:text-fade-black">
            I develop robust and scalable backend systems using Node.js and
            Express, integrating databases like MongoDB for efficient data
            management. My expertise includes creating secure APIs and
            implementing authentication using JWT tokens and implement seamless
            interactions with modern JavaScript and some other basic concepts.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center p-9 bg-light-black shadow-blues shadow-lg rounded-2xl gap-y-3 w-[80%] xl:w-[25%] hover:scale-110 group hover:shadow-lg hover:shadow-blues transition-all duration-500 ease-in-out cursor-pointer">
          <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-500 ease-out rounded bg-blues -z-1 group-hover:w-full group-hover:h-full"></span>
          <FiFigma
            className="z-10 text-blues group-hover:text-fade-black"
            size={60}
          />
          <h3 className="z-10 text-2xl text-blues font-radios group-hover:text-fade-black">
            UI/UX Designing
          </h3>
          <p className="z-10 text-sm text-justify text-white font-radios group-hover:text-fade-black">
            I focus on designing intuitive and aesthetically pleasing user
            interfaces that enhance the overall user experience. By conducting
            user research and creating wireframes, I ensure the design meets
            user needs and business goals. I utilize tools like Figma and Adobe
            XD to create interactive prototypes. My designs prioritize
            accessibility and some other basic concepts.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
