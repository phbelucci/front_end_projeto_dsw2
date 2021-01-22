import React from 'react';
import styled from 'styled-components'
import Card from '../Card/Card'

function Favorito() {

  const postosDestaque = [{
    id: 1,
    urlImage: 'https://sucessosa.com.br/uploads/imagens/abre-materia-posto-6.jpg',
    nome: 'Posto Tal',
    endereco: 'Rua Tal, n 1000',
    is24hrs: 'Sim',
    stars: 3,
  }, {
    id: 2,
    urlImage: 'https://sucessosa.com.br/uploads/imagens/abre-materia-posto-6.jpg',
    nome: 'Posto Tal',
    endereco: 'Rua Tal, n 1000',
    is24hrs: 'Sim',
    stars: 3,
  }, {
    id: 3,
    urlImage: 'https://sucessosa.com.br/uploads/imagens/abre-materia-posto-6.jpg',
    nome: 'Posto Tal',
    endereco: 'Rua Tal, n 1000',
    is24hrs: 'Sim',
    stars: 3,
  }, {
    id: 4,
    urlImage: 'https://sucessosa.com.br/uploads/imagens/abre-materia-posto-6.jpg',
    nome: 'Posto Tal',
    endereco: 'Rua Tal, n 1000',
    is24hrs: 'Sim',
    stars: 3,
  }, {
    id: 5,
    urlImage: 'https://sucessosa.com.br/uploads/imagens/abre-materia-posto-6.jpg',
    nome: 'Posto Tal',
    endereco: 'Rua Tal, n 1000',
    is24hrs: 'Sim',
    stars: 3,
  }, {
    id: 6,
    urlImage: 'https://sucessosa.com.br/uploads/imagens/abre-materia-posto-6.jpg',
    nome: 'Posto Tal',
    endereco: 'Rua Tal, n 1000',
    is24hrs: 'Sim',
    stars: 3,
  }, {
    id: 7,
    urlImage: 'https://sucessosa.com.br/uploads/imagens/abre-materia-posto-6.jpg',
    nome: 'Posto Tal',
    endereco: 'Rua Tal, n 1000',
    is24hrs: 'Sim',
    stars: 3,
  }]

  const listaCards = () => {

    return postosDestaque.map( posto => {
        return (
            <Card key={posto.id} posto={posto}></Card>
        )
    })
  }


  const ContainerFavoritos = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding-top: 2%;
    padding-bottom: 2%;
    height: 55vh;
    
  `;


  return(
    <ContainerFavoritos>
      {listaCards()}
    </ContainerFavoritos>  
  );
}

export default Favorito;