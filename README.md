# Jakub Cerovsky Portfolio

A responsive portfolio built with Next.js, TypeScript, Tailwind CSS, and Motion.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customize

- Edit the pages in `src/app` and shared portfolio data in `src/lib`.
- Edit page metadata in `src/app/layout.tsx`.
- Adjust the color tokens in `src/app/globals.css`.

## Deploy to GitHub Pages

The GitHub Actions workflow builds a static export and deploys it to GitHub Pages whenever a commit is pushed to `main`. It can also be started manually from the **Actions** tab.

In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**. The workflow configures the project-site base path from the repository name automatically.
