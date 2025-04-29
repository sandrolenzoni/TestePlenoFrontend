import { Route, Routes } from "react-router"

import LoginPage from "./pages/login"
import HomePage from "./pages/home"


function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="login" element={<LoginPage />} />
    </Routes>
  )
}

export default App
