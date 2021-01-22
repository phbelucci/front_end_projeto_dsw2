import React, { useState, useEffect } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import axios from 'axios'

function Maps() {

    const [postos, setPostos] = useState([]);
    const [popup, setPopup] = useState(true);

    useEffect(() => {

        axios.get('https://api.github.com/users/', (req, res) => {
            console.log(res.data);
            setPostos(res.data)
            return res.data;
        })

    }, [])


    return (

        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
            </Marker>
        </MapContainer>

    );
}

export default Maps;