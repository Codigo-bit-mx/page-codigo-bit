import App from 'next/app';
import firebase, {FirebaseContext} from '../firebase/index';
import '../styles/globals.css';
import 'swiper/swiper-bundle.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "leaflet/dist/leaflet.css";

const MyApp = ( props ) => {

  const { Component, pageProps } = props;

  return (
  
  <FirebaseContext.Provider
  value={{
    firebase
  }}
  >

  <Component {...pageProps} />
  </FirebaseContext.Provider>
  )
  
  

}

export default MyApp
