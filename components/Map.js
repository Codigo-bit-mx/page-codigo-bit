import React from 'react';
import dynamic from 'next/dynamic';
import styled from '@emotion/styled';
import 'leaflet/dist/leaflet.css';

const Contmapa = styled.div`
 width: 100%;
 height: 320px;

 @media(min-width: 768px){
   height: 420px;
 }

`;

const Title = styled.div`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    text-align: center;
`;


const Map = () => {

    const MapWithNoSSR = dynamic( () => import("../components/Mapa"), {
        ssr: false
    });

    return ( 
        <>
    <div>
        <Title>
        <h2>Localizacion</h2>
        <p>Contactanos reunamonos y platiquemos de tu proyecto</p>
        </Title>

        <Contmapa>
            <MapWithNoSSR />
        </Contmapa>
        </div>
        </> 
     );
}
 
export default Map;