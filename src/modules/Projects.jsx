import { Link } from "react-router-dom";
import epic from "../img/Screenshot epic.png";
import travel from "../img/Screenshot travelo.png";
import weather from "../img/Screenshot weather.png";
import backgroundImage from "../images/27230.jpg";
import news from "../img/Screenshot ranchers.png";
import notes from "../img/Screenshot notiaa.png";
import admin from "../img/Screenshot admin.png";
import { FaGlobe } from "react-icons/fa";

import { FaGithub } from "react-icons/fa";
const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center w-full h-full p-0 py-10 mx-auto space-y-16 bg-center bg-cover md:p-16"
      id="projects"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h1 className="text-3xl lg:text-6xl font-semibold text-[#00e1ff] font-radios mt-12">
        <span className="text-white ">My</span> Projects
      </h1>
      <div className="flex flex-col w-[85%] flex-wrap gap-y-11  ">
        <div className=" bg-[#1a1919] gap-y-5 flex flex-col lg:flex-row bg-cover bg-center w-full rounded-xl overflow-hidden mx-auto font-[sans-serif] shadow-lg shadow-[#74f6ff] p-5 transition-all duration-300 ease-in-out cursor-pointer  ">
          <Link href="#">
            <img
              alt="...."
              src={travel}
              className="w-[100%] lg:w-[90%]object-cover h-48 rounded-xl border-2 border-white shadow-lg shadow-cyan-400"
            />
          </Link>
          <div className="w-[80%]">
            <Link href="#">
              <h5 className="mb-2 text-2xl font-bold text-cyan-400 font-radios">
                Travelo Website (Tours & Booking Platform)
              </h5>
            </Link>
            <p className="mb-3 font-normal text-white font-radios">
              Travelo is a front-end project designed for a tour and travel
              website. It features a user-friendly interface for browsing and
              exploring various tours, destinations, and travel services. The
              site emphasizes responsive design, ensuring a seamless experience
              across all devices.
            </p>

            <div className="flex flex-row mb-4 gap-x-2">
              <p className="p-2 text-xs text-white rounded-lg bg-cyan-500 font-radios">
                Html
              </p>
              <p className="p-2 text-xs text-white rounded-lg bg-cyan-500 font-radios">
                Tailwind-Css
              </p>
              <p className="p-2 text-xs text-white rounded-lg bg-cyan-500 font-radios">
                React
              </p>
              <p className="p-2 text-xs text-white rounded-lg bg-cyan-500 font-radios">
                Javascript
              </p>
            </div>
            <div className="flex gap-x-3 ">
              <Link
                to={"https://travelo-zeta.vercel.app/"}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white transition-all duration-300 ease-in-out rounded-lg bg-cyan-400 hover:bg-cyan-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-radios dark:bg-cyan-500 dark:hover:bg-cyan-600"
              >
                View Website
                <FaGlobe size={25} className="ml-2 text-white" />
              </Link>
              <Link
                to={"https://github.com/Zebishah/travelo.git"}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white transition-all duration-300 ease-in-out bg-blue-700 rounded-lg hover:bg-cyan-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-radios dark:bg-cyan-500 dark:hover:bg-cyan-600"
              >
                View Github
                <FaGithub size={25} className="ml-2 text-white" />
              </Link>
            </div>
          </div>
        </div>

        <div className=" bg-[#1a1919] gap-y-5 flex flex-col lg:flex-row bg-cover bg-center w-full rounded-xl overflow-hidden mx-auto font-[sans-serif] shadow-lg shadow-[#74f6ff] p-5 transition-all duration-300 ease-in-out cursor-pointer  ">
          <Link href="#">
            <img
              alt="...."
              src={epic}
              className="w-[100%] lg:w-[90%]w-[100%] lg:w-[90%] object-cover h-48 rounded-xl border-2 border-white shadow-lg shadow-cyan-400"
            />
          </Link>
          <div className="w-[80%]">
            <Link href="#">
              <h5 className="mb-2 text-2xl font-bold text-cyan-400 font-radios">
                Epic Explorer (Tours Travel & Booking Website)
              </h5>
            </Link>
            <p className="mb-3 font-normal text-white font-radios">
              Epic Explorer is a comprehensive tour and travel website that
              enables users to book tours, transport, and hotels seamlessly. The
              platform integrates both frontend and backend functionalities,
              offering secure online payments powered by the Stellar blockchain.
              This project showcases advanced features such as real-time booking
              management and secure transactions.
            </p>

            <div className="flex flex-row flex-wrap mb-4 gap-y-2 gap-x-2">
              <p className="p-2 text-xs text-white rounded-lg bg-cyan-500 font-radios">
                Html
              </p>
              <p className="p-2 text-xs text-white rounded-lg bg-cyan-500 font-radios">
                Tailwind-Css
              </p>
              <p className="p-2 text-xs text-white rounded-lg bg-cyan-500 font-radios">
                React
              </p>
              <p className="p-2 text-xs text-white rounded-lg bg-cyan-500 font-radios">
                Javascript
              </p>
              <p className="p-2 text-xs text-white rounded-lg bg-cyan-500 font-radios">
                NodeJs
              </p>
              <p className="p-2 text-xs text-white rounded-lg bg-cyan-500 font-radios">
                ExpressJs
              </p>
              <p className="p-2 text-xs text-white rounded-lg bg-cyan-500 font-radios">
                MongoDB
              </p>
              <p className="p-2 text-xs text-white rounded-lg bg-cyan-500 font-radios">
                Stellar Blockchain
              </p>
              <p className="p-2 text-xs text-white rounded-lg bg-cyan-500 font-radios">
                Redux
              </p>
            </div>
            <div className="flex gap-x-3 ">
              <Link
                to={"https://epic-explorer-frontend-f8n1.vercel.app/"}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white transition-all duration-300 ease-in-out rounded-lg bg-cyan-400 hover:bg-cyan-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-radios dark:bg-cyan-500 dark:hover:bg-cyan-600"
              >
                View Website
                <FaGlobe size={25} className="ml-2 text-white" />
              </Link>
              <Link
                to={"https://github.com/Zebishah/epic-explorer-tour.git"}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white transition-all duration-300 ease-in-out bg-blue-700 rounded-lg hover:bg-cyan-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-radios dark:bg-cyan-500 dark:hover:bg-cyan-600"
              >
                View Github
                <FaGithub size={25} className="ml-2 text-white" />
              </Link>
            </div>
          </div>
        </div>

        <div className=" bg-[#1a1919] gap-y-5 flex flex-col lg:flex-row bg-cover bg-center w-full rounded-xl overflow-hidden mx-auto font-[sans-serif] shadow-lg shadow-[#74f6ff] p-5 transition-all duration-300 ease-in-out cursor-pointer  ">
          <Link href="#">
            <img
              alt="...."
              src={notes}
              className="w-[100%] lg:w-[90%]w-[100%] lg:w-[90%] object-cover h-48 rounded-xl border-2 border-white shadow-lg shadow-cyan-400"
            />
          </Link>
          <div className="w-[80%]">
            <Link href="#">
              <h5 className="mb-2 text-2xl font-bold text-cyan-400 font-radios">
                Notia Website (User Notes Manager)
              </h5>
            </Link>
            <p className="mb-3 font-normal text-white font-radios">
              Notia is a full-stack web application where users can add, edit,
              and manage their notes and to-dos, providing a seamless experience
              through a user-friendly interface. The application includes robust
              authentication with JWT for secure login and signup processes,
              ensuring user data privacy and security. Built with both frontend
              and backend technologies, Notia offers efficient note and task
              management capabilities.
            </p>

            <div className="flex flex-row flex-wrap mb-4 gap-y-2 gap-x-2">
              <p className="p-2 text-xs text-white rounded-lg bg-cyan-500 font-radios">
                Html
              </p>
              <p className="p-2 text-xs text-white rounded-lg bg-cyan-500 font-radios">
                Tailwind-Css
              </p>
              <p className="p-2 text-xs text-white rounded-lg bg-cyan-500 font-radios">
                React
              </p>
              <p className="p-2 text-xs text-white rounded-lg bg-cyan-500 font-radios">
                Javascript
              </p>
              <p className="p-2 text-xs text-white rounded-lg bg-cyan-500 font-radios">
                NodeJs
              </p>
              <p className="p-2 text-xs text-white rounded-lg bg-cyan-500 font-radios">
                ExpressJs
              </p>
              <p className="p-2 text-xs text-white rounded-lg bg-cyan-500 font-radios">
                MongoDB
              </p>
              <p className="p-2 text-xs text-white rounded-lg bg-cyan-500 font-radios">
                JWT Auth
              </p>
              <p className="p-2 text-xs text-white rounded-lg bg-cyan-500 font-radios">
                Redux
              </p>
            </div>
            <div className="flex gap-x-3 ">
              <Link
                to={"https://app-frontend-nine.vercel.app/"}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white transition-all duration-300 ease-in-out rounded-lg bg-cyan-400 hover:bg-cyan-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-radios dark:bg-cyan-500 dark:hover:bg-cyan-600"
              >
                View Website
                <FaGlobe size={25} className="ml-2 text-white" />
              </Link>
              <Link
                to={"https://github.com/Zebishah/notia222.git"}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white transition-all duration-300 ease-in-out bg-blue-700 rounded-lg hover:bg-cyan-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-radios dark:bg-cyan-500 dark:hover:bg-cyan-600"
              >
                View Github
                <FaGithub size={25} className="ml-2 text-white" />
              </Link>
            </div>
          </div>
        </div>

        <div className=" bg-[#1a1919] gap-y-5 flex flex-col lg:flex-row bg-cover bg-center w-full rounded-xl overflow-hidden mx-auto font-[sans-serif] shadow-lg shadow-[#74f6ff] p-5 transition-all duration-300 ease-in-out cursor-pointer  ">
          <Link href="#">
            <img
              alt="...."
              src={admin}
              className="w-[100%] lg:w-[90%]w-[100%] lg:w-[90%] object-cover h-48 rounded-xl border-2 border-white shadow-lg shadow-cyan-400"
            />
          </Link>
          <div className="w-[80%]">
            <Link href="#">
              <h5 className="mb-2 text-2xl font-bold text-cyan-400 font-radios">
                Admin Dashboard (Admin Panel Website)
              </h5>
            </Link>
            <p className="mb-3 font-normal text-white font-radios">
              The Admin Dashboard project is a comprehensive web application
              featuring both frontend and backend development. It enables
              administrators to manage all website data efficiently and oversee
              every aspect of the site’s operations. This robust dashboard
              ensures seamless control and administration capabilities for site
              management.
            </p>

            <div className="flex flex-row flex-wrap mb-4 gap-y-2 gap-x-2">
              <p className="p-2 text-xs text-white rounded-lg bg-cyan-500 font-radios">
                Html
              </p>
              <p className="p-2 text-xs text-white rounded-lg bg-cyan-500 font-radios">
                Tailwind-Css
              </p>
              <p className="p-2 text-xs text-white rounded-lg bg-cyan-500 font-radios">
                React
              </p>
              <p className="p-2 text-xs text-white rounded-lg bg-cyan-500 font-radios">
                Javascript
              </p>
              <p className="p-2 text-xs text-white rounded-lg bg-cyan-500 font-radios">
                NodeJs
              </p>
              <p className="p-2 text-xs text-white rounded-lg bg-cyan-500 font-radios">
                ExpressJs
              </p>
              <p className="p-2 text-xs text-white rounded-lg bg-cyan-500 font-radios">
                MongoDB
              </p>
              <p className="p-2 text-xs text-white rounded-lg bg-cyan-500 font-radios">
                Redux
              </p>
            </div>
            <div className="flex gap-x-3 ">
              <Link
                to={"https://adminpanel-liart.vercel.app/"}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white transition-all duration-300 ease-in-out rounded-lg bg-cyan-400 hover:bg-cyan-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-radios dark:bg-cyan-500 dark:hover:bg-cyan-600"
              >
                View Website
                <FaGlobe size={25} className="ml-2 text-white" />
              </Link>
              <Link
                to={"https://github.com/Zebishah/admin-panel-.git"}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white transition-all duration-300 ease-in-out bg-blue-700 rounded-lg hover:bg-cyan-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-radios dark:bg-cyan-500 dark:hover:bg-cyan-600"
              >
                View Github
                <FaGithub size={25} className="ml-2 text-white" />
              </Link>
            </div>
          </div>
        </div>

        <div className=" bg-[#1a1919] gap-y-5 flex flex-col lg:flex-row bg-cover bg-center w-full rounded-xl overflow-hidden mx-auto font-[sans-serif] shadow-lg shadow-[#74f6ff] p-5 transition-all duration-300 ease-in-out cursor-pointer  ">
          <Link href="#">
            <img
              alt="...."
              src={news}
              className="w-[100%] lg:w-[90%]w-[100%] lg:w-[90%] object-cover h-48 rounded-xl border-2 border-white shadow-lg shadow-cyan-400"
            />
          </Link>
          <div className="w-[80%]">
            <Link href="#">
              <h5 className="mb-2 text-2xl font-bold text-cyan-400 font-radios">
                Ranchers Website (Food order platform)
              </h5>
            </Link>
            <p className="mb-3 font-normal text-white font-radios">
              Developed a dynamic food delivery website with a responsive
              frontend that fetches real-time data from a food delivery API.
              Users can browse and order from a wide range of restaurants and
              cuisines. The site ensures timely and efficient food delivery,
              enhancing user satisfaction with an intuitive and visually
              appealing interface.
            </p>

            <div className="flex flex-row mb-4 gap-x-2">
              <p className="p-2 text-xs text-white rounded-lg bg-cyan-500 font-radios">
                Html
              </p>
              <p className="p-2 text-xs text-white rounded-lg bg-cyan-500 font-radios">
                Css
              </p>
              <p className="p-2 text-xs text-white rounded-lg bg-cyan-500 font-radios">
                React
              </p>
              <p className="p-2 text-xs text-white rounded-lg bg-cyan-500 font-radios">
                Javascript
              </p>
              <p className="p-2 text-xs text-white rounded-lg bg-cyan-500 font-radios">
                Swiper
              </p>
            </div>
            <div className="flex gap-x-3 ">
              <Link
                to={"https://food-order-website-iota.vercel.app/"}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white transition-all duration-300 ease-in-out rounded-lg bg-cyan-400 hover:bg-cyan-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-radios dark:bg-cyan-500 dark:hover:bg-cyan-600"
              >
                View Website
                <FaGlobe size={25} className="ml-2 text-white" />
              </Link>
              <Link
                to={"https://github.com/Zebishah/food-order-website.git"}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white transition-all duration-300 ease-in-out bg-blue-700 rounded-lg hover:bg-cyan-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-radios dark:bg-cyan-500 dark:hover:bg-cyan-600"
              >
                View Github
                <FaGithub size={25} className="ml-2 text-white" />
              </Link>
            </div>
          </div>
        </div>

        <div className=" bg-[#1a1919] gap-y-5 flex flex-col lg:flex-row bg-cover bg-center w-full rounded-xl overflow-hidden mx-auto font-[sans-serif] shadow-lg shadow-[#74f6ff] p-5 transition-all duration-300 ease-in-out cursor-pointer  ">
          <Link href="#">
            <img
              alt="...."
              src={weather}
              className="w-[100%] lg:w-[90%]w-[100%] lg:w-[90%] object-cover h-48 rounded-xl border-2 border-white shadow-lg shadow-cyan-400"
            />
          </Link>
          <div className="w-[80%]">
            <Link href="#">
              <h5 className="mb-2 text-2xl font-bold text-cyan-400 font-radios">
                Weather Website (Global weather-Forecast)
              </h5>
            </Link>
            <p className="mb-3 font-normal text-white font-radios">
              This project is a weather website built using HTML, CSS, and
              JavaScript, integrated with a weather API for data fetching. It
              allows users to view current weather conditions for any location
              globally. The site provides comprehensive weather information for
              all countries, ensuring users have access to real-time weather
              updates worldwide.
            </p>

            <div className="flex flex-row mb-4 gap-x-2">
              <p className="p-2 text-xs text-white rounded-lg bg-cyan-500 font-radios">
                Html
              </p>
              <p className="p-2 text-xs text-white rounded-lg bg-cyan-500 font-radios">
                Css
              </p>

              <p className="p-2 text-xs text-white rounded-lg bg-cyan-500 font-radios">
                Javascript
              </p>
              <p className="p-2 text-xs text-white rounded-lg bg-cyan-500 font-radios">
                Weather Api
              </p>
            </div>
            <div className="flex gap-x-3 ">
              <Link
                to={"https://weatherapp-by-zebi.netlify.app/"}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white transition-all duration-300 ease-in-out rounded-lg bg-cyan-400 hover:bg-cyan-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-radios dark:bg-cyan-500 dark:hover:bg-cyan-600"
              >
                View Website
                <FaGlobe size={25} className="ml-2 text-white" />
              </Link>
              <Link
                to={"https://github.com/Zebishah/prodigy-wd-weatherapp.git"}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white transition-all duration-300 ease-in-out bg-blue-700 rounded-lg hover:bg-cyan-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-radios dark:bg-cyan-500 dark:hover:bg-cyan-600"
              >
                View Github
                <FaGithub size={25} className="ml-2 text-white" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
