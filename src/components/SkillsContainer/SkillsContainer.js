import React from "react";
import { Element } from "react-scroll";
import LinearProgress from "@mui/material/LinearProgress";
import "./SkillsContainer.css";

const SkillsContainer = () => {
  return (
    <Element className="skillsContainer" id="skills">
      <div className="skillsContainer_text">
        <h1>Skills</h1>
        <div className="skillsContainer_skills">
          <h5>HTML</h5>
          <div className="skillsContainer_slider skillsContainer_slider1">
            <LinearProgress variant="determinate" value={75} />
          </div>
        </div>
        <div className="skillsContainer_skills">
          <h5>CSS</h5>
          <div className="skillsContainer_slider skillsContainer_slider2">
            <LinearProgress variant="determinate" value={85} />
          </div>
        </div>
        <div className="skillsContainer_skills">
          <h5>JavaScript</h5>
          <div className="skillsContainer_slider skillsContainer_slider3">
            <LinearProgress variant="determinate" value={85} />
          </div>
        </div>
        <div className="skillsContainer_skills">
          <h5>REACT</h5>
          <div className="skillsContainer_slider skillsContainer_slider4">
            <LinearProgress variant="determinate" value={75} />
          </div>
        </div>
        <div className="skillsContainer_skills">
          <h5>Node JS</h5>
          <div className="skillsContainer_slider skillsContainer_slider5">
            <LinearProgress variant="determinate" value={65} />
          </div>
        </div>
      </div>
    </Element>
  );
};

export default SkillsContainer;
