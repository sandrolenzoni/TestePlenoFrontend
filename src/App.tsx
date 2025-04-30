import { Route, Routes } from "react-router"

import LoginPage from "./pages/login"
import HomePage from "./pages/home"
import { AppProvider } from "./context/AppContext"


function App() {
  return (
    <AppProvider>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
      </Routes>
    </AppProvider>
  )
}

export default App
