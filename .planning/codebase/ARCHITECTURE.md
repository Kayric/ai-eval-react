# Architecture

The application follows a standard Single Page Application (SPA) architecture with a focus on component-based design and a data-driven content structure.

## High-Level Pattern
- **SPA (Single Page Application)**: Entire app is loaded once, and navigation is handled client-side without full page reloads.
- **Layout-Outlet Pattern**: A root `Layout` component provides a consistent structure (Sidebar + Main Content Area), while `react-router-dom`'s `Outlet` renders the specific page content.
- **Static Data-Driven Navigation**: The application's "chapters" or pages are defined in a central data file (`src/data/chapters.ts`), which is used to generate the navigation menu and track progress.

## Routing
- Managed by `BrowserRouter` in `src/App.tsx`.
- Uses a `basename` for hosting on GitHub Pages subpaths.
- Implements a "catch-all" route to redirect unknown paths back to the home/cover page.

## State Management
- **Local Component State**: Uses React's `useState` for UI-specific state (e.g., sidebar visibility).
- **URL-Based State**: Navigation and "progress" are derived from the current URL path.
- **No Global State Store**: Due to the simplicity of the app, global state management libraries (like Redux or Zustand) are not employed.

## Visualization Logic
- Charts are encapsulated in specialized components (e.g., `MetricChart.tsx`) that wrap `react-chartjs-2` logic, keeping page components focused on layout and content.
