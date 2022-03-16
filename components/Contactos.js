import React, {useState,useContext} from 'react';
import styled from '@emotion/styled';
import {css} from '@emotion/react';
import Fade from 'react-reveal/Fade';
import {FirebaseContext} from '../firebase/index';
import firebaseConfig from '../firebase/config';

const ContContactos = styled.div`
    width: 100%;
    max-width: 90%;
    margin: 2em auto;

   @media(min-width: 991px){
    width: 100%;
    max-width: 70%;
    margin: 2em auto;
   }
   
    @media(min-width: 768px){
    width: 100%;
    max-width: 50%;
    margin: 2em auto;
    }
`;
const MarcoCon = styled.div`  
    padding: 1em;
    text-align: center;

    img{
        margin: 2rem;
        width:50px;
        height:50px;
    }
`;

const Unitform = styled.div`
    text-align: justify;
    margin: 10px 0;

   input{
    width: 100%;
    border: none;
    border-bottom: 1px solid #aeaeaa;
    background-color: transparent;
    outline: none;
    margin: 10px 0 0 0;
    padding: 5px;
    font-family: 'Monserrat', sans-serif;
    font-size:13px;
    }

    textarea{
        width: 100%;
        margin: 10px 0 0 0;
        padding: 1rem;
        outline: none;
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
        margin: 2em 0 1em 0;
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

const Alerta = styled.p`
    padding: 1em 0 0 0;
    color: red;
    font-size:10px;
    text-align:center;

    @media(min-width: 768px){
        font-size: 12px;
    }
`;

const Correcto = styled.p`
    padding: 1em 0 0 0;
    color: rgb(34, 150, 206);
    font-size:10px;
    text-align:center;

    @media(min-width: 768px){
        font-size: 12px;
    }
`;


const imgMsg = styled.img`
    width: 80px;
    height: 80px;
    margin: 0;
`;

const Contactos = () => {

    const [datos, guardarDatos] = useState({
        nombre:'',
        email:'',
        asunto:'',
        mensaje:''
    });

    const [alarma, guardarAlarma] = useState(false);
    const [correcto, guardarCorrecto] = useState(false);
    const {nombre, email, asunto, mensaje} = datos;
    //context de firebase
    const {firebase} = useContext(FirebaseContext);

    const onChange = (e) => {
        guardarDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }

    async function envio (e){
        e.preventDefault();
        if(nombre.trim() === "" || email.trim() === "" ){
            guardarAlarma(true);
        } else {
            guardarAlarma(false);
            const correo = {
                nombre, 
                email,
                asunto, 
                mensaje
            }
            await firebase.db.collection('correos').add(correo);
            
            guardarCorrecto(true);
            guardarDatos({
                nombre:'',
                email:'',
                asunto:'',
                mensaje:''
            })
            setTimeout(() =>  {
                guardarCorrecto(false)
            }, 4000);
            
        }
    }

    return ( 
        <Fade>
        <ContContactos>

            <MarcoCon>
            
            <div css={css` margin-bottom: 1rem;`}>
            <h2>Contacto</h2>
            <p>Escribenos estaremos en comunicacion lo mas rapido posible</p>
            </div>

            <div css={css` margin-top: 2rem;`}>
            <img src="icons/mensaje.png"/>
            <p>Rellena el formulario correctamente, los campos nombre y correo son necesario</p>
            </div>

            <form css={css`
                 margin-top: 2rem;
            `}
            
                onSubmit={envio}

            >
                <Unitform>
               
                <input type="text" 
                id="nombre"
                name="nombre" 
                placeholder="NOMBRE:"
                value={nombre}
                onChange={onChange}

                />
                {nombre && nombre.length < 10 ? <Alerta>¡Tu nombre es muy corto dame apellidos por favor!</Alerta> : null }
                </Unitform>
              
                <div css={css`
                    display: grid;
                 

                    @media(min-width: 768px){
                        display: grid;
                    grid-template-columns:repeat(2, 1fr);
                    grid-gap: 2rem;
                    }
                `}>
                <Unitform>
                
                <input 
                type="email" 
                id="email"  
                name="email" 
                placeholder="CORREO:"
                value={email}
                onChange={onChange}
                />
                  {
                
                email && email.lastIndexOf('@') < 0 ? <Alerta>¡Tu dirección de correo no tiene formato!</Alerta> : null 
                  
                  }
                </Unitform>

                <Unitform>
                <input 
                 type="text"
                 id="asunto"
                 name="asunto"
                 placeholder="ASUNTO:"
                 value={asunto}
                 onChange={onChange}
                />
               
                </Unitform>
                </div>

                <Unitform>
                
                <textarea 
                name="mensaje"
                id="mensaje" 
                placeholder="MENSAJE:" 
                value={mensaje}
                onChange={onChange}
                ></textarea>
                { mensaje && mensaje.length < 50 ? <Alerta>¡El mensaje es muy corto dame mas informacion!</Alerta> : null }
                </Unitform>

                {alarma ? <Alerta> Los campos importantes estan vacios </Alerta> : null}
               
                {correcto ? <Correcto> Correcto los datos han sido enviados espera una respuesta </Correcto> : null}
                <Btn type="submit">Enviar</Btn>
                

            </form>
               
            </MarcoCon>
        
        </ContContactos>
        </Fade>
     );
}
 
export default Contactos;