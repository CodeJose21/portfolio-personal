# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary users are recruiters and hiring managers evaluating Jose González Blanco for full-stack and machine learning engineering roles. They need to understand his profile, experience, projects, education, skills, and ways to make contact, then decide whether to continue the conversation.

## Product Purpose

The portfolio presents Jose González Blanco as a Full Stack and Machine Learning Engineer through an interactive, multilingual profile. It helps hiring decision-makers evaluate both professional evidence and personal context, then reach Jose through his public contact channels.

Success means a visitor can quickly understand Jose's capabilities and experience, remember the profile, read it in Spanish, English, or German, and navigate to relevant sections or shared URLs without losing context.

## Positioning

The portfolio combines a six-sided interactive die with a conventional linear reading path. The die makes the self-introduction memorable while the linear view keeps the same content directly readable and accessible. Typed Spanish, English, and German content lets the profile serve multilingual audiences without maintaining separate experiences.

## Operating Context

Visitors arrive from professional links, including GitHub Pages, LinkedIn, and GitHub, and evaluate the portfolio on desktop and mobile browsers. They may explore the die through pointer, touch, or keyboard input, switch language, open a specific section through a URL, or use the linear view to read the content sequentially.

## Capabilities and Constraints

- Six portfolio areas are represented: contact, projects, education, professional experience, soft skills, and personal interests.
- The site supports Spanish, English, and German, with matching typed translation content.
- Section and language selections are reflected in the URL and support browser history and shareable views.
- The six-face die interaction is a core product identity and must remain available.
- A linear accessible reading path must remain available alongside the 3D navigation.
- Keyboard, touch, reduced-motion, and skip-link behavior are durable accessibility commitments.
- The product is implemented as an existing React 19 and TypeScript application built with Vite, Redux Toolkit, CSS, and Lucide React.
- Existing factual content, public links, and professional terminology must not be replaced with invented claims, testimonials, customers, benchmarks, or credentials.

## Brand Commitments

The product is the personal portfolio of Jose González Blanco, presented as a Full Stack and Machine Learning Engineer. Confirmed public profiles are LinkedIn and GitHub. The current product name is Jose González Blanco's portfolio.

## Evidence on Hand

- Live portfolio: https://codejose21.github.io/portfolio-personal/
- LinkedIn: https://www.linkedin.com/in/jose-gonzález-blanco-950aa5227
- GitHub: https://github.com/CodeJose21
- Real portfolio content and translations: `src/content/`, including `src/content/work.ts` and `src/content/locales/`.
- Automated browser and accessibility coverage: `tests/portfolio.spec.ts`.
- No testimonials, customer claims, or other external proof are established by the product record; future work must not fabricate them.

## Product Principles

- Make professional evidence easy for hiring decision-makers to find and understand.
- Keep the memorable interactive identity paired with a straightforward reading path.
- Treat multilingual access as a first-class product capability, not duplicated decoration.
- Preserve user control across keyboard, touch, motion preference, URL, and browser history.
- Use only verified personal, professional, and project information.

## Accessibility & Inclusion

The product must support keyboard and touch interaction, reduced-motion preferences, skip-link navigation, and an accessible linear reading path. The 3D geometry is decorative to the reading experience; meaningful content remains available on flat interactive surfaces. Spanish, English, and German are supported locales.