import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import { Link, useHistory } from 'react-router-dom'
import api from '../../api/api';

function Perfil() {

    const history = useHistory()
    const [user, setUser] = useState([])
    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("user")))
        console.log('user perfil...', user)
    }, [])

    const [updateActive, setUpdateActive] = useState(false);

    const onToogleUpdate = () => {
        setUpdateActive(!updateActive);
    }

    const deleteUser = () => {
        let resp = window.confirm("Todos seus dados serão apagados, deseja prosseguir?");
        if (resp == true) {
            api.delete (
                'users/'+user.id,
                {headers: { Authorization: `Bearer ${user.token}` }}
                ) 
                .then( (response) => {
                    console.log(response);
                })
                .catch( (err) => {
                    console.log("Erro", err);
                })
        }
    }

    const updateUserSubmit = (event) => {
        event.preventDefault();
        
        const newUserData = {
            "name": event.target.name.value,
            "email" : event.target.email.value,
            "url_image" : event.target.foto.value,
        };
        if (event.target.password.value) newUserData.password = event.target.password.value;

        api.put(
            'users/'+user.id, 
            newUserData,
            {headers: { Authorization: `Bearer ${user.token}` }}
            ) 
            .then( (response) => {
                console.log(response);
                setUpdateActive(!updateActive);
                window.alert("Faça o login para validar as alterações.");
                history.push('/login')
            })
            .catch( (err) => {
                console.log("Erro", err);
            })
    }

    const handlePerfil = () => {
        return (
            user ?
                <PerfilDados>
                    <PerfilImg src={user.url_image} alt="foto user"></PerfilImg>
                    <PerfilInfos>
                        <label>Nome
                        <h5>{user.name}</h5>
                        </label>
                        <label>Email
                        <h5>{user.email}</h5>
                        </label>
                        <PerfilButton onClick={onToogleUpdate}>EDITAR</PerfilButton>
                    </PerfilInfos>

                    

                    {
                        updateActive ? 
                            <Form onSubmit={updateUserSubmit}> 
                                <input type="text" id="name" placeholder="Nome" defaultValue={user.name}></input>
                                <input type="email" id="email" placeholder="Email" defaultValue={user.email}></input>
                                <input type="password" id="password" placeholder="Senha"></input>
                                <input id="foto"  placeholder="Foto" defaultValue={user.url_image}></input>
                                <div>
                                    <PerfilButton id="btnDelete" onClick={deleteUser}>DELETAR</PerfilButton>
                                    <input type="submit" value="SALVAR" id="btnSubmit"/>
                                </div>
                            </Form>
                            :
                            <div></div>
                    }   
                    

                </PerfilDados>
                :
                <PerfilDados>
                    <div>User não esta logado</div>
                    <Link to="/login">Login</Link>
                </PerfilDados>
        )
    }

    // const handlePerfilFavoritos = () => {
    //     return (
    //         // <>
    //         // <Title>

    //         // </Title>
    //         // <Favoritos>

    //         // </Favoritos>
    //         // </>
    //     )
    // }


    const ContainerPerfil = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding-top: 2%;
        padding-bottom: 2%;
        height: 55vh;
        width: 100%;
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

    const Form = styled.form`
        color: #10CA85;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        border: 1px solid #10CA85;
        border-radius: 5px;
        height: 100%;

        input {
            align-self: flex-end;
            margin: 3px 3px 3px 3px;
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
        }

        #btnSubmit{
            width: 105px;
        }

        #btnDelete{
            width: 120px;
        }

        div{
            display: flex;
            width: 100%;
            justify-content: space-evenly;
        }
    `;


    const ContainerPerfilFavoritos = styled.div`
        height: 25%;
        width: 47%;
        margin-left: 2%;
        align-self: flex-start;

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
            <ContainerPerfilFavoritos>
                {/* {handlePerfilFavoritos()} */}
            </ContainerPerfilFavoritos>
        </ContainerPerfil>
    );
}

export default Perfil;