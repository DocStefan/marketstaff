import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../data/media/logo.png";
import "../estilocomponentes/estilonav.css";
import {signOut} from "firebase/auth"
import {auth} from "../Config_Firebase/firebase"





function Navbar() {

 let [OcultadorLogOutADV, setOcultadorLogOutADV] = useState(false)

 let navegar = useNavigate()

 let clicker = () => {

   navegar("/catalogo")

 }

 let clickera = () => {

   navegar("/productos")

 }

 let clickerb = () => {

   navegar("/proveedores")


 }

 let clickerc = () => {

   navegar("/clientes")


 } 

 let clickerd = () => {

   navegar("/pedidos")

 }

 let clickere = () => {

   navegar("/reportes")


 }

 let LogOut = async () => {

  setOcultadorLogOutADV(OcultadorLogOutADV = false)

  try {

    await signOut(auth)

    let GoogleSesion = localStorage.getItem("Token_Firebase")

    if(GoogleSesion) {

      localStorage.removeItem("Token_Firebase")
      localStorage.removeItem("user")
      localStorage.removeItem("Token")
      
    } else {

      localStorage.removeItem("user")
      localStorage.removeItem("Token")

    }

    navegar("/")

  } catch(error) {

    console.log(error)
    setOcultadorLogOutADV(OcultadorLogOutADV = true)

  }

 }

 let CloseLOPop = () => {

  setOcultadorLogOutADV(OcultadorLogOutADV = false)

 }

  return (
  
    <div className='nav'>

        <img className="img" src={logo} alt="logo"></img>

         <button className="botonesNAV" type='button' onClick={clicker}>Catalogo</button>

         <button className="botonesNAV" type='button' onClick={clickera}>Productos</button>
          
          <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle botonesNAV BNB" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Recursos Humanos
              </button>
            <ul className="dropdown-menu listab">
              <li><button className="botonesNAV" type='button' onClick={clickerb}>Proveedores</button></li>
              <li><button className="botonesNAV" type='button' onClick={clickerc}>Clientes</button></li>
            </ul>
          </div>

        <button className="botonesNAV botonesNAVResponsive" type='button' onClick={clickerb}>Proveedores</button>

        <button className="botonesNAV botonesNAVResponsive" type='button' onClick={clickerc}>Clientes</button>

        <button className="botonesNAV" type='button' onClick={clickerd}>Pedidos</button>

        <button className="botonesNAV" type='button' onClick={clickere}>Reportes</button>

        <button className="botonesNAV" type="button" onClick={LogOut}>Cerrar sesion</button>

        {OcultadorLogOutADV && <div className="ErrorCerrarSesion">

          <button type="button" className="CerrarAdvLogOut" onClick={CloseLOPop}>X</button>

          <h className="ErrorLogOut">No se ha podido cerrar sesion, vuelva a intentarlo</h>

        </div>}

     </div>
   
  )


}

export default Navbar

