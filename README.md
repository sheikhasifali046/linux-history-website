# 🐧 The History of Linux — Static Website

A complete static website about the **history of Linux**, built with plain
HTML, CSS and JavaScript — no build step, no dependencies.

## What it covers

- **Origins** — Unix (1969), the GNU Project (1983) and MINIX
- **The famous post** — Linus Torvalds, 25 August 1991: "just a hobby…"
- **Timeline** — 1991 Linux 0.01 → GPL, Debian & Slackware, Tux, Ubuntu,
  Git, Android, Docker & Kubernetes, 100% of the TOP500 supercomputers
- **Key people** — Linus Torvalds, Richard Stallman, Thompson & Ritchie
- **Distributions** — Debian, Slackware, Red Hat, Ubuntu, Arch, Android
- **Linux today** — cloud, supercomputers, WSL and everywhere else

## Features

- Responsive design with dark / light theme toggle (saved in localStorage)
- Interactive timeline with era filters (Early / Growth / Modern)
- Expand / collapse timeline events
- Semantic HTML, accessible navigation

## Run it locally

Just open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Files

| File | Purpose |
|---|---|
| `index.html` | Page structure and content |
| `styles.css` | All styling, theme variables, responsive layout |
| `script.js` | Theme toggle, timeline filter, expand/collapse |

## Licence

Website code is shared for learning purposes. Linux® is a registered
trademark of Linus Torvalds.
