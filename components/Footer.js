import React from 'react';
import styled from '@emotion/styled';
import {css} from '@emotion/react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faYoutube, faWhatsapp } from "@fortawesome/free-brands-svg-icons";


const ContFoot = styled.div`
    background-color: #f5f5f5;
    width: 100%;
`;

const MarcoFoot = styled.div`
    max-width: 80%;
    margin: 0 auto;
    text-align: center;
    padding: 3em 3em 2em 3em;

    @media(min-width: 768px){
        padding: 5em 3em 2em 3em;
    } 
`;

const ListaFoot = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 3rem;
    padding: 0;
    width: 90%;
    margin: 1em auto;

    @media(min-width: 768px){
        
        width: 30%;
    }
`;

const Reserva = styled.div`
    margin: 2em 0 0 0;
`;


const Footer = () => {
    
    return ( 

        <ContFoot>
            <MarcoFoot>
                
                <ListaFoot>

                <li> <FontAwesomeIcon icon={faFacebook} /> </li>
                <li> <FontAwesomeIcon icon={faWhatsapp} /> </li>
                <li> <FontAwesomeIcon icon={faYoutube} /> </li>
                <li> <FontAwesomeIcon icon={faInstagram} /> </li>
               

                </ListaFoot>

                <Reserva>
                    <p>CODIGOBIT MEXICO 2021</p>
                    <p>Derechos resevados</p>
                </Reserva>

            </MarcoFoot>
        </ContFoot>
        
     );
}
 
export default Footer;


