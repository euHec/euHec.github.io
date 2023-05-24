import { useContext } from 'react';
import NavItens from '../components/NavItens';
import { FaGripLines, FaTimes } from 'react-icons/fa';
import '../styles/NavItens.css';
import { Context } from '../context/Context.js';

export default function Header() {
  const { click, setClick } = useContext(Context)
  return (
    <header>
      {
        click ?
          <FaTimes size="30" className="close-nav" onClick={ () => setClick(!click) } /> :
          (<FaGripLines size="30" className="open-nav" onClick={ () => setClick(!click) } />)
      }
      <NavItens state={ click }/>
    </header>
  );
}
