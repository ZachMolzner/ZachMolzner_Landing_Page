import { spawn } from 'node:child_process';
import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import {
  contact,
  educationSkills,
  projects,
  resumeHighlights,
  softwareSkills,
} from '../src/data/portfolio.js';

const root = process.cwd();
const dist = path.join(root, 'dist');
const viteBin = path.join(root, 'node_modules', '.bin', process.platform === 'win32' ? 'vite.cmd' : 'vite');

if (existsSync(viteBin)) {
  await runViteBuild(viteBin);
} else {
  console.warn(
    'Vite dependencies are not installed; using the static fallback builder. Run npm install to enable the standard Vite build.',
  );
  await runStaticFallbackBuild();
}

function runViteBuild(command) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, ['build'], { stdio: 'inherit' });
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

async function runStaticFallbackBuild() {
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
    ${renderPortfolio()}
  </body>
</html>
`;

  await writeFile(path.join(dist, 'index.html'), html);
  console.log('Built portfolio to dist/');
}

function renderPortfolio() {
  return `
<a class="skip-link" href="#main-content">Skip to main content</a>
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
<main id="main-content">
  <section id="hero" class="hero section-shell">
    <div class="hero-content">
      <p class="eyebrow">Portfolio for software, learning, and product-minded teams</p>
      <h1>Zach Molzner</h1>
      <p class="hero-title">Software Engineer | Educator | Instructional Designer</p>
      <p class="hero-pitch">Former educator turned software engineer who builds user-friendly web apps, learning tools, and technology-driven instructional experiences.</p>
      <div class="button-row" aria-label="Portfolio actions"><a class="button primary" href="#resume">View Resume</a><a class="button secondary" href="#projects">View Projects</a><a class="button ghost" href="#contact">Contact Me</a></div>
    </div>
    <aside class="hero-card" aria-label="Career focus summary">
      <span class="status-pill">Open to junior roles</span>
      <h2>Blending classroom leadership with full-stack development.</h2>
      <p>I bring strong communication, systems thinking, and learner-centered design to engineering teams, instructional design groups, and EdTech products.</p>
      <dl class="impact-list" aria-label="Portfolio strengths"><div><dt>Full-stack</dt><dd>React, APIs, data models</dd></div><div><dt>Learning design</dt><dd>Curriculum, assessment, training</dd></div><div><dt>Team value</dt><dd>Clear communication and problem-solving</dd></div></dl>
    </aside>
  </section>
  <section id="about" class="section-shell split-section">
    <div><p class="section-kicker">About Me</p><h2>Educator mindset. Engineering execution.</h2></div>
    <div class="card large-card"><p>I am a former educator transitioning into software engineering with a practical, human-centered approach to building technology. My classroom experience shaped how I communicate clearly, break down complex ideas, design curriculum around outcomes, and guide people through challenging problems.</p><p>Today, I apply that same discipline to full-stack development: planning useful features, building responsive interfaces, connecting data through APIs, and testing ideas with the end user in mind. Whether I am developing a React application or designing learning materials, my goal is to create tools that are clear, reliable, and genuinely helpful.</p></div>
  </section>
  <section id="skills" class="section-shell">${sectionHeading('Skills', 'Technical and instructional strengths', 'A dual background that supports product teams, learning teams, and EdTech organizations.')}<div class="skills-grid">${skillGroup('Software Development', softwareSkills)}${skillGroup('Instructional Design / Education', educationSkills)}</div></section>
  <section id="projects" class="section-shell">${sectionHeading('Featured Projects', 'Selected work across web apps and learning design', 'Projects are framed around practical outcomes: useful interfaces, thoughtful architecture, and learner-centered materials.')}<div class="project-grid">${projects.map(projectCard).join('')}</div></section>
  <section id="resume" class="section-shell"><div class="resume-card"><div class="resume-intro"><p class="section-kicker">Resume Preview</p><h2>Ready for engineering and instructional design opportunities</h2><p>This resume snapshot highlights the transferable strengths, technical training, and project work that support both career paths.</p><a class="button primary" href="/resume.pdf" download>Download Resume PDF</a></div><div class="resume-list" aria-label="Resume highlights">${resumeHighlights.map(resumeItem).join('')}</div></div></section>
  <section id="career-focus" class="section-shell">${sectionHeading('Career Focus', 'Two aligned paths built on the same strengths', 'Software engineering and instructional design both reward clarity, structure, empathy, and iteration.')}<div class="focus-grid"><article class="card focus-card"><p class="card-eyebrow">Track 01</p><h3>Software Engineering Roles</h3><p>I am targeting junior full-stack software engineer and front-end developer roles where I can contribute React interfaces, API-connected features, responsive layouts, and thoughtful user experiences while continuing to grow with a collaborative team.</p></article><article class="card focus-card"><p class="card-eyebrow">Track 02</p><h3>Instructional Design / Curriculum Roles</h3><p>My education background supports curriculum, instructional design, and EdTech roles that require clear learning outcomes, engaging materials, assessment strategy, training documentation, and the ability to translate complex ideas into practical learning experiences.</p></article></div></section>
  <section id="contact" class="section-shell contact-section"><div><p class="section-kicker">Contact</p><h2>Let’s build something useful.</h2><p>I am open to software engineering, front-end development, curriculum design, instructional design, and EdTech opportunities.</p></div><address class="card contact-card"><a href="mailto:${contact.email}">${contact.email}</a><a href="${contact.github}">github.com/ZachMolzner</a><a href="${contact.linkedin}">linkedin.com/in/zmolzner</a></address></section>
</main>
<footer class="site-footer"><p>© ${new Date().getFullYear()} Zach Molzner. Built with React and Vite.</p></footer>`;
}

function sectionHeading(kicker, title, text) {
  return `<div class="section-heading"><p class="section-kicker">${kicker}</p><h2>${title}</h2><p>${text}</p></div>`;
}

function skillGroup(title, skills) {
  return `<article class="card skill-card"><h3>${title}</h3><ul class="skill-list">${skills.map((skill) => `<li>${skill}</li>`).join('')}</ul></article>`;
}

function projectCard(project) {
  const links = [
    project.github && `<a href="${project.github}" aria-label="${project.title} GitHub repository">GitHub</a>`,
    project.demo && `<a href="${project.demo}" aria-label="${project.title} live demo">Live Demo</a>`,
    project.portfolio && `<a href="${project.portfolio}">${project.portfolioLabel}</a>`,
  ]
    .filter(Boolean)
    .join('');

  return `<article class="card project-card"><div><h3>${project.title}</h3><p>${project.description}</p></div><div class="tag-row" aria-label="${project.title} technologies">${project.tags.map((tag) => `<span>${tag}</span>`).join('')}</div><div class="project-links">${links}</div></article>`;
}

function resumeItem(item) {
  return `<article><h3>${item.title}</h3><p>${item.text}</p></article>`;
}
