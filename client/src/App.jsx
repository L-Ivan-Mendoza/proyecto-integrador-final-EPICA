import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"
import { Login } from "./pages/Login"
import Register from "./pages/Register"
import HomePublic from "./pages/HomePublic"
import {PrivateRoutes} from "./routes/PrivateRoutes"
import HomeProfile from "./pages/HomeProfile"
import { PostProvider } from "./context/PostProvider"

function App() {


  return (
    <AuthProvider>
      <PostProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePublic />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          
          <Route element={<PrivateRoutes />}>
            <Route path="/profile" element={<HomeProfile/>} />
            <Route path="/profile/posts" element={<h1>Posteos profile</h1>} />
            <Route path="/profile/post/:id" element={<h1>Post Profile</h1>} />
            <Route path="/profile/add-post" element={<h1>Crear post profile</h1>} />
          </Route>
          
          </Routes>
        </Router>
      </PostProvider>
    </AuthProvider>
  )
}

export default App
