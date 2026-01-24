import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Projects } from "./pages/ProjectsPage"
import { NotFound } from "./pages/NotFound"
import { Home } from "./pages/Home"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
