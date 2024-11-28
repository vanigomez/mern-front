import React, { useState,useEffect } from 'react';
import { getAuthors } from '../../services/api';

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
      return(
        <div>
      <h1>Lista de Autores</h1>
      {authors.map(author=> (
        <div key={author._id}>
          <h2>{author.name}</h2>
          <p><strong>Biografía:</strong> {authors.biography}</p>
          <p><strong>Nacionalidad:</strong> {authors.nationality}</p>
        </div>
      ))}
    </div>
    );
};

export default AuthorsList;
