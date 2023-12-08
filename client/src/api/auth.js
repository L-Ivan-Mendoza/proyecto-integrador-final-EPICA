// import axios from "axios"

// const API = axios.create({baseURL: 'http://localhost:3000'})

// export const registerReq = async (userData) => {
//     try {
//         const response = await API.post('/register', userData)
//         console.log("Res de pedido de registro: ", response.userData)
//         return response.userData
//     } catch (error) {
//         console.error("Error al registrar", error);
//         throw error
//     }
// }

// export const loginReq = async (userData) => {
//     try {
//         console.log(userData)
//         const response = API.post('/login', userData)
//         console.log("Res de pedido de logueo: ", response.userData)
//         return response.data
//     } catch (error) {
//         console.error("Error al loguear", error);
//         throw error
//     }
// }

// export const verifyToken = () => axios.get(`/verifyToken`);



//import axios from "axios"
import axios from "./setCredentialsAxios";

// pedido con user como atributo
export const registerReq = (user) => axios.post(`/register`, user);


export const loginReq = (user) => axios.post(`/login`, user);

//verificación del token desde el front
export const verifyToken = () => axios.get(`/verifyToken`);