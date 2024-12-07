import axiosInstance from './axiosInstance';

export const getBooks = () => axiosInstance.get('/books');
export const getBookById = (id) => axiosInstance.get(`/books/${id}`);
export const createBook = (bookData) => axiosInstance.post('/books', bookData);
export const updateBook = (id, bookData) => axiosInstance.put(`/books/${id}`, bookData);
export const deleteBook = (id) => axiosInstance.delete(`/books/${id}`);

