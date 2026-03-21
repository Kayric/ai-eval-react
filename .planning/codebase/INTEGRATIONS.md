# Integrations

The application is primarily a static frontend project with focus on knowledge sharing and interactive visualizations.

## CI/CD & Deployment
- **GitHub Actions**: Automated deployment workflow defined in `.github/workflows/deploy.yml`.
- **GitHub Pages**: The application is hosted as a static site on GitHub Pages under the `/ai-eval-react/` base path.
- **Node.js 20**: The runtime environment used for build and deployment processes.

## External Services
- **No Backend APIs**: Currently, the application does not integrate with any external backend services or databases. All data is managed locally within the project.

## Browser APIs
- **History API**: Used by `react-router-dom` for client-side navigation.
- **Local Storage / Session Storage**: Not currently used, but available for state persistence if needed.
