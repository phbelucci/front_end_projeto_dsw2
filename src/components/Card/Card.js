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
      height: 130px;
        
  `;

  const Imagem = styled.div`
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 2%;
      width: 40%;
      height: 100%;

      img {
        width: 150px;
        height: 100px;
      }
  `;

  const Content = styled.div`
    margin-left: 2%;
    width: 65%;
    height: 100%;
  `;
  
  let atendimento24 = "Não"
  if (posto.atendimento24) atendimento24 = "Sim";

  return (
    <Card key={posto.idposto}>
      <Imagem>
        <img src={posto.imagem} alt="icon"></img>
      </Imagem>
      <Content>
        <h6>{posto.nome}</h6>
        <h6>{posto.bairro}</h6>
        <h6>Aberto 24hrs? {atendimento24}</h6>
        <h6>Avaliação: {posto.meanstars}</h6>
      </Content>
    </Card>
  )
}

export default Card;