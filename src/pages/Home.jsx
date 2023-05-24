import { FaInstagram, FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa';
import MyPhoto from '../imagens/my photo.PNG';
import '../styles/Home.css';
import Icon from '../components/Icon';
import Header from '../components/Header';


export default function Home() {
  return (
    <>
      <Header />
      <main className="content-home">
        <div className="data">
          <div className="data-person">
            <h1>Hector Souza</h1>
            <h2>FrontEnd Developer</h2>
          </div>
          <div className="social">
            <h3>@_euHec</h3>
            <Icon
              link="https://www.instagram.com/_euhec/"
              label="instagram"
              icon={ <FaInstagram size="30px" /> }
            />
            <Icon
              link="https://www.instagram.com/_euhec/"
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
        </div>
        <div className="photo">
          <img src={ MyPhoto } alt="Hector Souza" />
        </div>
      </main>
    </>
  );
}