import React from 'react';
import Particulas from './Particulas';
import styled from '@emotion/styled';
import {css} from '@emotion/react';

const Background = styled.div`
   background-color: #000000;
    width: 100%;
    height: 40vh; 
    padding: 0px 0px;
     /* position: ; */
    /* z-index: 1;  */
    
    @media (min-width:768px){
        height:70vh;
    }
`;

const Titulo = styled.div`
    color: white;
    position: absolute;
    width:100%;
    text-align: center;
    top:15%;

    p{
        padding: 1rem;
    }
    
    @media (min-width:768px){
        top:30%; 
    }`;


const Barra = () => {
    return ( 
        <>
    <div css={css`
            
          width:100%;
          height:40vh;

          @media(min-width:768px){
          height:70vh;
         }
            `}>
           
            <Background>
                <Particulas />
            <Titulo>
                <h1>Construye tu proyecto con nosotros</h1>
                <p>Consolidate dentro de internet y haz que tu negocio llegue a mas clientes</p>
            </Titulo>    
            </Background>
            
            </div>
        </>
     );
}
 
export default Barra;