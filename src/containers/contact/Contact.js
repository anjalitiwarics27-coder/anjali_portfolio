import React, {useContext} from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {contactInfo, greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Contact() {
  const {isDark} = useContext(StyleContext);
  return (
          <div className="main contact-margin-top" id="contact">
        <div className="contact-header">
          <h1 className="heading contact-title">Contact</h1>
          <p
            className={
              isDark ? "dark-mode contact-subtitle" : "subTitle contact-subtitle"
            }
          >
            {contactInfo.subtitle}
          </p>
          <p className="contact-tagline">
            Open to software engineering opportunities, internships, and
            collaborative projects.
          </p>
        </div>

        <div className="contact-div-main">
          <div className="contact-cards">
            {contactInfo.email_address && (
              <a
                className={
                  isDark ? "contact-info-card dark-mode" : "contact-info-card"
                }
                href={"mailto:" + contactInfo.email_address}
              >
                <span className="contact-card-icon icon-email">
                  <i className="fas fa-envelope-open-text"></i>
                </span>
                <span className="contact-card-details">
                  <span className="contact-label">Email Address</span>
                  <span className="contact-value">
                    {contactInfo.email_address}
                  </span>
                </span>
                <span className="contact-card-arrow">
                  <i className="fas fa-arrow-up-right-from-square"></i>
                </span>
              </a>
            )}

            {contactInfo.number && (
              <a
                className={
                  isDark ? "contact-info-card dark-mode" : "contact-info-card"
                }
                href={"tel:" + contactInfo.number.replace(/\s/g, "")}
              >
                <span className="contact-card-icon icon-phone">
                  <i className="fas fa-phone"></i>
                </span>
                <span className="contact-card-details">
                  <span className="contact-label">Phone Number</span>
                  <span className="contact-value">{contactInfo.number}</span>
                </span>
                <span className="contact-card-arrow">
                  <i className="fas fa-phone-flip"></i>
                </span>
              </a>
            )}

            <div
              className={
                isDark ? "contact-info-card dark-mode" : "contact-info-card"
              }
            >
              <span className="contact-card-icon icon-location">
                <i className="fas fa-location-dot"></i>
              </span>
              <span className="contact-card-details">
                <span className="contact-label">Location</span>
                <span className="contact-value">South Delhi, India</span>
              </span>
            </div>
          </div>

          <div
            className={
              isDark ? "contact-cta-card dark-mode" : "contact-cta-card"
            }
          >
            <div className="contact-cta-photo-wrap">
              <img
                src={require("../../assets/images/Anjali_image.jpeg")}
                alt="Anjali Tiwari"
                className="contact-cta-photo"
              />
            </div>
            <h3 className="contact-cta-title">Send a message</h3>
            <p className="contact-cta-desc">I usually reply within 24 hours.</p>
            <div className="contact-cta-social">
              <SocialMedia />
            </div>
            <div className="contact-cta-actions">
              <a
                className="contact-btn contact-btn-email"
                href={"mailto:" + contactInfo.email_address}
              >
                <i className="fas fa-paper-plane"></i> Email Me
              </a>
              {greeting.resumeLink && (
                <a
                  className="contact-btn contact-btn-resume"
                  href={greeting.resumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-file-pdf"></i> View Resume
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
  );
}
