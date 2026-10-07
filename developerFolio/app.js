/* ==========================================================================
   ANJALI TIWARI - PORTFOLIO INTERACTIVITY (app.js)
   Theme Toggle, Filtering, Modals, Clipboard Copy & Smooth Scroll
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

  // 2. Mobile Navigation Menu Toggle
  const mobileNavToggle = document.getElementById("mobile-nav-toggle");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  mobileNavToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
    });
  });

  // 3. Header Scroll Effect & Back-to-Top Button
  const header = document.getElementById("header");
  const scrollTopBtn = document.getElementById("scroll-top-btn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

    if (window.scrollY > 400) {
      scrollTopBtn.classList.add("visible");
    } else {
      scrollTopBtn.classList.remove("visible");
    }
  });

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  // 4. Active Navigation Indicator on Scroll
  const sections = document.querySelectorAll("section[id]");

  function highlightNavOnScroll() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
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
  const skillFilterBtns = document.querySelectorAll("#skill-filter-tabs .filter-btn");
  const skillCards = document.querySelectorAll(".skill-card");

  skillFilterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      skillFilterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filterValue = btn.getAttribute("data-filter");

      skillCards.forEach(card => {
        if (filterValue === "all" || card.getAttribute("data-category") === filterValue) {
          card.classList.remove("hidden");
        } else {
          card.classList.add("hidden");
        }
      });
    });
  });

  // 6. Clipboard Copy for Email & Phone
  const copyBtns = document.querySelectorAll(".copy-btn");

  copyBtns.forEach(btn => {
    btn.addEventListener("click", async () => {
      const textToCopy = btn.getAttribute("data-clipboard");
      const tooltip = btn.querySelector(".copy-tooltip");

      try {
        await navigator.clipboard.writeText(textToCopy);
        btn.classList.add("copied");
        if (tooltip) tooltip.textContent = "Copied!";

        setTimeout(() => {
          btn.classList.remove("copied");
          if (tooltip) tooltip.textContent = "Copy";
        }, 2000);
      } catch (err) {
        console.error("Failed to copy text: ", err);
      }
    });
  });

  // 7. Project Details Modal Content & Handling
  const projectDetails = {
    "project-1": {
      title: "AI-Based Doctor-Patient Appointment System",
      category: "Healthcare AI & Full-Stack Platform",
      period: "Jun – Aug 2026",
      tech: ["Python", "Machine Learning", "Flask", "MySQL", "HTML5/CSS3", "REST APIs"],
      summary:
        "An intelligent appointment booking platform designed to bridge the gap between patient symptoms and specialized medical care, automating doctor scheduling and availability management.",
      features: [
        "Symptom Classification Engine: Leveraged supervised machine learning heuristics to map reported user symptoms directly to appropriate doctor specialties (e.g. Cardiology, Neurology, Orthopedics).",
        "Smart Availability Calendar: Real-time conflict-free slot booking algorithm eliminating double bookings and optimizing clinician schedules.",
        "Relational Schema in MySQL: High-integrity database design for doctors, patients, consultation logs, and medical records.",
        "Flask REST API Backend: Modular endpoints handling authentication, profile management, appointment booking, and email confirmations."
      ],
      githubUrl: "https://github.com/anjalitiwarics27-coder/Anjali"
    },
    "project-2": {
      title: "Library Management System (AI-Enhanced)",
      category: "System Software & File Architecture",
      period: "March 2025",
      tech: ["C Language", "File Handling", "AI Heuristics", "Data Structures", "CRUD Operations"],
      summary:
        "A high-performance, file-based Library Management System developed in C Language that replaces paper logging with structured binary file management and an intelligent recommendation heuristic.",
      features: [
        "Full CRUD Operations: Create, Read, Update, and Delete book inventories, student borrowing records, and fine trackers.",
        "Low-Level File Handling: Utilized binary data files for transactional persistence and low memory overhead without requiring an external database server.",
        "AI Recommendation Logic: When a requested book is checked out or out-of-stock, the heuristic engine parses genre and author metadata to automatically recommend the closest available substitute.",
        "Data Validation: Strict input sanitization and boundary checking to prevent buffer overflows and file corruption."
      ],
      githubUrl: "https://github.com/anjalitiwarics27-coder/Anjali"
    },
    "project-3": {
      title: "Unique Elephant ID Recognition System using Deep Learning",
      category: "Computer Vision & Wildlife Conservation",
      period: "Mar – Apr 2026",
      tech: ["Python", "OpenCV", "TensorFlow", "Keras", "CNN", "NumPy"],
      summary:
        "Developed during the research internship at the Wildlife Institute of India to solve the difficult ecological problem of non-invasive individual elephant recognition in wild habitats.",
      features: [
        "Image Preprocessing Pipeline: Employs OpenCV for background contrast enhancement, contour segmentation, and ear edge detection under challenging forest lighting.",
        "CNN Feature Extractor: Deep convolutional networks trained to recognize unique morphological biometric identifiers such as ear cut contours, hole patterns, and tusk configurations.",
        "Conservation Impact: Provides wildlife biologists and forest rangers with an automated tool for ecological census tracking, mitigating human-elephant conflict without physical tagging."
      ],
      githubUrl: "https://github.com/anjalitiwarics27-coder"
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
        <div style="margin-bottom: 16px;">
          <span style="font-size: 0.8rem; font-weight: 700; color: var(--accent-primary); text-transform: uppercase; letter-spacing: 0.05em;">${project.category} (${project.period})</span>
          <h2 style="font-size: 1.5rem; margin-top: 4px; margin-bottom: 12px;">${project.title}</h2>
          <p style="color: var(--text-secondary); font-size: 0.95rem; line-height: 1.6; margin-bottom: 20px;">${project.summary}</p>
        </div>

        <div style="margin-bottom: 24px;">
          <h4 style="font-size: 1rem; margin-bottom: 10px; color: var(--text-primary);"><i class="fa-solid fa-list-check" style="color: var(--accent-primary); margin-right: 6px;"></i> Technical Highlights:</h4>
          <ul style="list-style: none; display: flex; flex-direction: column; gap: 10px;">
            ${project.features.map(f => `<li style="position: relative; padding-left: 20px; font-size: 0.9rem; color: var(--text-secondary); line-height: 1.5;"><span style="position: absolute; left: 0; color: var(--accent-emerald);">✔</span>${f}</li>`).join("")}
          </ul>
        </div>

        <div style="margin-bottom: 28px;">
          <h4 style="font-size: 0.85rem; text-transform: uppercase; color: var(--text-muted); margin-bottom: 10px;">Technologies Used:</h4>
          <div style="display: flex; flex-wrap: wrap; gap: 8px;">
            ${project.tech.map(t => `<span class="tech-pill" style="font-size: 0.8rem; padding: 4px 12px; background: rgba(99, 102, 241, 0.12); border-color: rgba(99, 102, 241, 0.25); color: var(--accent-primary);">${t}</span>`).join("")}
          </div>
        </div>

        <div style="display: flex; gap: 12px;">
          <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="flex: 1;">
            <i class="fa-brands fa-github"></i> View Repository
          </a>
        </div>
      `;

      modalBackdrop.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  });

  modalCloseBtn.addEventListener("click", closeModal);
  modalBackdrop.addEventListener("click", e => {
    if (e.target === modalBackdrop) closeModal();
  });

  function closeModal() {
    modalBackdrop.classList.remove("active");
    document.body.style.overflow = "";
  }

  // 8. Contact Form Handling
  const contactForm = document.getElementById("contact-form");
  const formStatus = document.getElementById("form-status-message");

  contactForm.addEventListener("submit", e => {
    e.preventDefault();

    const name = document.getElementById("form-name").value;
    const email = document.getElementById("form-email").value;
    const subject = document.getElementById("form-subject").value;
    const message = document.getElementById("form-message").value;

    // Simulate sending with helpful user feedback and mailto fallback option
    formStatus.className = "form-status-message success";
    formStatus.innerHTML = `
      <strong><i class="fa-solid fa-circle-check"></i> Thank you, ${name}!</strong><br>
      Your message has been received. You can also send this directly via email to <a href="mailto:anjali.tiwari.cs27@iilm.edu?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}" style="color: inherit; text-decoration: underline;">anjali.tiwari.cs27@iilm.edu</a>.
    `;

    contactForm.reset();

    setTimeout(() => {
      formStatus.style.display = "none";
    }, 9000);
  });
});
