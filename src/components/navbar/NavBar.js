import React, { useState } from 'react'
import styled from 'styled-components'
import logo from '../../assets/offline_bolt-24px.svg'
import iSearch from '../../assets/search-24px.svg'
export const NavBar = ({ props }) => {

    const title = "CLEAN ENERGY"

    const onSearch = () => {
        console.log('search')
    }

    const handleSearch = (e) => {
        return console.log(e.target.value)
    }

    const Container = styled.div`
        display: flex;  
        width: 100%;
        height: 10vh;
        justify-content: space-between;
        border: 2px solid red;

    `;

    const LogoAndTitle = styled.span`
        display: flex;
        align-items: center;
        justify-content: center;
        width: 20%;
        height: 100%;
        border: 2px solid red;
        svg  {
            width: 30%;
            height: 30%;
            background-image: url(${logo});
            background-repeat: no-repeat;
        }
    `;

    const Search = styled.span`
        width: 78%;
        border: 2px solid red;
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
            width: 10%;
            height: 30%;
            background-image: url(${iSearch});
            background-repeat: no-repeat;
        }
        input {
            width: 80%;
            height: 30%;
        }
    `;


    return (
        <Container>
            <LogoAndTitle>
                <svg></svg>
                {title}
            </LogoAndTitle>
            <Search>
                <svg></svg>
                <input placeholder="Pesquisar..." onChange={(e) => handleSearch(e)}></input>
            </Search>
        </Container>
    )

}