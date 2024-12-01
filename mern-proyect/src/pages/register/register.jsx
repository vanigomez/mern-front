import React, { useState } from "react";
import axios from 'axios';
import { Navigate } from "react-router-dom";
import './register.css';

const Register = ()=>{
const [form, setForm]=useState({nombre:'',email:'',password:''});

const handleChange=(e)=>{
    const {name,value}=e.target;
    setForm((prevForm)=>({...prevForm,[name]:value}));
};

const handleSubmit=async(e)=>{
    e.preventDefault();

    try{
        const response= await axios.post('api/register',form);
        console.log('Registro exitoso:',response.data);
        alert ('Registro exitoso');
        Navigate('/home')
    }catch(error){
        if(error.response){
            //maneja errores específicos
            console.log('Error en la respuesta del servidor:',error.response.data);
            alert(`Error: ${error.response.data.message || 'No se pudo contactar con el servidor. Por favor, inténtalo más tarde.'}`);
        }else{
            console.error('Error:',error.message);
            alert('Ocurrió un error inseperado');
        }
    }
};
return(
    <form onSubmit={handleSubmit}>
        <h1>Registrar</h1>
        <label>Nombre:</label>
        <input
        type="text"
        name="nombre"
        value={form.nombre}
        onChange={handleChange}/>
        <label>Correo Electrónico:</label>
        <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}/>
        <label>Contraseña:</label>
        <input
        type="password"
        name="password"
        value={form.password}
        onChange={handleChange}/>
        <button type="submit">Enviar</button>
    </form>
    );
};

export default Register;