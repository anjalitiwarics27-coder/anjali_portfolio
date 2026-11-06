import React, {useContext} from "react";
import "./StartupProjects.scss";
import {bigProjects} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function StartupProject() {
  function openUrlInNewTab(url) {
    if (!url || url === "#") {
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  const {isDark} = useContext(StyleContext);
  if (!bigProjects.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div>
          <div className="section-header">
            <span className="section-badge">
              <i className="fas fa-rocket"></i> Featured Work
            </span>
            <h1 className="skills-heading">
              Academic <span className="gradient-text">&amp; Featured</span>
              <br />
              Projects
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode project-subtitle"
                  : "subTitle project-subtitle"
              }
            >
              {bigProjects.subtitle}
            </p>
          </div>

          <div className="projects-container">
            {bigProjects.projects.map((project, i) => {
              return (
                <div
                  key={i}
                  className={
                    isDark
                      ? "dark-mode project-card project-card-dark"
                      : "project-card project-card-light"
                  }
                >
                  {project.image ? (
                    <div className="project-image">
                      <img
                        src={project.image}
                        alt={project.projectName}
                        className="card-image"
                        loading="lazy"
                        decoding="async"
                      ></img>
                    </div>
                  ) : null}
                  <div className="project-detail">
                    <h5
                      className={isDark ? "dark-mode card-title" : "card-title"}
                    >
                      {project.projectName}
                    </h5>
                    <p
                      className={
                        isDark ? "dark-mode card-subtitle" : "card-subtitle"
                      }
                    >
                      {project.projectDesc}
                    </p>
                    {project.footerLink ? (
                      <div className="project-card-footer">
                        {project.footerLink.map((link, i) => {
                          const isLive = link.name === "View Live";
                          const url = link.url;
                          const comingSoon = url === "#" || !url;
                          return (
                            <span
                              key={i}
                              className={
                                isDark
                                  ? isLive
                                    ? "dark-mode project-tag project-tag-live"
                                    : "dark-mode project-tag"
                                  : isLive
                                  ? "project-tag project-tag-live"
                                  : "project-tag"
                              }
                              onClick={() => openUrlInNewTab(link.url)}
                              title={
                                comingSoon
                                  ? "Live demo coming soon"
                                  : link.name
                              }
                              style={comingSoon ? {opacity: 0.6} : undefined}
                            >
                              {isLive ? (
                                <>
                                  <i className="fas fa-arrow-up-right-from-square"></i>{" "}
                                  {link.name}
                                </>
                              ) : (
                                <>
                                  <i className="fab fa-github"></i> {link.name}
                                </>
                              )}
                            </span>
                          );
                        })}
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
