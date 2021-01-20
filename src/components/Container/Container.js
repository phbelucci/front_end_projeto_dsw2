import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { Main } from '../main/Main'
import { NavBar } from '../navbar/NavBar'
import { Footer } from '../footer/Footer'

export const Container = () => {

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
            <Main></Main>
            <Footer></Footer>
        </Container>
    )

}