import React from 'react';
import styled from 'styled-components'


function Card({posto}) {

  const Card = styled.span`
      display: flex;
      align-items: center;
      color: #FFF;
      margin-left: 1%;
      margin-top: 1%;
      background: linear-gradient(305.85deg, rgba(11, 55, 64, 0.76) 44.36%, rgba(102, 126, 234, 0) 401.19%);
      filter: drop-shadow(2px 2px 5px #23DDA9);
      border-radius: 5px;
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

  return (
    <Card key={posto.id}>
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
}

export default Card;