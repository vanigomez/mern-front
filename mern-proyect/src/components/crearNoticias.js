import React, {useState} from 'react';
import { createNoticia } from './services/api.js';


const CrearNoticias=()=>{
    const [titulo, setTitulo]=useState('');
    const [contenido, setContenido]=useState('');
    const [fechaPublicacion, setfechaPublicacion]=useState('');

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            const data=await createNoticia({titulo,contenido,fechaPublicacion});
            createNoticia(data);
            console.log('Noticia creada');
            alert('Noticia creada con éxito');
        }catch(error){
            console.error('Error al crear noticia',error);
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
            onChange={(e)=>setfechaPublicacion(e.target.value)}/>
        </div>
        <button type="submit">Crear Noticia</button>
        </form>
    );
};

export default CrearNoticias;