// 2 - links com ract router
import "./Navbar.css";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
        <Link to="/">Início</Link>
        <Link to="/about">Sobre</Link>
    </nav>
  )
}

export default Navbar