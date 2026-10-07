import React from "react";
import "./Button.scss";

export default function Button({text, className, href, newTab, download}) {
  return (
    <div className={className}>
      <a
        className="main-button"
        href={href}
        target={newTab && !download ? "_blank" : undefined}
        rel={newTab && !download ? "noopener noreferrer" : undefined}
        download={download ? "AnjaliTiwariResume.pdf" : undefined}
      >
        {text}
      </a>
    </div>
  );
}
