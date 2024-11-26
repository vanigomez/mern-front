import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:", // Cambia según tu backend
});

// Noticias
export const getNoticias = async (page = 1) => api.get(`/noticias?_page=${page}&_limit=5`);
export const getNoticia = async (id) => api.get(`/noticias/${id}`);
export const createNoticia = async (data) => api.post(`/noticias`, data);
export const updateNoticia = async (id, data) => api.put(`/noticias/${id}`, data);
export const deleteNoticia = async (id) => api.delete(`/noticias/${id}`);

// Autores
export const getAutores = async () => api.get(`/autores`);
