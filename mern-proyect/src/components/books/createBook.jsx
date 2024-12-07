import React, {useState} from 'react';
import { createBook } from "../../api/booksApi.js";


const CreateBook=()=>{
    const [title, setTitle]=useState('');
    const [genre, setGenre]=useState('');
    const [author, setAuthor]=useState('');
    const [publicationYear, setPublicationYear]=useState('');

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            const data=await createBook({title, genre, author, publicationYear});
            createBook(data);
            console.log('Libro agregado');
            alert('Libro agregado con éxito');
        }catch(error){
            console.error('Error al agregar noticia:',error);
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
            onChange={(e)=>setGenre(e.target.value)}/>
        </div>
        <div>
            <label>Año de Publicación:</label>
            <input
            type="date"
            value={publishedAt}
            onChange={(e)=>setPublicationYear(e.target.value)}/>
        </div>
        <button type="submit">Agragar Libro</button>
        </form>
    );
};

export default CreateBook;