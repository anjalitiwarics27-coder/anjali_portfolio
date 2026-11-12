import React, {useContext} from "react";
import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import {skillsSection} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Skills() {
  const {isDark} = useContext(StyleContext);
  if (!skillsSection.display) {
    return null;
  }
  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      <div className="skills-main-div">
        <div className="skills-image-div">
          <div className="skills-image-card">
            <img
              alt="Developer working illustration"
              src={require("../../assets/images/developerActivity.svg")}
            ></img>
          </div>
        </div>
        <div className="skills-text-div">
          <div className="skills-header">
            <span className="skills-badge">
              <i className="fas fa-rocket"></i> Engineering Highlights
            </span>
            <h1
              className={isDark ? "dark-mode skills-heading" : "skills-heading"}
            >
              What I <span className="skills-gradient-text">do</span>
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle skills-text-subtitle"
                  : "subTitle skills-text-subtitle"
              }
            >
              {skillsSection.subTitle}
            </p>
          </div>
          <SoftwareSkill />
          <div className="skills-bullets">
            {skillsSection.skills.map((skills, i) => {
              return (
                <p
                  key={i}
                  className={
                    isDark
                      ? "dark-mode subTitle skills-text"
                      : "subTitle skills-text"
                  }
                >
                  {skills}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
