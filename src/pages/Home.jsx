import MyPhoto from '../imagens/my photo.PNG';


export default function Home() {
  return (
    <>
      <main className="content-home">
        <div className="data">
          <div className="data-person">
            <h1>Hector Souza</h1>
            <h2>FrontEnd Developer</h2>
          </div>
          <div className="social">
            <h3>@_euHec</h3>

          </div>
        </div>
        <div className="photo">
          <img src={ MyPhoto } alt="Hector Souza" />
        </div>
      </main>
    </>
  );
}