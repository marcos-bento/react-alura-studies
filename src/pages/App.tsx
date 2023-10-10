import React from 'react';
import Formulario from '../components/formulario';
import Lista from '../components/lista';
import app from './app.module.css';

function App() {
  return (
    <div className={app.AppStyle}>
        {<Formulario/>} 
        {<Lista/>}
    </div>
  );
}

export default App;
