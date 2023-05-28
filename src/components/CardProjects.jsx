import { FaGithub } from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb';
import Icon from './Icon';
import { useContext } from 'react';
import { Context } from '../context/Context';


export default function CardProjects({id, name, repository, deploy, thumbnails, description, technologies}) {
  const { theme } = useContext(Context);
  return (
      <picture className={`w-5/6 lg:w-4/6 h-120 text-center border  border-slate-950 bg-black rounded-xl m-auto
      ${theme === 'ligth' ? 'bg-black hover: text-white' : 'bg-white hover: text-black' }`}>
        <img className="w-full max-h-60 rounded-xl" src={ thumbnails }  alt={`projeto ${name}`} />
        <h1 className="">{ name }</h1>
        <p className="text-xs text-justify p-4">{ description }</p>
        <div className='flex justify-center gap-2 flex-wrap py-4'>
          {
            technologies.map((tech, index) =>
            <p
              key={ index } 
              className={`p-1 text-xs lowercase rounded-lg
              ${theme === 'ligth' ? 'bg-white text-black' : 'bg-black text-white'}`}
            >
              { tech }
            </p>)
          }
        </div>
        <div className="flex gap-4 justify-center py-4">
          {
            id !== 2 && (
            <Icon
              link={ repository }
              label="Deploy"
              icon={ <FaGithub size="20px" /> }
            />)
          }
          <Icon
            link={ deploy }
            label="Github"
            icon={ <TbWorldWww size="20px" /> }
          />
        </div>
      </picture>
  );
}
