import CardProjects from '../components/CardProjects';
import projectsData from '../projetos/projectsData';

export default function Portifolio() {
  return (
    <section className="w-4/5 grid-cols-2 grid m-auto pt-20 gap-5 justify-center items-center">
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
    </section>
  );
}
