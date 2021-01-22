import React, { useState, useEffect } from 'react';
import axios from 'axios'
// import { Container } from './styles';

function Map() {

    const [postos, setPostos] = useState([]);

    useEffect(() => {

        axios.get('https://api.github.com/users/', (req, res) => {
            console.log(res.data);
            setPostos(res.data)
            return res.data;
        })

    }, [])




  return <div />;
}

export default Map;