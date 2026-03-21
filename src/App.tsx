import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/Layout";
import { ScrollToTop } from "./components/ScrollToTop";
import { ErrorBoundary } from "./components/ErrorBoundary";

// Lazy-loaded pages for optimized bundle size
const Cover = lazy(() => import("./pages/Cover").then(module => ({ default: module.Cover })));
const Definition = lazy(() => import("./pages/Definition").then(module => ({ default: module.Definition })));
const Intro = lazy(() => import("./pages/Intro").then(module => ({ default: module.Intro })));
const ModelVsProduct = lazy(() => import("./pages/ModelVsProduct").then(module => ({ default: module.ModelVsProduct })));
const Framework = lazy(() => import("./pages/Framework").then(module => ({ default: module.Framework })));
const Datasets = lazy(() => import("./pages/Datasets").then(module => ({ default: module.Datasets })));
const Metrics = lazy(() => import("./pages/Metrics").then(module => ({ default: module.Metrics })));
const Production = lazy(() => import("./pages/Production").then(module => ({ default: module.Production })));
const Process = lazy(() => import("./pages/Process").then(module => ({ default: module.Process })));
const Tools = lazy(() => import("./pages/Tools").then(module => ({ default: module.Tools })));
const WrapUp = lazy(() => import("./pages/WrapUp").then(module => ({ default: module.WrapUp })));
const Resources = lazy(() => import("./pages/Resources").then(module => ({ default: module.Resources })));

// Loading fallback component
const LoadingFallback = () => (
  <div className="flex flex-col items-center justify-center h-full w-full p-8 fade-in min-h-[400px]">
    <div className="relative">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-secondary"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-8 w-8 rounded-full bg-secondary/10 animate-pulse"></div>
      </div>
    </div>
    <p className="mt-6 text-primary/50 font-medium tracking-wide animate-pulse uppercase text-xs">Loading Knowledge...</p>
  </div>
);

function App() {
  return (
    <BrowserRouter basename="/ai-eval-react">
      <ScrollToTop />
      <ErrorBoundary>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Cover />} />
              <Route path="definition" element={<Definition />} />
              <Route path="intro" element={<Intro />} />
              <Route path="model-vs-product" element={<ModelVsProduct />} />
              <Route path="framework" element={<Framework />} />
              <Route path="datasets" element={<Datasets />} />
              <Route path="metrics" element={<Metrics />} />
              <Route path="production" element={<Production />} />
              <Route path="process" element={<Process />} />
              <Route path="tools" element={<Tools />} />
              <Route path="wrapup" element={<WrapUp />} />
              <Route path="resources" element={<Resources />} />
              
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
