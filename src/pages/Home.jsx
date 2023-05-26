import MyPhoto from '../imagens/my photo.PNG';
import { FaInstagram, FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa';
import Icon from '../components/Icon';
import { useContext } from 'react';
import { Context } from '../context/Context';

export default function Home() {
  const { theme } = useContext(Context);

  return (
    <main className="w-full h-full px-2 pt-20">
      <picture className={`gap-5 p-3 rounded-3xl ${theme === 'ligth' ? 'border-black' : 'border-white' }  border-2 w-full h-4/5 flex items-center justify-center`}>
        <img src={ MyPhoto } alt="Hector Souza" className='w-80 h-full rounded-3xl'/>
        <div>
          <h1 className="text-6xl">Hector Souza</h1>
          <h2 className="text-2xl">Front-end Developer</h2>
          <div className="flex gap-4">
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
          <h3 className="text-sm">@_euHec</h3>
        </div>
      </picture>
    </main>
  );
}