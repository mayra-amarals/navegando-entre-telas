// Importando o componente React da dependencia react
import React from 'react';

// Importando biblioteca react-router-dom
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Importando componentes das páginas
import HomePage from '../HomePage';
import PageFrontEnd from '../PageFrontEnd';
import PageBackEnd from '../PageBackEnd';

// Criando uma arrow function 
const Routes = () => (
    // Navegação entre telas alterando a url e selecionando uma rota para ser exibida e depois associando a url a um componente
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={ HomePage }/>
            <Route path='/front-end' component={ PageFrontEnd } />
            <Route path='/back-end' component={ PageBackEnd } />
        </Switch>
    </BrowserRouter>
);

export default Routes;