import React from 'react';
import styled from '@emotion/styled';
import {css} from '@emotion/react';
import Map2 from '../components/Map2';
import Contactos from '../components/Contactos';
import Fade from 'react-reveal/Fade';

const ContCon = styled.div`
    width: 100%;
    max-width: 95%;
    margin: 1em auto;
`;

const MarcoContactos = styled.div`
    padding: 1em;
    text-align:center;
`;


const ContContactos = () => {
    return ( 

        <ContCon>
            <MarcoContactos>
                <Fade>
                <h1>Localizacion y contactos</h1>
                </Fade>

                <div>
                        <Fade>
                        <div css={css`
                            padding: 5px;

                            @media (min-width: 768px){
                                padding: 1.5em;
                            }
                            p{
                                font-size:1em;
                            }
                            
                            span{
                                font-weight:bold;
                                font-size:1.2em;
                            }
                        `}>
                            <p>Localizacion: <span>Acolman, Estado de mexico. Mexico</span> </p>
                            <p>Telefonos: <span>5516173283</span></p>
                            <p>Correo: <span>codigobitmx@gmail.com</span></p>
                            <h2>llamanos para expresarnos tu proyecto</h2>
                        </div>
                        </Fade>
                   
                      <Fade>
                        <div css={css`
                            z-index: 1;
                        `}>
                        <Map2 />
                        </div>
                        </Fade>

                </div>

                <div> 
                    <Contactos />
                </div>



            </MarcoContactos>
        </ContCon>

     );
}
 
export default ContContactos;