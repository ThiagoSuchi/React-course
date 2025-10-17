import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Links
import NavBar from './components/NavBar'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import ColorTitle from './pages/ColorTitle'

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/colortitle" element={<ColorTitle />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
