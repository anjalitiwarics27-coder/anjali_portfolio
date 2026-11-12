import React, {useContext, useState, useEffect} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  workExperiences,
  skillsSection,
  openSource,
  blogSection,
  talkSection,
  achievementSection,
  resumeSection
} from "../../portfolio";

function Header() {
  const {isDark} = useContext(StyleContext);
  const viewExperience = workExperiences.display;
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewBlog = blogSection.display;
  const viewTalks = talkSection.display;
  const viewResume = resumeSection.display;

  const [cheerCount, setCheerCount] = useState(42);
  const [isCheered, setIsCheered] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("anjali_portfolio_cheers");
    if (saved) setCheerCount(parseInt(saved, 10));
  }, []);

  const handleCheer = e => {
    const newCount = cheerCount + 1;
    setCheerCount(newCount);
    localStorage.setItem("anjali_portfolio_cheers", newCount);
    setIsCheered(true);
    setTimeout(() => setIsCheered(false), 500);

    // Floating particles
    const emojis = ["💖", "✨", "🌸", "💜", "🚀", "💻", "⭐"];
    for (let i = 0; i < 6; i++) {
      const p = document.createElement("span");
      p.className = "floating-cheer-particle";
      p.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      p.style.left = `${e.clientX || window.innerWidth - 80}px`;
      p.style.top = `${e.clientY || 40}px`;
      const angle = (Math.PI * 2 * i) / 6;
      const distance = 40 + Math.random() * 40;
      p.style.setProperty("--tx", `${Math.cos(angle) * distance}px`);
      p.style.setProperty("--ty", `${Math.sin(angle) * distance - 25}px`);
      document.body.appendChild(p);
      setTimeout(() => p.remove(), 1000);
    }
  };

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/" className="logo">
          <span className="logo-code">&lt;</span>
          <span className="logo-name">
            Anjali<span className="logo-accent">.code 🌸</span>
          </span>
          <span className="logo-code">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          <li>
            <a href="#bento">Behind Code</a>
          </li>
          {viewSkills && (
            <li>
              <a href="#skills">Skills</a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="#experience">Experience</a>
            </li>
          )}
          {viewOpenSource && (
            <li>
              <a href="#opensource">Projects</a>
            </li>
          )}
          {viewAchievement && (
            <li>
              <a href="#achievements">Achievements</a>
            </li>
          )}
          {viewBlog && (
            <li>
              <a href="#blogs">Beyond Code</a>
            </li>
          )}
          {viewTalks && (
            <li>
              <a href="#talks">Talks</a>
            </li>
          )}
          {viewResume && (
            <li>
              <a
                href={greeting.resumeLink ? greeting.resumeLink : "#resume"}
                target={greeting.resumeLink ? "_blank" : undefined}
                rel={greeting.resumeLink ? "noopener noreferrer" : undefined}
              >
                Resume
              </a>
            </li>
          )}
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li className="header-cheer-li">
            <button
              className={`header-cheer-btn ${isCheered ? "cheered" : ""}`}
              onClick={handleCheer}
              title="Send a cheer! ✨"
              aria-label="Send Cheer"
            >
              <span>💖</span>
              <span>{cheerCount}</span>
            </button>
          </li>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
