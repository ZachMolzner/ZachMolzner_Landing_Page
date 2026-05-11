import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const softwareSkills = [
  'JavaScript',
  'React',
  'Node.js',
  'Express',
  'MongoDB',
  'REST APIs',
  'Git/GitHub',
  'Vite',
  'Responsive Design',
];

const educationSkills = [
  'Curriculum Development',
  'Lesson Planning',
  'Assessment Design',
  'Student Engagement',
  'Training Materials',
  'Data-Informed Instruction',
  'EdTech',
];

const projects = [
  {
    title: 'Ivalice Chronicles / Final Fantasy Tactics Party Optimizer',
    description:
      'React app for building and optimizing tactical RPG parties using roles, job data, and party coverage analysis.',
    tags: ['React', 'Game Tools', 'Optimization'],
    // TODO: Replace this placeholder with the real repository URL.
    github: '#',
    // TODO: Replace this placeholder with the real live demo URL.
    demo: '#',
  },
  {
    title: 'SarahNode AI Assistant',
    description:
      'Local-first AI companion project using FastAPI, React, WebSockets, voice, avatar systems, and event-driven architecture.',
    tags: ['React', 'FastAPI', 'WebSockets'],
    // TODO: Replace this placeholder with the real repository URL.
    github: '#',
  },
  {
    title: 'Curriculum / Learning Design Portfolio',
    description:
      'Collection of lesson plans, rubrics, assessments, slide decks, and student-facing learning materials.',
    tags: ['Curriculum', 'Assessment', 'EdTech'],
    // TODO: Replace this placeholder with the real portfolio link when available.
    linkText: 'Coming Soon',
    link: '#',
  },
];

