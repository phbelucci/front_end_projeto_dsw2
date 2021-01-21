import React from 'react'
import {
    Router,
    Route
} from 'react-router-dom';

import Favoritos from './pages/Favoritos'
import Home from './pages/Home'
import Perfil from './pages/Perfil'

export default function RoutesMain(){
    return (
        <Router>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/perfil" element={<Perfil/>}></Route>
            <Route path="/favoritos" element={<Favoritos/>}></Route>
        </Router>
    )
}