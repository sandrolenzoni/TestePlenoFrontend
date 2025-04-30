import { Route, Routes } from "react-router"
import LoginPage from "./pages/login"
import HomePage from "./pages/home"
import { AppProvider } from "./context/AppContext"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const client = new QueryClient();

function App() {
  return (
    <AppProvider>
      <QueryClientProvider client={client}>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
        </Routes>
      </QueryClientProvider>
    </AppProvider>
  )
}

export default App
