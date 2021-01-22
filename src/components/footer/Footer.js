import React, { useState } from 'react'
import styled from 'styled-components'
import Card from '../Card/Card';
export const Footer = ({ props }) => {


    

    const postosDestaque = [{
        id: 1,
        urlImage : 'https://sucessosa.com.br/uploads/imagens/abre-materia-posto-6.jpg',
        nome : 'Posto Tal',
        endereco: 'Rua Tal, n 1000',
        is24hrs: 'Sim',
        stars: 3,
    },{
        id: 2,
        urlImage : 'https://sucessosa.com.br/uploads/imagens/abre-materia-posto-6.jpg',
        nome : 'Posto Tal',
        endereco: 'Rua Tal, n 1000',
        is24hrs: 'Sim',
        stars: 3,
    },{
        id: 3,
        urlImage : 'https://sucessosa.com.br/uploads/imagens/abre-materia-posto-6.jpg',
        nome : 'Posto Tal',
        endereco: 'Rua Tal, n 1000',
        is24hrs: 'Sim',
        stars: 3,
    }]

    const Footer = styled.footer`
        
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1%;
        width: 100%;
        height: 20vh;
        background: linear-gradient(305.85deg, rgba(11, 55, 64, 0.76) 44.36%, rgba(102, 126, 234, 0) 401.19%);
        filter: drop-shadow(2px 2px 5px #23DDA9);
        border-radius: 5px;
    `;

    
   

    const listaCards = () => {

        return postosDestaque.map( posto => {
            return (
                <Card key={posto.id} posto={posto}></Card>
            )
        })
    }

    return <Footer>
        {listaCards()}
    </Footer>
}