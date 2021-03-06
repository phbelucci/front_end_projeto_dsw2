import React, { useState,  useEffect } from 'react'
import styled from 'styled-components'
import Card from '../Card/Card';
import api from '../../api/api'


export const Footer = ({ props }) => {

    const [postosDestaque, setPostoDestaque] = useState([]);

    useEffect(() => {
        // Postos destaque
        api.get('chargeStation/highlights')
        .then((response) => {
            setPostoDestaque(response.data);
        })
        .catch((err) => {
            console.error("Erro" + err);
        });

    }, []);


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
        return postosDestaque ? postosDestaque.map( posto => {
            return (
                <Card key={posto.idposto} posto={posto}></Card>
            )
        }) : <div>Não há postos em destaque nesse momento!</div>
    }

    return <Footer>
        {listaCards()}
    </Footer>
}