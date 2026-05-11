import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const resumeHref = `${import.meta.env.BASE_URL}Zachery%20Molzner%20Resume.docx`;
const profileImageSrc = `${import.meta.env.BASE_URL}IMG_0565(1).jpg`;
const profileImageWidth = 2323;
const profileImageHeight = 3193;

const contactLinks = {
  // Update these values when you want to change your public contact links.
  email: "Zamolzner@gmail.com",
  emailHref: "mailto:Zamolzner@gmail.com",
  github: "https://github.com/ZachMolzner",
  linkedin: "https://www.linkedin.com/in/zmolzner",
};

const identityBadges = [
  "Educator",
  "Software Engineer",
  "Instructional Designer",
  "React Developer",
  "EdTech Builder",
];

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      "JavaScript (ES6+)",
      "React",
      "HTML5",
      "CSS3",
      "Responsive Design",
      "Component Architecture",
      "Dynamic UI Rendering",
      "State Management",
    ],
  },
  {
    title: "Backend Development",
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "JWT Authentication",
      "API Integration",
      "Data Organization",
    ],
  },
  {
    title: "Tools & Workflow",
    skills: [
      "Git",
      "GitHub",
      "GitHub Actions",
      "npm",
      "Webpack",
      "Vite",
      "Agile Collaboration",
      "Documentation",
    ],
  },
  {
    title: "Architecture & Concepts",
    skills: [
      "MVC Architecture",
      "Object-Oriented Programming",
      "Component Architecture",
      "Systems Thinking",
      "Workflow Design",
      "Problem Solving",
      "Maintainable Code",
    ],
  },
  {
    title: "Instructional Design & Education",
    skills: [
      "Curriculum Development",
      "Instructional Design",
      "Technical Training",
      "Learning Systems",
      "Educational Technology",
      "Classroom Management",
      "Data Analysis",
    ],
  },
  {
    title: "Leadership & Communication",
    skills: [
      "Public Speaking",
      "Team Leadership",
      "Mentorship",
      "Staff Development",
      "Operational Organization",
      "Communication",
      "Adaptability",
    ],
  },
];

const bringItems = [
  {
    title: "Classroom-Tested Communication",
    text: "More than ten years in education taught me how to read a room, explain difficult ideas without making people feel small, and adjust my communication for different learners, teammates, and personalities. That shows up in engineering when I am breaking down a technical problem, presenting a feature decision, writing documentation, or helping someone understand how a system works.",
  },
  {
    title: "Systems & Strategic Thinking",
    text: "I naturally look for structure: the workflow behind the problem, the rules that shape behavior, and the small changes that make a system easier to use over time. That mindset connects my interest in tactical games, dashboards, AI assistants, and educational tools with the engineering work of designing maintainable architecture, clean data flow, and practical interfaces.",
  },
  {
    title: "Full-Stack Problem Solving",
    text: "My technical growth is centered on building real applications with React, JavaScript, APIs, backend services, authentication, and organized data. I care about the full path from a user need to a working feature: responsive UI, clear state, reliable routes, protected access, readable code, and decisions that make the next feature easier to build.",
  },
  {
    title: "Leadership & Reliability",
    text: "In education, I have been trusted with responsibility for students, staff support, training, daily operations, and initiatives that needed steady follow-through. I am used to being someone people rely on: staying calm under pressure, solving problems quickly, communicating clearly, and adapting when the plan changes. That reliability is the same standard I bring to a development team.",
  },
];

