import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import BooksPage from './pages/BooksPage';
import ContactUs from './pages/Contactus';
import ArticlesPage from './pages/ArticlesPage';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/books' element={<BooksPage/>}/>
          <Route path='/contact-us' element={<ContactUs/>}/>
          <Route path='/articles' element={<ArticlesPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
