import study from '../imagens/study.svg'
import eu from '../imagens/eu.jpeg'
import { useContext } from 'react';
import { Context } from '../context/Context';

export default function Bio () {
  const { theme } = useContext(Context);

    return (
    <section className="pt-20 px-5">
      <h1 className="text-center text-6xl py-5">Sobre mim!</h1>
      <div className="w-full items-center justify-center flex flex-col lg:flex-row gap-10">
        <div className="w-full lg:w-1/3 text-justify order-2">
          <h3>Seja bem-vindo! Meu nome é Hector Souza e sou natural de Feira de Santana, na Bahia. Sempre tive paixão por tecnologia e, após explorar diferentes áreas, decidi fazer uma transição de carreira e me tornar um desenvolvedor. Atualmente, meu foco está no desenvolvimento <strong>Front-end</strong>, mas também estou me especializando em <strong>Back-end</strong>.</h3>
          <br />
          <h3>Durante minha trajetória profissional, tive a oportunidade de trabalhar em empresas como Huggy, Fresh Filmes, Conecta Minas e Rank My App. Nessas experiências, desempenhei funções relacionadas a vendas, atendimento e cobrança. Em algumas delas, tive a chance de ter um contato mais próximo com a tecnologia, o que apenas reforçou minha paixão pela área.</h3>
          <div className="w-full text-center lg:text-right">
            <a href="https://www.linkedin.com/in/hectorsouza/" target="_blank" rel="noreferrer" className="text-xs hover:text-slate-500">clique para saber mais sobre carreira...</a>
          </div>
        </div>
        <img src={ eu } alt="formação" className="w-3/6 lg:w-2/6 rounded-full order-1"/>
      </div>
      <div className="w-full items-center justify-center flex">
        <img src={ study } alt="formação" className="hidden lg:block w-2/6"/>
        <div className="w-full flex justify-center flex-col lg:w-2/6">
          <h1 className="text-4xl lg:text-2xl text-center py-3">Formação</h1>
          <div className="w-full py-3 text-center lg:text-left">
            <h2 className={`m-auto lg:m-0 p-1 ${theme === 'ligth' ? 'bg-black text-white' : 'bg-white text-black' } text-center rounded-xl w-44`}>Nov/2022 - Nov/2023</h2>
            <h3>Desenvolvimento Web Full Stack - <strong><a href="betrybe.com" target="_blank">Trybe</a></strong></h3>
          </div>
          <div className="w-full py-3 text-center lg:text-left">
            <h2 className={`m-auto lg:m-0 p-1 ${theme === 'ligth' ? 'bg-black text-white' : 'bg-white text-black' } text-center rounded-xl w-44`}>Jun/2019 - Em pausa</h2>
            <h3>Sistemas de informação - UNIFTC</h3>
          </div>
          <div className="w-full py-3 text-center lg:text-left">
            <h2 className={`m-auto lg:m-0 p-1 ${theme === 'ligth' ? 'bg-black text-white' : 'bg-white text-black' } text-center rounded-xl w-44`}>Jun/2016 - Jun/2018</h2>
            <h3>Técnico em Mecânica, SENAI</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
