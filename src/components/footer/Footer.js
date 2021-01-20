import React, { useState } from 'react'
import styled from 'styled-components'
export const Footer = ({ props }) => {

    const postosDestaque = [{
        urlImage : 'https://sucessosa.com.br/uploads/imagens/abre-materia-posto-6.jpg',
        nome : 'Posto Tal',
        endereco: 'Rua Tal, n 1000',
        is24hrs: 'Sim',
        stars: 3,
    },{
        urlImage : 'https://sucessosa.com.br/uploads/imagens/abre-materia-posto-6.jpg',
        nome : 'Posto Tal',
        endereco: 'Rua Tal, n 1000',
        is24hrs: 'Sim',
        stars: 3,
    },{
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
        width: 100%;
        height: 20vh;
        border: 2px solid red;
    `;

    const Card = styled.span`
        display: flex;
        align-items: center;
        border: 2px solid red;
        width: 30%;
        
    `;

    const Imagem = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 2%;
        width: 40%;
        height: 100%;

        img {
            width: 100%;
            height: 100%;
        }
    `;

    const Content = styled.div`
        margin-left: 2%;
        width: 65%;
        height: 100%;
    `;

    const listaCards = () => {

        return postosDestaque.map( posto => {
            return (
                <Card>
                    <Imagem>
                        <img src={posto.urlImage}></img>
                    </Imagem>
                    <Content>
                        <h5>{posto.nome}</h5>
                        <h5>{posto.endereco}</h5>
                        <h5>Aberto 24hrs? {posto.is24hrs}</h5>
                        <h5>Avaliação: {posto.stars}</h5>
                    </Content>
                </Card>
            )
        })
        
    }

    return <Footer>
        {listaCards()}
    </Footer>
}