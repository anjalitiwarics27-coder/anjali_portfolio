import React from "react";
import "./Progress.scss";
import {techStack} from "../../portfolio";

const ICONS = [
  "fa-diagram-project",
  "fa-brain",
  "fa-code",
  "fa-database",
  "fa-globe",
  "fa-toolbox"
];

export default function StackProgress() {
  if (techStack.viewSkillBars) {
    return (
      <div className="skills-container">
        <div className="skills-bar">
          <div className="prof-header">
            <p className="prof-badge">Core expertise</p>
            <h1 className="skills-heading">Proficiency</h1>
            <p className="prof-subtitle">
              Skills developed through coursework, projects, and internships
            </p>
          </div>
          {techStack.experience.map((exp, i) => {
            const progressStyle = {
              width: exp.progressPercentage
            };
            return (
              <div key={i} className="skill">
                <div className="skill-head">
                  <span className="skill-title">
                    <span className="skill-icon">
                      <i className={`fas ${ICONS[i % ICONS.length]}`}></i>
                    </span>
                    <span>{exp.Stack}</span>
                  </span>
                  <span className="skill-pct">{exp.progressPercentage}</span>
                </div>
                <div className="meter">
                  <span style={progressStyle}></span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="skills-image">
          <div className="skills-image-card">
            <img alt="Skills" src={require("../../assets/images/skill.svg")} />
          </div>
        </div>
      </div>
    );
  }
  return null;
}
