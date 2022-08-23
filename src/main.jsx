import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { CrudApp } from './CrudApp';
import 'bootswatch/dist/Morph/bootstrap.min.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CrudApp />
    </BrowserRouter>
  </React.StrictMode>
);
