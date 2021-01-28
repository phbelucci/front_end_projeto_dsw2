import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import Card from '../Card/Card'
import api from '../../api/api'

function Favorito() {

  let favoritos = []
  let postosFavoritos = []
  const [postosFavoritosState, setPostosFavoritosState] = useState([])
  let favoritosSplit

  useEffect(() => {
    handlePostosFavoritos();
  }, [])

  async function handlePostosFavoritos() {
    if(JSON.parse(localStorage.getItem("user"))){
      favoritos = await api.get(`/users/favorites/${JSON.parse(localStorage.getItem("user")).id}`,
      { headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem("user")).token}` } })
      .then(response => {
        return response.data;
      }).catch(err => {
        console.log(err)
      })
    }

    if (JSON.parse(localStorage.getItem("user")) != null) {

      if (favoritos != null) {
        if (favoritos[0].favorites != null) {
          console.log(favoritos[0].favorites)
          favoritosSplit = favoritos[0].favorites.split(',');
          favoritosSplit.map(async (favorito) => {
            return await api.get(`/chargeStation/${favorito}`).then(response => {
              postosFavoritos.push(response.data.posto[0])
            })
          })
        }
      }

      setPostosFavoritosState(postosFavoritos)
    }
  }

  const ContainerFavoritos = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding-top: 2%;
    padding-bottom: 2%;
    height: 55vh;

        h5 {
            margin-left: 100px;
            color: #10CA85;
            align-self: center;
        }
      
    
  `;

  const listCards = () => {
    console.log(favoritosSplit)
    favoritosSplit ? favoritosSplit.map( (index, posto) => {
      return <Card key={postosFavoritosState[index].idposto} posto={postosFavoritosState[index]}></Card>
    })
    :
    <h5>Usuário não possui favoritos!</h5>
  }

  return (
    <ContainerFavoritos>
      {
        listCards()
      }
    </ContainerFavoritos>
  );
}

export default Favorito;