import Header from '../components/Header';
import CardProjects from '../components/CardProjects';
import projectsData from '../projetos/projectsData';

export default function Portifolio() {
  return (
    <>
      <Header />
      <main>
        {
          projectsData.map((projects, index) =>
            <CardProjects
              key={ index }
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
    </>
  );
}
