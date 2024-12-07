import axios from "axios";

const API_BASE_URL= import.meta.env.VITE_API_URL;
const axiosInstance=axios.create({
    baseURL: API_BASE_URL,
    headers:{
        "Content-Type":"application-json",
    },
});

//interceptores para agregar un token de autenticación
axiosInstance.interceptors.request.use(
    (config)=>{
        const token=localStorage.getItem('token');//almacén de token en localStorage
        if (token){
            config.headers.Authorization=`Bearer ${token}`;
        }
        return config;
    },
    (error)=>Promise.reject(error)
);

//manejo de errores globales
axiosInstance.interceptors.response.use(
    (response)=>response,
    (error)=>{
        if (error.response && error.response.status===401){
            //manejar errores de autenticación
            console.error('No autorizado, por favor, iniciá sesión nuevamente');
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;