import React from "react";
import "./Progress.scss";
import {illustration, techStack} from "../../portfolio";
import {Fade} from "react-reveal";
import Build from "../../assets/lottie/build";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";

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
      <Fade bottom duration={1000} distance="20px">
        <div className="skills-container">
          <div className="skills-bar">
            <div className="prof-header">
              <span className="prof-badge">
                <i className="fas fa-chart-line"></i> Core Expertise
              </span>
              <h1 className="skills-heading">
                Pro<span className="prof-gradient-text">ficiency</span>
              </h1>
              <p className="prof-subtitle">
                Honed through internships, projects &amp; coursework ⚡
              </p>
            </div>
            {techStack.experience.map((exp, i) => {
              const progressStyle = {
                width: exp.progressPercentage,
                animationDelay: `${0.15 + i * 0.12}s`
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
            <div className="skills-image-glow"></div>
            <div className="skills-image-card">
              <img
                alt="Proficiency"
                src={process.env.PUBLIC_URL + "/proficiency/image.png"}
              />
            </div>
          </div>
        </div>
      </Fade>
    );
  }
  return null;
}
