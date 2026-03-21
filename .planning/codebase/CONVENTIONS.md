# Conventions

The codebase adheres to modern React and TypeScript best practices to ensure maintainability and readability.

## Naming Conventions
- **Components**: PascalCase (e.g., `MetricChart.tsx`, `Sidebar.tsx`).
- **Files**: PascalCase for components, camelCase for utility/data files (e.g., `chapters.ts`).
- **Variables & Functions**: camelCase (e.g., `isSidebarOpen`, `onClose`).
- **CSS Classes**: Kebab-case, primarily following Tailwind CSS utility patterns.

## Code Style
- **Functional Components**: All components are written as functional components using arrow functions.
- **Named Exports**: Prefer named exports over default exports for components (e.g., `export const Layout = ...`).
- **TypeScript**: Strict type definitions are encouraged. `interface` or `type` are used for component props.
- **Fragment Usage**: Uses `<> ... </>` for grouping multiple elements without adding extra DOM nodes.

## Styling
- **Utility-First**: Tailwind CSS is the primary method for styling.
- **Custom Themes**: Tailwind's `@theme` block in `src/index.css` is used for brand colors and fonts.
- **Animations**: Framer Motion is used for page transitions and interactive elements.

## Component Structure
- Imports (Libraries -> Components -> Data/Assets -> Styles).
- Type Definitions (Props).
- Component Definition.
- Sub-components or local helper functions.
