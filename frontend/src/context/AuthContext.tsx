import { ReactNode, createContext, useContext, useState } from "react"
import { registerReq, loginReq } from "../api/auth"




interface AuthContextProps {
    signup: (user: any) => Promise<any>;
    signin: (user: any) => Promise<any>;
    errors: string[]; // Objeto de errores
    isAuth: boolean
    user: any;
  }

export const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) throw new Error("Error en el contexto de usuario")
    return context
}

export const AuthProvider = ({children}: {children: ReactNode}) => {

    const [user, setUser] = useState<any | null>(null)

    // boolean for auth
    const [isAuth, setIsAuth] = useState(false)

    // errors
    const [errors, setErrors] = useState<string[]>([])

    const signup = async (userData: any): Promise<any> => {
        try {
            const res = await registerReq(userData)
            setUser(res)
            setIsAuth(true)
            setErrors([])
        } catch (error:any) {
            //if (error.response && error.response.data)
            setErrors(error.response.data)
            throw error
            
        }
        
    }
    
    const signin = async (userData: any): Promise<any> => {
        try {
            const res = await loginReq(userData)
            setUser(res)
            setIsAuth(true)
            
        } catch (error:any) {
            setErrors(error.response.data)
            throw error
            
        }
    }

    return (

        <AuthContext.Provider 
        value={{
            signup,
            signin,
            isAuth,
            user,
            errors
        }}>
            {children}
        </AuthContext.Provider>

    )
}