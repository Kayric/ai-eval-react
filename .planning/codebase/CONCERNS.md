# Concerns

This document outlines potential technical debt, security gaps, and areas for improvement.

## Technical Debt
- **Missing Automated Tests**: The lack of unit, integration, and E2E tests increases the risk of regressions as the app grows.
- **Static Content Scalability**: [DONE] Implemented code-splitting/lazy loading for pages in `App.tsx` to optimize bundle size and scalability.
- **Scrolling Logic**: [DONE] Implemented a robust `ScrollToTop` component used in `App.tsx` to ensure a good UX during navigation.
- **Render Optimization**: [DONE] Fixed `set-state-in-effect` anti-pattern in `Production.tsx` to avoid unnecessary renders.

## Security
- **Static Deployment**: Being a static site, there is no server-side logic, which reduces the attack surface. However, ensure that no sensitive information is accidentally committed to the repository.
- **Dependencies**: Regular audits of dependencies (using `npm audit`) are recommended to avoid vulnerabilities in third-party libraries.

## Performance & SEO
- **SEO for SPA**: SPAs hosted on GitHub Pages can face SEO challenges. Implementing a pre-rendering solution or server-side rendering (SSR) could be considered if search engine visibility becomes a priority.
- **Bundle Size**: Chart.js and Framer Motion are powerful but relatively large. Monitor bundle size to ensure fast load times on mobile devices.

## Gaps
- **Error Boundaries**: The application lacks React Error Boundaries to handle runtime errors gracefully.
- **Loading States**: If the app transition to fetching data from an API, standardized loading states will be necessary.
