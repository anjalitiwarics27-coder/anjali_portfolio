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
            <span className="grey-color"> &lt;</span>
            <span className="footer-logo-name">{greeting.username}</span>
            <span className="grey-color">/&gt;</span>
          </a>
          <div className="footer-social">
            <SocialMedia />
          </div>
          <nav className="footer-links">
            <a href="#skills">Skills</a>
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
            {emoji("Made with ❤️ by Anjali Tiwari")}
          </p>
          <p className="footer-tagline">
            Building intelligent systems with AI, DSA &amp; full-stack engineering ✨
          </p>
        </div>
      </div>
  );
}