const resumeHighlights = [
  {
    title: "Career Summary",
    text: "Former educator and emerging software engineer combining MERN stack training with 13+ years of leadership, communication, instructional systems, and operational problem-solving experience. I build responsive, user-focused applications and bring a practical understanding of how people learn, work, and adopt new tools.",
  },
  {
    title: "Education & Certifications",
    text: "Software engineering training focused on JavaScript, React, Node.js, Express, MongoDB, REST APIs, authentication, responsive UI development, and modern front-end workflows, supported by extensive professional experience in curriculum development, instructional leadership, and technical training.",
  },
  {
    title: "Technical Skills",
    text: "JavaScript (ES6+), React, HTML5, CSS3, Node.js, Express.js, MongoDB, REST APIs, JWT authentication, Git, GitHub, Vite, Webpack, MVC architecture, object-oriented programming, component architecture, API integration, dynamic rendering, and state management.",
  },
  {
    title: "Engineering Experience",
    text: "Built full-stack and front-end portfolio projects using React, JavaScript, API-connected data, authentication workflows, protected routes, reusable components, responsive layouts, and clear UI patterns. Project work includes MERN applications, an AI assistant interface, and systems-driven tools for decision support.",
  },
  {
    title: "Leadership Experience",
    text: "Led classrooms, supported staff and students, developed curriculum and learning systems, trained others, organized operations, used data to guide decisions, and communicated with a wide range of stakeholders. That background strengthened my ability to stay dependable, teach complex concepts, and guide work from ambiguity to action.",
  },
];

const projects = [
  {
    title: "SarahNode AI Assistant",
    type: "AI systems case study",
    status: "Active Development",
    overview:
      "SarahNode is an ongoing personal AI assistant project currently in active development. It combines conversational AI, voice systems, avatar interactions, and event-driven architecture into an immersive local-first companion experience.",
    badges: ["AI", "React", "Systems"],
    keyFeatures: [
      "Local-first assistant workflow",
      "Real-time WebSocket communication",
      "Voice and avatar interaction patterns",
      "Event-driven application architecture",
      "Responsive companion-style interface",
    ],
    stack: ["React", "FastAPI", "WebSockets", "Python", "JavaScript", "CSS"],
    focusAreas: [
      "Real-time systems",
      "AI interaction design",
      "Frontend state orchestration",
      "Assistant experience architecture",
    ],
    learned:
      "This project deepened my experience designing AI-adjacent interfaces, coordinating real-time client-server events, and structuring assistant workflows around clear user feedback loops.",
  },
  {
    title: "Final Fantasy Tactics Party Optimizer",
    type: "Optimization case study",
    overview:
      "A tactical RPG party optimizer built with React that analyzes job roles, party coverage, and character abilities to help users reason through stronger team compositions.",
    badges: ["React", "Frontend", "Systems"],
    keyFeatures: [
      "Party composition analysis",
      "Role and coverage evaluation",
      "Character ability comparison",
      "Decision-support interface",
      "Game-system inspired data modeling",
    ],
    stack: ["React", "JavaScript", "CSS", "State Management"],
    focusAreas: [
      "Optimization logic",
      "Data-driven UI design",
      "Reusable component structure",
      "Systems thinking",
    ],
    learned:
      "This project strengthened my ability to translate complex rule systems into approachable interfaces and build tools that help users compare options, identify gaps, and make informed decisions.",
  },
  {
    title: "WTWR (What To Wear Right Now)",
    type: "Full-stack case study",
    overview:
      "A full-stack weather-based clothing recommendation application that provides users with suggested clothing options based on real-time weather conditions and personalized user data.",
    badges: ["Full-Stack", "React", "MERN"],
    keyFeatures: [
      "Real-time weather integration",
      "User authentication",
      "Clothing item management",
      "Responsive dashboard UI",
      "CRUD functionality",
      "Protected routes",
      "Persistent user data",
    ],
    stack: [
      "React",
      "JavaScript",
      "Node.js",
      "Express",
      "MongoDB",
      "REST APIs",
      "JWT Authentication",
      "CSS",
    ],
    focusAreas: [
      "Full-stack architecture",
      "API integration",
      "Authentication systems",
      "State management",
      "Responsive UI development",
    ],
    learned:
      "This project strengthened my understanding of full-stack workflows, authentication handling, API communication, and connecting front-end interfaces to persistent backend data systems.",
  },
  {
    title: "Spots",
    type: "Full-stack case study",
    overview:
      "A full-stack social photo-sharing web application that allows users to upload images, edit profiles, interact with content, and manage dynamic user data through a responsive interface.",
    badges: ["Full-Stack", "React", "MERN"],
    keyFeatures: [
      "Photo uploads",
      "Profile editing",
      "Dynamic card rendering",
      "Likes and interactions",
      "Responsive design",
      "API-driven updates",
      "Form validation",
    ],
    stack: [
      "React",
      "JavaScript",
      "Node.js",
      "Express",
      "MongoDB",
      "REST APIs",
      "CSS",
      "Webpack/Vite",
    ],
    focusAreas: [
      "Component architecture",
      "Dynamic rendering",
      "Form validation",
      "CRUD operations",
      "User experience design",
    ],
    learned:
      "This project improved my understanding of scalable UI structure, reusable components, API-based rendering, and responsive frontend development.",
  },
  {
    title: "Simple To-Do App",
    type: "Frontend architecture case study",
    overview:
      "A modular task management application built with object-oriented JavaScript principles focused on clean architecture, dynamic interaction, and persistent task tracking.",
    badges: ["Frontend", "JavaScript", "EdTech"],
    keyFeatures: [
      "Task creation/editing",
      "Dynamic DOM updates",
      "Modular OOP structure",
      "Form validation",
      "Local storage persistence",
      "Event-driven interactions",
    ],
    stack: ["JavaScript", "HTML", "CSS", "Local Storage", "OOP Architecture"],
    focusAreas: [
      "Object-oriented programming",
      "Modular code organization",
      "Event handling",
      "Front-end fundamentals",
    ],
    learned:
      "This project helped reinforce core JavaScript fundamentals, modular architecture patterns, and building maintainable frontend applications.",
  },
];


