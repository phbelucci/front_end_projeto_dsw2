import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import logo from '../assets/offline_bolt-24px.svg'
import { Link, useHistory } from 'react-router-dom'
import api from '../api/api'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

function Login() {

    const history = useHistory()
    const [userLogado, setUserLogado] = useState({})



    useEffect(() => {
        localStorage.clear()
    }, [])

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

            input {
              width: 100%;
              color: #FFF;
              background: linear-gradient(305.85deg, #10CA85 44.36%, rgba(102, 126, 234, 0) 401.19%);
              filter: drop-shadow(2px 2px 5px #0B3740);
              border-radius: 5px;
            }
        }
    `;

    const handleToast = (err) => {
        toast.error(err)
    }

    const loginSubmitHandler = async (event) => {
        event.preventDefault();

        const login = {
            "email": event.target.email.value,
            "password": event.target.password.value,
        };
        console.log(login)
        await api.post('users/login', login).then(res => {
            localStorage.setItem("user", JSON.stringify(res.data))
            setUserLogado(JSON.parse(localStorage.getItem("user")))
            history.push('/')
        }).catch(err => {
            handleToast("Usuário não encontrado!")
        })

    }

    const handleFormulario = () => {
        return (
            <Form onSubmit={(e) => loginSubmitHandler(e)}>
                <LogoAndTitle>
                    <svg />
                    <h5>Clean Energy</h5>
                </LogoAndTitle>
                <label>Email</label>
                <input type='email' id='email' />
                <label>Senha</label>
                <input type='password' id='password' />
                <input type='submit' value="Login" />
                <Link to="/cadastro"><button>Não sou cadastrado...</button></Link>
            </Form>
        )
    }

    return <ContainerCadastro>
        <ToastContainer></ToastContainer>
        {handleFormulario()}
    </ContainerCadastro>;
}

export default Login;