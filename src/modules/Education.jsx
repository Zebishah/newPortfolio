import { FaCircle } from "react-icons/fa";
import backgroundImage from "../images/dark-plain-gray-wall-product-background.jpg";
const Education = () => {
  return (
    <div
      className="flex flex-col items-center justify-center w-full h-full p-16 mx-auto space-y-16 bg-center bg-cover"
      id="education"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h1 className=" text-3xl lg:text-6xl font-semibold text-[#00e1ff] font-radios">
        <span className="text-white ">My</span> Education
      </h1>

      <div className="items-center justify-center hidden w-full mx-auto ml-24 xl:h-screen xl:flex gap-x-4 md:ml-0">
        {/* after:content-[' '] after:w-3 after:h-full after:bg-green-400 */}
        <div className="flex flex-col items-center justify-start gap-y-14 w-[85%] md:w-[30%] h-full ">
          <div className="flex flex-col items-end justify-end mt-1.5 gap-y-4">
            <div className="flex items-center justify-center translate-x-[1.85rem] gap-x-4">
              <p className="text-blues font-radios">2014</p>
              <FaCircle className="text-white " size={18} />
            </div>

            <div className="flex flex-col items-center justify-center gap-y-2 bg-light-black shadow-lg shadow-[#00e1ff] rounded-3xl p-4 hover:scale-110 hover:shadow-lg hover:shadow-blues transition-all ease-in-out duration-500">
              <h3 className="text-[#00e1ff] font-radios font-bold text-lg">
                FG.Model High School,Wahcantt
              </h3>
              <p className="text-[#00e1ff] font-radios">
                Marks-Grade : <span className="text-white">934/1100,85%</span>
              </p>
              <p className="text-sm text-center text-white font-radios">
                "Completed Matriculation with a strong foundation in core
                subjects, demonstrating a commitment to academic excellence.
                Achieved a solid understanding of fundamental concepts, laying
                the groundwork for future educational pursuits."
              </p>
            </div>
          </div>

          <div className="flex flex-col items-end justify-end opacity-90 gap-y-4 md:opacity-0">
            <div className="flex items-center justify-center translate-x-[1.85rem] gap-x-4">
              <p className="text-blues font-radios">2018</p>
              <FaCircle className="text-white " size={18} />
            </div>
            <div className="flex flex-col items-center justify-center gap-y-2 bg-light-black shadow-lg shadow-[#00e1ff] rounded-3xl p-4 md:ml-4 ml-0 hover:scale-110 hover:shadow-lg hover:shadow-blues transition-all ease-in-out duration-500">
              <h3 className="text-[#00e1ff] font-radios font-bold text-lg">
                F.G Degree College for Men,Wah Cantt
              </h3>
              <p className="text-[#00e1ff] font-radios">
                Marks-Grade : <span className="text-white">916/1100 , 83%</span>
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
              <p className="text-blues font-radios">2020</p>
              <FaCircle className="text-white " size={18} />
            </div>
            <div className="flex flex-col items-center justify-center gap-y-2 bg-light-black shadow-lg shadow-[#00e1ff] rounded-3xl p-4 hover:scale-110 hover:shadow-lg hover:shadow-blues transition-all ease-in-out duration-500">
              <h3 className="text-[#00e1ff] font-radios font-bold text-lg">
                International Islamic University, Islamabad
              </h3>
              <p className="text-[#00e1ff] font-radios">
                Marks-Grade : <span className="text-white">3.67/4.00 Cgpa</span>
              </p>
              <p className="text-sm text-center text-white font-radios">
                "I successfully completed my bachelors studies in software
                engineering degree programme, focusing on developing a strong
                foundation in programming skills and innovative skills This
                experience honed my analytical and critical thinking skills,
                preparing me for higher education and professional challenges."
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
              <p className="text-blues font-radios">2018</p>
            </div>

            <div className="flex flex-col items-center justify-center gap-y-2 bg-light-black shadow-lg shadow-[#00e1ff] rounded-3xl p-4 hover:scale-110 hover:shadow-lg hover:shadow-blues transition-all ease-in-out duration-500">
              <h3 className="text-[#00e1ff] font-radios font-bold text-lg">
                F.G Degree College for Men,Wah Cantt
              </h3>
              <p className="text-[#00e1ff] font-radios">
                Marks-Grade : <span className="text-white">916/1100,83%</span>
              </p>
              <p className="text-sm text-center text-white font-radios">
                "I successfully completed my Intermediate studies, focusing on
                developing a strong foundation in [your main subjects or field,
                e.g., science, commerce, humanities]. This experience honed my
                analytical and critical thinking skills, preparing me for higher
                education and professional challenges."
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
        </div>
      </div>

      <div className="flex items-center justify-center w-full mx-auto xl:h-screen xl:hidden gap-x-4 md:ml-0">
        {/* after:content-[' '] after:w-3 after:h-full after:bg-green-400 */}
        <div className="flex flex-col items-center justify-start gap-y-14 w-[85%] h-full ">
          <div className="flex flex-col items-end justify-end mt-1.5 gap-y-4">
            <div className="flex items-center justify-center translate-x-[1.85rem] gap-x-4">
              <p className="text-blues font-radios">2014</p>
              <FaCircle className="text-white " size={18} />
            </div>

            <div className="flex flex-col items-center justify-center gap-y-2 bg-light-black shadow-lg shadow-[#00e1ff] rounded-3xl p-4 hover:scale-110 hover:shadow-lg hover:shadow-blues transition-all ease-in-out duration-500">
              <h3 className="text-[#00e1ff] font-radios font-bold text-lg">
                FG.Model High School,Wahcantt
              </h3>
              <p className="text-[#00e1ff] font-radios">
                Marks-Grade : <span className="text-white">934/1100,85%</span>
              </p>
              <p className="text-sm text-center text-white font-radios">
                "Completed Matriculation with a strong foundation in core
                subjects, demonstrating a commitment to academic excellence.
                Achieved a solid understanding of fundamental concepts, laying
                the groundwork for future educational pursuits."
              </p>
            </div>
          </div>

          <div className="flex flex-col items-end justify-end opacity-90 gap-y-4 ">
            <div className="flex items-center justify-center translate-x-[1.85rem] gap-x-4">
              <p className="text-blues font-radios">2018</p>
              <FaCircle className="text-white " size={18} />
            </div>
            <div className="flex flex-col items-center justify-center gap-y-2 bg-light-black shadow-lg shadow-[#00e1ff] rounded-3xl p-4 md:ml-4 ml-0 hover:scale-110 hover:shadow-lg hover:shadow-blues transition-all ease-in-out duration-500">
              <h3 className="text-[#00e1ff] font-radios font-bold text-lg">
                F.G Degree College for Men,Wah Cantt
              </h3>
              <p className="text-[#00e1ff] font-radios">
                Marks-Grade : <span className="text-white">916/1100 , 83%</span>
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
              <p className="text-blues font-radios">2020</p>
              <FaCircle className="text-white " size={18} />
            </div>
            <div className="flex flex-col items-center justify-center gap-y-2 bg-light-black shadow-lg shadow-[#00e1ff] rounded-3xl p-4 hover:scale-110 hover:shadow-lg hover:shadow-blues transition-all ease-in-out duration-500">
              <h3 className="text-[#00e1ff] font-radios font-bold text-lg">
                International Islamic University, Islamabad
              </h3>
              <p className="text-[#00e1ff] font-radios">
                Marks-Grade : <span className="text-white">3.67/4.00 Cgpa</span>
              </p>
              <p className="text-sm text-center text-white font-radios">
                "I successfully completed my bachelors studies in software
                engineering degree programme, focusing on developing a strong
                foundation in programming skills and innovative skills This
                experience honed my analytical and critical thinking skills,
                preparing me for higher education and professional challenges."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
