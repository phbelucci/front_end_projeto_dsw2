import React, { useState, useEffect } from 'react';
import { MapConsumer, MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import '../../App.css'
import api from '../../api/api'

function Maps() {

    const [postos, setPostos] = useState([]);
    const [popup, setPopup] = useState(true);

    let position = []

    useEffect(() => {
        // Lista depostos
        api.get('chargeStation').then((response) => {
            setPostos(response.data)
            console.log("Postos: ", response.data);
        }).catch((err) => {
            console.error("Erro" + err);
        });

    }, []);

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
                                <p>{posto.nome}</p>
                                <p>Aberto 24hrs? {posto.atendimento24}</p>
                                <img src={posto.imagem} alt="imagem do posto"></img>
                                
                            </Popup>
                        </Marker>
                    )
                })
            }

        </MapContainer>

    );
}

export default Maps;