import { HashRouter, Routes, Route } from "react-router-dom";
import { Projects } from "./pages/ProjectsPage";
import { NotFound } from "./pages/NotFound";
import { Home } from "./pages/Home";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
