import React from 'react';
import styled from '@emotion/styled';
import {css} from '@emotion/react';
import Link from 'next/link';
import Fade from 'react-reveal/Fade';


const Section = styled.section`
    padding: 20px 0;
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;

    @keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
    @media (min-width: 768px){
        padding: 40px 0;
    }
    @media (min-width: 991px){
        padding: 60px 0;
    }
`;

const SectionCon = styled.div`
    width: 1180px;
    max-width: 90%;
    margin:0 auto;
`;

const ListaSection =  styled.ul`
    padding: 0;

    @media (min-width: 480px){
    display: grid;
    grid-template-columns: 33% 33% 33%;
    padding: 0;
    margin: 0;
    }
`;

const UnidadLista = styled.li`
    color: #fff;
    font-size: 1.5em;
    padding: 1rem 0;
    text-align: center;
    /* border-bottom: 1px #fff solid; */

    ::after{
        content:"";
        position: absolute;
        width: 5px;
        height: 2px;
        background: #fff;
        /* top:0; */
        /* right:0;
        bottom:0;
        left:0; */
        margin-top: 4px;
    }

    p{
        margin: 5px 0 0 0;
        font-weight: 500;
        font-size: 16px;
        text-transform: uppercase;
        @media (min-width: 768px){
        font-size: 14px;
        }
    b{
        font-size: 25px;
        line-height:25px;

        @media (min-width: 768px){
        font-size: 40px;
        line-height:40px;
        }
    }
    }
`;

/* Servicios */
const ServiceCon = styled.div`
    width: 1100px;
    max-width:90%; 
    padding: 2.5rem;
    margin: 1em auto;
    @media (min-width: 768px){
    margin: 2em auto;
    }
`;

const ServiceGrid = styled.div`
    display: block;
    @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-gap: 1em;
    }
`;

const Btn = styled.button`
    background: rgb(34, 150, 206);
    margin: 0em 0 3em 0;
    padding: 1em 2em;
    color: white;
    border: none;
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    font-size: 12px;
    font-weight:bold;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    display: inline-block;
    box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
     7px 7px 20px 0px rgba(0,0,0,.1),
     4px 4px 5px 0px rgba(0,0,0,.1);
    outline:none;

    @media(min-width: 768px){
        margin: 0em 0 1em 0;
    }
    &:hover{
     color: #f0094a;
     background: transparent;
     box-shadow:none;
    }

    &::after,
    ::before{
    content:'';
    position:absolute;
    top:0;
    right:0;
    height:2px;
    width:0;
    background: #f0094a;
    box-shadow:
     -1px -1px 5px 0px #fff,
     7px 7px 20px 0px #0003,
     4px 4px 5px 0px #0002;
    transition:400ms ease all;
    }

    ::after{
    right:inherit;
    top:inherit;
    left:0;
    bottom:0;
  }
  &:hover:before,
  &:hover:after{
    width:100%;
    transition:800ms ease all;
  }
`;

const Figura = styled.figure`
    position: relative;
    overflow: hidden;
    background: #3085a3;
    text-align: center;
    width:100%; 
    cursor:pointer;
    margin: 0;

    img{
        position: relative;
        display:block;
        min-height: 100%;
        max-width: 100%;
        opacity: 0.8;
    }
    figcaption{
        padding:3px;
        color: #fff;
        text-transform: uppercase;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        /* ::after,
        ::before{
            pointer-events: none;
        } */
    }
    figcaption::before{
        position:absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: -webkit-linear-gradient(top, rgba(72,76,97,0) 0%, rgba(72,76,97,0.8) 75%);
        background: linear-gradient(to bottom, rgba(72,76,97,0) 0%, rgba(72,76,97,0.8) 75%);
        content: '';
        opacity: 0;
        -webkit-transform: translate3d(0, 50%, 0);
        transform: translate3d(0, 50%, 0);
    }
    h2{
       position: absolute;
       top:50%;
       left: 0; 
       width: 100%;
       color: #000;
       font-size:1.8em;
       -webkit-transition: -webkit-tranform 0.35s, color 0.35s;
       transition: transform 0.35s, color 0.35s;
       -webkit-transform:translate3d(0,-50%,0);
        transform: translate3d(0,-50%,0);
    }
    figcaption::before, p{
        -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
        transition: opacity 0.35s, transform 0.35s;
    }
    p{
        position:absolute;
        bottom: 0;
        left: 0;
        padding: 1em;
        width: 100%;
        opacity: 0;
        font-size: 1em;
       -webkit-transform: translate3d(0, 10px, 0); 
        transform: translate3d(0, 10px, 0);
    }

    &:hover {
        figcaption::before, p {
        opacity: 1;
        -webkit-transform: translate3d(0,0,0);
        transform: translate3d(0,0,0);
    }
    h2{
        color:#fff;
        -webkit-transform: translate3d(0, -50%, 0) translate3d(0, -40px, 0); 
             transform: translate3d(0, -50%, 0) translate3d(0, -40px, 0);
    }
    }
`;

const Service = () => {
    
return ( 
<>
        <Section>
            <SectionCon>
                <Fade top>
                <ListaSection>
                    <UnidadLista><b>2+</b> 
                        <p> Años de experiencia </p>
                    </UnidadLista>
                    <UnidadLista><b>24H / 7D </b>
                        <p>Soporte Tecnico</p></UnidadLista>
                    <UnidadLista>
                        <b>8:00am a 5:00pm</b> 
                        <p>Horario</p> </UnidadLista>
                </ListaSection>
                </Fade>
            </SectionCon>
        </Section>


        <ServiceCon>
            <ServiceGrid>
              <Fade left>
                <div>
                    <h2 css={css`
                        margin-top: 10px;
                        font-size: 1.5em;
                        color: #363636;
                        @media (min-width: 768px){
                        font-size: 2.5em;
                        }
                        
                    `}>Nuestros servicios</h2>

                    <p     
                    css={css`
                       margin-bottom: 2em;
                        color: #555;

                        @media(min-width:768px){
                            margin-bottom: 2.5em;
                        }
                    `}
                    > <b>CodigoBit</b> utiliza las mejores <b>tecnologias y practicas</b> para el desarollo
                        de sitios web, aplicaciones moviles, sistemas punto de venta, sistemas de administracion entre otros, llamonos 
                        ponte en comunicación con nosotros recibe un asesoriamiento o platicanos sobre el proyecto que pretendes montar 
                        para el beneficio de tu negocio o negocio.
                    </p>

                  
                    <Link href="/servicios"><Btn>Detalles</Btn></Link>
                    
                    
                </div>
                </Fade>

                <Fade right>

                <div css={css`
                    position:relative;
                    padding: 0em;
                    @media(min-width: 768px){
                        padding: 1em;
                    }
                `}>
                    <Figura>
                    <img src="escritorio.jpg" />
                    <figcaption>
                        <h2>Touch</h2>
                        <p>Incorpora increibles animaciones a tu sitio web</p>
                    </figcaption>
                    </Figura>
                    
                
                </div>

                </Fade>
            
            
            </ServiceGrid>
        </ServiceCon>
 </>
     );
}
 
export default Service;
