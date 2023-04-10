import { Route, Routes as Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Bio from './pages/Bio';
import Contato from './pages/Contato';
import Portifolio from './pages/Portifolio';

function App() {
  return (
    <Switch>
      <Route exact element={ <Home /> } path="/" />
      <Route exact element={ <Bio /> } path="/bio" />
      <Route exact element={ <Contato /> } path="/contato" />
      <Route exact element={ <Portifolio /> } path="/portifolio" />
  </Switch>
  );
}

export default App;
