// Importando o componente React da dependencia react
import React from 'react';

//Importando componente Botão de voltar
import BackButton from '../BackButton';

// Criando uma arrow function 
const PaginaBackEnd = () => (
  <div>
    <h1>Node.js</h1>

    <p>
      Node.js é uma tecnologia usada para executar código JavaScript fora do navegador. Com ele podemos construir aplicações web em geral, desde web sites até APIs e microsserviços.
    </p>

    <a href="https://www.devmedia.com.br/node-js/"> Guia de Node.js</a>

    <BackButton />
  </div>
);

export default PaginaBackEnd;