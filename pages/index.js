import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import Service from '../components/Service';
import Hero from '../components/Hero';
import Selectorser from '../components/Selectorser';
import Tecnologias from '../components/Tecnologias';
import Portafolio from '../components/Portafolio';
import Tarifa from '../components/Tarifa';
import Opinion from '../components/Opinion';
import Contactos from '../components/Contactos';
import Map from '../components/Map';
import Footer from '../components/Footer';


const Index = () => {
  
  return ( 
    
    <>
      <Layout />
      <Hero />
      <Service />
      <Selectorser />
      <Tecnologias />
      <Portafolio />
      <Tarifa />
      <Opinion />
      <Contactos />
      <Map />
      <Footer />  

    </>

   );
}
 
export default Index;
