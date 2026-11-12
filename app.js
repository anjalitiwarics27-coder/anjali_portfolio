/* ==========================================================================
   ANJALI TIWARI - PORTFOLIO INTERACTIVITY (app.js)
   Theme Toggle, Filtering, Terminal Tabs, Cheer Button, Modals, Clipboard & Form
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Theme Toggle (Dark / Light Mode)
  const themeToggleBtn = document.getElementById("theme-toggle-btn");
  const currentTheme = localStorage.getItem("anjali_portfolio_theme") || "dark";

  if (currentTheme === "light") {
    document.body.classList.remove("dark-theme");
    document.body.classList.add("light-theme");
  } else {
    document.body.classList.remove("light-theme");
    document.body.classList.add("dark-theme");
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      if (document.body.classList.contains("light-theme")) {
        document.body.classList.remove("light-theme");
        document.body.classList.add("dark-theme");
        localStorage.setItem("anjali_portfolio_theme", "dark");
      } else {
        document.body.classList.remove("dark-theme");
        document.body.classList.add("light-theme");
        localStorage.setItem("anjali_portfolio_theme", "light");
      }
    });
  }

  // 2. Mobile Navigation Menu Toggle
  const mobileNavToggle = document.getElementById("mobile-nav-toggle");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  if (mobileNavToggle && navMenu) {
    mobileNavToggle.addEventListener("click", () => {
      navMenu.classList.toggle("open");
      mobileNavToggle.classList.toggle("active");
    });

    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("open");
        mobileNavToggle.classList.remove("active");
      });
    });
  }

  // 3. Header Scroll Effect & Back-to-Top Button
  const header = document.getElementById("header");
  const scrollTopBtn = document.getElementById("scroll-top-btn");

  window.addEventListener("scroll", () => {
    if (header) {
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    }

    if (scrollTopBtn) {
      if (window.scrollY > 400) {
        scrollTopBtn.classList.add("visible");
      } else {
        scrollTopBtn.classList.remove("visible");
      }
    }
  });

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  // 4. Active Navigation Indicator on Scroll
  const sections = document.querySelectorAll("section[id]");

  function highlightNavOnScroll() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 130;
      const sectionId = current.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document
          .querySelector(`.nav-link[href*="${sectionId}"]`)
          ?.classList.add("active");
      } else {
        document
          .querySelector(`.nav-link[href*="${sectionId}"]`)
          ?.classList.remove("active");
      }
    });
  }
  window.addEventListener("scroll", highlightNavOnScroll);

  // 5. Skills Category Filter
  const skillFilterBtns = document.querySelectorAll(
    "#skill-filter-tabs .filter-btn"
  );
  const skillCards = document.querySelectorAll(".skill-card");

  skillFilterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      skillFilterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filterValue = btn.getAttribute("data-filter");

      skillCards.forEach(card => {
        if (
          filterValue === "all" ||
          card.getAttribute("data-category") === filterValue
        ) {
          card.classList.remove("hidden");
          card.style.display = "flex";
        } else {
          card.classList.add("hidden");
          card.style.display = "none";
        }
      });
    });
  });

  // 6. Interactive Developer Terminal Tabs
  const terminalTabs = document.querySelectorAll(".terminal-tab");
  const terminalPanels = document.querySelectorAll(".terminal-panel");

  terminalTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      terminalTabs.forEach(t => t.classList.remove("active"));
      terminalPanels.forEach(p => p.classList.remove("active"));

      tab.classList.add("active");
      const targetPanelId = tab.getAttribute("data-tab");
      const targetPanel = document.getElementById(targetPanelId);
      if (targetPanel) {
        targetPanel.classList.add("active");
      }
    });
  });

  // Copy code in terminal
  const copyTerminalBtn = document.getElementById("copy-terminal-btn");
  if (copyTerminalBtn) {
    copyTerminalBtn.addEventListener("click", async () => {
      const activePanel = document.querySelector(".terminal-panel.active pre");
      if (activePanel) {
        try {
          await navigator.clipboard.writeText(activePanel.innerText);
          const orig = copyTerminalBtn.innerHTML;
          copyTerminalBtn.innerHTML =
            '<i class="fa-solid fa-check"></i> Copied!';
          setTimeout(() => {
            copyTerminalBtn.innerHTML = orig;
          }, 2000);
        } catch (e) {
          console.error("Clipboard copy error:", e);
        }
      }
    });
  }

  // 7. Interactive Good Vibes / Cheer Easter Egg Button
  const cheerBtn = document.getElementById("cheer-btn");
  const cheerCountSpan = document.getElementById("cheer-count");
  let cheerCount = parseInt(
    localStorage.getItem("anjali_portfolio_cheers") || "42",
    10
  );
  if (cheerCountSpan) {
    cheerCountSpan.textContent = cheerCount;
  }

  if (cheerBtn) {
    cheerBtn.addEventListener("click", e => {
      cheerCount++;
      localStorage.setItem("anjali_portfolio_cheers", cheerCount);
      if (cheerCountSpan) {
        cheerCountSpan.textContent = cheerCount;
      }

      // Create floating sparkle/heart burst
      createCheerParticles(e.clientX, e.clientY);

      cheerBtn.classList.add("cheered");
      setTimeout(() => cheerBtn.classList.remove("cheered"), 600);
    });
  }

  function createCheerParticles(x, y) {
    const emojis = ["💖", "✨", "🌸", "💜", "🚀", "💻", "⭐"];
    for (let i = 0; i < 7; i++) {
      const particle = document.createElement("span");
      particle.className = "floating-cheer-particle";
      particle.textContent = emojis[Math.floor(Math.random() * emojis.length)];

      const angle = (Math.PI * 2 * i) / 7;
      const distance = 40 + Math.random() * 50;
      const destX = Math.cos(angle) * distance;
      const destY = Math.sin(angle) * distance - 30;

      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;
      particle.style.setProperty("--tx", `${destX}px`);
      particle.style.setProperty("--ty", `${destY}px`);

      document.body.appendChild(particle);

      setTimeout(() => {
        particle.remove();
      }, 1000);
    }
  }

  // 8. Clipboard Copy for Email & Phone
  const copyBtns = document.querySelectorAll(".copy-btn");

  copyBtns.forEach(btn => {
    btn.addEventListener("click", async () => {
      const textToCopy = btn.getAttribute("data-clipboard");
      const tooltip = btn.querySelector(".copy-tooltip");

      try {
        await navigator.clipboard.writeText(textToCopy);
        btn.classList.add("copied");
        if (tooltip) tooltip.textContent = "Copied! 💜";

        setTimeout(() => {
          btn.classList.remove("copied");
          if (tooltip) tooltip.textContent = "Copy";
        }, 2200);
      } catch (err) {
        console.error("Failed to copy text: ", err);
      }
    });
  });

  // 9. Project Details Modal Content & Handling
  const projectDetails = {
    "project-1": {
      title: "AI-Based Doctor-Patient Appointment & Symptom Triage",
      category: "Healthcare AI & Full-Stack Platform",
      period: "Jun – Aug 2026",
      tagline:
        "Connecting patients to the right medical specialists with zero scheduling friction.",
      tech: [
        "Python",
        "Machine Learning",
        "Flask",
        "MySQL",
        "HTML5 / CSS3",
        "REST APIs"
      ],
      summary:
        "An intelligent healthcare scheduling web platform that simplifies clinic visits. Instead of guessing which specialist to visit, patients input symptoms and the system recommends the ideal specialty while handling conflict-free appointment booking in real-time.",
      story:
        "The inspiration came from seeing how overwhelmed outpatient clinics get with mismatched specialist bookings. I built a lightweight supervised triage heuristic that maps patient symptom keywords to specialties (Cardiology, Neurology, Dermatology, Orthopedics) and saves clinician time.",
      features: [
        "Intelligent Symptom Triage: Supervised NLP/ML heuristics categorize reported symptoms and route patients to specialized doctor profiles.",
        "Real-Time Slot Engine: Conflict-free scheduling algorithm checking doctor availability, eliminating double bookings, and providing instant confirmation.",
        "Relational Schema in MySQL: High-integrity relational tables modeling doctors, patients, appointment statuses, and historical consultation logs.",
        "Flask RESTful Backend: Clean modular API endpoints handling authentication, profile updates, appointment CRUD, and automated email notices."
      ],
      githubUrl:
        "https://github.com/anjalitiwarics27-coder/Ai_based_Doctor_Patient_Appointment",
      liveUrl: "#"
    },
    "project-2": {
      title: "Library Management System (AI-Enhanced Heuristic)",
      category: "System Software & Low-Level C Architecture",
      period: "March 2025",
      tagline:
        "Building a high-performance database and recommendation engine entirely in pure C.",
      tech: [
        "C Language",
        "Binary File I/O",
        "AI Heuristics",
        "Data Structures",
        "Memory Management"
      ],
      summary:
        "A blazing fast, dependency-free Library Management System written in standard C. It provides transactional data storage via binary files and incorporates an intelligent substitute-recommendation heuristic when books are out of stock.",
      story:
        "I wanted to understand how database engines and operating systems manage storage under the hood. By handling binary files, pointer arithmetic, and struct serialization manually, I built a reliable system that runs with near-zero memory footprint.",
      features: [
        "Full CRUD Inventory Architecture: Create, search, update, and remove book records, student member profiles, borrow logs, and overdue fine tallies.",
        "Binary File Persistence: Direct disk read/write serialization preserving data across program restarts with ACID-like transactional safety.",
        "Smart Recommendation Heuristic: When a requested book is unavailable, the heuristic evaluates genre similarity, author proximity, and difficulty level to suggest available alternative titles.",
        "Defensive Programming: Memory boundaries checked rigorously to prevent buffer overflows and pointer leaks."
      ],
      githubUrl:
        "https://github.com/anjalitiwarics27-coder/lib_management_using_ai",
      liveUrl: "https://lib-management-using-ai.vercel.app/"
    },
    "project-3": {
      title: "Unique Elephant ID Recognition System with Deep Learning",
      category: "Computer Vision & Wildlife Conservation Tech",
      period: "Mar – Apr 2026",
      tagline:
        "Non-invasive computer vision for wildlife protection at Wildlife Institute of India.",
      tech: [
        "Python",
        "OpenCV",
        "TensorFlow / Keras",
        "CNN",
        "NumPy",
        "Computer Vision"
      ],
      summary:
        "Developed during my research internship at the Wildlife Institute of India, this deep learning system identifies individual wild elephants from field camera-trap imagery without invasive physical tagging.",
      story:
        "Wild elephants frequently come into conflict with human settlements, and traditional tagging is dangerous and stressful for animals. Working with conservation researchers, I engineered computer vision pipelines to isolate unique anatomical landmarks like ear venation, tears, and tusks.",
      features: [
        "OpenCV Image Pipeline: Contrast-limited adaptive histogram equalization (CLAHE), bilateral noise filtering, and edge segmentation to process variable forest lighting and foliage occlusions.",
        "CNN Morphological Classifier: Deep convolutional network trained to extract and match fine-grained anatomical features (ear margins, notch contours, tusk presence).",
        "Ecological Conservation Impact: Equips researchers and forest rangers with automated census capabilities, enabling humane anti-poaching tracking and conflict prevention."
      ],
      githubUrl: "https://github.com/anjalitiwarics27-coder",
      liveUrl: null
    },
    "project-4": {
      title: "Job Portal Smart Recommendation Engine",
      category: "Recommendation Systems & Software Engineering",
      period: "Jun – Aug 2026",
      tagline:
        "Intelligent candidate-job matching engine built at DigiSamaksh Private Limited.",
      tech: [
        "Python",
        "Recommendation Engine",
        "Data Processing",
        "REST APIs",
        "Git"
      ],
      summary:
        "Engineered an automated matching system that evaluates candidate technical skillsets, career history, and role preferences against employer job descriptions to deliver high-confidence match scores.",
      story:
        "Built during my internship at DigiSamaksh, this engine solved applicant drop-off by presenting applicants with jobs that matched their actual technical strengths, while helping recruiters discover qualified talent faster.",
      features: [
        "Skill & Experience Extraction: Cleans and tokenizes unstructured candidate profiles and job requirements for semantic matching.",
        "Weighted Ranking Heuristic: Multi-factor scoring taking into account core technical languages, frameworks, domain experience, and candidate preferences.",
        "API Integration: Seamlessly connected into the existing company platform pipeline with rapid query responses."
      ],
      githubUrl: "https://github.com/anjalitiwarics27-coder",
      liveUrl: null
    }
  };

  const modalBackdrop = document.getElementById("project-modal-backdrop");
  const modalContent = document.getElementById("modal-content");
  const modalCloseBtn = document.getElementById("modal-close-btn");
  const modalTriggerBtns = document.querySelectorAll(".modal-trigger-btn");

  modalTriggerBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const projectId = btn.getAttribute("data-project");
      const project = projectDetails[projectId];

      if (!project) return;

      modalContent.innerHTML = `
        <div class="modal-inner-header">
          <span class="modal-badge"><i class="fa-solid fa-sparkles"></i> ${
            project.category
          } · ${project.period}</span>
          <h2 class="modal-title">${project.title}</h2>
          <p class="modal-tagline">${project.tagline}</p>
        </div>

        <div class="modal-section">
          <h4 class="modal-heading"><i class="fa-solid fa-lightbulb" style="color: var(--accent-primary);"></i> Project Overview & Inspiration</h4>
          <p class="modal-desc">${project.summary}</p>
          <p class="modal-story"><strong>The Backstory:</strong> ${
            project.story
          }</p>
        </div>

        <div class="modal-section">
          <h4 class="modal-heading"><i class="fa-solid fa-code-commit" style="color: var(--accent-emerald);"></i> Technical Highlights & Architecture:</h4>
          <ul class="modal-features-list">
            ${project.features
              .map(f => `<li><span class="feature-bullet">✨</span>${f}</li>`)
              .join("")}
          </ul>
        </div>

        <div class="modal-section">
          <h4 class="modal-heading"><i class="fa-solid fa-microchip" style="color: var(--accent-purple);"></i> Tech Stack:</h4>
          <div class="modal-tech-pills">
            ${project.tech
              .map(t => `<span class="tech-pill">${t}</span>`)
              .join("")}
          </div>
        </div>

        <div class="modal-actions-row">
          <a href="${
            project.githubUrl
          }" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="flex: 1;">
            <i class="fa-brands fa-github"></i> <span>View Code on GitHub</span>
          </a>
          ${
            project.liveUrl && project.liveUrl !== "#"
              ? `<a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" style="flex: 1;">
                   <i class="fa-solid fa-arrow-up-right-from-square"></i> <span>View Live App</span>
                 </a>`
              : ""
          }
        </div>
      `;

      modalBackdrop.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeModal);
  if (modalBackdrop) {
    modalBackdrop.addEventListener("click", e => {
      if (e.target === modalBackdrop) closeModal();
    });
  }

  function closeModal() {
    if (modalBackdrop) {
      modalBackdrop.classList.remove("active");
      document.body.style.overflow = "";
    }
  }

  // 10. Contact Form Handling
  const contactForm = document.getElementById("contact-form");
  const formStatus = document.getElementById("form-status-message");

  if (contactForm && formStatus) {
    contactForm.addEventListener("submit", e => {
      e.preventDefault();

      const name = document.getElementById("form-name").value;
      const email = document.getElementById("form-email").value;
      const subject = document.getElementById("form-subject").value;
      const message = document.getElementById("form-message").value;

      formStatus.className = "form-status-message success";
      formStatus.innerHTML = `
        <strong><i class="fa-solid fa-heart" style="color: #ec4899;"></i> Thank you so much, ${name}!</strong><br>
        Your message has reached me. I'll get back to you within 24 hours! You can also email me directly at <a href="mailto:anjali.tiwari.cs27@iilm.edu?subject=${encodeURIComponent(
          subject
        )}&body=${encodeURIComponent(
        message
      )}" style="color: inherit; text-decoration: underline; font-weight: 700;">anjali.tiwari.cs27@iilm.edu</a> ✨
      `;
      formStatus.style.display = "block";

      contactForm.reset();

      setTimeout(() => {
        formStatus.style.display = "none";
      }, 10000);
    });
  }
});
