import React, { useState, useEffect} from 'react';
import { getNoticia, updateNoticia } from './services/api.js';
import { useParams } from 'react-router-dom';

const EditarNoticias=()=>{
    const {id}=useParams();
    const [titulo, setTitulo]=useState('');
    const [contenido, setContenido]=useState('');
    const [fechaPublicacion, setFechaPublicacion]=useState('');

    useEffect(()=>{
        const fetchNoticias=async()=>{
            try{
                const noticia=await getNoticia(id);
                setTitulo(noticia.titulo);
                setContenido(noticia.contenido);
                setFechaPublicacion(noticia.fechaPublicacion);
            }catch(error){
                console.error('Error al obtener noticia:',error);
            }
        };
        fetchNoticias();
    },[id]);

    const handleSubmit=async(e)=>{
        e.preventDefault(e);
        try{
            const noticiaActualizada={titulo,contenido,fechaPublicacion};
            await updateNoticia(id.noticiaActualizada);
            alert('Noticia actualizada');
        }catch(error){
            console.error('Error al actualizar noticia:',error);
        }
    };

    return(
        <form onSubmit={handleSubmit}>
        <div>
        <label>Título:</label>
        <input
        type="text"
        value={titulo}
        onChange={(e)=>setTitulo(e.target.value)}/>
        </div>
        <div>
            <label>Contenido:</label>
            <textarea
            value={contenido}
            onChange={(e)=>setContenido(e.target.value)}/>
        </div>
        <div>
            <label>Fecha de Publicación:</label>
            <input
            type="date"
            value={fechaPublicacion}
            onChange={(e)=>setFechaPublicacion(e.target.value)}/>
        </div>
        <button type="submit">Actualizar Noticia</button>
        </form>
    );
};

export default EditarNoticias;