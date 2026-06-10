import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <span className="logo">GestorApp</span>

      <div className="nav-links">
        <Link to="/" className="link">Video Juegos</Link>
        <Link to="/nuevo" className="link primary">Nuevo Video Juego</Link>
      </div>
    </nav>
  );
}

export default Navbar;