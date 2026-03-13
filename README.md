# AI Evals For Everyone (React Edition)

An interactive, modern educational guide to understanding AI Evaluation, transformed from a legacy JavaScript SPA into a robust **React + TypeScript** application.

> **Brought to you by Kirk & Gemini**

## 🚀 The Transformation
This project represents a complete architectural overhaul of the original "AI Evals for Everyone" course companion. By migrating to a modern stack, we've improved maintainability, performance, and user experience.

### Technical Evolution
| Feature | Legacy SPA | Modern React (Current) |
| :--- | :--- | :--- |
| **Framework** | Vanilla JS / HTML Strings | **React 19 + TypeScript** |
| **Navigation** | Manual InnerHTML Swapping | **React Router (SPA 404 Hack)** |
| **Styling** | Tailwind CDN (Runtime) | **Tailwind CSS v4 (Build-time)** |
| **Icons** | Web Component CDNs | **@phosphor-icons/react** |
| **Charts** | Global Window Chart.js | **react-chartjs-2 (Declarative)** |
| **Deployment** | Static Hosting | **Automated GitHub Actions CI/CD** |

## 🛠️ Key Features
- **12 Interactive Chapters:** From basic definitions to production monitoring strategies.
- **Interactive Simulations:** Live "Traditional vs AI" behavior comparisons using React state.
- **Data-Driven Metrics:** Scatter plots visualizing the cost vs. impact of evaluation methods.
- **Live Production Monitor:** Real-time log filtering simulation to demonstrate signal-to-noise ratios.
- **Responsive Layout:** A custom-built sidebar and navigation system that works seamlessly on mobile and desktop.
- **Progress Tracking:** Dynamic progress bar that persists as you navigate the course.

## 🧠 Technical Challenges Overcome
### 1. The GitHub Pages SPA Refresh Problem
Static hosts like GitHub Pages return 404s when a user refreshes a client-side route (e.g., `/intro`). We implemented a custom **SPA 404 Redirection Hack** using a `404.html` entry point and a synchronization script in `index.html` to preserve clean URLs without relying on `HashRouter`.

### 2. Tailwind v4 + Vite Integration
Leveraged the latest **Tailwind CSS v4** engine, utilizing the `@tailwindcss/vite` plugin to ensure lightning-fast builds and optimized CSS delivery while maintaining the project's signature "deep blue" brand identity.

### 3. Declarative Interactivity
Ported legacy imperative DOM manipulation (e.g., `document.getElementById().innerText = ...`) into declarative React components, ensuring high-performance updates and type-safe event handling.

## 🏁 Getting Started

### Local Development
```bash
# Install dependencies (utilizing legacy-peer-deps for Vite compatibility)
npm install --legacy-peer-deps

# Start development server
npm run dev
```

### Deployment
The project is configured for automated deployment via **GitHub Actions**. Simply push to the `main` branch to trigger a build and publish to GitHub Pages.

---
*This project was built with the collaborative power of human engineering and AI assistance.*
