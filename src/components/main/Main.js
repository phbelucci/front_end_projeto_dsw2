import React from 'react'

import styled from 'styled-components'
import home from '../../assets/home.svg'
import profile from '../../assets/profile.svg'
import favorite from '../../assets/favorite.svg'
export const Main = ({ props }) => {

    const options = [
        {
            nome: "Home",
            icon: home
        }, {
            nome: "Perfil",
            icon: profile
        }, {
            nome: "Favoritos",
            icon: favorite
        }
    ]

    const Container = styled.main`
        display: flex;
        justify-content: space-between;
        height: 60vh;
        width: 100%;
    `;
    const SideBar = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 20%;
        height: 60vh;
        border: 2px solid red;
    `;

    const Map = styled.div`
        width: 78%;
        height: 60vh;
        border: 2px solid red;
    `;

    const Option = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        width: 90%;
        height: 10%;
        border: 2px solid blue;

        h5 {
            width: 80%;
            height: 10%;
            padding-left: 5%;

        }

        &:hover{

            background-color: black;
            
            Icon {
                fill: #FFF;
                stroke: #FFF;
                stroke-width: 5;
            }

            h5 {
                color: white;
            }
        }
    `;

    const Icon = styled.svg`
        width: 24px;
        height: 24px;
        background-image: url(${props => props.icon});
        background-repeat: no-repeat;
    `;

    const listOptions = (options) => {

        return options.map(item => {
            console.log(item.nome)
            console.log(item.icon)
            return (
                <Option key={item.nome} >
                    <Icon icon={item.icon}></Icon>
                    <h5>{item.nome}</h5>
                </Option>
            )
        })

    }

    return (
        <Container>
            <SideBar>
                {listOptions(options)}
            </SideBar>
            <Map >

            </Map>
        </Container>
    )
}