import React from 'react';
import styled from 'styled-components';
import logo from '../assets/offline_bolt-24px.svg';
import { Link } from 'react-router-dom';
import api from '../api/api';


function Cadastro() {

    const ContainerCadastro = styled.div`
        width: 20%;
        height: 70%;
        background: linear-gradient(305.85deg, #0B3740 44.36%, rgba(102, 126, 234, 0) 401.19%);
        filter: drop-shadow(2px 2px 5px #23DDA9);
        border-radius: 5px;
    
    `;

    const LogoAndTitle = styled.span`
        display: flex;
        align-items: center;
        justify-content: center;
        height: 30px;
        color: #FFF;
        svg  {
            width: 30%;
            height: 100%;
            background-image: url(${logo});
            background-repeat: no-repeat;
        }

        h5 {
            width: 60%;
            height: 100%;
        }
    `;

    const Form = styled.form`
        margin-top: 5%;
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        label {
            margin-top: 3%;
        }

        input {
            border-radius: 5px;
            width: 80%;
        }

        a {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 10%;
            width: 50%;
            

            button {
              width: 100%;
              color: #FFF;
              background: linear-gradient(305.85deg, #10CA85 44.36%, rgba(102, 126, 234, 0) 401.19%);
              filter: drop-shadow(2px 2px 5px #0B3740);
              border-radius: 5px;
            }
        }
    `;

    const handleSubmit = (event) => {
        event.preventDefault();

        const newUser = {
            "name": event.target.name.value,
            "email" : event.target.email.value,
            "password" :  event.target.password.value,
            "urlImage" : event.target.foto.value,
        };
        
        api.post('users/', newUser)
        .then( (response) => {
            console.log(response);
        })
        .catch( (err) => {
            console.log("Erro", err);
        })
    }

    const handleFormulario = () => {
        return (
            <Form onSubmit={handleSubmit}>
                <LogoAndTitle>
                    <svg />
                    <h5>Clean Energy</h5>
                </LogoAndTitle>
                <label>Nome</label>
                <input type="text" id="name"></input>
                <label>Email</label>
                <input type="email" id="email"></input>
                <label>Senha</label>
                <input type="password" id="password"></input>
                <label>Foto</label>
                <input id="foto"></input>
                <Link to={"/login"}></Link>
                <input type="submit" value="Cadastrar" style={{ marginBottom: '30px' }}/>
                <Link to={"/login"}>
                    <button>Já sou cadastrado...</button>
                </Link>
            </Form>
        )
    }

    return <ContainerCadastro>
        {handleFormulario()}
    </ContainerCadastro>;
}

export default Cadastro;