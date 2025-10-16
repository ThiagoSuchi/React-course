import './NavBar.css';

import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/contact">Contact</NavLink>            
        </nav>
    )
}

export default NavBar