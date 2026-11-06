import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";
import {greeting} from "../../portfolio";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <div className="footer-inner">
          <a href="/" className="footer-logo">
            <span className="grey-color"> &lt;</span>
            <span className="footer-logo-name">{greeting.username}</span>
            <span className="grey-color">/&gt;</span>
          </a>
          <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
            {emoji("Made with ❤️ by Anjali Tiwari")}
          </p>
          <p className="footer-tagline">
            Building intelligent systems with AI, DSA &amp; full-stack engineering ✨
          </p>
        </div>
      </div>
    </Fade>
  );
}
