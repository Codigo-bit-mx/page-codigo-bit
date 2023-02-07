import React, {useState} from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import {css} from '@emotion/react';
import Hamburguer from './Hamburguer';
import Menu from './Menu';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Navegacion = styled.nav`
    background-color: black;
    width: 100%;
    color: white;
    display: grid;
    padding: 1rem 0;

    @media (min-width: 991px){
    display: grid;
    grid-template-columns: 40% 30% 30%;
    }

    @media (min-width: 1060px) {
    display: grid;
    grid-template-columns: 40% 20% 40%;
    padding: 5px 0;
    }
`;
    const Enlace = styled.a`
     font-family: 'Montserrat', sans-serif;
     font-size: 13px;
     text-transform: uppercase;
     padding: 1em 0;
     cursor: pointer;
     color:white;
     text-decoration:none;

     &:hover{
         text-decoration:none;
         color: white;
     }
`;


const Header = () => {
    const [open, setOpen] = useState (false);

    const clickActivo = () => {
        setOpen(!open);
    }

    return ( 

        <div className="contenedor-header">

            <div className="contenedor-navegacion">
            <div className="Logo">
            <Navegacion>
            <div css={css`
             @media (min-width: 991px){
                display: none
             } 
            `} > 
              <Hamburguer 
                open = {open}
                clickActivo = {clickActivo}
              /></div> 

            <div css={css`
                text-align: center;
                color: rgb(255,0,0);
                font-size: 1.5rem;
            `}> 
                <h2 css={css` 
                margin: 0;
                padding: 6px 0;
                ` 
            }>CodigoBit!</h2> 
            </div>
            
            <div 
              css={css`
              display:none;
              @media (min-width: 991px){
                 display: grid;
                 grid-template-columns: auto auto auto;
                 text-align: center;
                 }
             `}>
             <Link href="/"><Enlace>Inicio</Enlace></Link>
             <Link href="/servicios"><Enlace>Servicios</Enlace></Link>
             <Link href="/contactos"><Enlace>Contactos</Enlace></Link>
            </div>      
           
            <div 
            css={css`
            text-align: end;
            display: none;
            @media (min-width: 991px){
                display:block;
            }`}>
                <ul css={css`
                    display:grid;
                    width:100%;
                    justify-items: end;
                    padding:0px 0; 
                    margin:0;
                `}
                
                >
                <li css={css` width: 50px; height:50px;
                    display: grid;
                    grid-template-columns: auto auto;
                    padding: 10px 0;
                `}>
                   <p css={css` margin-right: 8px; margin-bottom: 0;`}>  <FontAwesomeIcon icon={faFacebook} /> </p>
                   <p css={css` margin-right: 5px; margin-bottom: 0;`}> <FontAwesomeIcon icon={faWhatsapp} /> </p>
                </li>


                </ul>
            </div>

            </Navegacion>
        
        </div>
        </div>

        { /* CONDICION CUANDO EL MENU SE ACTIVA*/ }
         < Menu 
            open = {open}
         />

        </div>
     );
}
 
export default Header;