const quickSnapshot = [
  "13+ Years Leadership Experience",
  "MERN Stack Developer",
  "Former Instructional Leader",
  "React & Full-Stack Focus",
  "Based in Arizona • Open to Remote",
  "Building AI + EdTech Systems",
];

const currentlyLearning = [
  "TypeScript",
  "Advanced React patterns",
  "Backend scalability",
  "AI-assisted systems",
  "WebSocket architecture",
  "UI/UX accessibility",
  "Performance optimization",
];

const buildProcess = [
  "Understand the user and the problem",
  "Break the system into clear parts",
  "Build structure before polish",
  "Focus on usability and accessibility",
  "Test, refine, and improve",
  "Keep learning and iterating",
];

const currentFocus = [
  "I am intentionally moving fully into software engineering while continuing to build on the strengths that made me effective in education: patience, structure, clear communication, and a habit of helping people move from confusion to confidence.",
  "Each project is a chance to get sharper with modern engineering practices: React architecture, API design, authentication, state management, testing assumptions, and writing code that another developer could understand and extend.",
  "I am especially drawn to tools that sit at the intersection of technology and learning: EdTech platforms, AI-assisted workflows, dashboards, and applications that make complex information easier to act on.",
  "Right now I am looking for a development team where I can contribute, ask good questions, learn from experienced engineers, and steadily grow into the kind of teammate people trust with important work.",
];

