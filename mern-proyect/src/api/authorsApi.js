import axiosInstance from './axiosInstance';

export const getAuthors = () => axiosInstance.get('/authors');
export const getAuthorById = (id) => axiosInstance.get(`/authors/${id}`);
export const createAuthor = (authorData) => axiosInstance.post('/authors', authorData);
export const updateAuthor = (id, authorData) => axiosInstance.put(`/authors/${id}`, authorData);
export const deleteAuthor = (id) => axiosInstance.delete(`/authors/${id}`);
