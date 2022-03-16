import React, {useState} from 'react';
import styled from '@emotion/styled';
import {css} from '@emotion/react';

const ContenedorBurguer = styled.button`
     position: absolute;
     margin: 0.55em 0 0em 0.8em;
     display: flex;
     flex-direction: column;
     justify-content: space-around;
     align-items: end;
     width: 2rem;
     height: 2rem;
     background: transparent;
     border: none;
     cursor: pointer;
     padding: 0;
     z-index: 10;
     &:focus {
         outline:none;
     }
     div{
        width: 3rem;
        height: 0.25rem;
        background: ${({ open }) => open ? '#fff' : '#EFFFFA' }; 
        border-radius: 10px;
        transition: all 0.3s linear;
        position: relative;
        transform-origin: 1px;
        :first-of-type{
            transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
        }
        :nth-of-type(2) {
            opacity: ${({open}) => open ? '0' : '1' };
            transform:  ${({open}) => open ? 'translateX(20px)' : 'translateX(0)' };
        }
        :nth-of-type(3){
            transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)' };
        }
     }
     @media (min-width: 991px) {
     display: none;
}`;

const Hamburguer = ({open, clickActivo}) => {

    return ( 
        
        <ContenedorBurguer
            open = {open}
            onClick={clickActivo}
        >
            <div />
            <div />
            <div />
        </ContenedorBurguer>
    )
       
       
}
 
export default Hamburguer;