function App() {
  return (
    <>
      <header className="site-header">
        <nav className="nav" aria-label="Primary navigation">
          <a className="logo" href="#hero" aria-label="Zach Molzner home">
            ZM
          </a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#resume">Resume</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      <main>
        <section id="hero" className="hero section-shell">
          <div className="hero-content">
            <p className="eyebrow">Portfolio for software, learning, and product-minded teams</p>
            <h1>Zach Molzner</h1>
            <h2>Software Engineer | Educator | Instructional Designer</h2>
            <p className="hero-pitch">
              Former educator turned software engineer who builds user-friendly web apps,
              learning tools, and technology-driven instructional experiences.
            </p>
            <div className="button-row" aria-label="Portfolio actions">
              <a className="button primary" href="#resume">
                View Resume
              </a>
              <a className="button secondary" href="#projects">
                View Projects
              </a>
              <a className="button ghost" href="#contact">
                Contact Me
              </a>
            </div>
          </div>
          <aside className="hero-card" aria-label="Career focus summary">
            <span className="status-pill">Open to junior roles</span>
            <h3>Blending classroom leadership with full-stack development.</h3>
            <p>
              I bring strong communication, systems thinking, and learner-centered design to
              engineering teams, instructional design groups, and EdTech products.
            </p>
          </aside>
        </section>

        <section id="about" className="section-shell split-section">
          <div>
            <p className="section-kicker">About Me</p>
            <h2>Educator mindset. Engineering execution.</h2>
          </div>
          <div className="card large-card">
            <p>
              I am a former educator transitioning into software engineering with a practical,
              human-centered approach to building technology. My classroom experience shaped how
              I communicate clearly, break down complex ideas, design curriculum around outcomes,
              and guide people through challenging problems.
            </p>
            <p>
              Today, I apply that same discipline to full-stack development: planning useful
              features, building responsive interfaces, connecting data through APIs, and testing
              ideas with the end user in mind. Whether I am developing a React application or
              designing learning materials, my goal is to create tools that are clear, reliable,
              and genuinely helpful.
            </p>
          </div>
        </section>

        <section id="skills" className="section-shell">
          <div className="section-heading">
            <p className="section-kicker">Skills</p>
            <h2>Technical and instructional strengths</h2>
          </div>
          <div className="skills-grid">
            <SkillGroup title="Software Development" skills={softwareSkills} />
            <SkillGroup title="Instructional Design / Education" skills={educationSkills} />
          </div>
        </section>

        <section id="projects" className="section-shell">
          <div className="section-heading">
            <p className="section-kicker">Featured Projects</p>
            <h2>Selected work across web apps and learning design</h2>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="card project-card" key={project.title}>
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
                <div className="tag-row" aria-label={`${project.title} technologies`}>
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.github && (
                    <a href={project.github} aria-label={`${project.title} GitHub repository`}>
                      GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} aria-label={`${project.title} live demo`}>
                      Live Demo
                    </a>
                  )}
                  {project.link && <a href={project.link}>{project.linkText}</a>}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="resume" className="section-shell">
          <div className="resume-card">
            <div className="resume-intro">
              <p className="section-kicker">Resume Preview</p>
              <h2>Ready for engineering and instructional design opportunities</h2>
              <p>
                This resume snapshot highlights the transferable strengths, technical training,
                and project work that support both career paths.
              </p>
              {/* TODO: Place your final resume PDF in the public folder and name it resume.pdf. */}
              <a className="button primary" href="/resume.pdf" download>
                Download Resume PDF
              </a>
            </div>
            <div className="resume-list" aria-label="Resume highlights">
              <ResumeItem
                title="Professional Summary"
                text="Software engineer and former educator focused on user-friendly web apps, instructional tools, and clear technical communication."
              />
              <ResumeItem
                title="Technical Skills"
                text="JavaScript, React, Node.js, Express, MongoDB, REST APIs, Git/GitHub, Vite, and responsive front-end development."
              />
              <ResumeItem
                title="Education / Training"
                text="Software development training paired with professional experience designing curriculum, assessments, and student-centered learning experiences."
              />
              <ResumeItem
                title="Teaching Experience"
                text="Classroom leadership, lesson planning, assessment design, data-informed instruction, stakeholder communication, and student engagement."
              />
              <ResumeItem
                title="Software Projects"
                text="React portfolio projects, tactical RPG party optimizer, local-first AI assistant architecture, and learning design portfolio materials."
              />
            </div>
          </div>
        </section>

        <section id="career-focus" className="section-shell">
          <div className="section-heading">
            <p className="section-kicker">Career Focus</p>
            <h2>Two aligned paths built on the same strengths</h2>
          </div>
          <div className="focus-grid">
            <article className="card focus-card">
              <h3>Software Engineering Roles</h3>
              <p>
                I am targeting junior full-stack software engineer and front-end developer roles
                where I can contribute React interfaces, API-connected features, responsive layouts,
                and thoughtful user experiences while continuing to grow with a collaborative team.
              </p>
            </article>
            <article className="card focus-card">
              <h3>Instructional Design / Curriculum Roles</h3>
              <p>
                My education background supports curriculum, instructional design, and EdTech roles
                that require clear learning outcomes, engaging materials, assessment strategy,
                training documentation, and the ability to translate complex ideas into practical
                learning experiences.
              </p>
            </article>
          </div>
        </section>

        <section id="contact" className="section-shell contact-section">
          <div>
            <p className="section-kicker">Contact</p>
            <h2>Let’s build something useful.</h2>
            <p>
              I am open to software engineering, front-end development, curriculum design,
              instructional design, and EdTech opportunities.
            </p>
          </div>
          <address className="card contact-card">
            {/* TODO: Update this email address with your preferred professional email. */}
            <a href="mailto:your.email@example.com">your.email@example.com</a>
            <a href="https://github.com/ZachMolzner">github.com/ZachMolzner</a>
            <a href="https://www.linkedin.com/in/zmolzner">linkedin.com/in/zmolzner</a>
          </address>
        </section>
      </main>
    </>
  );
}

function SkillGroup({ title, skills }) {
  return (
    <article className="card skill-card">
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

createRoot(document.getElementById('root')).render(<App />);
