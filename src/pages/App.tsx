import React from 'react';
import Formulario from '../components/formulario';
import Lista from '../components/lista';
import app from './app.module.css';
import Cronometro from '../components/cronometro';

function App() {
  return (
    <div className={app.AppStyle}>
        <Formulario/>
        <Lista/>
        <Cronometro/>
    </div>
  );
}

export default App;