function App() {
  const [projectsOpen, setProjectsOpen] = useState(false);

  return (
    <>
      <header className="site-header">
        <nav className="nav" aria-label="Primary navigation">
          <a className="logo" href="#hero" aria-label="Zach Molzner home">
            ZM
          </a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#bring">What I Bring</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href={resumeHref} download>
              Resume
            </a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      <main>
        <section id="hero" className="hero section-shell">
          <div className="hero-profile">
            <div className="profile-frame">
              <img
                className="profile-image"
                src={profileImageSrc}
                alt="Portrait of Zach Molzner"
                width={profileImageWidth}
                height={profileImageHeight}
                decoding="async"
                fetchPriority="high"
              />
            </div>
          </div>
          <div className="hero-content">
            <p className="eyebrow">Builder + educator + systems thinker</p>
            <h1>Zach Molzner</h1>
            <h2>Software Engineer • Educator • Instructional Designer</h2>
            <p className="hero-pitch">
              I build web apps, learning systems, and student-centered digital
              experiences that make information easier to use, understand, and
              act on.
            </p>
            <p className="mission-line">
              From the classroom to the codebase, I turn complex systems into
              clear, useful experiences.
            </p>
            <div
              className="badge-row"
              aria-label="Professional identity badges"
            >
              {identityBadges.map((badge) => (
                <span className="status-pill" key={badge}>
                  {badge}
                </span>
              ))}
            </div>
            <div className="button-row" aria-label="Portfolio actions">
              <a className="button primary" href={resumeHref} download>
                Download Resume
              </a>
              <a className="button secondary" href="#projects">
                View Projects
              </a>
              <a className="button ghost" href="#contact">
                Contact Me
              </a>
            </div>
          </div>
          <aside
            className="hero-card command-panel"
            aria-label="Career focus summary"
          >
            <span className="panel-label">Mission Brief</span>
            <h3>Building useful systems from a teacher’s point of view.</h3>
            <p>
              After more than a decade in education and instructional
              leadership, I moved into software engineering with the same core
              approach: understand the people, clarify the problem, and build
              something that helps them move forward.
            </p>
            <p>
              Whether I am shaping a React interface, connecting backend
              services, designing an instructional workflow, or experimenting
              with AI-assisted tools, I care about clarity, usability,
              structure, and long-term growth. Teaching taught me to lead,
              adapt, communicate under pressure, and turn complicated ideas into
              practical next steps.
            </p>
            <p>
              Today I am focused on modern web applications, educational
              technology, and systems that combine technical problem-solving
              with a human understanding of how people learn and work.
            </p>
          </aside>
        </section>

        <section
          id="snapshot"
          className="section-shell snapshot-section tech-divider"
          aria-labelledby="snapshot-heading"
        >
          <div className="section-heading compact-heading">
            <p className="section-kicker">Quick Snapshot</p>
            <h2 id="snapshot-heading">Fast signal for where I add value</h2>
          </div>
          <div className="snapshot-grid" aria-label="Portfolio quick snapshot">
            {quickSnapshot.map((item, index) => (
              <article className="snapshot-chip command-panel" key={item}>
                <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <strong>{item}</strong>
              </article>
            ))}
          </div>
        </section>

        <section
          id="about"
          className="section-shell split-section tech-divider"
        >
          <div>
            <p className="section-kicker">About Me</p>
            <h2>Educator mindset. Engineering execution.</h2>
          </div>
          <div className="card large-card command-panel">
            <p>
              I am a former educator transitioning into software engineering
              with a practical, human-centered approach to building technology.
              My classroom experience shaped how I communicate clearly, break
              down complex ideas, design curriculum around outcomes, and guide
              people through challenging problems.
            </p>
            <p>
              Today, I apply that same discipline to full-stack development:
              planning useful features, building responsive interfaces,
              connecting data through APIs, and testing ideas with the end user
              in mind. Whether I am developing a React application or designing
              learning materials, my goal is to create tools that are clear,
              reliable, and genuinely helpful.
            </p>
          </div>
        </section>

        <section id="background" className="section-shell split-section tech-divider">
          <div>
            <p className="section-kicker">Why My Background Matters</p>
            <h2>I build with people in mind, not just code.</h2>
          </div>
          <div className="card large-card command-panel">
            <p>
              I have spent 13+ years explaining complex ideas clearly, guiding
              people through frustration, and helping learners move from
              uncertainty to confidence. That experience makes me stronger as a
              developer because software is never only about syntax; it is about
              how real people think, struggle, learn, and adapt.
            </p>
            <p>
              I have been trusted to lead, train, organize, and solve problems
              under pressure. I bring that same communication, patience,
              structure, and leadership into technical work: clarifying needs,
              breaking systems into understandable parts, documenting decisions,
              and building tools that feel useful for the people using them.
            </p>
          </div>
        </section>

        <section id="bring" className="section-shell tech-divider">
          <div className="section-heading">
            <p className="section-kicker">What I Bring</p>
            <h2>Practical strengths for code, learning, and product teams</h2>
          </div>
          <div className="bring-grid">
            {bringItems.map((item, index) => (
              <article
                className="card feature-card command-panel"
                key={item.title}
              >
                <span className="panel-label">
                  Signal {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section-shell tech-divider">
          <div className="section-heading">
            <p className="section-kicker">Skills</p>
            <h2>Technical depth backed by leadership and learning design</h2>
            <p>
              My background combines software engineering skills with the
              leadership, communication, instructional design, and
              systems-building experience developed over 13+ years in education.
              I am growing as an engineer while bringing a proven ability to
              teach, organize, document, and help people succeed.
            </p>
          </div>
          <div className="skills-grid">
            {skillCategories.map((category) => (
              <SkillGroup
                key={category.title}
                title={category.title}
                skills={category.skills}
              />
            ))}
          </div>
        </section>

        <section id="projects" className="section-shell tech-divider">
          <div className="section-heading">
            <p className="section-kicker">Featured Projects</p>
            <h2>Portfolio work with a builder’s mindset</h2>
          </div>
          <button
            className={`projects-toggle${projectsOpen ? " is-open" : ""}`}
            type="button"
            aria-expanded={projectsOpen}
            aria-controls="project-showcase"
            aria-label={
              projectsOpen
                ? "Collapse featured projects"
                : "Expand featured projects"
            }
            onClick={() => setProjectsOpen((isOpen) => !isOpen)}
          >
            <span className="hamburger-icon" aria-hidden="true">
              <span></span>
              <span></span>
              <span></span>
            </span>
            <span>Projects</span>
          </button>
          <div
            id="project-showcase"
            className={`project-dropdown${projectsOpen ? " is-open" : ""}`}
          >
            <div className="project-grid">
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="resume" className="section-shell tech-divider">
          <div className="resume-card command-panel">
            <div className="resume-intro">
              <p className="section-kicker">Resume Preview</p>
              <h2>A quick scan of the experience behind the portfolio</h2>
              <p>
                This snapshot is not the full resume. It is the short version of
                the throughline: MERN stack development, responsive React work,
                authentication and API experience, and more than a decade of
                trusted leadership in education and learning systems.
              </p>
              {/* Resume file is served from Vite's public assets folder. */}
              <a className="button primary" href={resumeHref} download>
                Download Resume
              </a>
            </div>
            <div className="resume-list" aria-label="Resume highlights">
              {resumeHighlights.map((item) => (
                <ResumeItem
                  key={item.title}
                  title={item.title}
                  text={item.text}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="currently-learning" className="section-shell tech-divider">
          <div className="section-heading">
            <p className="section-kicker">Currently Learning</p>
            <h2>Active growth around modern product engineering</h2>
            <p>
              I am building momentum in the areas that help practical software
              become more scalable, accessible, maintainable, and useful.
            </p>
          </div>
          <ul className="learning-grid" aria-label="Currently learning topics">
            {currentlyLearning.map((item) => (
              <li className="learning-chip command-panel" key={item}>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section id="approach" className="section-shell tech-divider">
          <div className="section-heading">
            <p className="section-kicker">How I Approach Building</p>
            <h2>Systems thinking, clear steps, practical iteration</h2>
            <p>
              My workflow starts with people and structure, then moves toward
              clean execution, accessibility, testing, and steady improvement.
            </p>
          </div>
          <ol className="process-grid">
            {buildProcess.map((step, index) => (
              <li className="process-step command-panel" key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{step}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="current-focus" className="section-shell tech-divider">
          <div className="section-heading">
            <p className="section-kicker">Current Focus</p>
            <h2>Growing into the next version of my work</h2>
            <p>
              I am not trying to erase my education background; I am using it as
              part of the foundation for becoming a thoughtful, reliable
              engineer.
            </p>
          </div>
          <div className="card focus-card current-focus-card command-panel">
            <ul className="focus-list">
              {currentFocus.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section id="outside-code" className="section-shell split-section tech-divider">
          <div>
            <p className="section-kicker">Outside of Code</p>
            <h2>The same curiosity shows up everywhere.</h2>
          </div>
          <div className="card large-card command-panel">
            <p>
              Outside of programming, I am drawn to tactical game systems, AI
              interfaces, immersive technology, teaching, instructional design,
              sci-fi and cyberpunk aesthetics, optimization, and problem solving.
              Those interests keep me thinking about how systems work, how
              people interact with them, and how small design choices can make
              complex experiences easier to navigate.
            </p>
          </div>
        </section>

        <section id="career-focus" className="section-shell tech-divider">
          <div className="section-heading">
            <p className="section-kicker">Career Focus</p>
            <h2>Two aligned paths built on the same strengths</h2>
          </div>
          <div className="focus-grid">
            <article className="card focus-card command-panel">
              <h3>Software Engineering Roles</h3>
              <p>
                I am targeting junior full-stack software engineer and front-end
                developer roles where I can contribute React interfaces,
                API-connected features, responsive layouts, and thoughtful user
                experiences while continuing to grow with a collaborative team.
              </p>
            </article>
            <article className="card focus-card command-panel">
              <h3>Instructional Design / Curriculum Roles</h3>
              <p>
                My education background supports curriculum, instructional
                design, and EdTech roles that require clear learning outcomes,
                engaging materials, assessment strategy, training documentation,
                and the ability to translate complex ideas into practical
                learning experiences.
              </p>
            </article>
          </div>
        </section>

        <section
          id="contact"
          className="section-shell contact-section final-cta tech-divider"
        >
          <div>
            <p className="section-kicker">Contact</p>
            <h2>Let’s Build Something Useful</h2>
            <p>
              I’m open to frontend, full-stack, junior software engineering,
              EdTech, and instructional design opportunities. I’m looking for a
              team where I can grow, contribute, and build practical tools that
              help people.
            </p>
          </div>
          <address className="card contact-card command-panel">
            <span className="panel-label">Open Channel</span>
            {/* TODO: Update contactLinks above when you want to change public contact details. */}
            <div className="button-row contact-actions" aria-label="Contact actions">
              <a
                className="button primary contact-link email-link"
                href={contactLinks.emailHref}
                aria-label={`Email Zach Molzner at ${contactLinks.email}`}
              >
                Email Me
              </a>
              <a className="button secondary" href={resumeHref} download>
                Download Resume
              </a>
              <a className="button ghost" href={contactLinks.linkedin}>
                LinkedIn
              </a>
            </div>
            <a className="contact-detail" href={contactLinks.emailHref}>
              {contactLinks.email}
            </a>
          </address>
        </section>
      </main>
      <footer className="site-footer">
        <div className="footer-inner">
          <a className="logo footer-logo" href="#hero" aria-label="Back to top">
            ZM
          </a>
          <p>
            Designed as a responsive cyberpunk engineering portfolio for
            practical, human-centered software work.
          </p>
          <nav className="footer-links" aria-label="Footer navigation">
            <a href="#projects">Projects</a>
            <a href={resumeHref} download>
              Resume
            </a>
            <a href={contactLinks.emailHref}>Email</a>
          </nav>
        </div>
      </footer>
    </>
  );
}

function ProjectCard({ project, index }) {
  return (
    <article
      className="card project-card command-panel"
      style={{ "--project-delay": `${index * 110}ms` }}
    >
      <div className="project-card-header">
        <div className="project-meta-row">
          <span className="panel-label">
            Project {String(index + 1).padStart(2, "0")}
          </span>
          {project.status && (
            <span className="project-status-badge">{project.status}</span>
          )}
        </div>
        <p className="project-type">{project.type}</p>
        <h3>{project.title}</h3>
        <p className="project-overview">{project.overview}</p>
      </div>

      <div
        className="project-badge-row"
        aria-label={`${project.title} project type badges`}
      >
        {project.badges.map((badge) => (
          <span key={badge}>{badge}</span>
        ))}
      </div>

      <div className="project-detail-grid">
        <ProjectList title="Key Features" items={project.keyFeatures} />
        <ProjectList title="Focus Areas" items={project.focusAreas} />
      </div>

      <div className="project-stack">
        <h4>Technical Stack</h4>
        <div className="tag-row" aria-label={`${project.title} technologies`}>
          {project.stack.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>

      <div className="project-learned">
        <h4>What I Learned</h4>
        <p>{project.learned}</p>
      </div>
    </article>
  );
}

function ProjectList({ title, items }) {
  return (
    <div className="project-list-block">
      <h4>{title}</h4>
      <ul className="project-list">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function SkillGroup({ title, skills }) {
  return (
    <article className="card skill-card command-panel">
      <h3>{title}</h3>
      <ul className="skill-list">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </article>
  );
}

function ResumeItem({ title, text }) {
  return (
    <article>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

createRoot(document.getElementById("root")).render(<App />);
