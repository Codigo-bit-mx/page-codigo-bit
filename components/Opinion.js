import React from 'react';
import styled from '@emotion/styled';
import {css} from '@emotion/react';
import Carousel from 'react-bootstrap/Carousel';
import Fade from 'react-reveal/Fade';

const ContOp =  styled.div`
    width: 100%;
    background-color: #1e1e1e;
`;

const MarcoOp = styled.div`
    padding: 1em;
    height: 100%;
`;

const SliderUnit = styled.div`
    text-align: center;
    width: 100%;
    max-width: 90%;
    margin: 0 auto;
    padding:  2em 1rem;
    color: white;
    position: relative;

    @media(min-width: 768px){
        width: 100%;
        max-width: 60%;
        padding:  3em 1rem;
        p{
        margin-bottom: 2rem;
        font-size: 2rem;
    }
    }
    p{
        margin-bottom: 2rem;
        font-size: 15px;
    }
  
    span{
        font-size: 3rem;
        color: red;
    }
`;


const Opinion = () => {

    return ( 

        <Fade>
        <ContOp>
        <Fade bottom cascade >
        <MarcoOp>

        <Carousel>

        <Carousel.Item>
            <SliderUnit>
            <h2>Opiniones positivas</h2>
            <p><span>"</span> Intentan mejorar constantemente, el sitio que me contruyeron es completamente lo que queria y hasta agregarón algunas mejoras
                que yo no tenia planeado pero mejoro mucho el producto final excelente servicio, los recomiendo mucho <span>"</span> 
            </p>
            </SliderUnit>
        </Carousel.Item>

        <Carousel.Item>
            <SliderUnit>
            <h2>Opiniones positivas</h2>
            <p><span>"</span> Me contruyeron un sistema de administracion para mantener mis inventarios en orden, cada requerimiento que 
            solicite fue plasmado tal y como yo queria me entendieron a la primera, son muy buenos <span>"</span> 
            </p>
            </SliderUnit>
        </Carousel.Item>

        <Carousel.Item>
            <SliderUnit>
            <h2>Opiniones positivas</h2>
            <p><span>"</span> Al principio fue dificil estar completamente segura de que ellos podian elaborar mi proyecto pero hoy en
            dia estoy totalmente convenciada de que fue la mejor decisión trabajar con este grupo de desarolladores. <span>"</span> 
            </p>
            </SliderUnit>
        </Carousel.Item>
        

      </Carousel>

      </MarcoOp>
      </Fade>
      </ContOp>
      </Fade>

);
}
 
export default Opinion;