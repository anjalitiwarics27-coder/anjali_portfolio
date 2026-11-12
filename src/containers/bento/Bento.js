import React, {useState, useContext} from "react";
import "./Bento.scss";
import StyleContext from "../../contexts/StyleContext";

export default function Bento() {
  const {isDark} = useContext(StyleContext);
  const [activeTab, setActiveTab] = useState("profile");
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    let text = "";
    if (activeTab === "profile") {
      text = `{\n  "name": "Anjali Tiwari",\n  "pronouns": "she/her",\n  "role": "Software Developer & AI Builder",\n  "education": "B.Tech CSE @ IILM University (CGPA 9.3)",\n  "openFor": ["SDE Internships", "AI/ML Roles", "Full-time 2026+"],\n  "passions": ["Deep Learning 🐘", "Clean C++", "Basketball 🏀", "Chai ☕"]\n}`;
    } else if (activeTab === "stack") {
      text = `interface DevToolkit {\n  languages: ["C", "C++", "Python", "Java", "JavaScript"];\n  ai_cv: ["OpenCV", "TensorFlow", "Keras", "CNN", "NumPy"];\n  backend: ["Flask REST APIs", "MySQL", "Binary File I/O"];\n  foundations: ["DSA", "OOP", "SDLC", "Git/GitHub"];\n  editorVibe: "VS Code · Rosé Pine & Tokyo Night 🌙";\n}`;
    } else {
      text = `#!/bin/bash\nwhile [ "$curiosity" = "infinite" ]; do\n  brew_masala_chai --hot\n  solve_leetcode_dsa --target c_plus_plus\n  train_cv_model --dataset wildlife_elephants\n  push_clean_commits --with-love "🌸✨"\ndone`;
    }

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bento-container" id="bento">
      <div className="bento-inner">
        <div className="bento-header">
          <span className="bento-tag">Beyond The Resume</span>
          <h2 className={isDark ? "dark-mode bento-title" : "bento-title"}>
            Behind The <span className="gradient-text">Code</span>
          </h2>
          <p className="bento-subtitle">
            What drives my curiosity, teamwork, and daily engineering rituals
          </p>
        </div>

        <div className="bento-grid">
          {/* Tile 1: Philosophy */}
          <div className="bento-card bento-card-large">
            <div className="bento-icon-badge icon-pink">
              <i className="fas fa-heart"></i>
            </div>
            <div className="bento-content">
              <span className="bento-kicker">My Coding Philosophy</span>
              <h3 className="bento-card-heading">
                Write code humans love reading, and computers love executing.
              </h3>
              <p className="bento-text">
                For me, software engineering isn't about memorizing trivia — it's
                about the joy of turning an ambiguous problem into an elegant,
                modular solution. I care deeply about edge-case handling,
                meaningful variable naming, and making sure that whoever reads my
                code six months from now smiles instead of sighs.
              </p>
              <div className="bento-tags-row">
                <span className="bento-pill">✨ Clean Architecture</span>
                <span className="bento-pill">💡 Empathy in Design</span>
                <span className="bento-pill">🚀 Continuous Growth</span>
              </div>
            </div>
          </div>

          {/* Tile 2: Athlete */}
          <div className="bento-card">
            <div className="bento-icon-badge icon-amber">
              <i className="fas fa-futbol"></i>
            </div>
            <div className="bento-content">
              <span className="bento-kicker">Court to Code</span>
              <h3 className="bento-card-heading">Captaincy &amp; Grit</h3>
              <p className="bento-text">
                Serving as <strong>Basketball Team Captain</strong> and{" "}
                <strong>Nilgiri House Captain</strong> taught me fast
                decision-making under pressure, resilience after tough bugs, and
                how to rally teammates with trust and positive energy.
              </p>
            </div>
          </div>

          {/* Tile 3: Cadet */}
          <div className="bento-card">
            <div className="bento-icon-badge icon-mint">
              <i className="fas fa-shield-alt"></i>
            </div>
            <div className="bento-content">
              <span className="bento-kicker">Cadet Corps</span>
              <h3 className="bento-card-heading">NCC 'A' Discipline</h3>
              <p className="bento-text">
                National Cadet Corps training instilled personal discipline,
                punctuality, and pride in detail. In software, that translates into
                clean git commits, thorough testing, and showing up ready to do the
                heavy lifting.
              </p>
            </div>
          </div>

          {/* Tile 4: Developer Terminal */}
          <div className="bento-card bento-card-span-2 terminal-card">
            <div className="terminal-topbar">
              <div className="terminal-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <div className="terminal-title">anjali@workspace:~</div>
              <button className="terminal-copy-btn" onClick={copyCode}>
                {copied ? "✔ Copied!" : "📋 Copy"}
              </button>
            </div>

            <div className="terminal-tabs">
              <button
                className={`terminal-tab ${activeTab === "profile" ? "active" : ""}`}
                onClick={() => setActiveTab("profile")}
              >
                profile.json
              </button>
              <button
                className={`terminal-tab ${activeTab === "stack" ? "active" : ""}`}
                onClick={() => setActiveTab("stack")}
              >
                stack.ts
              </button>
              <button
                className={`terminal-tab ${activeTab === "rituals" ? "active" : ""}`}
                onClick={() => setActiveTab("rituals")}
              >
                rituals.sh
              </button>
            </div>

            <div className="terminal-code">
              {activeTab === "profile" && (
                <pre>
                  <code>
                    <span className="c-key">"developer"</span>: {"{\n"}
                    {"  "}<span className="c-prop">"name"</span>: <span className="c-str">"Anjali Tiwari"</span>,{"\n"}
                    {"  "}<span className="c-prop">"pronouns"</span>: <span className="c-str">"she/her"</span>,{"\n"}
                    {"  "}<span className="c-prop">"role"</span>: <span className="c-str">"Software Developer &amp; AI Builder"</span>,{"\n"}
                    {"  "}<span className="c-prop">"education"</span>: <span className="c-str">"B.Tech CSE @ IILM University (CGPA 9.3)"</span>,{"\n"}
                    {"  "}<span className="c-prop">"openFor"</span>: [<span className="c-str">"SDE Internships"</span>, <span className="c-str">"AI/ML Roles"</span>],{"\n"}
                    {"  "}<span className="c-prop">"passions"</span>: [<span className="c-str">"Deep Learning 🐘"</span>, <span className="c-str">"Clean C++"</span>, <span className="c-str">"Basketball 🏀"</span>, <span className="c-str">"Chai ☕"</span>]{"\n"}
                    {"}"}
                  </code>
                </pre>
              )}

              {activeTab === "stack" && (
                <pre>
                  <code>
                    <span className="c-key">interface</span> <span className="c-func">DevToolkit</span> {"{\n"}
                    {"  "}languages: [<span className="c-str">"C"</span>, <span className="c-str">"C++"</span>, <span className="c-str">"Python"</span>, <span className="c-str">"Java"</span>, <span className="c-str">"JavaScript"</span>];{"\n"}
                    {"  "}ai_cv: [<span className="c-str">"OpenCV"</span>, <span className="c-str">"TensorFlow"</span>, <span className="c-str">"Keras"</span>, <span className="c-str">"CNN"</span>, <span className="c-str">"NumPy"</span>];{"\n"}
                    {"  "}backend: [<span className="c-str">"Flask REST APIs"</span>, <span className="c-str">"MySQL"</span>, <span className="c-str">"Binary File I/O"</span>];{"\n"}
                    {"  "}foundations: [<span className="c-str">"DSA"</span>, <span className="c-str">"OOP"</span>, <span className="c-str">"SDLC"</span>, <span className="c-str">"Git/GitHub"</span>];{"\n"}
                    {"  "}editorVibe: <span className="c-str">"VS Code · Rosé Pine &amp; Tokyo Night 🌙"</span>;{"\n"}
                    {"}"}
                  </code>
                </pre>
              )}

              {activeTab === "rituals" && (
                <pre>
                  <code>
                    <span className="c-com">#!/bin/bash</span>{"\n"}
                    <span className="c-key">while</span> [ <span className="c-str">"$curiosity"</span> = <span className="c-str">"infinite"</span> ]; <span className="c-key">do</span>{"\n"}
                    {"  "}brew_masala_chai --hot{"\n"}
                    {"  "}solve_leetcode_dsa --target c_plus_plus{"\n"}
                    {"  "}train_cv_model --dataset wildlife_elephants{"\n"}
                    {"  "}push_clean_commits --with-love <span className="c-str">"🌸✨"</span>{"\n"}
                    <span className="c-key">done</span>
                  </code>
                </pre>
              )}
            </div>
          </div>

          {/* Tile 5: Woman in Tech */}
          <div className="bento-card">
            <div className="bento-icon-badge icon-purple">
              <span>🌸</span>
            </div>
            <div className="bento-content">
              <span className="bento-kicker">Representation</span>
              <h3 className="bento-card-heading">Proud Woman in Tech</h3>
              <p className="bento-text">
                Advocating for more women in computer science, robotics, and
                artificial intelligence. I actively share my learning journey,
                mentor peers, and believe tech flourishes with diverse voices.
              </p>
            </div>
          </div>

          {/* Tile 6: Desk Vibe */}
          <div className="bento-card">
            <div className="bento-icon-badge icon-cyan">
              <span>☕</span>
            </div>
            <div className="bento-content">
              <span className="bento-kicker">Desk &amp; Vibe</span>
              <h3 className="bento-card-heading">The Fuel &amp; The Sound</h3>
              <p className="bento-text">
                Fuel of choice: hot cardamom chai. Background score: lo-fi study
                beats. Setup: dual-screen layout with dark pastel themes and a
                notebook full of whiteboard sketches.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

