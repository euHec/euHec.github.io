import CardProjects from '../components/CardProjects';
import projectsData from '../projetos/projectsData';

export default function Portifolio() {
  return (
    <main className="w-11/12 h-full m-auto">
      <div className='h-1/2 flex flex-wrap gap-5 justify-center'>
        {
          projectsData.map((projects) =>
            <CardProjects
              key={ projects.id }
              id={ projects.id }
              name = { projects.name }
              repository = { projects.repository }
              deploy = { projects.deploy }
              thumbnails = { projects.thumbnails }
              description = { projects.description }
              technologies = { projects.technologies }
            />
          )
        }
      </div>
    </main>
  );
}
