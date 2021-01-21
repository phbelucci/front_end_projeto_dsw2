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
        background: linear-gradient(305.85deg, rgba(11, 55, 64, 0.76) 44.36%, rgba(102, 126, 234, 0) 401.19%);
        filter: drop-shadow(2px 2px 5px #23DDA9);
        border-radius: 5px;


    `;

    const LogoAndTitle = styled.span`
        display: flex;
        align-items: center;
        justify-content: center;
        width: 20%;
        height: 100%;
        color: #FFF;

        svg  {
            width: 30%;
            height: 30%;
            background-image: url(${logo});
            background-repeat: no-repeat;
        }
    `;

    const Search = styled.span`
        width: 78%;
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
            width: 10%;
            height: 30%;
            color: #FFF;
            background-image: url(${iSearch});
            background-repeat: no-repeat;
        }
        input {
            width: 80%;
            height: 60%;
            text-indent: 5%;
            border-radius: 5px;

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