import React, { useState, useEffect } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import '../../App.css'
import api from '../../api/api'

function Maps() {

    const [postos, setPostos] = useState([]);
    const [popup, setPopup] = useState(true);

    const position = [-22.906, -47.062]

    useEffect(() => {
        api.get('chargeStation')
        .then((response) => {
            console.log(response.data);
        })
        .catch((err) => {
            console.error("Erro" + err);
        });

    }, []);

    return (

            <MapContainer id="mapid" center={position} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>

    );
}

export default Maps;