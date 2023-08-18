import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaGripLines, FaTimes } from 'react-icons/fa';
import { Context } from '../context/Context.js';

export default function Header() {
  const { click, setClick, theme, setTheme } = useContext(Context);
  return (
    <>
      <header className={`w-full h-14 flex justify-between px-8 lg:px-0 lg:justify-center items-center fixed ${theme === 'ligth' ? 'ligth' : 'dark'}`} >
        {
          click ?
            <FaTimes size="30" className="transition-shadow duration-1000 a lg:hidden" onClick={ () => setClick(!click) } /> :
            (<FaGripLines size="30" className="sm:hidden" onClick={ () => setClick(!click) } />)
        }
        <nav className={`lg:w-5/6 lg:flex justify-around ${'hidden'} lg:block`}>
          <Link to="/">
            Home
          </Link>
          <Link to="/bio">
            Bio
          </Link>
          <Link to="/portifolio">
            Projetos
          </Link>
          <Link
            className={`ease-in-out duration-500 py-1 px-5 rounded-3xl
            ${theme === 'ligth' ? 'bg-black hover:bg-white text-white hover:text-black' : 'bg-white hover:bg-black text-black hover:text-white' }`}
            to="/contato"
          >
            Contato
          </Link>
        </nav>
        <div className={`w-1/6 flex justify-center lg:border-l-2 ${ theme === 'ligth' ? 'border-black' : 'border-white'} gap-3`}>
          {
            theme === 'ligth'
            ? <MdDarkMode size='30px' className='cursor-pointer' onClick={ () => setTheme('dark')}/>
            : <MdOutlineLightMode size='30px' className='cursor-pointer' onClick={ () => setTheme('ligth')} />
          }
        </div>
      </header>
      {
        click && (
          <nav className={`p-2 mt-14 absolute left-0 z-20 h-40 w-full flex flex-col
          justify-around text-center transition-all duration-1000 ease-in-out
            ${theme === 'ligth'
                ? 'bg-black hover:bg-white text-white hover:text-black'
                : 'bg-white hover:bg-black text-black hover:text-white' }`}
          >
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
              className={`ease-in-out duration-500 py-1 px-5 rounded-3xl cursor-pointer
              ${theme === 'ligth'
              ? 'bg-white hover:bg-black text-black hover:text-white' 
              : 'bg-black hover:bg-white text-white hover:text-black'
            }`}
              to="/contato"
              onClick={ () => setClick(!click)}
            >
              Contato
            </Link>
          </nav>)
      }
    </>
  );
}
