import { NavLink } from 'react-router-dom';
import safiraLogo from '../../assets/icon/safiraLogo.svg';

// CSS
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <NavLink to="./" className={styles.brand}>
            <img src={safiraLogo} alt="Safira Logo" />
            Safira <span>Blog</span>
        </NavLink>
        <ul className={styles.links_list}>
            <li>
                <NavLink to="/" className={({isActive}) => (isActive ? styles.active : "")}>Início</NavLink>
            </li>
            <li>
                <NavLink to="/about" className={({isActive}) => (isActive ? styles.active : "")}>Sobre</NavLink>
            </li>
            <li>
                <NavLink to="/login" className={({isActive}) => (isActive ? styles.active : "")}>Login</NavLink>
            </li>
            <li>
                <NavLink to="/register" className={({isActive}) => (isActive ? styles.active : "")}>Cadastrar-se</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar