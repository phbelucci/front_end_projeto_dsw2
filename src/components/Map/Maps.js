import React, { useState, useEffect } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import '../../App.css'
import api from '../../api/api'
import styled from 'styled-components'

function Maps() {

    const [postos, setPostos] = useState([]);
    const [popup, setPopup] = useState(true);
    const [userId, setUserId] = useState("")

    let position = []

    useEffect(() => {
        // if(JSON.parse(localStorage.getItem("user")) != null){
        //     setUserId(JSON.parse(localStorage.getItem("user").id))
        // }
        
        // Lista depostos
        api.get('chargeStation').then((response) => {
            setPostos(response.data)
        }).catch((err) => {
            console.error("Erro" + err);
        });

    }, []);

    const handleCurtida = async (postoId) => {
        await api.put(`/users/favorites/${userId}/${postoId}`).then(response => {
            return response.data;
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
                postos.map(posto => {
                    position = [posto.lat, posto.long]
                    return (
                        <Marker key={posto.id} position={position}>
                            <Popup>
                                <div>
                                    <h5>{posto.nome}</h5>
                                    <h5>Avaliação: {posto.meanstars}</h5>
                                    <h5>Aberto 24hrs? {posto.atendimento24 ? "Sim" : "Não"}</h5>
                                    <Button onClick={handleCurtida(posto.id)}>Curtir</Button>
                                    
                                </div>
                                <br/>
                                <img src={posto.imagem} alt="imagem do posto" style={{ width: "200px", height: "100px" }}></img>
                            </Popup>
                        </Marker>
                    )
                })
            }

        </MapContainer>

    );
}

export default Maps;