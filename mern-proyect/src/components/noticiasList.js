import React, {useState,useEffect}from 'react';
import {getNoticias, deleteNoticias} from './services/api.js';

const NoticiasList=()=>{
    const [noticias, setNoticias]= useState ([]);

useEffect(()=>{
    const fetchNoticias=async()=>{
        try{
            const data=await getNoticias();
            setNoticias(data);
        }catch(error){
            console.log('Error al obtener noticias:',error);
        }
    };
    fetchNoticias();
},[]);

const handleDelete = async (id) => {
     try { 
        await deleteNoticias(id);
         setNoticias(noticias.filter(noticia => noticia.id !== id));
         } catch (error) { 
            console.error('Error al eliminar noticia:', error); 
        } 
    };

    return(
        <div>
            <h2>Lista de Noticias</h2>
            <ul>
                {noticias.map(noticias=>(
                    <li key={noticias.id}>
                        <h3>{noticias.titulo}</h3>
                        <p>{noticias.contenido}</p>
                        <small>Publicado el:{newDate(noticias.fechaPublicacion).toLocalDateString()}</small>
                        <button onClick={()=>handleDelete(noticias.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default NoticiasList;
