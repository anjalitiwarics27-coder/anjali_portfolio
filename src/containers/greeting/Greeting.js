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
          <div>
            <h1
              className={isDark ? "dark-mode greeting-text" : "greeting-text"}
            >
              {greeting.title}
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
            <p
              className={
                isDark ? "dark-mode greeting-meta" : "greeting-meta subTitle"
              }
            >
              9.3 CGPA at IILM University · 3 internships · South Delhi, India
            </p>
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
          <div className="hero-image-card">
            <img
              src={require("../../assets/images/Anjali_image.jpeg")}
              alt="Anjali Tiwari"
              className="hero-photo"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
