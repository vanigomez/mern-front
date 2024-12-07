import { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import './login.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/login", { email, password });
      console.log("Inicio de sesión exitoso:", response.data);
      //guardar token o datos del usuario en el almacenamiento local
      localStorage.setItem('token',response.data.token)
      alert("Inicio de sesión exitoso");
      Navigate('/home')
    } catch (error) {
      if (error.response) {
        console.error("Error de autenticación:", error.response.data);
        alert(error.response.data.message || "Credenciales inválidas");
      } else {
        console.error("Error de red:", error.message);
        alert("Ocurrió un error, intenta más tarde.");
      }
    }
  };

  return (
     <form onSubmit={handleSubmit}>
      <h1>Iniciar Sesión</h1>
      <label>Correo electrónico:</label>
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <label>Contraseña:</label>
      <input
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Login;






