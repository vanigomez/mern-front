import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home.jsx';
import Login from './pages/login/login.jsx';
import Register from './pages/register/register.jsx';
import Header from './header/header.jsx';
import Footer from './footer/footer.jsx';
import BooksList from "./components/books/booksList.jsx";
import UpdateBook from "./components/books/UpdateBook.jsx"
import CreateBook from "./components/books/CreateBook.jsx"
import AuthorsList from './components/authors/authorsList.jsx';
import UpdateAuthor from "./components/authors/UpdateAuthor.jsx";
import CreateAuthor from "./components/authors/CreateAuthor.jsx";

function App () {
    return (
        <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/BooksList" element={<BooksList />} />
            <Route path="UpdateBook" element={<UpdateBook/>}/>
            <Route path="/CreateBook" element={<CreateBook/>}/>
            //{<Route path="/AuthorsList" element={<AuthorsList />} />}
            <Route path="/UpdateAuthor" element={<UpdateAuthor/>}/>
            <Route path="/CreateAuthor" element={<CreateAuthor/>}/>
        </Routes>
        <Footer />
    </BrowserRouter>
    
    );
}

export default App;

