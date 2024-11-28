import React from "react";
import { Link } from "react-router-dom";
import './home.css';


const Home=()=>{
    return(
       <div className="container">
        <h1>Biblioteca Digital</h1>
        <p>En esta página web te brindamos una serie de libros, con sus autores,
            para que puedas entretenerte y encontrar nuevas lecturas.
        </p>
        <div>
        <Link to="/booksList" style={{display:"block"}}> 
        Lista de Libros
        </Link>
        <Link to="/authorsList" style={{display:"block"}}>
        Lista de Autores
        </Link>
        </div>
        
        
       
       </div>       
    )
};

export default Home;











