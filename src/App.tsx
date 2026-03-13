import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Cover } from "./pages/Cover";
import { Definition } from "./pages/Definition";
import { Intro } from "./pages/Intro";
import { ModelVsProduct } from "./pages/ModelVsProduct";
import { Framework } from "./pages/Framework";
import { Datasets } from "./pages/Datasets";
import { Metrics } from "./pages/Metrics";
import { Production } from "./pages/Production";
import { Process } from "./pages/Process";
import { Tools } from "./pages/Tools";
import { WrapUp } from "./pages/WrapUp";
import { Resources } from "./pages/Resources";

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
