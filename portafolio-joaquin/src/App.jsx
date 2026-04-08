import { HashRouter, Routes, Route } from "react-router-dom";
import { Projects } from "./pages/ProjectsPage";
import { NotFound } from "./pages/NotFound";
import { Transcripts } from "./pages/Transcripts";
import { Home } from "./pages/Home";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/transcripts" element={<Transcripts />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
