import React, { useState,useEffect } from 'react';
import { deleteAuthor, getAuthors } from '../../services/api';

const AuthorsList=()=>{
    const [authors, setAuthors]=useState([]);

    useEffect(() => {
        const fetchAuthors = async () => {
            try {
                const data = await getAuthors();
                setAuthors(data);
            } catch (error) {
                console.log('Error al obtener autores:', error);
                alert('Error al obtener autores.')
            }
        };
        fetchAuthors();
    }, []);

    const handleDelete=async (id)=> {
      const confirm=window.confirm("¿Estás seguro de querer borrar este autor?")
      if (confirm){
        try{
          await deleteAuthor(id);
          setAuthors(authors.filter(author=>author.id !==id));
        }catch(error){
          console.error("Error al eliminar autor:",error);
          alert("Error al eliminar autor");
        }
      }
    };
      return(
        <div>
      <h1>Lista de Autores</h1>
      {authors.map(author=> (
        <div key={author._id}>
          <h2>{author.name}</h2>
          <h2>{author.birthDate}</h2>
          <p><strong>Nacionalidad:</strong> {authors.nationality}</p>
          <button onClick={()=>handleDelete(author.id)}>Eliminar autor</button>
        </div>
      ))}
    </div>
    );
};

export default AuthorsList;
