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
        font-weight: bold;
        font-size: 12px;
        opacity: 0;
        -webkit-transition: opacity 0.2s, -webkit-transform 0.35s;
        transition: opacity 0.2s, transform 0.35s;
    }

    &:hover{
        img{
            opacity: 1;   
            filter: blur(6px) grayscale(100%) brightness(0.4);
            font-weight: bold;
        }
        img, h2, p{
            -webkit-transform: translate3d(0,0,0);
            transform: translate3d(0,0,0);
        }
        p{
            font-weight: bold;
            opacity: 1;
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
              `}>Propuestas</h2>
             
               <Lista>
               <Fade bottom cascade>
                    <div css={css` 
                        position: relative;
                    `}>
                        <Fig>
                        <img src="portafolio/dash.jpg"/>
                        <figcaption>
                        <div>
                        <h2>Aplicaciones web</h2>
                        <p>Las aplicaciones web pueden ser paneles de administración para el negocio, como gestión de inventarios, control de ventas, creación de agenda de citas, control de ventas, registros de pacientes por mencionar algunas, cualquier tarea que necesite ser gestionada puede ser perfectamente programada.</p>
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
                        <img src="portafolio/web.png"/>
                        <figcaption>
                        <div>
                        <h2>Paginas web</h2>
                        <p>Las paginas web, landing page o blogs personales ayudan al cliente a reconocer los productos y servicios que tu negocio ofrece, CobigoBit puede ayudar a encontrar a tus nuevos clientes. </p>
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
                        <img src="portafolio/ventas.png"/>
                        <figcaption>
                        <div>
                        <h2>Comercio electronico</h2>
                        <p>Haz que tus clientes encuentres tus productos de forma mas sencilla, con una tienda en línea puedes llegar a mas personas interesadas, vende mas y potencia tu negocio.  </p>
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
                        <img src="portafolio/dispositivo.png"/>
                        <figcaption>
                        <div>
                        <h2>Aplicaciones para dispositivo movil</h2>
                        <p>Da a conocer tu negocio con una aplicación móvil, o lleva tu administración en el bolsillo, te ayudamos a crear el sistema que se adapte a tu necesidad.</p>
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