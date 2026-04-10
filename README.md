# Portfolio

This repo is my portfolio site: a hand-rolled layout with a slim rail on the left for jumping between sections, while the main area swaps what you see without full reloads. I wanted something fast to host anywhere and easy to tweak without wrestling a framework, so it’s mostly HTML, SCSS, and a little JavaScript.

The home block has the usual intro, socials, and resume link; further down there’s a fuller about area with skills, education and work history on the resume section, and a work grid where I can filter projects by category. There’s a dark/light toggle because I actually use both depending on the time of day. The contact block is wired to EmailJS so messages land in my inbox without running a backend.

If you’re browsing the code, it’s meant to be readable: styles live in SCSS partials, and the compiled CSS is checked in so GitHub Pages (or any static host) just works.

## Tech

- **HTML5** — one `index.html`, sections toggled with an `.active` class on `<main>`
- **SCSS** — partials under `assets/scss/`, compiled to `assets/css/main.css`
- **Bootstrap 5** — grid and utilities
- **Line Awesome** — icons
- **Typed.js** — rotating headline on the home section
- **Atropos** — parallax on the hero image
- **Shuffle.js** — “All / Full Stack / Frontend” filters on the work grid
- **EmailJS** — contact form (keys configured in `assets/js/script.js`)

## Project layout

```text
index.html
assets/
  css/main.css       ← build output (commit after compiling SCSS)
  scss/              ← source styles (main.scss imports partials)
  js/script.js
  images/
  files/             ← e.g. resume PDF
```

## Local preview

Open `index.html` in a browser, or serve the folder with any static server (VS Code Live Server, `npx serve`, etc.).

## Editing styles

After changing files in `assets/scss/`, recompile CSS:

```bash
npx sass assets/scss/main.scss assets/css/main.css
```

Optional watch:

```bash
npx sass --watch assets/scss/main.scss:assets/css/main.css
```

## Deploy

Works on any static host (GitHub Pages, Netlify, etc.). Site root should be the repository root so paths like `assets/css/main.css` resolve correctly.

## Contact form

EmailJS `init` / template IDs live in `assets/js/script.js`. Rotate keys in the EmailJS dashboard if you fork this repo.

## License

Personal project; reuse layout ideas if useful—swap copy, images, and credentials for your own site.
