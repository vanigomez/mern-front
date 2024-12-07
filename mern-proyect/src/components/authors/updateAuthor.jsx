import React, { useState, useEffect } from 'react';
import { getAuthor, updateAuthor } from "../../api/authorsApi.js";
import { useParams } from 'react-router-dom';

const UpdateAuthor=()=>{
    const {id}=useParams();
    const [name, setName]=useState('');
    const [birthDate, setBirthDate]=useState('');
    const [nationality, setNationality]=useState('');
    const [loading, setLoading]=useState(true);

    useEffect(()=>{
        const fetchAuthor=async()=>{
            try{
                const author=await getAuthor(id);
                setName(author.name || '');
                setBirthDate(author.birthDate||'');
                setNationality(author.nationality||'');
            }catch(error){
                console.error('Error al obtener datos:',error);
                alert('Error al obtener libro');
            }finally{
                setLoading(false);
            }
        };
        fetchAuthor();
    },[id]);

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            const updatedAuthor={name,birthDate,nationality};
            await updateAuthor(id,updatedAuthor);
            alert('Libro actualizado');
        }catch(error){
            console.error('Error al actualizar libro:',error);
            alert('Error al actualizar libro');
        }
    };
    if(loading){
        return <p>Cargando datos...</p>;
    }

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nombre:</label>
                <input
                type='text'
                value={name}
                onChange={(e)=>setName(e.target.value)}
                />
            </div>
            <div>
                <label>Biografía:</label>
                <input
                type='text'
                value={birthDate}
                onChange={(e)=>setBirthDate(e.target.value)}
                />
            </div>
            <div>
                <label>Nacionalidad:</label>
                <input
                type='text'
                value={nationality}
                onChange={(e)=>setNationality(e.target.value)}
                />
                <button type='submit'>Actualizar autor</button>
            </div>
        </form>
    );
};

export default UpdateAuthor;