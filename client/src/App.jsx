import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"
import { Login } from "./pages/Login"
import Register from "./pages/Register"
import HomePublic from "./pages/HomePublic"
import {PrivateRoutes} from "./routes/PrivateRoutes"
import HomeProfile from "./pages/HomeProfile"
import { PostProvider } from "./context/PostProvider"
import IndividualPost from "./pages/IndividualPost"

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
            <Route path="/profile/post/:id" element={<IndividualPost/>} />
          </Route>
          
          </Routes>
        </Router>
      </PostProvider>
    </AuthProvider>
  )
}

export default App
