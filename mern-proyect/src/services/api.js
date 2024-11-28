import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:", // Cambia según tu backend
});

// Libros
export const getBooks = async (page = 1) => api.get(`/books?_page=${page}&_limit=10`);
export const getBook = async (id) => api.get(`/books/${id}`);
export const createBook = async (data) => api.post(`/books`, data);
export const updateBook = async (id, data) => api.put(`/books/${id}`, data);
export const deleteBook = async (id) => api.delete(`/books/${id}`);

// Autores
export const getAuthors = async (id) => api.get(`/authors/${id}`);
