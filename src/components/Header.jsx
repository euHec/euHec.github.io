import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaGripLines, FaTimes } from 'react-icons/fa';
import { Context } from '../context/Context.js';
import { FaInstagram, FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa';
import Icon from '../components/Icon';

export default function Header() {
  const { click, setClick } = useContext(Context)
  return (
    <header className="w-full h-14 flex items-center">
      {
        click ?
          <FaTimes size="30" className="sm:hidden" onClick={ () => setClick(!click) } /> :
          (<FaGripLines size="30" className="sm:hidden" onClick={ () => setClick(!click) } />)
      }
      <nav className="w-4/5 flex justify-around">
        <Link to="/" onClick={ () => setClick(!click)} >
          Home
        </Link>
        <Link to="/bio" onClick={ () => setClick(!click)} >
          Bio
        </Link>
        <Link to="/portifolio" onClick={ () => setClick(!click)} >
          Portifólio
        </Link>
        <Link className='bg-black py-1 px-5 rounded-3xl text-white hover:bg-white hover:text-black ' to="/contato" onClick={ () => setClick(!click)} >
          Contato
        </Link>
      </nav>
      <div className="w-1/5 flex justify-center border-l-2 border-black gap-3">
        <Icon
          link="https://www.instagram.com/_euhec/"
          label="instagram"
          icon={ <FaInstagram size="30px" /> }
        />
        <Icon
          link="https://www.linkedin.com/in/hectorsouza/"
          label="instagram"
          icon={ <FaLinkedin size="30px" /> }
        />
        <Icon
          link="https://wa.me/5575991821105/"
          label="WhatsApp"
          icon={ <FaWhatsapp size="30px" /> }
        />
        <Icon
          link="https://github.com/euHec"
          label="Github"
          icon={ <FaGithub size="30px" /> }
        />
      </div>
    </header>
  );
}
