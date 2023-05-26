import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaGripLines, FaTimes } from 'react-icons/fa';
import { Context } from '../context/Context.js';

export default function Header() {
  const { click, setClick, theme, setTheme } = useContext(Context);
  return (
    <header className={`w-full h-14 flex items-center fixed ${theme === 'ligth' ? 'ligth' : 'dark'}`} >
      {
        click ?
          <FaTimes size="30" className="sm:hidden" onClick={ () => setClick(!click) } /> :
          (<FaGripLines size="30" className="sm:hidden" onClick={ () => setClick(!click) } />)
      }
      <nav className="w-5/6 flex justify-around">
        <Link to="/" onClick={ () => setClick(!click)} >
          Home
        </Link>
        <Link to="/bio" onClick={ () => setClick(!click)} >
          Bio
        </Link>
        <Link to="/portifolio" onClick={ () => setClick(!click)} >
          Projetos
        </Link>
        <Link
          className={`ease-in-out duration-500 py-1 px-5 rounded-3xl
          ${theme === 'ligth' ? 'bg-black hover:bg-white text-white hover:text-black' : 'bg-white hover:bg-black text-black hover:text-white' }`}
          to="/contato"
          onClick={ () => setClick(!click)}
        >
          Contato
        </Link>
      </nav>
      <div className={`w-1/6 flex justify-center border-l-2 ${ theme === 'ligth' ? 'border-black' : 'border-white'} gap-3`}>
        {
          theme === 'ligth'
          ? <MdDarkMode size="30px" onClick={ () => setTheme('dark')} />
          : <MdOutlineLightMode size="30px" onClick={ () => setTheme('ligth')} />
        }
      </div>
    </header>
  );
}
