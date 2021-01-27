import React, { useState, useEffect } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import '../../App.css'
import api from '../../api/api'
import styled from 'styled-components'

function Maps() {

    const [postos, setPostos] = useState([]);
    const [popup, setPopup] = useState(true);
    const [user, setUser] = useState([])

    let position = []

    useEffect(() => {
        // User logado
        setUser(JSON.parse(localStorage.getItem("user")))

        // Lista de postos
        api.get('chargeStation').then((response) => {
            setPostos(response.data)
        }).catch((err) => {
            console.error("Erro" + err);
        });

    }, []);

    const handleCurtida = async (postoId) => {
        console.log(`/users/favorites/${user.id}/${postoId}`);
        await api.put(
            `users/favorites/${user.id}/${postoId}`,
            {},
            {headers: { Authorization: `Bearer ${user.token}` }})
        .then(response => {
            return response.data;
        })
        .catch((err) => {
            console.log("ERRO:", err);
        })
    }

    const Button = styled.button`
        background: #FFFFFF;
        border: 1px solid #10CA85;
        box-sizing: border-box;
        border-radius: 5px;
    `;

    return (

        <MapContainer id="mapid" center={[-22.915777, -47.065287]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {   
                postos ? 
                postos.map(posto => {
                    position = [posto.lat, posto.long]
                    return (
                        <Marker key={posto.idposto} position={position}>
                            <Popup>
                                <div>
                                    <h5>{posto.nome}</h5>
                                    <h5>Avaliação: {posto.meanstars}</h5>
                                    <h5>Aberto 24hrs? {posto.atendimento24 ? "Sim" : "Não"}</h5>
                                    <Button onClick={() => handleCurtida(posto.idposto)}>Curtir</Button>
                                    
                                </div>
                                <br/>
                                <img src={posto.imagem} alt="imagem do posto" style={{ width: "200px", height: "100px" }}></img>
                            </Popup>
                        </Marker>
                    )
                }) : <div></div>

            }

        </MapContainer>

    );
}

export default Maps;