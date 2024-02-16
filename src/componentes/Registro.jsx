import React, { useState, useEffect } from 'react'
import "../estilocomponentes/estiloregis.css" 
import { useNavigate } from 'react-router-dom';
import logo from "../data/media/logo.png"
import { auth, googleProvider } from '../Config_Firebase/firebase';
import { signInWithPopup } from 'firebase/auth';
import axios from "axios"
import { isEmail } from 'validator';
// import cuentas from "../data/cuentas";
// import idses from '../data/idss';


function Registro() {

  let [errord, mAlid] = useState(false)
  let [errorc, eRrorcc] = useState(false)
  let [error, eRror] = useState(false)
  let [nombre, nNombre] = useState("")
  let [contraseña, nContraseña] = useState("")
  let [registrar, nCuenta] = useState(false)
  let [email, setEmail ] = useState("")
  let [errorEmailAlreadyRegistered, setErrorEmailAlreadyRegistered] = useState(false)
  let [errorCreatingAccount, setErrorCreatingAccount] = useState(false)
  let [errore, eRror5] = useState(false)
  let [registrarb, fin] = useState(true)
  let [errorLogInGoogle, setErrorLogInGoogle] = useState(false)
  let [errorLogInGoogleEmailNotFound, setErrorLogInGoogleEmailNotFound] = useState(false)
  let [errorLogInGoogleEmailNotRegistered, setErrorLogInGoogleEmailNotRegistered] = useState(false)
  let [errorNotValidEmail, setErrorNotValidEmail] = useState(false)
  let [LogInEmail, setLogInEmail] = useState("")
  let [errorNotEmail, setErrorNotEmail] = useState(false)
  let [errorNotPassword, setErrorNotPassword] = useState(false)
  let [errorNotValidEmailLOG, setErrorNotValidEmailLOG] = useState(false)
  let [errorLogIn, setErrorLogIn] = useState(false)
  let navegar = useNavigate()
  // let [registros, setRegistros] = useState(cuentas)
  
  let nueva = async () => {

    setErrorEmailAlreadyRegistered(errorEmailAlreadyRegistered = false)
    setErrorCreatingAccount(errorCreatingAccount = false)
    mAlid(errord = false)
    eRrorcc(errorc = false)
    eRror5(errore = false)
    setErrorNotValidEmail(errorNotValidEmail = false)

    try {

      if(nombre == "") { 
        localStorage.setItem("ErrorLlenado", "NotNombre")
        throw new Error
      }

      if(contraseña == "") {
        localStorage.setItem("ErrorLlenado", "NotContraseña")
        throw new Error
      }

      if(email == "") {
        localStorage.setItem("ErrorLlenado", "NotEmail")
        throw new Error
      }

      let IsEmail = isEmail(email)

       if(!IsEmail) {
        localStorage.setItem("ErrorLlenado", "NotValidEmail")
        throw new Error
      }

     let response = await axios.post("https://marketstaffinicial-e5bf41af8855.herokuapp.com/auth/CreateAccount", {nombre, contraseña, email}) 
     if(response.data.ok == false){
      localStorage.setItem("CodigoErrorRegistro", response.data.codigo)
      throw new Error
     }

     fin(registrarb = false)
     nCuenta(registrar = true)

    } catch {

      let CodigoErrorRegistro = localStorage.getItem("CodigoErrorRegistro")
      let ErrorLlenado = localStorage.getItem("ErrorLlenado")
       if(CodigoErrorRegistro){
        if(CodigoErrorRegistro == "EmailAlreadyRegistered" ) {
      
          setErrorEmailAlreadyRegistered(errorEmailAlreadyRegistered = true)

        } else {

          setErrorCreatingAccount(errorCreatingAccount = true)

        }
       }

       if(ErrorLlenado) {
        if(ErrorLlenado == "NotNombre") {
          eRror5(errore = true)
        }
        if(ErrorLlenado == "NotContraseña") {
          eRrorcc(errorc = true)
        }
        if(ErrorLlenado == "NotEmail") {
          mAlid(errord = true)
        }
        if(ErrorLlenado == "NotValidEmail") {
         setErrorNotValidEmail(errorNotValidEmail = true)
        }
       }

       if(!CodigoErrorRegistro && !ErrorLlenado)
       {setErrorCreatingAccount(errorCreatingAccount = true)}
       localStorage.removeItem("CodigoErrorRegistro")
       localStorage.removeItem("ErrorLlenado")

    }

  //  for (let contadorb = 0; contadorb <= idses.length; contadorb++) {
     
  //    if(ncuenta === idses[contadorb]) { for (let contadorc = 0; contadorc <= registros.length; contadorc++) {
  //     if((nombre != registros[contadorc].nombre) && (contraseña != "") && (nombre != "")) {

  //       setRegistros( registros = [
  //         ...registros,
  //         { nombre: nombre, contraseña: contraseña }
  //       ])
        
  //       eRrorC(errorb = false)
  //       eRrorcc(errorc = false)
  //       mAlid(errord = false)
  //       eRror5(errore = false)
  //       fin(registrarb = false)
  //       break
    
  //     } else if(nombre === ""){

  //       eRror5(errore = true)
  //       eRrorC(errorb = false)
  //       eRrorcc(errorc = false)
  //       mAlid(errord = false)
  //       break

  //     } else if (contraseña === ""){

  //       eRrorC(errorb = false)
  //       eRrorcc(errorc = true)
  //       mAlid(errord = false)
  //       eRror5(errore = false)
  //       break
      
  //     } else if (nombre === registros[contadorc].nombre) {

  //       eRrorC(errorb = true)
  //       eRrorcc(errorc = false)
  //       mAlid(errord = false)
  //       eRror5(errore = false)
  //       break

  //     }
      
  //   } break  } else { 

  //     mAlid(errord = true)
  //     eRrorC(errorb = false)
  //     eRrorcc(errorc = false)
  //     eRror5(errore = false)
  //     break

  //   }
    
  // }  


  }
 
  let LogIn = async () => {

    setErrorNotEmail(errorNotEmail = false)
    setErrorNotPassword(errorNotPassword = false)
    eRror(error = false)
    setErrorNotValidEmailLOG(errorNotValidEmailLOG = false)
    setErrorLogIn(errorLogIn = false)

    setErrorLogInGoogle(errorLogInGoogle = false)
    setErrorLogInGoogleEmailNotFound(errorLogInGoogleEmailNotFound = false)
    setErrorLogInGoogleEmailNotRegistered(errorLogInGoogleEmailNotRegistered = false)
    
    try {

      if(LogInEmail == "") {
        localStorage.setItem("ErrorLlenado", "NotEmail")
        throw new Error
      }

      if(contraseña == "") {
        localStorage.setItem("ErrorLlenado", "NotPassword")
        throw new Error
      }

      let IsEmail = isEmail(LogInEmail)
       if(!IsEmail) {
        localStorage.setItem("ErrorLlenado", "NotValidEmail")
        throw new Error
      }

      let response = await axios.post("https://marketstaffinicial-e5bf41af8855.herokuapp.com/auth/LogIn", {LogInEmail, contraseña})
      if(response.data.ok == false) {
        localStorage.setItem("ErrorLogIn", response.data.codigo)
        throw new Error
      }

      localStorage.setItem("Token", response.data.token)
      localStorage.setItem("user", JSON.stringify(response.data.user))

      navegar("/catalogo")

    } catch {

      let ErrorLlenado = localStorage.getItem("ErrorLlenado")
      let ErrorLogIn = localStorage.getItem("ErrorLogIn")

      if(ErrorLlenado == "NotEmail") {
        setErrorNotEmail(errorNotEmail = true)
      }

      if(ErrorLlenado == "NotPassword") {
        setErrorNotPassword(errorNotPassword = true)
      }

      if(ErrorLlenado == "NotValidEmail") {
        setErrorNotValidEmailLOG(errorNotValidEmailLOG = true)
      }

      if(ErrorLogIn){
        if(ErrorLogIn == "NoAccount"){
          eRror(error = true)
        }
        else{
          setErrorLogIn(errorLogIn = true)
          console.log("asi")
        }
      }

      if(!ErrorLlenado && !ErrorLogIn) {
        setErrorLogIn(errorLogIn = true)
      }

      localStorage.removeItem("ErrorLlenado")
      localStorage.removeItem("ErrorLogIn")

    }

  //   registros.map(registro => {
   
  //  for (let contador = 0; contador <= registros.length; contador++) 
  //  {
  //    if ((nombre === registro.nombre) && (contraseña === registro.contraseña))
  //    {

  //     eRror(error = false)
  //      navegar("/productos")
  //      break
       
  //     } else 
  //    {

  //      eRror(error = true)
  //      break
       
  //    }
  //   } } )

  }
  
  let LogIn_Google = async () => {

    setErrorLogInGoogle(errorLogInGoogle = false)
    setErrorLogInGoogleEmailNotFound(errorLogInGoogleEmailNotFound = false)
    setErrorLogInGoogleEmailNotRegistered(errorLogInGoogleEmailNotRegistered = false)

    setErrorNotEmail(errorNotEmail = false)
    setErrorNotPassword(errorNotPassword = false)
    eRror(error = false)
    setErrorNotValidEmailLOG(errorNotValidEmailLOG = false)
    setErrorLogIn(errorLogIn = false)

    try {    
    
     const logInGoogleData = await signInWithPopup(auth, googleProvider)
     console.log(logInGoogleData)

      let response = await axios.post("https://marketstaffinicial-e5bf41af8855.herokuapp.com/auth/LogInGoogle", {TokenFirebase: logInGoogleData._tokenResponse.idToken})
    
       if(response.data.ok == false){
        localStorage.setItem("CodigoError", response.data.codigo)
        throw new Error}
       localStorage.setItem("Token_Firebase", logInGoogleData._tokenResponse.idToken)
       localStorage.setItem("Token", response.data.token)
       localStorage.setItem("user", JSON.stringify(response.data.user))

       navegar("/catalogo")

    } catch(err) {
     
     console.log(err)
  
     let CodigoError = localStorage.getItem("CodigoError")

     if(CodigoError){
      if(CodigoError == "NoUser") {
        console.log("El email ingresado no esta registrado con ninguna cuenta")
        setErrorLogInGoogleEmailNotRegistered(errorLogInGoogleEmailNotRegistered = true)
      }else{
        console.log("Ha ocurrido un error buscando la cuenta")
        setErrorLogInGoogleEmailNotFound(errorLogInGoogleEmailNotFound = true)
      }
     } 
     if(!CodigoError)
     {setErrorLogInGoogle(errorLogInGoogle = true)}

     localStorage.removeItem("CodigoError")

    }

  }

  let cambiador = () => {

   nCuenta(!registrar)
   eRror(error = false)
   fin(registrarb = true)
   nNombre(nombre = "")
   nContraseña(contraseña = "")
   setErrorEmailAlreadyRegistered(errorEmailAlreadyRegistered = false)
   setErrorCreatingAccount(errorCreatingAccount = false)
   setErrorNotValidEmail(errorNotValidEmail = false)
   eRrorcc(errorc = false)
   mAlid(errord = false)
   eRror5(errore = false)
   setEmail(email = "")
   setLogInEmail(LogInEmail = "")

   setErrorLogInGoogle(errorLogInGoogle = false)
   setErrorLogInGoogleEmailNotFound(errorLogInGoogleEmailNotFound = false)
   setErrorLogInGoogleEmailNotRegistered(errorLogInGoogleEmailNotRegistered = false)
   setErrorNotEmail(errorNotEmail = false)
   setErrorNotPassword(errorNotPassword = false)
   setErrorNotValidEmailLOG(errorNotValidEmailLOG = false)
   setErrorLogIn(errorLogIn = false)

  }

  return (

       <div className='fondo'>
        <div className='principal'>
          <div className='secundario'>
         <img className="imgl" src={logo} alt="logo"></img>         
         {registrar || <label htmlFor='emailLOG' className='labels'>Ingrese el email de su cuenta</label>}
         {registrar || <input type='text' className='inputs' placeholder='Email' id='emailLOG' value={LogInEmail} onChange={(e) => setLogInEmail(e.target.value)}></input>}
         {registrar && registrarb && <label htmlFor='nombre' className='labels'>Ingrese el nombre de su cuenta</label>}
         {registrar && registrarb && <input type='text' className='inputs' placeholder='Usuario' id='nombre' value={nombre} onChange={(e) => nNombre(e.target.value)}></input>}
         {registrarb && <label htmlFor='contraseña' className='labels'>Ingrese su contraseña</label>}
         {registrarb && <input type='text' className='inputs' placeholder="Contraseña" id='contraseña' value={contraseña} onChange={(e) => nContraseña(e.target.value)}></input>}
         {error && <h className="rechazado">Las credenciales ingresadas son incorrectas</h>}
         {errorNotEmail && <h className="rechazado">Ingrese su email</h>}
         {errorNotPassword && <h className="rechazado">Ingrese su contraseña</h>}
         {errorNotValidEmailLOG && <h className="rechazado">Ingrese un email valido</h>}
         {errorLogIn && <h className="rechazado">Hubo un error iniciando sesion</h>}
         {registrarb && registrar && <label htmlFor='claveS' className='labels'>Ingrese su email</label>}
         {registrarb && registrar && <input type='text' className='inputs' placeholder="Email" id='claveS' value={email} onChange={(e) =>setEmail(e.target.value)}></input>}
         {errore && <h className="rechazado">Debe ingresar un nombre para su cuenta</h>}
         {errorEmailAlreadyRegistered && <h className="rechazado">Este email ya esta en uso</h>} 
         {errorc && <h className="rechazado">Debe ingresar una contraseña para su cuenta</h>}
         {errord && <h className="rechazado">Debe ingresar un email para su cuenta</h>}
         {errorNotValidEmail && <h className="rechazado">Debe ingresar un email valido para su cuenta</h>}
         {errorCreatingAccount && <h className="rechazado">Ha sucedido un error creando la cuenta</h>}
         {errorLogInGoogle && <h className="rechazado">No se pudo iniciar sesion con google</h>}
         {errorLogInGoogleEmailNotFound && <h className="rechazado">Ha ocurrido un error buscando la cuenta</h>}
         {errorLogInGoogleEmailNotRegistered && <h className="rechazado">El email ingresado no esta registrado con ninguna cuenta</h>}
         {registrarb || <h className="aceptado">La cuenta fue creada con exito</h>}
         {registrar || <button type="button" className='botones' onClick={LogIn}>Iniciar sesion</button>}
         {registrar || <button type='button' className='botones' onClick={cambiador}>Registrarse</button>}
         {registrar || <button type="button" className='botones botonGoogle' onClick={LogIn_Google}>Iniciar sesion con Google</button>}
         {registrarb && registrar && <button type='button' className='botones' onClick={nueva}>Crear cuenta</button>} 
         {registrar && <button type="button" className='botones' onClick={cambiador}>Volver a inicio</button>}
         </div>
       </div>
      </div>
  )
}

export default Registro


// esto de aca arriba funciona ya que el al ser true se muestra, si fuese false no se mostraria (registrar && / ||)

//event.currenTargget = cosa muy valiosa, cambia algo del objeto con el que se interactua, //puedo poner cualquier argumento en el lugar del style  ,// event.currentTarget.style.display = "none" (ejemplo)
