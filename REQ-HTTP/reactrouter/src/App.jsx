import './App.css'

// 1 - config react router
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// components
import Navbar from './Components/Navbar';
import SearchForm from './Components/SearchForm';

// pages
import Home from './Pages/Home';
import About from './Pages/About';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import NotFound from './Pages/NotFound';
import Search from './Pages/Search';

function App() {
  return (
    <>
      <BrowserRouter>
        {/* 2 - links com ract router */}
        <Navbar />
        {/* 9 - search */}
        <SearchForm />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          {/* 6 - nested route */}
          <Route path='/products/:id/cart' element={<Cart />} />
          {/* 4 - rota dinamica */}
          <Route path='/products/:id' element={<Product />} />
          {/* 9 - search */}
          <Route path='/search' element={<Search />} />
          {/* 10 - redirect */}
          <Route path='/company' element={<Navigate to="/about" />} />
          {/* 7 - no match route */}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
