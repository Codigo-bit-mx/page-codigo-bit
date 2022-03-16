import React from 'react';
import {Global, css} from '@emotion/react';
import Head from 'next/head';
import Header from './header.js';


const Layout = (props) => {
    return ( 
        <>
  <Global 
        styles={css`
          :root {
            --gris: #3d3d3d;
            --gris2: #6f6f6f;
            --gris3: #e1e1e1;
            --naranja: #DA552F;
          }
          @font-face {
              font-family: File-Bold;
              src: url('File-Bold.ttf');
          }
        
          @font-face {
              font-family: Hero-Regular;
              src: url('Hero-Regular.ttf');
          }

          html {
            font-size: 62.5%;
            box-sizing: border-box;
          }
          *, *:before, *:after {
            box-sizing: inherit
          }
          body {
            font-size: 1.6rem; 
            line-height: 1.5;
            font-family: 'PT Sans', sans-serif;
          }
          h1, h2, h3 {
            margin: 0 0 2rem 0;
            line-height: 1.5;
          }
          h1, h2 {
            font-family: "File-Bold", serif;
            font-weight: 700;
          }
          h3 {
            font-family: 'PT Sans', sans-serif;
          }
          ul{
            list-style: none;
          }
          a {
            text-decoration: none;
          }
          img{
            max-width: 100%;
          }
          #tsparticles{
                position: relative;
                width: 100%;
                height: 100%;
                background-image: url('back3.jpg');
                background-repeat: no-repeat;
                background-size: cover;
                background-position: 50% 50%;
          }
          p{
            font-family: 'Montserrat', sans-serif;
          }
        `}
      />

        <Head>
        <title> codigoBit </title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossorigin="anonymous" />
        <link rel="stylesheet" type="text/css" href="fonts/font-awesome/css/all.css"></link>
        {/* <link rel="stylesheet" type="text/css" href="fonts/font-awesome/css/font-awesome.min.css"></link> */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet" />
        {/* <link rel="stylesheet" href="https://unpkg.com/leaflet@1.3.4/dist/leaflet.css"  integrity="sha512-puBpdR0798OZvTTbP4A8Ix/l+A4dHDD0DGqYW6RQ+9jxkRFclaxxQb/SJAWZfWAkuyeQUytO7+7N4QKrDh+drA==" crossorigin=""/> */}
          
        

        </Head>

       
            <Header />
          

        <main>
            {props.children}
        </main>

        </>

     );
}
 
export default Layout;