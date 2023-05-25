import CardProjects from '../components/CardProjects';
import Header from '../components/Header';
import projectsData from '../projetos/projectsData';

export default function Portifolio() {
  return (
    <>
      <Header />
      <main>
        <h1>Portifolio</h1>
        {
          projectsData.forEach((projects) => {
            <CardProjects
              name = { projects.name }
              repository = { projects.repository }
              deploy = { projects.deploy }
              thumbnails = { projects.thumbnails }
              description = { projects.description }
              technologies = { projects.technologies }
            />
          })
        }
      </main>
    </>
  );
}
