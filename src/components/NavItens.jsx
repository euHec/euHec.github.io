import { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavItens.css';
import { Context } from '../context/Context.js';

export default function NavItens() {
  const { click, setClick } = useContext(Context)
  return (
    <nav className={ click ? "closebar" : "sidebar"}>
      <div>
        <Link to="/" onClick={ () => setClick(!click)} >
          Home
        </Link>
        <Link to="/bio" onClick={ () => setClick(!click)} >
          Bio
        </Link>
        <Link to="/portifolio" onClick={ () => setClick(!click)} >
          Portifólio
        </Link>
      </div>
      <div>
        <Link to="/contato" onClick={ () => setClick(!click)} >
          Contato
        </Link>
      </div>
    </nav>
  );
}

