import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { useInView } from "react-intersection-observer";
import { Animate } from "react-move";
import { easeQuadInOut } from "d3-ease";
import "react-circular-progressbar/dist/styles.css";
import PropTypes from "prop-types";
const AnimatedCircularProgress = ({ valueEnd, duration }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div ref={ref} className="w-40 h-36">
      {inView && (
        <Animate
          start={() => ({
            value: 0,
          })}
          update={() => ({
            value: [valueEnd],
            timing: {
              duration: duration * 1000,
              ease: easeQuadInOut,
            },
          })}
        >
          {({ value }) => {
            const roundedValue = Math.round(value);
            return (
              <CircularProgressbar
                value={value}
                text={`${roundedValue}%`}
                styles={buildStyles({
                  textSize: "16px",
                  pathTransitionDuration: 0.5,
                  pathColor: "rgba(33, 181, 72)",
                  textColor: "#21b548",
                  trailColor: "#d6d6d6",
                  backgroundColor: "#3e98c7",
                  pathWidth: 10, // Increase the thickness of the progress bar
                  trailWidth: 10, // Increase the thickness of the trail
                })}
              />
            );
          }}
        </Animate>
      )}
    </div>
  );
};
AnimatedCircularProgress.propTypes = {
  duration: PropTypes.number.isRequired,
  valueEnd: PropTypes.number.isRequired,
};
export default AnimatedCircularProgress;
