import React from 'react';
import styled from '@emotion/styled';
import {css} from '@emotion/react';
import Fade from 'react-reveal/Fade';


const ContainerIcons = styled.div`
    width: 1180px;
    max-width: 90%;
    text-align: center;
    margin: 0 auto;
`;
const Marcosicons = styled.div`
    margin-top: 0em;
    padding: 0em 2em;

    @media(min-width: 768px){
        margin-top: 1em;
        padding: 1em;
    }
`;

const Icons = styled.ul`
    padding: 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    @media(min-width: 480px){
        grid-template-columns: repeat(2, 1fr);
    }
    @media(min-width: 768px){
        grid-template-columns: repeat(3, 1fr); 
    }
    @media(min-width: 991px){
        grid-template-columns: repeat(6, 1fr);
    }
`;

const Unitlista = styled.li`
padding: 10px 18px;
position: relative;
background: none;
border: 0;
position: relative;
transition: color 0.25s;

    @media(min-width: 480px) {
        padding: 10px 3em;
    }  
    @media (min-width: 991px){
        padding: 1em 2em;
    } 

    &::before,
    &::after {
        content:'';
        box-sizing: inherit;
        position: absolute;
        width:100%;
        height: 100%;
    }

    &::before,
    &::after{
        border: 2px solid transparent;
        width:0;
        height:0;
    }
    &::before{
        top: 0;
        left: 0;
    }
    &::after {
        bottom: 0;
        right: 0;
    }
    &:hover{
        color: rgb(34, 150, 206);
    }
    &:hover::before,
    &:hover::after {
        width: 100%;
        height: 100%;
    }
    &:hover::before {
    border-top-color: rgb(34, 150, 206); 
    border-right-color: rgb(34, 150, 206);
    transition:
      width 0.25s ease-out, 
      height 0.25s ease-out 0.25s; 
    } 
    &:hover::after {
    border-bottom-color: rgb(34, 150, 206);
    border-left-color: rgb(34, 150, 206);
    transition:
      border-color 0s ease-out 0.5s, 
      width 0.25s ease-out 0.5s, 
      height 0.25s ease-out 0.75s; 
  }
`;


const Selectorser = () => {
    return ( 
    <ContainerIcons>
      <Marcosicons>
      <Fade bottom>
        <Icons>
            <Unitlista>
               <img src="iconos/029-monitor.png"/>
                <p>Soluciones Web</p>
            </Unitlista>
            <Unitlista>
                <img src="iconos/048-mobile phone.png"/>
                <p>Desarollo Movil</p>
            </Unitlista>
            <Unitlista>
                <img src="iconos/064-responsive design.png"/>
                <p>Diseño Responsivo</p>
            </Unitlista>
            <Unitlista>
                <img src="iconos/021-dashboard.png"/>
                <p>Sistemas de administración</p>
            </Unitlista>
            <Unitlista>
                <img src="iconos/024-database.png"/>
                <p>Bases de Datos</p>
            </Unitlista>
            <Unitlista>
                <img src="iconos/076-toolkit.png"/>
                <p>Soporte Tecnico</p>
            </Unitlista>
            
        </Icons>

        </Fade>
    </Marcosicons>
   </ContainerIcons>

     );
}
 
export default Selectorser;