import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { spawn } from 'node:child_process';
import { existsSync } from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const dist = path.join(root, 'dist');
const viteBin = path.join(root, 'node_modules', '.bin', process.platform === 'win32' ? 'vite.cmd' : 'vite');

if (existsSync(viteBin)) {
  await runViteBuild(viteBin);
  process.exit(0);
}

console.warn('Vite dependencies are not installed; using the static fallback builder. Run npm install to enable the standard Vite build.');

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });

if (existsSync(path.join(root, 'public'))) {
  await cp(path.join(root, 'public'), dist, { recursive: true });
}

const css = await readFile(path.join(root, 'src', 'styles.css'), 'utf8');

const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
      name="description"
      content="Zach Molzner is a software engineer, educator, and instructional designer building web apps, learning tools, and technology-driven instructional experiences."
    />
    <title>Zach Molzner | Software Engineer & Instructional Designer</title>
    <style>${css}</style>
  </head>
  <body>
    <div id="root">${renderPortfolio()}</div>
  </body>
</html>
`;

await writeFile(path.join(dist, 'index.html'), html);
console.log('Built portfolio to dist/');

function renderPortfolio() {
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

  return `
    <header class="site-header">
      <nav class="nav" aria-label="Primary navigation">
        <a class="logo" href="#hero" aria-label="Zach Molzner home">ZM</a>
        <div class="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#resume">Resume</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
    </header>
    <main>
      <section id="hero" class="hero section-shell">
        <div class="hero-content">
          <p class="eyebrow">Portfolio for software, learning, and product-minded teams</p>
          <h1>Zach Molzner</h1>
          <h2>Software Engineer | Educator | Instructional Designer</h2>
          <p class="hero-pitch">Former educator turned software engineer who builds user-friendly web apps, learning tools, and technology-driven instructional experiences.</p>
          <div class="button-row" aria-label="Portfolio actions">
            <a class="button primary" href="#resume">View Resume</a>
            <a class="button secondary" href="#projects">View Projects</a>
            <a class="button ghost" href="#contact">Contact Me</a>
          </div>
        </div>
        <aside class="hero-card" aria-label="Career focus summary">
          <span class="status-pill">Open to junior roles</span>
          <h3>Blending classroom leadership with full-stack development.</h3>
          <p>I bring strong communication, systems thinking, and learner-centered design to engineering teams, instructional design groups, and EdTech products.</p>
        </aside>
      </section>
      <section id="about" class="section-shell split-section">
        <div><p class="section-kicker">About Me</p><h2>Educator mindset. Engineering execution.</h2></div>
        <div class="card large-card">
          <p>I am a former educator transitioning into software engineering with a practical, human-centered approach to building technology. My classroom experience shaped how I communicate clearly, break down complex ideas, design curriculum around outcomes, and guide people through challenging problems.</p>
          <p>Today, I apply that same discipline to full-stack development: planning useful features, building responsive interfaces, connecting data through APIs, and testing ideas with the end user in mind. Whether I am developing a React application or designing learning materials, my goal is to create tools that are clear, reliable, and genuinely helpful.</p>
        </div>
      </section>
      <section id="skills" class="section-shell">
        <div class="section-heading"><p class="section-kicker">Skills</p><h2>Technical and instructional strengths</h2></div>
        <div class="skills-grid">${skillGroup('Software Development', softwareSkills)}${skillGroup('Instructional Design / Education', educationSkills)}</div>
      </section>
      <section id="projects" class="section-shell">
        <div class="section-heading"><p class="section-kicker">Featured Projects</p><h2>Selected work across web apps and learning design</h2></div>
        <div class="project-grid">
          ${projectCard('Ivalice Chronicles / Final Fantasy Tactics Party Optimizer', 'React app for building and optimizing tactical RPG parties using roles, job data, and party coverage analysis.', ['React', 'Game Tools', 'Optimization'], '<a href="#">GitHub</a><a href="#">Live Demo</a>')}
          ${projectCard('SarahNode AI Assistant', 'Local-first AI companion project using FastAPI, React, WebSockets, voice, avatar systems, and event-driven architecture.', ['React', 'FastAPI', 'WebSockets'], '<a href="#">GitHub</a>')}
          ${projectCard('Curriculum / Learning Design Portfolio', 'Collection of lesson plans, rubrics, assessments, slide decks, and student-facing learning materials.', ['Curriculum', 'Assessment', 'EdTech'], '<a href="#">Coming Soon</a>')}
        </div>
      </section>
      <section id="resume" class="section-shell">
        <div class="resume-card">
          <div class="resume-intro">
            <p class="section-kicker">Resume Preview</p>
            <h2>Ready for engineering and instructional design opportunities</h2>
            <p>This resume snapshot highlights the transferable strengths, technical training, and project work that support both career paths.</p>
            <a class="button primary" href="/resume.pdf" download>Download Resume PDF</a>
          </div>
          <div class="resume-list" aria-label="Resume highlights">
            ${resumeItem('Professional Summary', 'Software engineer and former educator focused on user-friendly web apps, instructional tools, and clear technical communication.')}
            ${resumeItem('Technical Skills', 'JavaScript, React, Node.js, Express, MongoDB, REST APIs, Git/GitHub, Vite, and responsive front-end development.')}
            ${resumeItem('Education / Training', 'Software development training paired with professional experience designing curriculum, assessments, and student-centered learning experiences.')}
            ${resumeItem('Teaching Experience', 'Classroom leadership, lesson planning, assessment design, data-informed instruction, stakeholder communication, and student engagement.')}
            ${resumeItem('Software Projects', 'React portfolio projects, tactical RPG party optimizer, local-first AI assistant architecture, and learning design portfolio materials.')}
          </div>
        </div>
      </section>
      <section id="career-focus" class="section-shell">
        <div class="section-heading"><p class="section-kicker">Career Focus</p><h2>Two aligned paths built on the same strengths</h2></div>
        <div class="focus-grid">
          <article class="card focus-card"><h3>Software Engineering Roles</h3><p>I am targeting junior full-stack software engineer and front-end developer roles where I can contribute React interfaces, API-connected features, responsive layouts, and thoughtful user experiences while continuing to grow with a collaborative team.</p></article>
          <article class="card focus-card"><h3>Instructional Design / Curriculum Roles</h3><p>My education background supports curriculum, instructional design, and EdTech roles that require clear learning outcomes, engaging materials, assessment strategy, training documentation, and the ability to translate complex ideas into practical learning experiences.</p></article>
        </div>
      </section>
      <section id="contact" class="section-shell contact-section">
        <div><p class="section-kicker">Contact</p><h2>Let’s build something useful.</h2><p>I am open to software engineering, front-end development, curriculum design, instructional design, and EdTech opportunities.</p></div>
        <address class="card contact-card"><a href="mailto:your.email@example.com">your.email@example.com</a><a href="https://github.com/ZachMolzner">github.com/ZachMolzner</a><a href="https://www.linkedin.com/in/zmolzner">linkedin.com/in/zmolzner</a></address>
      </section>
    </main>`;
}

function skillGroup(title, skills) {
  return `<article class="card skill-card"><h3>${title}</h3><ul class="skill-list">${skills.map((skill) => `<li>${skill}</li>`).join('')}</ul></article>`;
}

function projectCard(title, description, tags, links) {
  return `<article class="card project-card"><div><h3>${title}</h3><p>${description}</p></div><div class="tag-row" aria-label="${title} technologies">${tags.map((tag) => `<span>${tag}</span>`).join('')}</div><div class="project-links">${links}</div></article>`;
}

function resumeItem(title, text) {
  return `<article><h3>${title}</h3><p>${text}</p></article>`;
}

function runViteBuild(viteBin) {
  return new Promise((resolve, reject) => {
    const child = spawn(viteBin, ['build'], { stdio: 'inherit' });
    child.on('error', reject);
    child.on('exit', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`vite build exited with code ${code}`));
      }
    });
  });
}
