import axios from "axios";

// Crear una instancia de Axios
//const api = axios.create({
 // baseURL: process.env.REACT_APP_API_URL || "http://localhost:3000", // Usar variable de entorno
//});

// Funciones para Libros
export const getBooks = (page = 1) => api.get(`/books`, { params: { _page: page, _limit: 10 } });
export const getBook = (id) => api.get(`/books/${id}`);
export const createBook = (data) => api.post(`/books`, data);
export const updateBook = (id, data) => api.put(`/books/${id}`, data);
export const deleteBook = (id) => api.delete(`/books/${id}`);

// Funciones para Autores
export const getAuthors = () => api.get(`/authors`); // Obtener todos los autores
export const getAuthor = (id) => api.get(`/authors/${id}`); // Obtener un autor específico
export const createAuthor = (data) => api.post(`/authors`, data);
export const updateAuthor = (id, data) => api.put(`/authors/${id}`, data);
export const deleteAuthor = (id) => api.delete(`/authors/${id}`);
