import React, { useState } from 'react'
import styled from 'styled-components'
import logo from '../../assets/offline_bolt-24px.png'
import iSearch from '../../assets/search-24px.png'
import {Link} from 'react-router-dom'
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

        h5 {
            width: 70%
        }

        svg  {
            width: 30%;
            height: 50%;
            background-image: url(${logo});
            background-repeat: no-repeat;
            margin-left: 5%;
        }
    `;

    const Search = styled.span`
        width: 78%;
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
            width: 5%;
            height: 50%;
            background-image: url(${iSearch});
            background-repeat: no-repeat;
        }
        input {
            width: 80%;
            height: 60%;
            text-indent: 5%;
            border-radius: 5px;

        }
        a {
            margin-left: 5%;
            color: #FFF;
        }
    `;


    return (
        <Container>
            <LogoAndTitle>
                <svg></svg>
                <h5>{title}</h5>                
            </LogoAndTitle>
            <Search>
                <svg></svg>
                <input placeholder="Pesquisar..." onChange={(e) => handleSearch(e)}></input>
                <Link to='/login'>SAIR</Link>
            </Search>
        </Container>
    )

}