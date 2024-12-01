import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home.jsx';
import Login from './pages/login/login.jsx';
import Register from './pages/register/register.jsx';
import Header from './header/header.jsx';
import Footer from './footer/footer.jsx';
import BooksList from "./components/books/booksList.jsx";
import UpdateBook from "./components/books/updateBook.jsx"
import CreateBook from "./components/books/createBook.jsx"
import AuthorsList from './components/authors/authorsList.jsx';
import UpdateAuthor from "./components/authors/updateAuthor.jsx";
import CreateAuthor from "./components/authors/createAuthor.jsx";

function App () {
    return (
        <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/booksList" element={<BooksList />} />
            <Route path="updateBook" element={<UpdateBook/>}/>
            <Route path="/createBook" element={<CreateBook/>}/>
            <Route path="/authorsList" element={<AuthorsList />} />
            <Route path="/updateAuthor" element={<UpdateAuthor/>}/>
            <Route path="/createAuthor" element={<CreateAuthor/>}/>
        </Routes>
        <Footer />
    </BrowserRouter>
    
    );
}

export default App;

