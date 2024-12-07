import React, {useState } from "react";
import { createAuthor } from "../../api/authorsApi.js";

const CreateAuthor=()=>{
    const [name, setName]=useState('');
    const [biography, setBiography]=useState('')
    const [nacionality, setNationality]=useState('');

    const handleSubmit=async(e)=>{
        e.preventDefault();

        try{
            const data=await createAuthor({name, biography, nacionality});
            createAuthor(data);
            console.log('Autor creado');
            alert("Autor creado con éxito");
        }catch(error){
            console.error("Error al crear autor:",error);
            alert("Error al crear autor");
        }
    };

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nombre:</label>
                <input
                type="text"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                />
            </div>
            <div>
                <label>Biografía:</label>
                <textarea
                value={biography}
                onChange={(e)=>setBiography(e.target.value)}
                />
            </div>
            <div>
                <label>Nacionalidad:</label>
                <input
                type="text"
                value={nacionality}
                onChange={(e)=>setNationality(e.target.value)}
                />
                <button type="submit">Crear Autor</button>
            </div>
        </form>
    );
};

export default CreateAuthor;