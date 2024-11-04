import React from "react";
import { Element } from "react-scroll";
import About from "../../Asset/about1.jpg";
import "./AboutContainer.css";
const AboutContainer = () => {
  return (
    <Element>
    <div className="aboutHeading">
        <h1>About Me</h1>
      </div>
      <div className="aboutcontainer" id="about">
        <div className="aboutcontainer_image">
          <img src={About} alt=""></img>
        </div>
        <div className="aboutcontainer_text">
          <p>
            Welcome to my portfolio! I'm Surendar, a passionate frontend
            developer eager to embark on a journey of crafting beautiful and
            functional web experiences.
            <br></br>I specialize in frontend technologies such as HTML5, CSS3,
            and JavaScript, with a keen eye for detail and design aesthetics. I
            love bringing designs to life, creating responsive and intuitive
            user interfaces that leave a lasting impression.
            <br></br>
            What drives me is the endless potential for innovation in this
            field. I'm always eager to learn and adapt to new technologies and
            methodologies, constantly honing my skills to stay at the forefront
            of the ever-evolving web development landscape.
          </p>
        </div>
      </div>
    </Element>
  );
};

export default AboutContainer;
