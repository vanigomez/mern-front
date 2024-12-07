import React, { useState, useEffect } from "react";
import { getAuthors, deleteAuthor } from "../../api/authorsApi.js"; // Asegúrate de importar correctamente las funciones de API
import { useNavigate } from "react-router-dom";

const AuthorsList = () => {
  const [authors, setAuthors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const data = await getAuthors();
        setAuthors(data);
      } catch (error) {
        console.log("Error al obtener autores:", error);
        alert("Error al obtener autores.");
      }
    };
    fetchAuthors();
  }, []);

  const handleDelete = async (id) => {
    const confirm = window.confirm("¿Estás seguro de querer borrar este autor?");
    if (confirm) {
      try {
        await deleteAuthor(id);
        setAuthors(authors.filter((author) => author._id !== id));
      } catch (error) {
        console.error("Error al eliminar autor:", error);
        alert("Error al eliminar autor");
      }
    }
  };

  const handleEdit = (id) => {
    navigate(`/UpdateAuthor/${id}`);
  };

  const handleCreate = () => {
    navigate("/CreateAuthor"); // Asegúrate de que esta ruta coincida con la definida en tu `Router`.
  };

  return (
    <table>
      <tbody>
      <div>
      <h1>Lista de Autores</h1>
      <button onClick={handleCreate}>Crear Autor</button>
      {authors.map((author) => (
        <div key={author._id}>
          <h2>{author.name}</h2>
          <h3>{author.birthDate}</h3>
          <p>
            <strong>Nacionalidad:</strong> {author.nationality}
          </p>
          <button onClick={() => handleEdit(author._id)}>Editar Autor</button>
          <button onClick={() => handleDelete(author._id)}>Eliminar Autor</button>
        </div>
      ))}
    </div>
      </tbody>
    </table>
  
  );
};

export default AuthorsList;
