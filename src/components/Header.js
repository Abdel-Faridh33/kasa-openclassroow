import { Link } from 'react-router-dom';
import logo from "../assets/LOGO.svg"
import '../styles/components/header.scss';

function Header() {
  return (
    <header>
      <div className="logo">
        <img src={logo} />
      </div>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/about">A Propos</Link>
      </nav>
    </header>
  );
}

export default Header;
