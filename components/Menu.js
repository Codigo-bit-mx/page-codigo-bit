import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import {css} from '@emotion/react';

const NavegacionMenu = styled.section`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    visibility: ${({open}) => open ? 'visible' : 'hidden' };
    z-index: 3;
    margin: 0;
    
    span{
        position: absolute;
        top: ${({open}) => open ? '0' : '-100%'};
        left: calc(25% * var(--i));
        width: 25%;
        height:100%;
        background: black;
        transition: 0.25s;
        transition-delay: calc(0.25s * var(--i));
    }
    ul {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        z-index: 2;
        list-style: none;
        transform: ${({open}) => open ? 'translateX(0px)' : 'translateX(-100px)'};
        opacity: ${({open}) => open ? '1': '0'};
        visibility: ${({open}) => open ? 'visible ' : 'hidden' };
        transition: 0.5s;
        transition-delay: ${({open}) => open ? '0s' : '0.75s'};
        padding: 0;
    }
    li a{
        text-decoration: none;
        font-size: 25px;
        font-weight: bold;
        font-family: 'Montserrat', sans-serif;
        color: #fff;
        display: inline-block;
        padding: 23px 20px;
    }
    a:hover{
        background: black;
        color: #DE0611;
    }
    @media(min-width: 768px){
        a{
            font-size: 25px;
        }
    }
`;

const Menu = ({open}) => {
    return ( 
        <>
    <NavegacionMenu
        open = {open}
    >
        <span css={css` --i:0; `}></span> 
        <span css={css` --i:1; `} ></span>
        <span css={css` --i:2; `}></span>
        <span css={css` --i:3; `}></span>       
   
    <ul>
        <li> <Link href="/">Inicio</Link> </li>
        <li> <Link href="/servicios">Servicios</Link>  </li>
        <li> <Link href="/contactos">Contactos</Link>  </li>
    </ul>

    </NavegacionMenu>
 
        </>
     );
}
 
export default Menu;

