import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import Favoritos from './pages/Favoritos'
import Home from './pages/Home'
import Perfil from './pages/Perfil'

export default function RoutesMain() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact><Home /></Route>
                <Route path="/perfil"><Perfil /></Route>
                <Route path="/favoritos" ><Favoritos /></Route>
            </Switch>
        </Router>
    )
}