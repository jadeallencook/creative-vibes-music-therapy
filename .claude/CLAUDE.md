# Creative Vibes Music Therapy — CLAUDE.md

## About

Website for Creative Vibes Music Therapy (SF Bay Area). Music therapy practice serving early childhood through older adults via individual/group sessions and virtual classes.

## Stack

- **Next.js** 16.2.6, **React** 19.2.6, **TypeScript** 6 (strict mode)
- **React Compiler** enabled (`babel-plugin-react-compiler`, `reactCompiler: true` in next.config.ts)
- **Storybook** 10.4.0 via `@storybook/nextjs-vite` — component-first development
- **Vitest** 4.1.2 + Playwright (Chromium, headless) for browser-based tests
- **ESLint** 10 (flat config), `eslint-config-next/core-web-vitals` + storybook plugin
- **Node**: v22.19.0 (run `nvm use` before npm commands)

## Key Commands

```
npm run dev           # Next.js dev server
npm run build         # Production build
npm run lint          # ESLint
npm run storybook     # Storybook on :6006
npm run build-storybook
npm run update-deps   # npm-check-updates + install
```

## Directory Layout

```
src/
  app/           # Next.js App Router (layout.tsx, page.tsx, globals.css)
  stories/       # Storybook components (co-locate .stories.ts files here)
assets/          # Brand images (logo.png, photos)
.storybook/      # main.ts, preview.ts
colors.json      # Design token source of truth
vitest.config.ts
```

Path alias: `@/*` → `src/*`

## Design Tokens (colors.json)

| Token        | Value                  |
| ------------ | ---------------------- |
| Primary      | `#7CBCBC` (teal)       |
| Secondary    | `#D4E9E9` (light teal) |
| Accent       | `#F59E0B` (amber)      |
| Text primary | `#000000`              |
| Text muted   | `#545964`              |
| Background   | `#FFFFFF`              |
| Section bg   | `#F3F4F6`              |

Fonts: Geist Sans + Geist Mono (loaded in `src/app/layout.tsx`).

## Component Development

- Build components in `src/stories/`, write `.stories.ts` alongside each component.
- Storybook is the primary dev environment — preview and test components there first.
- Chromatic is wired up for visual regression testing on push to main.
- A11y addon (`@storybook/addon-a11y`) runs in `'todo'` mode — violations surface in the UI but don't block CI.

## Testing

- Tests run as Storybook stories via `@storybook/addon-vitest` + Playwright browser.
- Run tests: `npx vitest` or via the Storybook test UI.
- Coverage: `@vitest/coverage-v8`.

## Accessibility (Critical)

This site serves clients across all ability levels — children, seniors, and people with physical, cognitive, and sensory differences. **Accessibility is the highest-priority non-functional requirement.**

- Target: **WCAG 2.1 AA** minimum; prefer AAA where achievable without layout compromise.
- Every interactive element must be keyboard-navigable and have a visible focus indicator.
- All images require descriptive `alt` text; decorative images use `alt=""`.
- Use semantic HTML (`<nav>`, `<main>`, `<section>`, `<button>`, `<a>`) over generic divs.
- Color contrast: 4.5:1 minimum for normal text, 3:1 for large text and UI components. Verify the teal primary (`#7CBCBC`) against all text colors before use.
- Never convey information by color alone — pair with icons, labels, or patterns.
- Support `prefers-reduced-motion`: wrap animations in the appropriate media query.
- Run the Storybook a11y panel on every new component before marking it done.
- Audit tools: axe DevTools, Lighthouse, screen reader (VoiceOver / NVDA) spot checks.
