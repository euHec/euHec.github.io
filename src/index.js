import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import { HashRouter } from 'react-router-dom'
import './index.css';
import Provider from './context/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>,
);
