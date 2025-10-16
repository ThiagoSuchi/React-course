// 2 - links com ract router
import "./Navbar.css";

import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      {/* <Link to="/">Início</Link>
        <Link to="/about">Sobre</Link> */}

      <NavLink to="/">Início</NavLink>
      <NavLink to="/about">Sobre</NavLink>
    </nav>
  )
}

export default Navbar