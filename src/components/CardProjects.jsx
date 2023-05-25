export default function CardProjects({name, repository, deploy, thumbnails, description, technologies}) {
  return (
    <>
      <picture>
        <img src={thumbnails} alt={`projeto ${name}`} />
        <h1>{ name }</h1>
        <a href={ deploy } >Deploy</a>
        <a href={ repository } >Github</a>
        <p>{ description }</p>
        {
          technologies.map((tech) => <p>{ tech }</p>)
        }
      </picture>
    </>
  );
}
