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
              alt="Skills"
              src={process.env.PUBLIC_URL + "/proficiency/image.png"}
            ></img>
          </div>
        </div>
        <div className="skills-text-div">
          <div className="skills-header">
            <p className="skills-badge">Engineering Highlights</p>
            <h1
              className={isDark ? "dark-mode skills-heading" : "skills-heading"}
            >
              What I do
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
