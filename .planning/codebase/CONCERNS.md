# Concerns

This document outlines potential technical debt, security gaps, and areas for improvement.

## Technical Debt
- **Missing Automated Tests**: The lack of unit, integration, and E2E tests increases the risk of regressions as the app grows.
- **Static Content Scalability**: While the current data-driven approach is clean, if the content grows significantly, the main bundle size may increase. Consider code-splitting/lazy loading for pages.
- **Scrolling Logic**: `Layout.tsx` contains a commented-out `useEffect` for scrolling to top. A robust `ScrollToTop` component should be implemented to ensure a good UX during navigation.

## Security
- **Static Deployment**: Being a static site, there is no server-side logic, which reduces the attack surface. However, ensure that no sensitive information is accidentally committed to the repository.
- **Dependencies**: Regular audits of dependencies (using `npm audit`) are recommended to avoid vulnerabilities in third-party libraries.

## Performance & SEO
- **SEO for SPA**: SPAs hosted on GitHub Pages can face SEO challenges. Implementing a pre-rendering solution or server-side rendering (SSR) could be considered if search engine visibility becomes a priority.
- **Bundle Size**: Chart.js and Framer Motion are powerful but relatively large. Monitor bundle size to ensure fast load times on mobile devices.

## Gaps
- **Error Boundaries**: The application lacks React Error Boundaries to handle runtime errors gracefully.
- **Loading States**: If the app transition to fetching data from an API, standardized loading states will be necessary.
