# Structure

The project directory is organized to separate configuration, assets, and source code efficiently.

## Root Directory
- `index.html`: The entry point for the browser.
- `package.json`: Project metadata, dependencies, and scripts.
- `vite.config.ts`: Vite build configuration.
- `tsconfig.json`: TypeScript configuration.
- `eslint.config.js`: Linting rules.

## Source Directory (`/src`)
- `main.tsx`: Entry point for the React application.
- `App.tsx`: Root component and routing definition.
- `index.css`: Global styles and Tailwind configuration.
- `App.css`: Component-specific styles (legacy/custom).

### `/components`
- `Layout.tsx`: The main structure of the application.
- `Sidebar.tsx`: Navigation and progress tracking component.
- `/charts`: Specialized directory for data visualization components (e.g., `MetricChart.tsx`).

### `/pages`
- Contains individual page components corresponding to different chapters of the interactive guide (e.g., `Cover.tsx`, `Metrics.tsx`, `Production.tsx`).

### `/data`
- `chapters.ts`: Centralized configuration for the application's content structure.

### `/assets`
- Images, icons, and other static files used in the application.

## GitHub Configuration
- `.github/workflows/deploy.yml`: Defines the GitHub Actions CI/CD pipeline for deployment.
