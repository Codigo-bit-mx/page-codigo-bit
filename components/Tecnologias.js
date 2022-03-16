import React from 'react';
import styled from '@emotion/styled';
import {css} from '@emotion/react';
import SwiperCore, {Autoplay} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import Fade from 'react-reveal/Fade';

SwiperCore.use([Autoplay]);

const Tecnctn = styled.div`
    width:100%;
    background: #f7f7f7;
   
`;
const MarcoTec = styled.div`
    width:1024px;
    max-width:90%;   
    margin: 0 auto;
    text-align:center;
    padding: 2em;
`;
const Texto = styled.div`
    line-height:2em;
    padding: 0;
    @media (min-width:768px){
        padding: 2em 0;
    }
`;
const ContSwipe = styled.div`
 padding: 1.5em 0;
@media(min-width: 768px){
    padding: 0 3em;
}
`;

const Tecnologias = () => {
    return (    

        <Tecnctn>
            <MarcoTec>
                <Fade>
                <Texto>
                    <h2>Ultimas tecnologias</h2>
                    <p>Dentro del mundo de la programacion existen diferentes tecnologias para la creación de proyecto 
                        es dificil mantenerte centrado en una sola de ellas, por lo que para entregar a nuestros cliente proyectos de vanguardia 
                        constantemente nos capacitamos para dominar las <b>tecnologias del futuro</b>.
                    </p>
                </Texto> 
                </Fade>

                <ContSwipe>
                    {/* <Fade> */}
                <Swiper 
                    
                    spaceBetween={30}
                    slidesPerView={3}
                    loop={true}
                    autoplay={{delay:2000, disableOnInteraction: false}}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    
                >
                    
                       <SwiperSlide><img src="logo/html.png"/></SwiperSlide>
                       <SwiperSlide><img src="logo/css.png"/></SwiperSlide>
                       <SwiperSlide><img src="logo/js.png"/></SwiperSlide>
                       <SwiperSlide><img src="logo/php.png"/></SwiperSlide>
                       <SwiperSlide><img src="logo/mysql.png"/></SwiperSlide>
                       <SwiperSlide><img src="logo/jquery.png"/></SwiperSlide>
                       <SwiperSlide><img src="logo/mongo.png"/></SwiperSlide>
                       <SwiperSlide><img src="logo/node.png"/></SwiperSlide>
                       <SwiperSlide><img src="logo/java.png"/></SwiperSlide>
                       <SwiperSlide><img src="logo/laravel.png"/></SwiperSlide>
                       <SwiperSlide><img src="logo/react.png"/></SwiperSlide>
                       <SwiperSlide><img src="logo/android.png"/></SwiperSlide>
                       <SwiperSlide><img src="logo/ios.png"/></SwiperSlide>

                </Swiper>
                {/* </Fade> */}
                </ContSwipe>

            </MarcoTec>
        
        </Tecnctn>

      );
}
 
export default Tecnologias;