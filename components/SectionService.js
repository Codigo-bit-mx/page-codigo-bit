import React from 'react';
import styled from '@emotion/styled';
import {css} from '@emotion/react';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';

const ConteServicios = styled.div`
    width: 100%;
    max-width: 85%;
    margin: 0 auto;
`;

const MarcoService = styled.div`
    padding: 1em;
    text-align: center;
    @media(min-width: 768px){
        padding: 3em;
    }
`;

const ListaServicios = styled.ul`

  padding:0;
  
  @media(min-width: 768px){
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 16px;
    padding: 0;
    }
`;

const ServiceElement = styled.li`
   
    width: 100%;
    padding:1em;
    list-style:none;
   
   @media (min-width:768px){
    border: 1px solid #f2f2f2;
    transition:all .2s ease-in;

    :hover{
        transform: scale(1.1);
        border: 1px solid rgb(34, 150, 206);
        transition: all .2s ease-out;
    }
   }
`;

const Imagen = styled.div`
    padding:1em 2.5em;
    @media(min-width: 768px){
    padding:1em 2.5em;
}
    
`;

const SectionService = () => {
    return ( 

        <ConteServicios>

            <MarcoService>
            <Fade>
            <h1 css={css`
                font-size: 1.5em;
                margin-top: 10px;
                margin-bottom: 5px;
                @media(min-width: 768px){
                    font-size: 2em;
                    margin-bottom: 2em;
                }
            `}>Nuestros Servicios</h1>
            </Fade>

            <div>
            <Flip left>
                <ListaServicios>
                    <ServiceElement>
                     <Imagen>
                     <img src="iconos/029-monitor.png"/>
                     </Imagen>
                     <p>Soluciones Web</p>
                     <p>Creacion de sitios web interactivos, capaces de atraer la atención de tu cliente</p>
                    </ServiceElement>

                    <ServiceElement>
                     <Imagen>
                     <img src="iconos/048-mobile phone.png"/>
                     </Imagen>
                     <p>Desarollo Movil</p>
                     <p>La creacion de aplicaciones moviles nativas para IOS y Android</p>
                    </ServiceElement>

                    <ServiceElement>
                    <Imagen>
                    <img src="iconos/064-responsive design.png"/>
                    </Imagen>
                    <p>Diseño responsivo</p>
                    <p>Todos los diseños implementados estan completamente adapatados a cualquie pantalla</p>
                    </ServiceElement>

                    <ServiceElement>
                    <Imagen>
                     <img src="iconos/021-dashboard.png"/>
                     </Imagen>
                     <p>Sistemas de administración</p>
                     <p>La creación de un gestor de administración que te permita reducir la cantidad de horas de trabajo manteniendo en orden tus inventarios</p>
                    </ServiceElement>

                    <ServiceElement>
                    <Imagen>
                    <img src="iconos/024-database.png"/>
                    </Imagen>
                    <p>Bases de Datos</p>
                    <p>Ordenamos tu informacion en una base de datos y damos la posibilidad de integrarla a un sistema web capaz de leer esa informacion almacenada</p>
                    </ServiceElement>

                    <ServiceElement>
                    <Imagen>
                     <img src="iconos/076-toolkit.png"/>
                     </Imagen>
                     <p>Soporte Tecnico</p>
                     <p>Brindamos soporte tecnico de primer nivel a equipos de computo</p>
                    </ServiceElement>

                </ListaServicios>
              </Flip>
            </div>


            </MarcoService>
            
            <Fade>
            <div css={css`
                margin: 1em 0;
                padding: 1em;
                text-align:center;
            `}     
            >
                <h1>TOUCH</h1>
                <p>Toca las bolitas para ver su crecimiento, un efecto como este puede ser parte de tu sitio web 
                   podemos cumplir con todos tus requerimientos
                </p>

            </div>
            </Fade>

        </ConteServicios>

     );
}
 
export default SectionService;