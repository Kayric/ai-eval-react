# Testing

Currently, the project lacks automated testing infrastructure.

## Current State
- **No Automated Tests**: `package.json` does not include test runners like Vitest, Jest, or Cypress.
- **Manual Verification**: Changes must be manually verified in the development environment (`npm run dev`) before deployment.

## Recommended Tools
- **Vitest**: A fast unit testing framework compatible with Vite.
- **React Testing Library**: For testing React components from the user's perspective.
- **Playwright / Cypress**: For End-to-End (E2E) testing of user flows and chart interactions.

## Future Patterns
- **Unit Tests**: Test data transformations and utility functions in `/data`.
- **Component Tests**: Verify that components render correctly based on props and handle user interactions (e.g., sidebar toggle).
- **Integration Tests**: Verify navigation flows between chapters.
