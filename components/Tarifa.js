import React from 'react';
import styled from '@emotion/styled';
import {css} from '@emotion/react';
import Pulse from 'react-reveal/Pulse';
import Fade from 'react-reveal/Fade';

const ContTarifa = styled.div`

    width:100%;
    max-width: 1100px;
    margin: 0 auto;
`;

const MarcoTarifas = styled.div`
    width: 100%;
    text-align: center;
    margin: 2em 0;
    padding: 1em;
`;

const ListaPrecios = styled.ul`
    margin: 3em 0 0 0;
    padding: 0;

    @media(min-width: 768px){
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: 2rem;
    }
`;

const Unitlist = styled.li`
    padding: 1em;
    border: none;
    transition: .3s ease;

    &:hover{
        border: 2px solid rgb(34, 150, 206);
    }
     
    @media(min-width:768px){
        border: 2px solid #eaeaea;
        &:nth-child(2){
            border: 2px solid rgb(34, 150, 206);
        }
        &:hover{
        border: 2px solid red;
     }
    }

    p{
        padding: 1em 0;
        border-bottom: 1px solid #eaeaea;
        margin: 0;
        font-size: 13px;
        font-weight: 400;
    }
    
    img{
        width: 80px;
        height: 80px; 
        margin: 0;
    }

`;

const Precio = styled.div`
    padding: 1em;
    
    p{
        border-bottom: none!important;
        font-size: 1em;
        padding: 10px;
    }
    span{
        font-size: 
    }
`;


const Tarifa = () => {
    return ( 

        <ContTarifa>
            <MarcoTarifas>

                <h1 css={css `
                font-size: 2.2em;   
                 `
                 }>Tarifas</h1>
                <p>Todos <b>los precios son ajustables a tu presupuesto</b>, pueden incrementar o disminuir dependiendo los requerimientos de cada <b>cliente</b></p>

            <ListaPrecios>

           <Pulse>
            <Unitlist>

                <div css={css`
                  margin-bottom: 1em;
                `}>

                <img src="icons/herramienta.png"/>
                <p css={css `border-bottom: none!important;`}>WEB SENCILLA</p>
                </div>
                

                <p>DISEÑO PERSONALIZADO SENCILLO</p>
                <p>ADAPTABILIDAD MOVIL SI</p>
                <p>PROGRAMCION NO</p>
                <p>MODIFICACION DE IMAGENES SI</p>

                <Precio>
                    <p>A partir de: </p>
                    <b css={css` color: rgb(34, 150, 206);`}><span>6,</span>500 <span>$</span></b>
                </Precio>
                
            </Unitlist>
            </Pulse>


            
            <Unitlist>
            <Fade>
            <div css={css`
                  margin-bottom: 1em;
                `}>
                <img src="icons/global.png"/>
                <p css={css `border-bottom: none!important;`} >WEB PROFESIONAL</p>
                </div>

                <p>DISEÑO PERSONALIZADO AVANZADO</p>
                <p>ADAPTABILIDAD MOVIL SI</p>
                <p>PROGRAMCION SI</p>
                <p>MODIFICACION DE IMAGENES SI</p>

                <Precio>
                    <p>A partir de: </p>
                    <b css={css` color: rgb(34, 150, 206);`}>11,000 <span>$</span></b>
                </Precio>
                </Fade>
            </Unitlist>
            


            <Pulse>
            <Unitlist>
            <div css={css`
                  margin-bottom: 1em;
                `}>
                <img src="icons/rocket.png" />
                <p css={css `border-bottom: none!important;`}>SISTEMA DE ADMINISTRACIÓN</p>
               </div>  

                <p>DISEÑO DASHBOARD</p>
                <p>ADAPTABILIDAD MOVIL SI</p>
                <p>PROGRAMCION SI</p>
                <p>PAQUETE PREMIUM</p>
                
                <Precio>
                    <p>A partir de: </p>
                    <b css={css` color: rgb(34, 150, 206);`} >15,000 <span>$</span></b>
                </Precio>
            
            </Unitlist>
            </Pulse>

            </ListaPrecios>
            </MarcoTarifas>
        </ContTarifa>


     );
}
 
export default Tarifa;