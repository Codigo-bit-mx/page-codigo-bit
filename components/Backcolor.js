import React from 'react';
import styled from '@emotion/styled';
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Flip';


const Back = styled.section`
    position: relative;
    width: 100%;
    
    height: 50vh;
    margin: 0 auto;
    background: #001300;
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    animation: changeColor 5s linear infinite;

    @keyframes changeColor
    {
        0%{
            filter: hue-rotate(0deg);
        }
       100%{
            filter: hue-rotate(360deg);
        }
    }
`;

const Elemento = styled.span`
    position:relative;
    width: 40px;
    height: 40px;
    display: block;
    text-align: center;
    ::before{
        content: '';
        position: absolute;
        top:0;
        left: 0;
        width:100%;
        height:100%;
        background: #00ff0a;
        transform: scale(0.1);
        box-shadow: 0 0 10px #00ff0a,
                    0 0 20px #00ff0a,
                    0 0 40px #00ff0a,
                    0 0 60px #00ff0a,
                    0 0 80px #00ff0a,
                    0 0 100px #00ff0a;
        border-radius: 50%;
        pointer-events: none;
        transition: 1s;
    }

    :hover::before{
        transform: scale(1);
        transition:0s;
    }
`;



const Backcolor = () => {
    return ( 
        
        <Back>
            <Flip top>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            <Elemento></Elemento>
            </Flip>
        </Back>
      );
}
 
export default Backcolor;