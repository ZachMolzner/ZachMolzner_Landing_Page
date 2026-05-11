import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const contactLinks = {
  // Update these values when you want to change your public contact links.
  email: 'Zamolzner@gmail.com',
  github: 'https://github.com/ZachMolzner',
  linkedin: 'https://www.linkedin.com/in/zmolzner',
};

const identityBadges = [
  'Educator',
  'Software Engineer',
  'Instructional Designer',
  'React Developer',
  'EdTech Builder',
];

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

const bringItems = [
  {
    title: 'Classroom-Tested Communication',
    text: 'I know how to explain complex ideas clearly, support different learners, and build trust quickly.',
  },
  {
    title: 'Full-Stack Problem Solving',
    text: 'I build React apps, connect APIs, structure data, and think through real user workflows.',
  },
  {
    title: 'Instructional Design Mindset',
    text: 'I create learning experiences with clear objectives, scaffolding, assessments, and practical outcomes.',
  },
  {
    title: 'Systems & Strategy Thinking',
    text: 'I enjoy designing tools, game-inspired systems, dashboards, and workflows that help people make better decisions.',
  },
];

const projects = [
  {
    title: 'Ivalice Chronicles / Final Fantasy Tactics Party Optimizer',
    description:
      'A tactical RPG party optimizer built with React that analyzes job roles, party coverage, and character abilities to help users build stronger team compositions.',
    tags: ['React', 'Tactical Systems', 'Optimization'],
    // TODO: Replace this placeholder with the real repository URL.
    github: '#',
    // TODO: Replace this placeholder with the real live demo URL.
    demo: '#',
  },
  {
    title: 'SarahNode AI Assistant',
    description:
      'A local-first AI companion project combining React, FastAPI, WebSockets, voice systems, avatar interactions, and event-driven architecture.',
    tags: ['React', 'FastAPI', 'WebSockets'],
    // TODO: Replace this placeholder with the real repository URL.
    github: '#',
  },
  {
    title: 'Curriculum / Learning Design Portfolio',
    description:
      'A portfolio of lesson plans, rubrics, assessments, guided projects, student-facing materials, and professional learning resources designed for real classrooms.',
    tags: ['Curriculum', 'Assessment', 'EdTech'],
    // TODO: Replace this placeholder with the real portfolio link when available.
    linkText: 'Coming Soon',
    link: '#',
  },
];

const currentFocus = [
  'Building production-ready React projects',
  'Improving full-stack architecture',
  'Creating instructional design samples',
  'Applying for software engineering, front-end, curriculum design, and EdTech roles',
  'Building portfolio projects that connect education and technology',
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
            <a href="#bring">What I Bring</a>
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
            <p className="eyebrow">Builder + educator + systems thinker</p>
            <h1>Zach Molzner</h1>
            <h2>Software Engineer • Educator • Instructional Designer</h2>
            <p className="hero-pitch">
              I build web apps, learning systems, and student-centered digital experiences that
              make information easier to use, understand, and act on.
            </p>
            <p className="mission-line">
              From the classroom to the codebase, I turn complex systems into clear, useful
              experiences.
            </p>
            <div className="badge-row" aria-label="Professional identity badges">
              {identityBadges.map((badge) => (
                <span className="status-pill" key={badge}>
                  {badge}
                </span>
              ))}
            </div>
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
          <aside className="hero-card command-panel" aria-label="Career focus summary">
            <span className="panel-label">Mission Brief</span>
            <h3>Useful tools. Clear learning. Stronger decisions.</h3>
            <p>
              I bring classroom leadership, full-stack development, instructional design, and a
              tactical systems mindset to teams building practical, human-centered products.
            </p>
          </aside>
        </section>

        <section id="about" className="section-shell split-section tech-divider">
          <div>
            <p className="section-kicker">About Me</p>
            <h2>Educator mindset. Engineering execution.</h2>
          </div>
          <div className="card large-card command-panel">
            <p>
              I am a former educator transitioning into software engineering with a practical,
              human-centered approach to building technology. My classroom experience shaped how I
              communicate clearly, break down complex ideas, design curriculum around outcomes, and
              guide people through challenging problems.
            </p>
            <p>
              Today, I apply that same discipline to full-stack development: planning useful
              features, building responsive interfaces, connecting data through APIs, and testing
              ideas with the end user in mind. Whether I am developing a React application or
              designing learning materials, my goal is to create tools that are clear, reliable, and
              genuinely helpful.
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
              <article className="card feature-card command-panel" key={item.title}>
                <span className="panel-label">Signal {String(index + 1).padStart(2, '0')}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section-shell tech-divider">
          <div className="section-heading">
            <p className="section-kicker">Skills</p>
            <h2>Technical and instructional strengths</h2>
          </div>
          <div className="skills-grid">
            <SkillGroup title="Software Development" skills={softwareSkills} />
            <SkillGroup title="Instructional Design / Education" skills={educationSkills} />
          </div>
        </section>

        <section id="projects" className="section-shell tech-divider">
          <div className="section-heading">
            <p className="section-kicker">Featured Projects</p>
            <h2>Portfolio work with a builder’s mindset</h2>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <article className="card project-card command-panel" key={project.title}>
                <div>
                  <span className="panel-label">Project {String(index + 1).padStart(2, '0')}</span>
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

        <section id="resume" className="section-shell tech-divider">
          <div className="resume-card command-panel">
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

        <section id="current-focus" className="section-shell tech-divider">
          <div className="section-heading">
            <p className="section-kicker">Current Focus</p>
            <h2>Where I am building momentum now</h2>
          </div>
          <div className="card focus-card command-panel">
            <ul className="focus-list">
              {currentFocus.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
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
                I am targeting junior full-stack software engineer and front-end developer roles
                where I can contribute React interfaces, API-connected features, responsive layouts,
                and thoughtful user experiences while continuing to grow with a collaborative team.
              </p>
            </article>
            <article className="card focus-card command-panel">
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

        <section id="contact" className="section-shell contact-section tech-divider">
          <div>
            <p className="section-kicker">Contact</p>
            <h2>Let’s build something useful.</h2>
            <p>
              I am open to software engineering, front-end development, curriculum design,
              instructional design, and EdTech opportunities.
            </p>
          </div>
          <address className="card contact-card command-panel">
            <span className="panel-label">Open Channel</span>
            {/* TODO: Update contactLinks above when you want to change public contact details. */}
            <a href={`mailto:${contactLinks.email}`}>Email: {contactLinks.email}</a>
            <a href={contactLinks.github}>GitHub: {contactLinks.github}</a>
            <a href={contactLinks.linkedin}>LinkedIn: {contactLinks.linkedin}</a>
          </address>
        </section>
      </main>
    </>
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

createRoot(document.getElementById('root')).render(<App />);
