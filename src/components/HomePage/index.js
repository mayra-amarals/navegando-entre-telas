// Importando o componente React da dependencia react
import React from 'react';

// Importando css
import './style.css';

// Importando componente que permiti mudar de página sem recarregar o navegador
import { Link } from 'react-router-dom';

// Criando uma arrow function 
const HomePage = () => (
    <div>
        <h1>Escolha seu caminho em JavaScript</h1>

        <div className="conteudo-opcoes">
            <Link className="opcao-front-end" to='/front-end'>Front-end</Link>
            <Link className="opcao-back-end" to='/back-end'>Back-end</Link>
        </div>
    </div>
);

export default HomePage;