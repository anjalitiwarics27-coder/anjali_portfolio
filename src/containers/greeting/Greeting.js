import React, {useContext} from "react";
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
    <div className="greet-main" id="greeting">
      <div className="greeting-main">
        <div className="greeting-text-div">
          {/* Status Pill */}
          <div className="status-pill">
            <span className="status-dot"></span>
            <span>Open for Software Engineering &amp; AI Roles · Summer 2026 ✨</span>
          </div>

          <h1
            className={isDark ? "dark-mode greeting-text" : "greeting-text"}
          >
            Hi, I'm <span className="gradient-text">Anjali Tiwari</span>{" "}
            <span className="wave-emoji">👋</span>
          </h1>

          <h2 className="greeting-role">
            Software Developer · AI/ML Explorer ·{" "}
            <span className="editorial-highlight">Crafting logic with empathy.</span>
          </h2>

          <p
            className={
              isDark
                ? "dark-mode greeting-text-p"
                : "greeting-text-p subTitle"
            }
          >
            {greeting.subTitle}
          </p>

          {/* Quick Stats Badges */}
          <div className="hero-stats-row">
            <div className="hero-stat-badge">
              <i className="fa fa-graduation-cap" style={{color: "#ec4899"}}></i>
              <span><strong>9.3 CGPA</strong> @ IILM</span>
            </div>
            <div className="hero-stat-badge">
              <i className="fa fa-award" style={{color: "#fbbf24"}}></i>
              <span><strong>Grade 'O'</strong> Full Stack</span>
            </div>
            <div className="hero-stat-badge">
              <i className="fa fa-briefcase" style={{color: "#c084fc"}}></i>
              <span><strong>3</strong> Internships</span>
            </div>
            <div className="hero-stat-badge">
              <i className="fa fa-map-marker" style={{color: "#34d399"}}></i>
              <span>South Delhi, India</span>
            </div>
          </div>

          <SocialMedia />

          <div className="button-greeting-div">
            {greeting.resumeLink && (
              <Button
                text="View Resume 📄"
                className="resume-primary-btn"
                href={greeting.resumeLink}
                newTab={true}
              />
            )}
            <Button text="Explore Projects 🚀" href="#projects" />
            <Button text="Say Hello ☕" href="#contact" />
          </div>
        </div>

        {/* Hero Visual Card with Glowing Ring & Floating Badges */}
        <div className="greeting-image-div">
          <div className="avatar-card-wrapper">
            <div className="avatar-card-glow"></div>
            <div className="avatar-card">
              <div className="avatar-img-container">
                <img
                  src={require("../../assets/images/Anjali_image.jpeg")}
                  alt="Anjali Tiwari - Software Developer"
                  className="avatar-img"
                  loading="eager"
                  decoding="async"
                />
              </div>

              {/* Floating Badges */}
              <div className="floating-badge badge-top-left">
                <span>🌸</span>
                <span>Woman in Tech</span>
              </div>
              <div className="floating-badge badge-top-right">
                <i className="fab fa-python" style={{color: "#38bdf8"}}></i>
                <span>Python &amp; AI</span>
              </div>
              <div className="floating-badge badge-bottom-left">
                <i className="fas fa-laptop-code" style={{color: "#c084fc"}}></i>
                <span>C++ &amp; DSA</span>
              </div>
              <div className="floating-badge badge-bottom-right">
                <span>⚡</span>
                <span>Grade 'O' Full Stack</span>
              </div>

              {/* Sub-card Vibe tag */}
              <div className="avatar-vibe-tag">
                <span className="pulse-dot"></span>
                <span>🎧 Coding Mode · Chai ☕ &amp; Lo-Fi Beats</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
