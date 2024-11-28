import React, { useState, useEffect} from 'react';
import { getBook, updateBook } from './services/api.js';
import { useParams } from 'react-router-dom';

const UpdateBook=()=>{
    const {id}=useParams();
    const [title, setTitle]=useState('');
    const [author, setAuthor]=useState('');
    const [genre, setGenre]=useState('');
    const [publishedAt, setPublishedAt]=useState('');

    useEffect(()=>{
        const fetchBook=async()=>{
            try{
                const book=await getBook(id);
                setTitle(book.title);
                setAuthor(book.author);
                setGenre(book.genre);
                setPublishedAt(book.publishedAt);

            }catch(error){
                console.error('Error al obtener libro:',error);
            }
        };
        fetchBook();
    },[id]);

    const handleSubmit=async(e)=>{
        e.preventDefault(e);
        try{
            const updatedBook=(title,author,genre,publishedAt);
            await updateBook(id.updatedBook);
            alert('Libro actualizado');
        }catch(error){
            console.error('Error al actualizar libro:',error);
        }
    };

    return(
        <form onSubmit={handleSubmit}>
        <div>
        <label>Título:</label>
        <input
        type="text"
        value={title}
        onChange={(e)=>setTitle(e.target.value)}/>
        </div>
        <div>
            <label>Autor:</label>
            <input
            type="text"
            value={author}
            onChange={(e)=>setAuthor(e.target.value)}
            />
          </div>
          <div>
            <label>Género:</label>
            <input
            type="text"
            value={genre}
            onChange={(e)=>setGenre(e.target.value)}
            />
          </div>
        <div>
            <label>Año de Publicación:</label>
            <input
            type="date"
            value={publishedAt}
            onChange={(e)=>setPublishedAt(e.target.value)}/>
        </div>
        <button type="submit">Actualizar Libro</button>
        </form>
    );
};

export default UpdateBook;