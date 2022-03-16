import React from 'react';
import dynamic from 'next/dynamic';
import styled from '@emotion/styled';
import 'leaflet/dist/leaflet.css';

const Contmapa = styled.div`
 width: 100%;
 height: 200px;
 position: relative;
 z-index:1;
 @media(min-width: 768px){
   height: 420px;
 }

`; 
const Map2 = () => {

    const MapWithNoSSR = dynamic( () => import("../components/Mapa"), {
        ssr: false
    });

    return ( 
        <div>
        <Contmapa>
            <MapWithNoSSR />
        </Contmapa>
        </div>
     );

}
 
export default Map2;