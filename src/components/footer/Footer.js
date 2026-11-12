import React, {useContext} from "react";
import "./Footer.scss";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";
import {greeting} from "../../portfolio";
import SocialMedia from "../socialMedia/SocialMedia";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
          <div className="footer-div">
        <div className="footer-inner">
          <a href="/" className="footer-logo">
            <span className="logo-code"> &lt;</span>
            <span className="footer-logo-name">Anjali<span className="logo-accent">.code 🌸</span></span>
            <span className="logo-code">/&gt;</span>
          </a>
          <div className="footer-social">
            <SocialMedia />
          </div>
          <nav className="footer-links">
            <a href="#skills">Skills</a>
            <span className="footer-dot">•</span>
            <a href="#bento">Behind Code</a>
            <span className="footer-dot">•</span>
            <a href="#experience">Experiences</a>
            <span className="footer-dot">•</span>
            <a href="#projects">Projects</a>
            <span className="footer-dot">•</span>
            <a href="#achievements">Achievements</a>
            <span className="footer-dot">•</span>
            <a href="#contact">Contact</a>
          </nav>
          <div className="footer-divider"></div>
          <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
            {emoji("Crafted with 💜, chai & clean algorithms by Anjali Tiwari")}
          </p>
          <p className="footer-tagline">
            Proud woman in tech · No robotic templates — authentic human engineering ✨
          </p>
        </div>
      </div>
  );
}
