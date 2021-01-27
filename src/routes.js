import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import Favoritos from './pages/Favoritos'
import Home from './pages/Home'
import Perfil from './pages/Perfil'
import Cadastro from './pages/Cadastro'
import Login from './pages/Login'

export default function RoutesMain() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact><Home /></Route>
                <Route path="/cadastro" exact><Cadastro /></Route>
                <Route path="/login"><Login /></Route>
                <Route path="/perfil"><Perfil /></Route>
                <Route path="/favoritos" ><Favoritos /></Route>
            </Switch>
        </Router>
    )
}