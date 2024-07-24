import "react-circular-progressbar/dist/styles.css";
import { useInView } from "react-intersection-observer";
import { Flat } from "@alptugidin/react-circular-progress-bar";
import backgroundImage from "../images/27230.jpg";
const Skills = () => {
  let data = [
    { percentage: 90, title: "HTML" },
    { percentage: 80, title: "CSS" },
    { percentage: 80, title: "Tailwind-CSS" },
    { percentage: 75, title: "ReactJS" },
    { percentage: 78, title: "NodeJS" },
    { percentage: 75, title: "Redux" },
    { percentage: 80, title: "ExpressJS" },
    { percentage: 80, title: "Javascript" },
    { percentage: 82, title: "MongoDB" },
    { percentage: 70, title: "Git & Github" },
  ];

  const { ref, inView } = useInView({
    threshold: 1.0, // Trigger when the component is fully visible
  });

  return (
    <div
      className="flex flex-col items-center justify-center w-full h-auto py-12 bg-center bg-cover gap-y-16"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h1 className="text-6xl font-semibold text-blues font-radios">
        <span className="text-white ">My</span> SKills
      </h1>

      <div
        ref={ref} // Add the ref to the container element
        className="flex items-center justify-center flex-wrap p-8 gap-x-12 gap-y-12 w-[90%]"
      >
        {data.map((record, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center px-8 py-4 transition-all duration-500 ease-in-out shadow-lg cursor-pointer gap-y-8 bg-fade-black shadow-blues rounded-2xl hover:scale-110"
          >
            <div className="h-40 w-44">
              <Flat
                progress={inView ? record.percentage : 0} // Update the progress based on inView state
                sx={{
                  strokeColor: "#00e1ff",
                  bgStrokeColor: "#ffffff",
                  barWidth: 10,
                  bgColor: { value: "#4f4f4f", transparency: "14" },
                  valueWeight: "bold",
                  valueColor: "#00e1ff",
                  valueFamily: "Arial",
                  miniCircleColor: "#ffffff",
                }}
              />
            </div>
            <h3 className="z-10 text-2xl font-semibold text-white font-radios group-hover:text-fade-black">
              {record.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
