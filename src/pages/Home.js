import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { Main } from '../components/main/Main'
import { NavBar } from '../components/navbar/NavBar'
import { Footer } from '../components/footer/Footer'

function Home() {

  const [userLogado, setUserLogado] = useState({})
  useEffect(() => {
    setUserLogado(JSON.parse(localStorage.getItem("user")))
  }, [])

  console.log('userlogado home...', userLogado)
  const Container = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 80%;
        height: 100vh;
    `;

  return (
      <Container>
        <NavBar></NavBar>
        <Main userLogado={userLogado}></Main>
        <Footer></Footer>
      </Container>
    )

  }

export default Home;