import './App.css'

// 1 - config react router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// components
import Navbar from './Components/Navbar';

// pages
import Home from './Pages/Home';
import About from './Pages/About';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import NotFound from './Pages/NotFound';

function App() {
  return (
    <>
      <BrowserRouter>
      {/* 2 - links com ract router */}
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          {/* 4 - rota dinamica */}
          <Route path='/products/:id' element={<Product />} />
          {/* 6 - nested route */}
          <Route path='/products/:id/cart' element={<Cart />} />
          {/* 7 - no match route */}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
