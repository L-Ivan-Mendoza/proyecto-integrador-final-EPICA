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



//import axios from "./setCredentialsAxios";

import axios from "axios"

const API = axios.create({baseURL: 'http://localhost:3000'})
//pedidos al servidor con axios

//creamos registerReq con un user por atributo y vamos a pasarle a la petición con ese user
export const registerReq = (user) => API.post(`/register`, user);

//creamos el loginRequest
export const loginReq = (user) => API.post(`/login`, user);

//creamos la verificación del token desde el fron
export const verifyToken = () => API.get(`/verifyToken`);