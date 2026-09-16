/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Anjali Tiwari",
  title: "Hi all, I'm Anjali",
  subTitle: emoji(
    "Aspiring Software Engineer 🚀 with strong knowledge of C, C++, Python, Java, Data Structures & Algorithms, and AI/ML. Passionate about problem-solving, building intelligent applications, and developing scalable systems following SDLC."
  ),
  resumeLink: "mailto:anjali.tiwari.cs27@iilm.edu", // Link to email or resume PDF
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/anjalitiwarics27-coder",
  linkedin: "https://linkedin.com/in/anjali-tiwari-988374285",
  gmail: "anjali.tiwari.cs27@iilm.edu",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "ASPIRING SOFTWARE ENGINEER PASSIONATE ABOUT AI/ML, PROBLEM SOLVING & SYSTEM-LEVEL DEVELOPMENT",
  skills: [
    emoji(
      "⚡ Developing AI & Deep Learning solutions using CNN, RNN, Neural Networks, OpenCV, and TensorFlow"
    ),
    emoji(
      "⚡ Strong foundation in Data Structures, Algorithms (C, C++), Object-Oriented Programming, and Problem Solving"
    ),
    emoji(
      "⚡ Full Stack Web & Application Development using Java, Python, JavaScript, HTML5/CSS3, REST APIs, and MySQL"
    ),
    emoji(
      "⚡ Following SDLC best practices, Agile methodology, and version control using Git and GitHub"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "C",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fas fa-laptop-code"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "HTML-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "MySQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Deep Learning & AI",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "REST APIs",
      fontAwesomeClassname: "fas fa-network-wired"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "IILM University",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Technology in Computer Science and Engineering",
      duration: "2023 - 2027",
      desc: "CGPA: 9.3 | Focused on core Computer Science, Data Structures & Algorithms, AI/ML, and Software Engineering principles.",
      descBullets: [
        "Core Coursework: Data Structures & Algorithms, Object-Oriented Programming (OOP), Database Management Systems (DBMS), Operating Systems, Software Engineering, REST APIs",
        "Leadership: Nilgiri House Captain and Basketball Team Captain (2022-2023) - led teams and organized major collegiate events"
      ]
    }
  ]
};

