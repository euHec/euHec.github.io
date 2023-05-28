import CardProjects from '../components/CardProjects';
import projectsData from '../projetos/projectsData';

export default function Portifolio() {
  return (
    <main className="w-full lg:w-4/5 lg:grid-cols-2 grid m-auto pt-16 pb-3 lg:pt-20 gap-5 justify-center items-center">
      {
        projectsData.map((projects, index) =>
          <CardProjects
            key={ index }
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
    </main>
  );
}
