# Vincentius Edward — Portfolio Website

A responsive personal portfolio website built to showcase full-stack projects to recruiters and companies.

## Tech Stack

- **React**
- **Vite**
- **Tailwind CSS** (`tailwindcss`, `@tailwindcss/vite`)
- **Redux Toolkit** + **React Redux**
- **ESLint**

## Features

- Clean, white, professional UI
- Responsive layout for mobile, tablet, and desktop
- Centered navbar with smooth section navigation
- Hero section with role and location
- Skills section grouped by category:
  - Programming Languages
  - Frontend
  - Backend
- Project cards with:
  - Project screenshot
  - Description
  - Tech stack tags
  - Key features list
  - **Live** button (red when available, gray when unavailable)
  - **GitHub** button
- Download CV button
- Contact section with social links
- Subtle animations and section divider lines

## Project Structure

```text
portfolio-website/
  public/
    cv/
      Vincentius-Edward-CV.pdf
    projects/
      *.png / *.jpg (project screenshots)
  src/
    app/
      store.js
    features/
      ui/
        uiSlice.js
    App.jsx
    main.jsx
    index.css
```

## Getting Started

### 1) Install dependencies

```bash
npm install
```

### 2) Run development server

```bash
npm run dev
```

### 3) Build for production

```bash
npm run build
```

### 4) Preview production build

```bash
npm run preview
```

### 5) Lint

```bash
npm run lint
```

## Customization

Update these in `src/App.jsx`:

- `navLinks` for navbar items
- `skills` for skill categories
- `projects` for cards (image, tech stack, key features, live/github links)
- Contact links and email

## Assets

- Put CV file in: `public/cv/`
- Put project screenshots in: `public/projects/`
- Use absolute paths in code, for example:
  - `/cv/Vincentius-Edward-CV.pdf`
  - `/projects/my-project.png`

## License

Personal portfolio project.
