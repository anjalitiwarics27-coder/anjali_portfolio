import React, {useContext} from "react";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import {greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <div className="hero-pill">
                <span className="hero-status-dot"></span>
                Open for Software Engineering &amp; AI Roles
              </div>
              <h1
                className={
                  isDark ? "dark-mode greeting-text" : "greeting-text"
                }
              >
                {" "}
                {greeting.title}{" "}
                <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>
              <div className="hero-stats">
                <span className="hero-stat-badge">
                  <i className="fas fa-graduation-cap"></i>
                  <strong>9.3 CGPA</strong> @ IILM University
                </span>
                <span className="hero-stat-badge">
                  <i className="fas fa-briefcase"></i>
                  <strong>3</strong> Internships
                </span>
                <span className="hero-stat-badge">
                  <i className="fas fa-location-dot"></i>
                  South Delhi, India
                </span>
              </div>
              <div id="resume" className="empty-div"></div>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                {greeting.resumeLink && (
                  <Button
                    text="See my resume"
                    className="download-link-button"
                    href={greeting.resumeLink}
                    newTab={true}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <div className="hero-image-glow"></div>
            <div className="hero-image-card hero-photo-card">
              <div className="hero-photo-wrap">
                <img
                  src={require("../../assets/images/Anjali_image.jpeg")}
                  alt="Anjali Tiwari — Software Engineer"
                  className="hero-photo"
                  loading="eager"
                  decoding="async"
                />
                <div className="hero-photo-overlay"></div>
                <div className="hero-name-plate">
                  <span className="hero-name">Anjali Tiwari</span>
                  <span className="hero-role">
                    Software Engineer • AI/ML Developer
                  </span>
                </div>
              </div>
              <div className="hero-badge hero-badge-1">
                <i className="fab fa-python" style={{color: "#38bdf8"}}></i>
                <span>Python &amp; AI</span>
              </div>
              <div className="hero-badge hero-badge-2">
                <i className="fas fa-laptop-code" style={{color: "#a855f7"}}></i>
                <span>C++ &amp; DSA</span>
              </div>
              <div className="hero-badge hero-badge-3">
                <i className="fab fa-java" style={{color: "#f97316"}}></i>
                <span>Java Full Stack</span>
              </div>
              <div className="hero-badge hero-badge-4">
                <i className="fas fa-database" style={{color: "#10b981"}}></i>
                <span>MySQL &amp; APIs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
