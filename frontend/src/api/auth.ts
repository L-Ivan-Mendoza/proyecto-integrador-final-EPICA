import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3000',
})

export const registerReq = async (userData: any): Promise<any> => {
  try {
    const response = await API.post('/register', userData)
    return response.data
  } catch (error) {
    console.error('Error al obtener datos:', error)
    throw error
  }
}

export const loginReq = async (userData: any): Promise<any> => {
  try {
   
    const response = await API.post('/login', userData)

    return response.data

  } catch (error) {
    console.error('Error al obtener datos:', error)
    throw error
  }
}

export const getAllPosts =async (postData: any): Promise<any> => {
  try {
    const response = await API.get('/post', postData)

    return response.data
  
  } catch (error) {
    console.error("Error al obtener posteos", error);
    throw error
  }
}