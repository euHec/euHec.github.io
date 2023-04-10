import { Route, Routes as Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Bio from './pages/Bio';
import Contato from './pages/Contato';
import Portifolio from './pages/Portifolio';

function App() {
  return (
    <Switch>
      <Route exact element={ <Home /> } path="/meu-portifolio" />
      <Route exact element={ <Bio /> } path="/meu-portifolio/bio" />
      <Route exact element={ <Contato /> } path="/meu-portifolio/contato" />
      <Route exact element={ <Portifolio /> } path="meu-portifolio/portifolio" />
  </Switch>
  );
}

export default App;
