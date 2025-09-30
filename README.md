# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/4b0bbb11-8aa9-4f8b-94ef-b85e0172f83a

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/4b0bbb11-8aa9-4f8b-94ef-b85e0172f83a) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/4b0bbb11-8aa9-4f8b-94ef-b85e0172f83a) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)

## Project Overview: learn-map-spark

This is a modern React + TypeScript learning frontend focused on delivering an engaging ML learning experience with a roadmap, interactive quizzes, and gamified widgets.

### Tech Stack

- React 18 + TypeScript
- Vite 5 build tooling (`vite.config.ts`)
- React Router v6 for SPA routing (`src/App.tsx`)
- Tailwind CSS + shadcn/ui + Radix UI primitives (`tailwind.config.ts`, `src/components/ui/*`)
- TanStack Query for async/data caching (`@tanstack/react-query`)
- XY Flow React for interactive roadmap graph (`@xyflow/react` via `ReactFlowRoadmap`)
- Sonner + custom Toaster for notifications

### Scripts (package.json)

- `npm run dev` — start dev server on port 8080
- `npm run build` — production build
- `npm run build:dev` — dev-mode build
- `npm run preview` — preview production build
- `npm run lint` — lint sources

### Project Structure

- `src/main.tsx` — React root mounting
- `src/App.tsx` — app providers and routing layout (Sidebar + Header + Routes)
- `src/pages/` — route-level pages
  - `Index.tsx` — landing with hero and engagement widgets
  - `MLIntroductionPage.tsx` — mounts `MLIntroduction`
  - `Roadmap.tsx` — interactive learning path with React Flow
  - `Quiz.tsx` — simple quiz page embedding `QuizInterface`
  - `QuizMaster.tsx` — advanced quiz catalog, filters, stats, and badges
  - `NotFound.tsx` — 404 route
- `src/components/`
  - `AppSidebar.tsx` — app-wide sidebar navigation
  - `CreativeHero.tsx`, `HeroSection.tsx` — prominent hero sections
  - `EngagementWidgets.tsx` — DailyChallenge, LearningStreak, Achievements, Stats, Leaderboard, Quote
  - `LearningRoadmap.tsx`, `ReactFlowRoadmap.tsx` — roadmap visuals and flow
  - `MLIntroduction.tsx` — full introduction module/content
  - `QuizInterface.tsx` — quiz UI/logic (adaptive interactions)
  - `ui/*` — shadcn-ui components and wrappers (badge, button, card, sidebar, tooltip, toaster, etc.)
- `tailwind.config.ts`, `postcss.config.js` — styling configuration
- `src/index.css`, `src/App.css` — global styles and utilities

### Routing

Defined in `src/App.tsx` using `react-router-dom`:

- `/` → `Index`
- `/ml-introduction` → `MLIntroductionPage`
- `/roadmap` → `Roadmap`
- `/quiz` → `Quiz`
- `/quizmaster` → `QuizMaster`
- `*` → `NotFound`

### Key Features and Functionality

- Sidebar-based application layout using shadcn/ui `SidebarProvider` with `AppSidebar`
- Landing page with creative hero (`CreativeHero`) and a featured ML Introduction CTA card
- Engagement widgets grid (`EngagementWidgets`):
  - Daily Challenge, Learning Streak, Achievement Showcase, Learning Stats, Leaderboard, Motivational Quote
- Interactive roadmap (`Roadmap`):
  - Progress overview cards (progress %, modules, time, XP)
  - `ReactFlowRoadmap` visualizes learning path with XY Flow
- Quizzing:
  - `/quiz` renders `QuizInterface` for direct quiz flow
  - `/quizmaster` provides catalog with filters (category, difficulty), stats (completed, avg score, XP), progress bar, and achievement badges using local dataset
- Notifications with `Toaster` and `Sonner`, tooltips via `TooltipProvider`
- Tailwind-powered design system with theme tokens, animations (accordion), and responsive layout

### Running Locally

Prerequisites: Node.js (LTS) and npm.

```bash
npm install
npm run dev
```

Dev server runs by default at: http://localhost:8080

For production build and preview:

```bash
npm run build
npm run preview
```

### Enhancements to Consider

- Integrate backend APIs for user profiles, progress tracking, and quiz content
- Editable roadmap with save/publish; real module metadata sourced from API/JSON
- Analytics dashboards (e.g., progress over time) with charts (Recharts dependency is available)
- Internationalization (i18n) and accessibility audits
- Unit and component tests (Vitest/RTL) and E2E tests (Playwright)

### Notes

- Vite aliases `@` → `./src` (`vite.config.ts`)
- Tailwind scans `./src/**/*.{ts,tsx}` and defines CSS variables for theme colors (`tailwind.config.ts`)

### New: Circular Hub UI

A new circular hub UI is available at `/hub`, implemented with:

- `src/components/CircularHub.tsx` — gradient “bubble” shortcuts to key features
- `src/pages/Hub.tsx` — gradient background + hub container

Additional placeholder pages and routes:

- `/tasks` → `src/pages/Tasks.tsx`
- `/settings` → `src/pages/Settings.tsx`
- `/achievements` → `src/pages/Achievements.tsx`
- `/progress` → `src/pages/Progress.tsx`

The sidebar “Home” now links to `/hub`.
