import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_LOCAL_API_URL,
    headers: {
        Autorization: process.env.REACT_APP_LOCAL_API_AUTHORIZATION
    }
})

export default api;