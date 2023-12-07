import { createContext, useContext, useState, useEffect } from "react"
import { registerReq, loginReq, verifyToken } from "../api/auth"
import Cookies from "js-cookie";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error("Error en el contexto de usuario")
  return context
}

export const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)

    // boolean for auth
    const [isAuth, setIsAuth] = useState(false)

    // errors
    const [errors, setErrors] = useState([])

    const signup = async (user) => {
        try {
          const res = await registerReq(user)
            setUser(res.data)
            setIsAuth(true)
        } catch (error) {
            //if (error.response && error.response.data)
            setErrors(error.response.data)
            
        }
        
    }
    
    const signin = async (user) => {
        try {
          const res = await loginReq(user)
            setUser(res.data)
            setIsAuth(true)
        } catch (error) {
            setErrors(error.response.data)
        }
    }


  const signout = () => {
    Cookies.remove("token");
    setIsAuth(false);
    setUser(null);
  };

  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errors]);


  useEffect(() => {
    async function verifyLogin() {
      const cookies = Cookies.get();
      if (cookies.token) {
        try {
          const res = await verifyToken(cookies.token);
          console.log(res);
          if (res.data) {
            setIsAuth(true);
            setUser(res.data);
          } else {
            setIsAuth(false);
          }
        } catch (error) {
          setIsAuth(false);
          setUser(null);
        }
      }
    }
    verifyLogin();
  }, []);

    return (

        <AuthContext.Provider 
        value={{
            signup,
            signin,
            signout,
            user,
            isAuth,
            errors,
        }}>
            {children}
        </AuthContext.Provider>

    )
}

