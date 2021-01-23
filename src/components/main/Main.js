import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'
import home from '../../assets/home.svg'
import profile from '../../assets/profile.svg'
import favorite from '../../assets/favorite.svg'
import Favorito from '../favoritos/Favorito'
import Maps from '../Map/Maps'
import Perfil from '../perfil/Perfil'
export const Main = ({ props }) => {

    
    const [showContent, setShowContent] = useState(0) 

    const options = [
        {
            nome: "Home",
            icon: home,
            link: "/"
        }, {
            nome: "Perfil",
            icon: profile,
            link: '/perfil'
        }, {
            nome: "Favoritos",
            icon: favorite,
            link: '/favoritos'
        }
    ]

    const Container = styled.main`
        display: flex;
        justify-content: space-between;
        height: 60vh;
        width: 100%;
        padding-top: 1%;
        padding-bottom: 1%;
    `;
    const SideBar = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 2%;
        padding-bottom: 2%;
        width: 20%;
        height: 55vh;
        background: linear-gradient(305.85deg, rgba(11, 55, 64, 0.76) 44.36%, rgba(102, 126, 234, 0) 401.19%);
        filter: drop-shadow(2px 2px 5px #23DDA9);
        border-radius: 5px;
    `;

    const MainContainer = styled.div`
        width: 78%;
        height: 60vh;
    `;

    const Option = styled.div`

        display: flex;
        align-items: center;
        padding-left: 2%;
        margin-top: 2%;
        width: 90%;
        height: 10%;
        background: linear-gradient(305.85deg, rgba(11, 55, 64, 0.76) 44.36%, rgba(102, 126, 234, 0) 401.19%);
        filter: drop-shadow(2px 2px 5px #2DA9);
        border-radius: 5px;

        a {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        
        h5 {
            width: 60%;
            height: 10%;
            margin-left: 24px;
            color: #FFF;
        }
        
        &:hover{

            background-color: black;
            cursor: pointer;
            
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
                    <Link to={item.link}>
                        <Icon icon={item.icon}></Icon>
                        <h5>{item.nome}</h5>
                    </Link>
                </Option>
            )
        })

    }

    const handleContent = () => {
        var url_atual = window.location.href;
        const BASE_URL = 'http://localhost:3000';

        console.log(url_atual)

        if(url_atual === BASE_URL) return <Maps></Maps>
        if(url_atual === `${BASE_URL}/perfil`) return <Perfil></Perfil>
        if(url_atual === `${BASE_URL}/favoritos`) return <Favorito></Favorito>
    }

    return (
        <Container>
            <SideBar>
                {listOptions(options)}
            </SideBar>
            <MainContainer >
                {handleContent()}
            </MainContainer>
        </Container>
    )
}