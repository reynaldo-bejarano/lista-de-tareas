import { Route, Routes } from "react-router-dom"
import Home from "./routes/Home"
import Error404 from "./routes/Error404"


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error404 />} />
      </Routes>

    </div>
  )
}

export default App
