import { FaCircle } from "react-icons/fa";
import backgroundImage from "../images/27230.jpg";
const Experience = () => {
  return (
    <div
      className="flex flex-col items-center justify-center w-full h-full py-16 mx-auto space-y-16 bg-center bg-cover "
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h1 className="text-3xl font-semibold lg:text-6xl text-blues font-radios">
        <span className="text-white ">Work</span> Experience
      </h1>

      <div className="items-center justify-center hidden w-full mx-auto xl:h-screen xl:flex gap-x-4 md:ml-0">
        {/* after:content-[' '] after:w-3 after:h-full after:bg-green-400 */}
        <div className="flex flex-col items-center justify-start gap-y-14 w-[85%] md:w-[30%] h-full ">
          <div className="flex flex-col items-end justify-end mt-1.5 gap-y-4">
            <div className="flex items-center justify-center translate-x-[1.85rem] gap-x-4">
              <p className="text-blues font-radios">2023</p>
              <FaCircle className="text-white " size={18} />
            </div>

            <div className="flex flex-col items-center justify-center gap-y-2 bg-light-black shadow-lg shadow-[#00e1ff] rounded-3xl p-4 hover:scale-110 hover:shadow-lg hover:shadow-blues transition-all ease-in-out duration-500">
              <h3 className="text-[#00e1ff] font-radios font-bold text-lg">
                Remote Frontend Developer Internship
              </h3>
              <p className="text-[#00e1ff] font-radios">
                Company: <span className="text-white">Techno hacks</span>
              </p>
              <p className="text-sm text-center text-white font-radios">
                i did this remote internship at techno hacks software company
                which i found on linkedin and my role was a front end developer
                . i made a lot of projects at that time and that was so amazing
                expereience working and i learned a lot by maing 3 projects....
              </p>
            </div>
          </div>

          <div className="flex flex-col items-end justify-end opacity-90 gap-y-4 md:opacity-0">
            <div className="flex items-center justify-center translate-x-[1.85rem] gap-x-4">
              <p className="text-blues font-radios">2020</p>
              <FaCircle className="text-white " size={18} />
            </div>
            <div className="flex flex-col items-center justify-center gap-y-2 bg-light-black shadow-lg shadow-[#00e1ff] rounded-3xl p-4 md:ml-4 ml-0 hover:scale-110 hover:shadow-lg hover:shadow-blues transition-all ease-in-out duration-500">
              <h3 className="text-[#00e1ff] font-radios font-bold text-lg">
                Model High School
              </h3>
              <p className="text-[#00e1ff] font-radios">
                Marks-Grade : <span className="text-white">934/1100,85%</span>
              </p>
              <p className="text-sm text-center text-white font-radios">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente eos vel esse, alias vitae doloribus eligendi tempora
                repellendus
              </p>
            </div>
          </div>

          <div className="flex flex-col items-end justify-end gap-y-4">
            <div className="flex items-center justify-center translate-x-[1.85rem] gap-x-4">
              <p className="text-blues font-radios">2023</p>
              <FaCircle className="text-white " size={18} />
            </div>
            <div className="flex flex-col items-center justify-center gap-y-2 bg-light-black shadow-lg shadow-[#00e1ff] rounded-3xl p-4 hover:scale-110 hover:shadow-lg hover:shadow-blues transition-all ease-in-out duration-500">
              <h3 className="text-[#00e1ff] font-radios font-bold text-lg">
                Remote web development(Frontend Dev)
              </h3>
              <p className="text-[#00e1ff] font-radios">
                Company: <span className="text-white">Lets Grow More</span>
              </p>
              <p className="text-sm text-center text-white font-radios">
                i did this remote internship at LGM software company which i
                found on linkedin and my role was a front end developer. i made
                a lot of projects at that time and that was so amazing
                experience working and i learned a lot by making 2 projects.
              </p>
            </div>
          </div>
          <div className="relative flex flex-col items-end justify-end opacity-90 gap-y-4 md:opacity-0">
            <div className="flex items-center justify-center translate-x-[1.85rem] gap-x-4">
              <p className="text-blues font-radios">2020</p>
              <FaCircle className="text-white " size={18} />
            </div>
            <div className="flex flex-col items-center justify-center gap-y-2 bg-light-black shadow-lg shadow-[#00e1ff] rounded-3xl p-4 md:ml-4 ml-0 hover:scale-110 hover:shadow-lg hover:shadow-blues transition-all ease-in-out duration-500">
              <h3 className="text-[#00e1ff] font-radios font-bold text-lg">
                Model High School
              </h3>
              <p className="text-[#00e1ff] font-radios">
                Marks-Grade : <span className="text-white">934/1100,85%</span>
              </p>
              <p className="text-sm text-center text-white font-radios">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente eos vel esse, alias vitae doloribus eligendi tempora
                repellendus
              </p>
            </div>
          </div>
        </div>

        <div className="md:flex hidden items-center justify-start w-[0.5%] h-full bg-blues"></div>

        <div className="flex flex-col items-center justify-start gap-y-14 w-[30%] h-full ">
          <div className="flex flex-col items-start justify-start opacity-0 gap-y-4">
            <div className="flex items-center justify-center translate-x-[1.85rem] gap-x-4">
              <FaCircle className="text-white " size={18} />
              <p className="text-blues font-radios">2020</p>
            </div>

            <div className="flex flex-col items-center justify-center gap-y-2 bg-light-black shadow-lg shadow-[#00e1ff] rounded-3xl p-4 hover:scale-110 hover:shadow-lg hover:shadow-blues transition-all ease-in-out duration-500">
              <h3 className="text-[#00e1ff] font-radios font-bold text-lg">
                Model High School
              </h3>
              <p className="text-[#00e1ff] font-radios">
                Marks-Grade : <span className="text-white">934/1100,85%</span>
              </p>
              <p className="text-sm text-center text-white font-radios">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente eos vel esse, alias vitae doloribus eligendi tempora
                repellendus
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start opacity-0 gap-y-4 md:opacity-90">
            <div className="flex items-center justify-center -translate-x-[1.85rem] gap-x-4">
              <FaCircle className="text-white " size={18} />
              <p className="text-blues font-radios">2023</p>
            </div>

            <div className="flex flex-col items-center justify-center gap-y-2 bg-light-black shadow-lg shadow-[#00e1ff] rounded-3xl p-4 hover:scale-110 hover:shadow-lg hover:shadow-blues transition-all ease-in-out duration-500">
              <h3 className="text-[#00e1ff] font-radios font-bold text-lg">
                Remote Web development Internship
              </h3>
              <p className="text-[#00e1ff] font-radios">
                Company: <span className="text-white">Oasis infoByte</span>
              </p>
              <p className="text-sm text-center text-white font-radios">
                i did this remote internship at Oasis infoByte software company
                which i found on linkedin and my role was a front end developer.
                i made a lot of projects at that time and that was so amazing
                experience working and i learned a lot by making some projects
                projects.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start opacity-0 gap-y-4">
            <div className="flex items-center justify-center translate-x-[1.85rem] gap-x-4">
              <FaCircle className="text-white " size={18} />
              <p className="text-blues font-radios">2020</p>
            </div>

            <div className="flex flex-col items-center justify-center gap-y-2 bg-light-black shadow-lg shadow-[#00e1ff] rounded-3xl p-4 hover:scale-110 hover:shadow-lg hover:shadow-blues transition-all ease-in-out duration-500">
              <h3 className="text-[#00e1ff] font-radios font-bold text-lg">
                Model High School
              </h3>
              <p className="text-[#00e1ff] font-radios">
                Marks-Grade : <span className="text-white">934/1100,85%</span>
              </p>
              <p className="text-sm text-center text-white font-radios">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente eos vel esse, alias vitae doloribus eligendi tempora
                repellendus
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start opacity-0 gap-y-4 md:opacity-90">
            <div className="flex items-center justify-center -translate-x-[1.85rem] gap-x-4">
              <FaCircle className="text-white " size={18} />
              <p className="text-blues font-radios">2022,2023</p>
            </div>

            <div className="flex flex-col items-center justify-center gap-y-2 bg-light-black shadow-lg shadow-[#00e1ff] rounded-3xl p-4 hover:scale-110 hover:shadow-lg hover:shadow-blues transition-all ease-in-out duration-500">
              <h3 className="text-[#00e1ff] font-radios font-bold text-lg">
                Academics projects
              </h3>
              <p className="text-[#00e1ff] font-radios">
                institution:{" "}
                <span className="text-white">Islamic university</span>
              </p>
              <p className="text-sm text-center text-white font-radios">
                Led and contributed to multiple university projects, including
                an Online Tour Booking System and a Hospital Managment System
                and some Figma project . Designed backend architectures,
                developed RESTful APIs, and created user-friendly interfaces.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full mx-auto xl:h-screen xl:hidden gap-x-4 md:ml-0">
        {/* after:content-[' '] after:w-3 after:h-full after:bg-green-400 */}
        <div className="flex flex-col items-center justify-start gap-y-14 w-[85%] h-full ">
          <div className="flex flex-col items-end justify-end mt-1.5 gap-y-4">
            <div className="flex items-center justify-center translate-x-[1.85rem] gap-x-4">
              <p className="text-blues font-radios">2023</p>
              <FaCircle className="text-white " size={18} />
            </div>

            <div className="flex flex-col items-center justify-center gap-y-2 bg-light-black shadow-lg shadow-[#00e1ff] rounded-3xl p-4 hover:scale-110 hover:shadow-lg hover:shadow-blues transition-all ease-in-out duration-500">
              <h3 className="text-[#00e1ff] font-radios font-bold text-lg">
                Remote Frontend Developer Internship
              </h3>
              <p className="text-[#00e1ff] font-radios">
                Company: <span className="text-white">Techno hacks</span>
              </p>
              <p className="text-sm text-center text-white font-radios">
                i did this remote internship at techno hacks software company
                which i found on linkedin and my role was a front end developer
                . i made a lot of projects at that time and that was so amazing
                expereience working and i learned a lot by maing 3 projects....
              </p>
            </div>
          </div>

          <div className="flex flex-col items-end justify-end mt-1.5 gap-y-4">
            <div className="flex items-center justify-center translate-x-[1.85rem] gap-x-4">
              <p className="text-blues font-radios">2023</p>
              <FaCircle className="text-white " size={18} />
            </div>
            <div className="flex flex-col items-center justify-center gap-y-2 bg-light-black shadow-lg shadow-[#00e1ff] rounded-3xl p-4 hover:scale-110 hover:shadow-lg hover:shadow-blues transition-all ease-in-out duration-500">
              <h3 className="text-[#00e1ff] font-radios font-bold text-lg">
                Remote Web development Internship
              </h3>
              <p className="text-[#00e1ff] font-radios">
                Company: <span className="text-white">Oasis infoByte</span>
              </p>
              <p className="text-sm text-center text-white font-radios">
                i did this remote internship at Oasis infoByte software company
                which i found on linkedin and my role was a front end developer.
                i made a lot of projects at that time and that was so amazing
                experience working and i learned a lot by making some projects
                projects.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-end justify-end gap-y-4">
            <div className="flex items-center justify-center translate-x-[1.85rem] gap-x-4">
              <p className="text-blues font-radios">2023</p>
              <FaCircle className="text-white " size={18} />
            </div>
            <div className="flex flex-col items-center justify-center gap-y-2 bg-light-black shadow-lg shadow-[#00e1ff] rounded-3xl p-4 hover:scale-110 hover:shadow-lg hover:shadow-blues transition-all ease-in-out duration-500">
              <h3 className="text-[#00e1ff] font-radios font-bold text-lg">
                Remote web development(Frontend Dev)
              </h3>
              <p className="text-[#00e1ff] font-radios">
                Company: <span className="text-white">Lets Grow More</span>
              </p>
              <p className="text-sm text-center text-white font-radios">
                i did this remote internship at LGM software company which i
                found on linkedin and my role was a front end developer. i made
                a lot of projects at that time and that was so amazing
                experience working and i learned a lot by making 2 projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
