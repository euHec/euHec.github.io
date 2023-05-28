import MyPhoto from '../imagens/my photo.PNG';
import { FaInstagram, FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa';
import Icon from '../components/Icon';
import { useContext } from 'react';
import { Context } from '../context/Context';

export default function Home() {
  const { theme } = useContext(Context);

  return (
    <main className="w-screen h-screen pt-16 md:pt-20 px-5">
      <div
        className={
          `${theme === 'ligth' ? 'border-black' : 'border-white' }
          p-5 border-2 rounded-3xl flex flex-col items-center lg:flex-row lg:w-full lg:h-5/6 m-auto`
        }
      >
        <div className='w-full h-full mx-auto'>
          <img src={ MyPhoto } alt="Hector Souza" className='w-auto h-full m-auto rounded-3xl '/>
        </div>
        <div className='w-full h-full mx-auto flex flex-col justify-center text-center gap-2 lg:text-left lg:gap-5'>
          <h1 className="text-4xl sm:text-6xl">Hector Souza</h1>
          <h2 className="text-2xl">Front-end Developer</h2>
          <div className="flex gap-4 justify-center lg:justify-start">
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
      </div>
    </main>
  );
}