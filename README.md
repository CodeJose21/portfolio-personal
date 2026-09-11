# Jose González Blanco · Portfolio

An interactive, multilingual portfolio built around a six-sided 3D die. Each face presents a different part of my profile: contact, projects, education, professional experience, soft skills, and life outside work.

[View the live portfolio](https://codejose21.github.io/portfolio-personal/) · [LinkedIn](https://www.linkedin.com/in/jose-gonz%C3%A1lez-blanco-950aa5227) · [GitHub](https://github.com/CodeJose21)

## About the project

I am a Full Stack and Machine Learning engineer who enjoys connecting software, data, and people to create useful real-world solutions. This portfolio translates that idea into an interface with two complementary ways to explore the content:

- **Die view** — navigate between six animated 3D faces.
- **Linear view** — read the same content in a conventional, accessible layout.

The site is available in Spanish, English, and German. Language and section selections are reflected in the URL, so every view can be bookmarked or shared directly.

## Highlights

- Responsive 3D navigation with keyboard, mouse, and touch support.
- Spanish, English, and German content from a typed translation model.
- Six portfolio areas: contact, projects, education, experience, soft skills, and personal interests.
- URL-based navigation with browser history support.
- Reduced-motion support and a skip link for keyboard users.
- Automated end-to-end and accessibility checks with Playwright and axe.
- Continuous deployment to GitHub Pages after linting, building, and testing.

## Built with

| Area | Technology |
| --- | --- |
| UI | React 19, TypeScript, CSS |
| State | Redux Toolkit, React Redux |
| Build | Vite |
| Icons | Lucide React |
| Quality | ESLint, Playwright, axe-core |
| Hosting | GitHub Pages, GitHub Actions |

## Run locally

You will need Node.js 22.13 or newer and npm.

```bash
git clone https://github.com/CodeJose21/portfolio-personal.git
cd portfolio-personal
npm ci
npm run dev
```

Open the local address shown by Vite. The development server uses `/`; production and preview builds use `/portfolio-personal/` for GitHub Pages.

## Available commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Type-check and create the production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run the code-quality checks |
| `npm test` | Run the Playwright test suite |
| `npm run test:report` | Open the latest Playwright HTML report |

To run the browser tests for the first time, install Chromium once:

```bash
npx playwright install chromium
npm test
```

## Project structure

```text
src/
├── components/        Reusable portfolio sections and UI
├── content/           Profile, project, translation, and die data
│   └── locales/       Spanish, English, and German copy
├── hooks/             Navigation and die-motion behaviour
├── store/             Redux state and typed hooks
├── App.tsx            Application shell
└── styles.css         Visual system and responsive layout
public/                Photos, flags, and static assets
tests/                 Playwright end-to-end tests
docs/                  Content editing and design notes
```

## Editing the portfolio

Most updates are data changes rather than component changes:

- Edit projects and professional experience in `src/content/work.ts`.
- Edit translated copy in `src/content/locales/es.ts`, `en.ts`, and `de.ts`.
- Edit social profiles and the personal photo in `src/content/profile.ts`.
- Add static images to `public/` and resolve them with the existing asset helper.

Keep matching entry IDs across all three locale files so switching languages preserves the selected content. See [the content editing guide](docs/editar-contenido.md) for examples covering education, languages, skills, projects, and experience.

## Accessibility and testing

The test suite covers navigation, translated content, keyboard and touch interaction, reduced motion, automated axe checks, and responsive layouts from 320 to 1440 pixels. The 3D geometry is decorative: content remains on flat, interactive surfaces, and inactive faces are hidden from users and assistive technology.

Run the complete local verification before publishing:

```bash
npm run lint
npm run build
npm test
```

## Deployment

Pushes to `main` trigger the GitHub Actions workflow. It installs dependencies, checks the code, builds and tests the production site, then publishes only `dist/` to GitHub Pages.

If you fork the project or rename the repository, update the production `base` path in `vite.config.ts` and configure **Settings → Pages → Source** to use **GitHub Actions**.

## Author

**Jose González Blanco** — Full Stack & Machine Learning Engineer

- [LinkedIn](https://www.linkedin.com/in/jose-gonz%C3%A1lez-blanco-950aa5227)
- [GitHub](https://github.com/CodeJose21)

## License

This repository does not currently include an open-source license. The source code and portfolio content remain copyright of Jose González Blanco.
