# Zach Molzner Portfolio Landing Page

A polished, responsive personal landing page for software engineering, front-end development, instructional design, curriculum design, and EdTech job applications.

## Tech Stack

- React + Vite
- JavaScript
- Standard CSS
- Mobile-first responsive design
- No paid services or external APIs

## Local Development

```bash
npm install
npm run dev
```

Open the local URL printed by Vite in your browser.

## Build

```bash
npm run build
```

The production-ready files will be generated in `dist/`.

## Easy Updates

- Update the email placeholder in `src/main.jsx`.
- Replace project `#` links in `src/main.jsx` with real GitHub and live demo URLs.
- Place your resume PDF in the `public/` folder and name it `resume.pdf` so the download button works.
- Edit resume preview text, skills, and project cards in `src/main.jsx`.

## Deployment Notes

### Vercel

1. Push this repository to GitHub.
2. Import the repository in Vercel.
3. Use the default Vite settings:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Deploy.

### Netlify

1. Push this repository to GitHub.
2. Create a new Netlify site from the repository.
3. Use these build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy.

### GitHub Pages

For a user or organization site, deploy the `dist/` output from your default branch using your preferred GitHub Pages workflow.

For a project site, set Vite's `base` option to your repository name in `vite.config.js` before building, for example:

```js
export default defineConfig({
  base: '/your-repo-name/',
  plugins: [react()],
});
```

Then run:

```bash
npm run build
```

Upload or publish the generated `dist/` folder with a GitHub Pages action.
