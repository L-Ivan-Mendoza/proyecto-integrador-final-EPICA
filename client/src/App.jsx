import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"
import { Login } from "./pages/Login"
import Register from "./pages/Register"
import HomePublic from "./pages/HomePublic"

function App() {


  return (
    <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePublic />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<h1>Profile</h1>} />
          </Routes>
        </Router>
    </AuthProvider>
  )
}

export default App
