import React, { useState, useEffect } from "react";
import axios from "axios"; 
import { deleteBook } from "../../api/booksApi.js";
import { useNavigate } from "react-router-dom";

const BooksList = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate= useNavigate();

  // Filtros y paginación
  const [filters, setFilters] = useState({
    page: 1,
    pageSize: 10,
    title: "",
    sortBy: "publicationYear",
    order: "desc",
    year: "",
  });

  const [meta, setMeta] = useState({
    currentPage: 1,
    totalPages: 1,
  });

  // Función para buscar libros
  const fetchBooks = async () => {
    setLoading(true);
    setError(null);
    try {
      const queryParams = new URLSearchParams(filters).toString();
      const response = await axios.get(`/api/books?${queryParams}`);
      const { data, meta } = response.data;
      setBooks(data);
      setMeta(meta); // Asigna los datos de la paginación
    } catch (err) {
      console.error(err.response?.data?.message || "Error al buscar libros.");
      setError("Error al buscar libros.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, [filters]);

  // Manejadores de eventos
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handlePageChange = (newPage) => {
    setFilters((prev) => ({ ...prev, page: newPage }));
  };

  const handleSortChange = (sortBy) => {
    setFilters((prev) => ({
      ...prev,
      sortBy,
      order: prev.order === "asc" ? "desc" : "asc",
    }));
  };

  const handleDelete = async (id) => {
    const confirm = window.confirm("¿Estás seguro de querer borrar este libro?");
    if (confirm) {
      try {
        await deleteBook(id);
        setBooks(books.filter((book) => book._id !== id));
      } catch (error) {
        console.error("Error al eliminar libro:", error);
        alert("Error al eliminar libro");
      }
    }
  };

  //función para redirigir a la página de edición
  const handleEdit= (id)=>{
    navigate("/updateBook");
  };

  //redirige a la página de creación
  const handleCreate= ()=>{
    navigate("/createBook");
  };

  return (
    <div>
      <h1>Lista de Libros</h1>
      <button onClick={handleCreate}>Crear libro</button>
      <div>
        <input
          type="text"
          name="title"
          placeholder="Buscar por título"
          value={filters.title}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <input
          type="number"
          name="year"
          placeholder="Año"
          value={filters.year}
          onChange={handleInputChange}
        />
        <button onClick={fetchBooks}>Buscar</button>
      </div>
      <>
        {loading ? (
          <p>Cargando...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <>
            <table>
              <thead>
                <tr>
                  <th>Portada</th>
                  <th onClick={() => handleSortChange("title")}>Título</th>
                  <th onClick={() => handleSortChange("author")}>Autor</th>
                  <th onClick={() => handleSortChange("year")}>Año</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {books.map((book) => (
                  <tr key={book._id}>
                      <td>
                    <img
                      src={book.coverUrl || "https://via.placeholder.com/100"}
                      alt={book.title}
                      style={{ width: "100px", height: "150px", objectFit: "cover" }}
                    />
                  </td>
                    <td>{book.title}</td>
                    <td>{book.genre}</td>
                    <td>{book.author}</td>
                    <td>{book.publicationYear}</td>
                    <td>
                    <button onClick={() => handleEdit(book._id)}>
                        Editar libro
                      </button>
                      <button onClick={() => handleDelete(book._id)}>
                        Eliminar libro
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div>
              <button
                disabled={meta.currentPage === 1}
                onClick={() => handlePageChange(meta.currentPage - 1)}
              >
                Anterior
              </button>
              <span>
                Página {meta.currentPage} de {meta.totalPages}
              </span>
              <button
                disabled={meta.currentPage === meta.totalPages}
                onClick={() => handlePageChange(meta.currentPage + 1)}
              >
                Siguiente
              </button>
            </div>
          </>
        )}
      </>
    </div>
  );
};

export default BooksList;
