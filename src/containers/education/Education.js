import React from "react";
import "./Education.scss";
import EducationCard from "../../components/educationCard/EducationCard";
import {educationInfo} from "../../portfolio";

export default function Education() {
  if (educationInfo.display) {
    return (
      <div className="education-section" id="education">
        <div className="section-header">
          <span className="section-badge">
            <i className="fas fa-graduation-cap"></i> Academic Journey
          </span>
          <h1 className="education-heading">
            <span className="section-heading">Edu</span>
            <span className="gradient-text">cation</span>
          </h1>
          <p className="section-subtext">
            B.Tech CSE @ IILM University — strong foundation in CS, AI/ML &amp; software engineering
          </p>
        </div>
        <div className="education-card-container">
          {educationInfo.schools.map((school, index) => (
            <EducationCard key={index} school={school} />
          ))}
        </div>
      </div>
    );
  }
  return null;
}