// Your top proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, // Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Data Structures & Algorithms (C, C++)",
      progressPercentage: "92%"
    },
    {
      Stack: "AI & Machine Learning (CNN, RNN, OpenCV, DL)",
      progressPercentage: "88%"
    },
    {
      Stack: "Programming Languages (Python, Java, C, C++)",
      progressPercentage: "90%"
    },
    {
      Stack: "Database Management (MySQL, Relational DBs)",
      progressPercentage: "85%"
    },
    {
      Stack: "Web Development (HTML, CSS, JavaScript, REST APIs)",
      progressPercentage: "82%"
    },
    {
      Stack: "Concepts & Tools (OOP, SDLC, Git, Agile)",
      progressPercentage: "88%"
    }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true, // Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Development Intern",
      company: "DigiSamaksh Private Limited",
      companylogo: require("./assets/images/saayaHealthLogo.webp"),
      date: "Jun 1 – Aug 10, 2026",
      desc: "Job Portal Recommendation System: Designed and developed an intelligent recommendation system for a job portal to match candidates with relevant job listings based on skills, experience, and preferences.",
      descBullets: [
        "Architected recommendation logic and data processing workflows to improve matching accuracy and candidate experience.",
        "Executed end-to-end system integration, optimizing data pipeline performance and user preference filtering."
      ]
    },
    {
      role: "Research Intern",
      company: "Wildlife Institute of India",
      companylogo: require("./assets/images/nextuLogo.webp"),
      date: "Mar – Apr 2026",
      desc: "Unique Elephant ID Recognition System using Deep Learning: Developed a deep learning-based computer vision system to identify individual elephants using image recognition.",
      descBullets: [
        "Employed Python, OpenCV, TensorFlow/Keras, and NumPy to build an end-to-end feature extraction and classification pipeline.",
        "Applied image preprocessing and Convolutional Neural Network (CNN) models to detect unique features like ear patterns and tusks, enabling accurate wildlife tracking and conservation support."
      ]
    },
    {
      role: "Java Full Stack Developer (Grade: O - Outstanding)",
      company: "EduSkills Virtual Internship (AICTE)",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan – Mar 2026",
      desc: "Completed an intensive 10-week virtual internship on Java Full Stack Development, conducted through the National Internship Portal in association with IILM University, Greater Noida.",
      descBullets: [
        "Earned Grade: O (Outstanding) for exceptional performance across project milestones.",
        "Gained hands-on exposure to full-stack development concepts, enterprise Java patterns, database connectivity, and industry-aligned development tools."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Academic & Featured Projects",
  subtitle: "SYSTEM-LEVEL AND AI-POWERED PROJECTS SHOWCASING FULL-STACK & AI EXPERTISE",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "AI-Based Doctor-Patient Appointment System",
      projectDesc: "Developed an AI-powered appointment booking system connecting doctors and patients, with smart scheduling and availability management. Implemented automated appointment recommendations based on symptoms and doctor specialization. Built using Python, Machine Learning, Flask, and MySQL.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/anjalitiwarics27-coder/Anjali"
        }
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Library Management System (AI-Enhanced)",
      projectDesc: "Built a robust file-based Library Management System using C Language with full CRUD operations to manage books, users, and transactions. Integrated a basic AI-based recommendation feature to suggest alternative books when a searched title is unavailable.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/anjalitiwarics27-coder/Anjali"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements & Certifications 🏆"),
  subtitle:
    "Certifications, Leadership Milestones, and Academic Achievements",

  achievementsCards: [
    {
      title: "Web Development Certification",
      subtitle:
        "Certified by EduSkills (March 2026). Hands-on proficiency in modern responsive web technologies, HTML, CSS, JavaScript, and full-stack concepts.",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "EduSkills Certification",
      footerLink: [
        {
          name: "EduSkills AICTE",
          url: "https://eduskillsfoundation.org/"
        }
      ]
    },
    {
      title: "MySQL Basics Certification",
      subtitle:
        "Certified by Great Learning (November 2024). Mastery in relational database design, indexing, normalization, and complex SQL queries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Great Learning Logo",
      footerLink: [
        {
          name: "Great Learning",
          url: "https://www.mygreatlearning.com/"
        }
      ]
    },
    {
      title: "Java Programming Certification",
      subtitle:
        "Certified by Great Learning (August 2024). Comprehensive coverage of Object-Oriented Programming (OOP), Data Structures, and Core Java development.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Great Learning Logo",
      footerLink: [
        {
          name: "Great Learning",
          url: "https://www.mygreatlearning.com/"
        }
      ]
    },
    {
      title: "C & Python Programming Certifications",
      subtitle:
        "Certified in C Programming Language (March 2024) and Python Programming (July 2023) by Infosys / Springboard.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Infosys Springboard Logo",
      footerLink: [
        {
          name: "Infosys Springboard",
          url: "https://infyspringboard.onwingspan.com/"
        }
      ]
    },
    {
      title: "NCC 'A' Certificate Holder",
      subtitle:
        "Earned NCC 'A' Certificate (2019–2020). Demonstrated discipline, teamwork, physical fitness, and leadership through active national cadet corps activities.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "NCC Logo",
      footerLink: []
    },
    {
      title: "House Captain & Basketball Team Captain",
      subtitle:
        "Nilgiri House Captain and Basketball Team Captain (2022–2023). Led athletic teams, organized major competitive events, and fostered collaborative team culture.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Leadership & Sports",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Hobbies & Technical Interests",
  subtitle:
    "Competitive coding, technical blogging, and continuous learning",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://github.com/anjalitiwarics27-coder",
      title: "Competitive Coding & Problem Solving on LeetCode",
      description:
        "Actively solving algorithmic challenges focusing on Data Structures and Algorithms in C, C++, and Python to refine problem-solving speed and complexity analysis."
    },
    {
      url: "https://linkedin.com/in/anjali-tiwari-988374285",
      title: "Blogging & Content Creation on Social Media",
      description:
        "Writing and sharing content on technology trends, AI/ML breakthroughs, software development practices, and student developer growth."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY KNOWLEDGE AND COLLABORATE WITH PEERS 🎤"
  ),
  talks: [],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "TECH DISCUSSIONS AND EXPERIENCES",
  podcast: [],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download or review my resume profile",
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project, open opportunity, or just want to say hi? My Inbox is open for all.",
  number: "+91 9911211887",
  email_address: "anjali.tiwari.cs27@iilm.edu"
};

// Twitter Section

const twitterDetails = {
  userName: "anjalitiwari",
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Open for software engineering and internship opportunities

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
