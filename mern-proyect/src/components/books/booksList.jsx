import React, { useState, useEffect } from 'react';
import { getBooks, deleteBook } from './services/api.js';

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
        try {
            await deleteBook(id);
            setBooks(books.filter((book) => book.id !== id));
        } catch (error) {
            console.error('Error al eliminar libro:', error);
        }
    };

    return (
        <div>
            <h2>Lista de Libros</h2>
            <ul>
                {books.map((book)=> (
                    <li key={book.id}>
                        <h3>{book.title}</h3>
                        <h3>{book.author}</h3>
                        <p>{book.genre}</p>
                        <small>Publicado el: {new Date(book.publishedAt).toLocaleDateString()}</small>
                        <button onClick={() => handleDelete(book.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BooksList;

