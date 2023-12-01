import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Register from "./pages/Register"
import Login from "./pages/Login"
import { AuthProvider } from "./context/AuthContext"
import NavBarPublic from "./components/NavBarPublic"
import NavBarProfile from "./components/NavBarProfile"

function App() {



  return (
    <AuthProvider>
    <Router>
      <Routes>
        <Route path="/" element={
        <NavBarPublic/>
        // posteos
        }/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/profile/:userId" element={
        <NavBarProfile/>
        //posteos
        }/>
        <Route path="/post/:postId" element={
        <h1>Posteo1</h1>
        //</Router>comment
        }/>
      </Routes>
    </Router>
    </AuthProvider>
  )
}

export default App
