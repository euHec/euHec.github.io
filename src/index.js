import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom';
import './index.css';
// import App from './App';
import Home from './pages/Home';
import Bio from './pages/Bio';
import Contato from './pages/Contato';
import Portifolio from './pages/Portifolio';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact element={ <Home /> } path="/" />
        <Route exact element={ <Bio /> } path="/bio" />
        <Route exact element={ <Contato /> } path="/contato" />
        <Route exact element={ <Portifolio /> } path="/portifolio" />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
);
