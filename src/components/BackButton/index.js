// Importando o componente React da dependencia react
import React from 'react';

// Importando css
import './style.css';

// Importando componente que permiti mudar de página sem recarregar o navegador
import { Link } from 'react-router-dom';

// Criando uma arrow function 
const BackButton = () => (
  <div className="area-botao">
    <Link className="botao-voltar" to='/'>Voltar</Link>
  </div>
);

export default BackButton;