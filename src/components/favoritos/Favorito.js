import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import Card from '../Card/Card'
import api from '../../api/api'

function Favorito() {

  const [postosFavoritos, setPostosFavoritos] = useState([])

  useEffect(() => {
    handlePostosFavoritos();
  }, [])

  function handlePostosFavoritos(){
    if(JSON.parse(localStorage.getItem("user")) != null) {
      let favoritos = JSON.parse(localStorage.getItem("user")).favorites.split(',');
      favoritos.map( async (favorito) => {
        return await api.get(`/chargeStation/${favorito}`).then( response => {
          setPostosFavoritos([...postosFavoritos, response.data.posto[0]])
        })
      })
    } else {
      setPostosFavoritos([])
    }
  }

  const listaCards = () => {
    return postosFavoritos.map( posto => {
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