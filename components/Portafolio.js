import React from 'react';
import styled from '@emotion/styled';
import {css} from '@emotion/react';
import Fade from 'react-reveal/Fade';

const Contportafolio = styled.div`
    width: 100%;
    background-color: #1e1e1e;
    margin: 1em 0;
    
    @media(min-width: 991px){
        margin: 3em 0;
    }
    
`;
const MarPortafolio = styled.div`
    max-width: 95%;
    margin: 0 auto;
    padding: 1em 0;
`;

const Lista = styled.ul`
    color: white;
    padding: 0;
    display: grid;
     grid-template-columns: repeat(1, 1fr);

    
    @media (min-width: 768px){
     display: grid;
     grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width:991px){
     display: grid;
     grid-template-columns: repeat(4, 1fr);
   
    }
`;

const Fig = styled.figure`
    position:relative;
    overflow: hidden;
    background-color: #2d2d2d; 
    width:100%;
    cursor: pointer;
    margin: 0;
    text-align: center;

    img{
        position: relative;
        display: block;
        min-height: 100%;
        max-width: none;
        width: -webkit-calc(100% + 50px);
        width: calc(100% + 50px);
        opacity: 0.7;
        filter: grayscale(0%);
        -webkit-transition: opacity 0.35s, -webkit-tranform 0.35s, filter 0.35s;
        transition: opacity 0.35s, transform 0.35s, filter 0.50s;
        -webkit-transform: translate3d(-40px, 0, 0);
        transform: translate3d(-40px, 0, 0);
    }
    figcaption{
        padding:3px;
        color: #fff;
        text-transform: uppercase;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
    }
    figcaption > div {
        position: absolute;
        bottom: 0;
        left: 0;
        padding: 2em;
        width: 100%;
        height: 50%;
    }
    h2, p{
        -webkit-transform: translate3d(0, 40px, 0);
        transform: translate3d(0, 40px, 0);
    }
    h2{
        -webkit-transition: -webkit-transform 0.35s;
        transition: transform 0.35s;
    }
    p{
        color: rgba(255,255,255,0.8); 
        opacity: 0;
        -webkit-transition: opacity 0.2s, -webkit-transform 0.35s;
        transition: opacity 0.2s, transform 0.35s;
        font-weight: bold;
    }

    &:hover{
        img, p{
            opacity: 1;   
            filter: grayscale(80%);
        }
        img, h2, p{
            -webkit-transform: translate3d(0,0,0);
            transform: translate3d(0,0,0);
        }
        p{
            -webkit-transition-delay: 0.05s;
            transition-delay: 0.05s;
            -webkit-transition-duration: 0.35s;
            transition-duration: 0.35s;
        }
    }
`;


const Portafolio = () => {
    return ( 
        <Fade> 
        <Contportafolio>

            <MarPortafolio>

            <h2 css={css` 
              text-align:center;
              color: white;
              margin: 10px 0;
              `}>Ultimos Trabajos</h2>
             
               <Lista>
               <Fade bottom cascade>
                    <div css={css` 
                        position: relative;
                    `}>
                        <Fig>
                        <img src="portafolio/dash.jpg"/>
                        <figcaption>
                        <div>
                        <h2>Sistema de administración</h2>
                        <p>Graficas y tablas representado ventas, ingreso de inventarios. Cuenta con un carrito de compras</p>
                        </div>
                        </figcaption>
                        
                        </Fig>
                    </div>
                    </Fade>

                    <Fade bottom cascade>
                    <div css={css` 
                        position: relative;
                    `}>
                        <Fig>
                        <img src="portafolio/beer.jpg"/>
                        <figcaption>
                        <div>
                        <h2>Formulador de bebidas</h2>
                        <p>Aplicacion web, para su funcionalidad se utilizo una Api que entrega una bebida dependiendo la formulacion que le solicites</p>
                        </div>
                        </figcaption>
                        
                        </Fig>
                    </div>
                    </Fade>

                    
                    <Fade bottom cascade>
                    <div css={css` 
                        position: relative;
                    `}>
                        <Fig>
                        <img src="portafolio/clima.jpg"/>
                        <figcaption>
                        <div>
                        <h2>Clima web</h2>
                        <p>Aplicacion web para obtener la temperatura de tu ciudad, esto depende de los datos que ingreses</p>
                        </div>
                        </figcaption>
                        
                        </Fig>
                    </div>
                    </Fade>

                    <Fade bottom cascade>
                    <div css={css` 
                        position: relative;
                    `}>
                        <Fig>
                        <img src="portafolio/gas.jpg"/>
                        <figcaption>
                        <div>
                        <h2>Web Chapultepec</h2>
                        <p>Prototipo del sitio web para la empresa gas Chapultepec de Mexico</p>
                        </div>
                        </figcaption>
                        
                        </Fig>
                    </div>
                    </Fade>

                </Lista>

            </MarPortafolio>
            
        </Contportafolio>
        </Fade>
   );
}
 
export default Portafolio;