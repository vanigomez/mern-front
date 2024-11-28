import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home.jsx';
import Login from './pages/login/login.jsx';
import Register from './pages/register/register.jsx';
import Header from './header/header.jsx';
import Footer from './footer/footer.jsx';
//import BooksList from "./components/books/booksList.js";
//import AuthorsList from './components/authors/authorsList.js';

function App () {
    return (
        <BrowserRouter>
            <Header/>
            <Footer/>
            <Routes>
                <Route path="/"element={<Home/>}/>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                {/*<Route path='/booksList'element={<BooksList/>}/>/*}
                {/*<Route path='/authorsList'element={<AuthorsList/>}/>*/}
            </Routes>
        </BrowserRouter>
    );
}

export default App;

