import React from 'react';
import styled from 'styled-components'
import Card from '../Card/Card'

function Perfil() {

    const user = {
        "name": "Paulo Belucci",
        "email": "testeemailvalido@email.com",
        "password": "testeSenhaValida123",
        "urlImage": "https://avatars.githubusercontent.com/u/41579551?s=460&u=ef8dae43d90d542f814c5af9a5a1ba1f459f9bad&v=4"
    }

    const handlePerfil = () => {
        return (
            <PerfilDados>
                <PerfilImg src={user.urlImage} alt="foto user"></PerfilImg>
                <PerfilInfos>
                    <label>Nome
                        <h5>{user.name}</h5>
                    </label>
                    <label>Email
                        <h5>{user.email}</h5>
                    </label>
                </PerfilInfos>
                <PerfilButton>SALVAR</PerfilButton>
            </PerfilDados>
            
        )
    }


    const ContainerPerfil = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding-top: 2%;
        padding-bottom: 2%;
        height: 55vh;
        width: 100%;
        border: 2px solid black;
    `;

    const ContainerPerfilDados = styled.div`

        height: 70%;
        width: 96%;

    `;

    const PerfilDados = styled.div`
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 100%;
        background: #FFFFFF;
        border: 1px solid #10CA85;
        box-sizing: border-box;
        box-shadow: -5px 5px 4px rgba(0, 0, 0, 0.2);
        border-radius: 5px;
    `;


    const ContainerPerfilFavoritos = styled.div`
        height: 25%;
        width: 47%;
        margin-left: 2%;
        align-self: flex-start;
        border: 2px solid black;

        font-family: Strong;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 29px;
        color: #10CA85;
    `;

    
    const PerfilInfos = styled.div`
        display: flex;
        flex-direction: column;
        margin-top: 1%;
        width: 60%;
        height: 100%;
        font-family: Strong;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 29px;
        color: #10CA85;

    `;

    const PerfilImg = styled.img`
        width: 100px;
        height: 100px;
        margin: 1% 0 0 1%;
        border-radius: 50%;
    
    `;

    const PerfilButton = styled.button`
        align-self: flex-end;
        margin: 0% 1% 1% 0%;
        width: 105px;
        height: 37px;
        background: #FFFFFF;
        border: 1px solid #10CA85;
        box-sizing: border-box;
        border-radius: 5px;
        font-family: Strong;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 29px;
        color: #10CA85;
    `;



    return (
        <ContainerPerfil>
            <ContainerPerfilDados>
                {handlePerfil()}
            </ContainerPerfilDados>
            <ContainerPerfilFavoritos></ContainerPerfilFavoritos>
        </ContainerPerfil>
    );
}

export default Perfil;