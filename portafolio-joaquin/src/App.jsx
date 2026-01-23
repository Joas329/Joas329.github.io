import { BrowserRouter, Route } from "react-router-dom"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route notFound element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
