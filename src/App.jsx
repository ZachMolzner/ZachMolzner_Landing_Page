import {
  contact,
  educationSkills,
  projects,
  resumeHighlights,
  softwareSkills,
} from './data/portfolio.js';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
];

function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <header className="site-header">
        <nav className="nav" aria-label="Primary navigation">
          <a className="logo" href="#hero" aria-label="Zach Molzner home">
            ZM
          </a>
          <div className="nav-links">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <main id="main-content">
        <section id="hero" className="hero section-shell">
          <div className="hero-content">
            <p className="eyebrow">Portfolio for software, learning, and product-minded teams</p>
            <h1>Zach Molzner</h1>
            <p className="hero-title">Software Engineer | Educator | Instructional Designer</p>
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
            <h2>Blending classroom leadership with full-stack development.</h2>
            <p>
              I bring strong communication, systems thinking, and learner-centered design to
              engineering teams, instructional design groups, and EdTech products.
            </p>
            <dl className="impact-list" aria-label="Portfolio strengths">
              <div>
                <dt>Full-stack</dt>
                <dd>React, APIs, data models</dd>
              </div>
              <div>
                <dt>Learning design</dt>
                <dd>Curriculum, assessment, training</dd>
              </div>
              <div>
                <dt>Team value</dt>
                <dd>Clear communication and problem-solving</dd>
              </div>
            </dl>
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
          <SectionHeading
            kicker="Skills"
            title="Technical and instructional strengths"
            text="A dual background that supports product teams, learning teams, and EdTech organizations."
          />
          <div className="skills-grid">
            <SkillGroup title="Software Development" skills={softwareSkills} />
            <SkillGroup title="Instructional Design / Education" skills={educationSkills} />
          </div>
        </section>

        <section id="projects" className="section-shell">
          <SectionHeading
            kicker="Featured Projects"
            title="Selected work across web apps and learning design"
            text="Projects are framed around practical outcomes: useful interfaces, thoughtful architecture, and learner-centered materials."
          />
          <div className="project-grid">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
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
              {resumeHighlights.map((item) => (
                <ResumeItem key={item.title} title={item.title} text={item.text} />
              ))}
            </div>
          </div>
        </section>

        <section id="career-focus" className="section-shell">
          <SectionHeading
            kicker="Career Focus"
            title="Two aligned paths built on the same strengths"
            text="Software engineering and instructional design both reward clarity, structure, empathy, and iteration."
          />
          <div className="focus-grid">
            <article className="card focus-card">
              <p className="card-eyebrow">Track 01</p>
              <h3>Software Engineering Roles</h3>
              <p>
                I am targeting junior full-stack software engineer and front-end developer roles
                where I can contribute React interfaces, API-connected features, responsive layouts,
                and thoughtful user experiences while continuing to grow with a collaborative team.
              </p>
            </article>
            <article className="card focus-card">
              <p className="card-eyebrow">Track 02</p>
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
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            <a href={contact.github} target="_blank" rel="noreferrer">
              github.com/ZachMolzner
            </a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer">
              linkedin.com/in/zmolzner
            </a>
          </address>
        </section>
      </main>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Zach Molzner. Built with React and Vite.</p>
      </footer>
    </>
  );
}

function SectionHeading({ kicker, title, text }) {
  return (
    <div className="section-heading">
      <p className="section-kicker">{kicker}</p>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
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

function ProjectCard({ project }) {
  return (
    <article className="card project-card">
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
        {project.portfolio && <a href={project.portfolio}>{project.portfolioLabel}</a>}
      </div>
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

export default App;
