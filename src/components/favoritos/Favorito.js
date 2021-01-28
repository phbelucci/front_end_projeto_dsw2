import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import Card from '../Card/Card'
import api from '../../api/api'

function Favorito() {

  let favoritos = []
  let postosFavoritos = []
  const [postosFavoritosState, setPostosFavoritosState ] = useState([])

  useEffect(() => {

    handlePostosFavoritos();

  }, [])

  async function handlePostosFavoritos() {

    favoritos = await api.get(`/users/favorites/${JSON.parse(localStorage.getItem("user")).id}`,
      { headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem("user")).token}` }})
      .then(response => {
        return response.data;
      }).catch(err => {
        console.log(err)
      })


    if (JSON.parse(localStorage.getItem("user")) != null) {

      if (favoritos !== null) {
        const favoritosSplit = favoritos[0].favorites.split(',');
        favoritosSplit.map(async (favorito) => {
          return await api.get(`/chargeStation/${favorito}`).then(response => {
            postosFavoritos.push(response.data.posto[0])
          })
        })
      }

      setPostosFavoritosState(postosFavoritos)
    } 
  }

  const listaCards = () => {
    return (postosFavoritosState.map( posto => (
      <Card key={posto.idposto} posto={posto}></Card>
    )))
  }

  const ContainerFavoritos = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding-top: 2%;
    padding-bottom: 2%;
    height: 55vh;
    
  `;

  return (
    <ContainerFavoritos>
      {listaCards()}
    </ContainerFavoritos>
  );
}

export default Favorito;