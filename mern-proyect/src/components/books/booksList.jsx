import React, { useState, useEffect } from 'react';
import { getBooks, deleteBook } from '../../services/api.js';

const BooksList = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const data = await getBooks();
                setBooks(data);
            } catch (error) {
                console.log('Error al obtener libros:', error);
            }
        };
        fetchBooks();
    }, []);

    const handleDelete = async (id) => {
        const confirm=window.confirm("¿Estás seguro de querer borrar este libro?")
        if (confirm){
            try {
                await deleteBook(id);
                setBooks(books.filter((book) => book.id !== id));
            } catch (error) {
                console.error('Error al eliminar libro:', error);
                alert("Error al eliminar libro");//notificiación al usuario
            }
        } 
    };

    return (
        <div>
            <h1>Lista de Libros</h1>
            {books.map((book) => (
                <div key={book._id}>
                    <h2>{book.title}</h2>
                    <h3>{book.author}</h3>
                    <h3>{book.genre}</h3>
                    <small>Publicación: {new Date(book.publishedAt).toLocaleDateString()}</small>
                    <button onClick={() => handleDelete(book._id)}>Eliminar Libro</button>
                </div>
            ))}
        </div>
    );
    
};

export default BooksList;

