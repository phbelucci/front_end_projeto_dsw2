import React from 'react'

import { Layout, Menu } from 'antd';
import styled from 'styled-components'


export const Main = ({ props }) => {

    const options = [
        {   
            nome: "Bem vindo"
            icon: 
        },{

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

        width: 90%;
        height: 100%;

        svg {
            width: 50%;
            height: 50%;
            background-image: ${props => {props.icon}}        
        }

    
    `;

    const listOptions = (options) => {

        return (
            <Option>
                <svg icon={options.icon}></svg>
            </Option>
        )
    }

    return (
        <Container>
            <SideBar>
                {listOptions()}
            </SideBar>
            <Map >

            </Map>
        </Container>
    )
}