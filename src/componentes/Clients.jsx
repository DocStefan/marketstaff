import React from "react";
import { useState, useEffect } from "react";
// import clientes from "../data/clients";
import Provsb from "./Provsb";
import "../estilocomponentes/estiloclients.css"
import axios from "axios";


function Clients() {


  // let [id, setId] = useState("")
  let [foto, setFoto] = useState("")
  let [nombre, setNombre] = useState("")
  let [cuit, setCuit] = useState("")
  let [numero, setNumero] = useState("")
  let [clients, setClients] = useState([])
  let [permitidorNPA, setPermitidorNPA] = useState(false)
  let [permitidorNPB, setPermitidorNPB] = useState(false)
  let [ocultadornpe, setOcultadornpe] = useState(false)
  let [ocultadornp, setOcultadornp] = useState(false)

  let [eliminador, setEliminador] = useState("")
  let [permitidorQPA, setPermitidorQPA] = useState(false)
  let [ocultadorqp, setOcultadorqp] = useState(false)

  let [buscador, setBuscador] = useState("")
  let [ocultadormp, setOcultadormp] = useState(false)
  let [permitidorBPA, setPermitidorBPA] = useState(false)
  let [permitidorBPB, setPermitidorBPB] = useState(false)
  let [ocultadormpe, setOcultadormpe] = useState(false)
  let [ocultadormpeb, setOcultadormpeb] = useState(false)


  async function GetAllClients () {

    try 
    {
      let response = await axios.get("http://localhost:3005/auth//GetAllClientes", {})

      if(response) {
       setClients(clients = [ ...response.data])
      } else {
        throw new Error
      }

     } catch(error) {

       console.log(error)

     }

  }

  useEffect(() => {

    GetAllClients()

  }, [])


  let clickera = () => {

    let errorA = document.getElementById("errorA") 
    let errorB = document.getElementById("errorB")
    
    setOcultadornp(!ocultadornp)
    setOcultadornpe(ocultadornpe = false)

    errorA.style.display="none"
    errorB.style.display="none"

  }

  useEffect(() =>{
    
    let seccionAP = document.getElementById("seccionAP")
    let seccionINI = document.getElementById("seccionINI")

    if(ocultadornp === true) {

      seccionAP.style.display= "block"
      seccionINI.style.display= "none"
      
    } else {

      seccionAP.style.display= "none"
      seccionINI.style.display= "block"

      // setId(id = "")
      setNombre(nombre = "")
      setCuit(cuit = "")
      setFoto(foto = "")
      setNumero(numero = "")
      
    }

  }, [ocultadornp])

  let clickerb = () => {

    let errorC = document.getElementById("errorC")
    let exitoB = document.getElementById("exitoB")
    let seccionEPB = document.getElementById("seccionEPB")
 
 
    setOcultadorqp(!ocultadorqp)
    setPermitidorQPA(permitidorQPA = false)
    seccionEPB.style.display="block"
 
    exitoB.style.display="none"
    errorC.style.display="none"

  }

  useEffect(() => {

    let seccionINI = document.getElementById("seccionINI")
    let seccionEP = document.getElementById("seccionEP")

    if (ocultadorqp === true) {
      
      seccionINI.style.display= "none"
      seccionEP.style.display= "block"

    } else {

      seccionINI.style.display= "block"
      seccionEP.style.display= "none"
      setEliminador(eliminador = "")

    }

  }, [ocultadorqp])

  let clickerc = () => {

    let errorCc = document.getElementById("errorCc")
    let exitoC = document.getElementById("exitoC")  
    let errorA = document.getElementById("errorA") 
    let errorB = document.getElementById("errorB")
 
    setOcultadormp(!ocultadormp)
    setBuscador(buscador = "")
    setPermitidorBPB(permitidorBPB = false)
    setOcultadormpe(ocultadormpe = false)
    setOcultadormpeb(ocultadormpeb = false)
 
 
 
    // setId(id = "")
    setNombre(nombre = "")
    setCuit(cuit = "")
    setNumero(numero = "")
    setFoto(foto = "")    
 
    errorCc.style.display="none"
    exitoC.style.display="none"
    errorA.style.display="none"
    errorB.style.display="none"

  }

  useEffect(() => {

    let seccionINI = document.getElementById("seccionINI")
    let seccionMPA = document.getElementById("seccionMPA")

    if (ocultadormp === true) {
    
      seccionINI.style.display = "none"
      seccionMPA.style.display = "block"

    } else {

      seccionINI.style.display = "block"
      seccionMPA.style.display = "none"

    }

  }, [ocultadormp])

  let clickerd = async () => {

    // let errorA = document.getElementById("errorA") 
    // let errorB = document.getElementById("errorB")
   
 
    // permitidorNPA = false
    // permitidorNPB = false
 
 
    // clients.map(cliente => { 
 
    //  for (let contador = 0; contador <= clients.length; contador++) {
       
    //    if ((id != cliente.id) && (id != "") && (id > 0)) {
 
    //     errorA.style.display="none"
    //     setPermitidorNPA(permitidorNPA = true)
    //     break
 
    //    } else if ((id === cliente.id) || (id === "") || (id <= 0)) {
 
    //     setPermitidorNPB(permitidorNPB = true)
    //     break
 
    //    } 
 
    //  } 
 
    // })
 
    //  if ((permitidorNPA = true) && (permitidorNPB != true)) {
 
    //   //  console.log("adentro")
 
    //    if((nombre != "") && (cuit != "") && (foto != "") && (numero != "")) {
 
    //     setClients( clients = [
    //      ...clients,
    //      {id: id, nombre: nombre, cuit: cuit, foto: foto, contacto: numero}
    //     ])
 
    //     setOcultadornpe(ocultadornpe = true)
    //     errorB.style.display="none"
 
    //    } else {
 
    //     errorB.style.display="block"
    //     errorA.style.display="none"
 
    //    }
 
    //  } else if (permitidorNPB = true) {
 
    //  //  console.log("afuera")
    //   errorA.style.display="block"  
    //   errorB.style.display="none"
    //   setOcultadornpe(ocultadornpe = false)
 
    //  }

    let errorA = document.getElementById("errorA") 
    let errorB = document.getElementById("errorB")
   
    errorB.style.display="none"
    errorA.style.display="none"

    // permitidorNPA = false
    // permitidorNPB = false
 
 
    // provs.map(proveedor => { 
 
    //  for (let contador = 0; contador <= provs.length; contador++) {
       
    //    if ((id != proveedor.id) && (id != "") && (id > 0)) {
 
    //     errorA.style.display="none"
    //     setPermitidorNPA(permitidorNPA = true)
    //     break
 
    //    } else if ((id === proveedor.id) || (id === "") || (id <= 0)) {
 
    //     setPermitidorNPB(permitidorNPB = true)
    //     break
 
    //    } 
 
    //  } 
 
    // })
 
    //  if ((permitidorNPA = true) && (permitidorNPB != true)) {
 
      //  console.log("adentro")
 
       if((nombre != "") && (cuit != "") && (foto != "") && (numero != "")) {
 
        // setProvs( provs = [
        //  ...provs,
        //  {id: id, nombre: nombre, cuit: cuit, foto: foto, contacto: numero}
        // ])
        let response = await axios.post("http://localhost:3005/auth/NewCliente", {Nombre: nombre, CUIT: cuit, Contacto: numero, Foto: foto})

        if(response){
          if(response.data.ok == false) {
            errorA.style.display="block"
            console.log("aca")
          } else {
            setOcultadornpe(ocultadornpe = true)
            errorB.style.display="none"
            errorA.style.display="none"
          }
        }

        // setOcultadornpe(ocultadornpe = true)
        // errorB.style.display="none"
 
       } else {
 
        errorB.style.display="block"
        // errorA.style.display="none"
 
       }
 
    //  } else if (permitidorNPB = true) {
 
    //  //  console.log("afuera")
    //   errorA.style.display="block"  
    //   errorB.style.display="none"
    //   setOcultadornpe(ocultadornpe = false)
 
    //  }

  }

  // useEffect(() => {

  //   let botonnuevoprov = document.getElementById("botonnuevoprov")
  //   let exitoA = document.getElementById("exitoA")

  //   if(ocultadornpe === true) {

  //     botonnuevoprov.style.display = "none"
  //     exitoA.style.display = "block"

  //   } 
  //   else {

  //     botonnuevoprov.style.display = "inline"
  //     exitoA.style.display = "none"

  //   }

  // }, [ocultadornpe])

  useEffect(() => {

    let botonnuevoprov = document.getElementById("botonnuevoprov")
    let exitoA = document.getElementById("exitoA")

    if(ocultadornpe === true) {

      botonnuevoprov.style.display = "none"
      exitoA.style.display = "block"
      GetAllClients()

    } 
    else {

      botonnuevoprov.style.display = "inline"
      exitoA.style.display = "none"

    }

  }, [ocultadornpe])

  let clickere = async () => {

  //   let errorC = document.getElementById("errorC")
  //   let exitoB = document.getElementById("exitoB")
 
  //  clients.map(cliente => {
     
  //     if (eliminador === cliente.id) {

  //      setClients
  //      (clients.filter(c => c.id !== cliente.id))
  //      setPermitidorQPA(permitidorQPA = true)

  //     }
      
  //  })

  //   if (permitidorQPA === true) {

  //    exitoB.style.display="block"
  //    errorC.style.display="none"

  //   } else if (permitidorQPA === false) {

  //    errorC.style.display="block"
  //    exitoB.style.display="none"

  //   }

  
  let errorC = document.getElementById("errorC")
  let exitoB = document.getElementById("exitoB")
  let errorA = document.getElementById("errorA")

  exitoB.style.display="none"
  errorC.style.display="none"
  errorA.style.display="none"

//  provs.map(prov => {
   
//     if (eliminador === prov.id) {

//      setProvs
//      (provs.filter(p => p.id !== prov.id))
//      setPermitidorQPA(permitidorQPA = true)

//     }
    
//  })

if(eliminador != "") {

  let response = await axios.delete("http://localhost:3005/auth/DeleteCliente", {data:{id: eliminador}})

   if(response){
    if(response.data.ok == false){
       if(response.data.codigo == "ErrorNotClient") { errorC.style.display="block" } else { errorA.style.display="block" }
    } else if (response.data.ok == true) {
      setPermitidorQPA(permitidorQPA = true)
      GetAllClients()
    }
   } else {
    errorA.style.display="block"
   }

  if (permitidorQPA === true) {

   exitoB.style.display="block"
   errorC.style.display="none"
   errorA.style.display="none"

  } else if (permitidorQPA === false) {

   errorC.style.display="block"
   exitoB.style.display="none"

  }

} else {

  errorC.style.display="block"

}

  }

  // useEffect(() => {
    
  //   let seccionEPB = document.getElementById("seccionEPB")
  //   seccionEPB.style.display="none"

  // }, [permitidorQPA])

  useEffect(() => {
    
    let seccionEPB = document.getElementById("seccionEPB")
    seccionEPB.style.display="none"

  }, [permitidorQPA])

  let clickerf = async () => {

  //   let errorCc = document.getElementById("errorCc")
  //   let exitoC = document.getElementById("exitoC")
  //   setPermitidorBPA(permitidorBPA = false)

  //  clients.map(cliente => {

  //   if(buscador === cliente.id) {

  //     setPermitidorBPA(permitidorBPA = true)

  //     setClients
  //     (clients.filter(c => c.id !== cliente.id))

  //     // setId(id = cliente.id)
  //     setNombre(nombre = cliente.nombre)
  //     setCuit(cuit = cliente.cuit)
  //     setFoto(foto = cliente.foto)
  //     setNumero(numero = cliente.contacto)

  //    }

  //  }

  //  )

  //    if(permitidorBPA === true) {

  //     errorCc.style.display="none"
  //     exitoC.style.display="block"    
  //     setPermitidorBPB(permitidorBPB = true)

  //   } else if (permitidorBPA === false) {

  //     errorCc.style.display="block"
  //     exitoC.style.display="none"

  //    }

  let errorCc = document.getElementById("errorCc")
    let exitoC = document.getElementById("exitoC")
    let errorA = document.getElementById("errorA")
    setPermitidorBPA(permitidorBPA = false)

    errorA.style.display="none"
    errorCc.style.display="none"
    exitoC.style.display="none" 

  //  provs.map(prov => {

  //   if(buscador === prov.id) {

  //     setPermitidorBPA(permitidorBPA = true)

  //     setProvs
  //     (provs.filter(p => p.id !== prov.id))

  //     setId(id = prov.id)
  //     setNombre(nombre = prov.nombre)
  //     setCuit(cuit = prov.cuit)
  //     setFoto(foto = prov.foto)
  //     setNumero(numero = prov.contacto)

  //    }

  //  }

  //  )

  let response = await axios.put("http://localhost:3005/auth/GetClienteToUpdateByID", {id: buscador})

  if(response) {
   if(response.data.ok != false) {
   console.log(response)
   setPermitidorBPA(permitidorBPA = true)
   setNombre(nombre = response.data[0].Nombre)
   setCuit(cuit = response.data[0].CUIT)
   setNumero(numero = response.data[0].Contacto)
   setFoto(foto = response.data[0].Foto)
   } else {
     if(response.data.codigo == "ErrorNotClient") {
       errorCc.style.display="block"
       exitoC.style.display="none"
       console.log("es false")
     } else {
       errorA.style.display="block"
       exitoC.style.display="none"
     }
   }

  } else {
    errorA.style.display="block"
  }

     if(permitidorBPA === true) {

      errorCc.style.display="none"
      exitoC.style.display="block"    
      setPermitidorBPB(permitidorBPB = true)

    } 
    // else if (permitidorBPA === false) {

    //   errorCc.style.display="block"
    //   exitoC.style.display="none"

    //  }


  }

  // useEffect(() => {

  //   let seccionMPA = document.getElementById("seccionMPA")
  //   let seccionMPB = document.getElementById("seccionMPB")

  //   if (permitidorBPB === true) {

  //     seccionMPA.style.display="none"
  //     seccionMPB.style.display="block"

  //   } else {

  //     seccionMPB.style.display="none"

  //   }

  // }, [permitidorBPB])

  useEffect(() => {

    let seccionMPA = document.getElementById("seccionMPA")
    let seccionMPB = document.getElementById("seccionMPB")

    if (permitidorBPB === true) {

      seccionMPA.style.display="none"
      seccionMPB.style.display="block"

    } else {

      seccionMPB.style.display="none"

    }

  }, [permitidorBPB])

  let clickerg = async  () => {

    // let errorAa = document.getElementById("errorAa") 
    // let errorBb = document.getElementById("errorBb")
   
 
    // permitidorNPA = false
    // permitidorNPB = false
 
 
    // clients.map(cliente => { 
 
    //  for (let contador = 0; contador <= clients.length; contador++) {
       
    //    if ((id != cliente.id) && (id != "") && (id > 0)) {
 
    //     errorAa.style.display="none"
    //     setPermitidorNPA(permitidorNPA = true)
    //     break
 
    //    } else if ((id === cliente.id) || (id === "") || (id <= 0)) {
 
    //     setPermitidorNPB(permitidorNPB = true)
    //     break
 
    //    } 
 
    //  } 
 
    // })
 
    //  if ((permitidorNPA = true) && (permitidorNPB != true)) {
 
    //   //  console.log("adentro")
 
    //    if((nombre != "") && (cuit != "") && (foto != "") && (numero != "")) {
 
    //     setClients( clients = [
    //      ...clients,
    //      {id: id, nombre: nombre, cuit: cuit, foto: foto, contacto: numero}
    //     ])
 
    //     setOcultadormpe(ocultadormpe = true)
    //     errorBb.style.display="none"
 
    //    } else {
 
    //     errorBb.style.display="block"
    //     errorAa.style.display="none"
 
    //    }
 
    //  } else if (permitidorNPB = true) {
 
    //  //  console.log("afuera")
    //   errorAa.style.display="block"  
    //   errorBb.style.display="none"
    //   setOcultadornpe(ocultadornpe = false)
 
    //  }

    let errorAa = document.getElementById("errorAa") 
    let errorBb = document.getElementById("errorBb")

    errorBb.style.display="none"
    errorAa.style.display="none"
   
 
    // permitidorNPA = false
    // permitidorNPB = false
 
 
    // provs.map(proveedor => { 
 
    //  for (let contador = 0; contador <= provs.length; contador++) {
       
    //    if ((id != proveedor.id) && (id != "") && (id > 0)) {
 
    //     errorAa.style.display="none"
    //     setPermitidorNPA(permitidorNPA = true)
    //     break
 
    //    } else if ((id === proveedor.id) || (id === "") || (id <= 0)) {
 
    //     setPermitidorNPB(permitidorNPB = true)
    //     break
 
    //    } 
 
    //  } 
 
    // })
 
    //  if ((permitidorNPA = true) && (permitidorNPB != true)) {
 
      //  console.log("adentro")
 
       if((nombre != "") && (cuit != "") && (foto != "") && (numero != "")) {
 
        // setProvs( provs = [
        //  ...provs,
        //  {id: id, nombre: nombre, cuit: cuit, foto: foto, contacto: numero}
        // ])

        let response = await axios.put("http://localhost:3005/auth/UpdateClienteById", {id: buscador, Nombre: nombre, CUIT: cuit, Contacto: numero , Foto: foto})
        
        if(response) {
          if(response.data.ok != false) {
          setOcultadormpe(ocultadormpe = true)
          errorBb.style.display="none"
          GetAllClients()
          } else {
           errorAa.style.display="block"
          }
        } else {
          errorAa.style.display="block"
        }
 
        setOcultadormpe(ocultadormpe = true)
        errorBb.style.display="none"
 
       } else {
 
        errorBb.style.display="block"
        errorAa.style.display="none"
 
       }
 
    //  } else if (permitidorNPB = true) {
 
    //  //  console.log("afuera")
    //   errorAa.style.display="block"  
    //   errorBb.style.display="none"
    //   setOcultadornpe(ocultadornpe = false)
 
    //  }

  }

  // useEffect(() => {

  //   let botonmodificarprov = document.getElementById("botonmodificarprov")
  //   let exitoAa = document.getElementById("exitoAa")

  //   if(ocultadornpe === true) {

  //     botonmodificarprov.style.display = "none"
  //     exitoAa.style.display = "block"

  //   } 
  //   else {

  //     botonmodificarprov.style.display = "inline"
  //     exitoAa.style.display = "none"

  //   }

  // }, [ocultadornpe])

  useEffect(() => {

    let botonmodificarprov = document.getElementById("botonmodificarprov")
    let exitoAa = document.getElementById("exitoAa")

    if(ocultadornpe === true) {

      botonmodificarprov.style.display = "none"
      exitoAa.style.display = "block"

    } 
    else {

      botonmodificarprov.style.display = "inline"
      exitoAa.style.display = "none"

    }

  }, [ocultadornpe])

  useEffect(() => {

    let exitoC = document.getElementById("exitoC")

    if(ocultadormpe === true) {

      exitoC.style.display = "none"
      setOcultadormpeb(ocultadormpeb = true)

    } 

  }, [ocultadormpe])

  useEffect(() => {

    let seccionMPC = document.getElementById("seccionMPC")
    let seccionMPB = document.getElementById("seccionMPB")

   if (ocultadormpeb === true) {

    seccionMPC.style.display="block"
    seccionMPB.style.display="none"

   } else {

    seccionMPC.style.display="none"

   }

  }, [ocultadormpeb])

  return (

   <div>
     
    <div className="botonesprov" id="seccionINI">

     <button type="button" className="boton botonprov" onClick={clickera}>Añadir cliente</button>
     <button type="button" className="boton botonprov" onClick={clickerb}>Eliminar cliente</button>
     <button type="button" className="boton botonprov" onClick={clickerc}>Modificar cliente</button>

    </div>

    <div className="cajaprovnueva" id="seccionAP">
      
      {/* <input type="number" placeholder="Ingresa la ID del cliente" className="BPONInput inputprov" value={id} onChange={(e) => setId(e.target.value)}></input> */}
      <input type="text" placeholder="Ingresa el nombre del cliente" className="BPONInput inputprov" value={nombre} onChange={(e) => setNombre(e.target.value)}></input>
      <input type="number" placeholder="Ingresa el CUIT del cliente" className="BPONInput inputprov" value={cuit} onChange={(e) => setCuit(e.target.value)}></input>
      <input type="number" placeholder="Ingresa el numero de contacto del cliente" className="BPONInput inputprov" value={numero} onChange={(e) => setNumero(e.target.value)}></input>
      <input type="text" placeholder="Ingresa la URL de la foto laboral del cliente" className="BPONInput inputprov" value={foto} onChange={(e) => setFoto(e.target.value)}></input>

      
      <div className="msgsrespuestanuevoprov">

        <h className="error errorprov" id="errorA" >Hubo un error</h>
        <h className="error errorprov" id="errorB">Debe rellenar todas las casillas para agregar el nuevo cliente</h>
        <h className="exito exitoprov" id="exitoA">cliente agregado con exito</h>

      </div>


      <button type="button" className="boton botonprov botonprovnueva" onClick={clickerd} id="botonnuevoprov">Agregar cliente</button>
      <button type="button" className="boton botonprov botonprovnueva" onClick={clickera}>Volver</button>
      
    </div> 

    <div className="cajaproveliminado" id="seccionEP">

     <div id="seccionEPB">

      <h className="tituloproveliminado">Ingrese la ID del cliente que desea eliminar</h>

      <input type="number" value={eliminador} className="BPONInput inputprov inputproveliminar" placeholder="Por ejemplo: '10' (sin comillas)" onChange={(e) => setEliminador(e.target.value)}></input>

      <div className="msgsrespuestaprov">

        <h className="error errorprov" id="errorC">La ID ingresada no corresponde a ningun cliente</h>

      </div>
      
      <button type="button" className="boton botonprov botonprovnueva" onClick={clickere} id="botoneliminarprov">Eliminar cliente</button>

     </div>

      <h className="exito exitoprov" id="exitoB">El cliente con ID {eliminador} fue eliminado con exito</h>

      <button type="button" className="boton botonprov botonprovnueva" onClick={clickerb}>Volver</button>

    </div>

    <div className="cajaprovmodificado" id="seccionMPA">

      <h className="tituloprovmodificado">Ingrese la ID del cliente que desea modificar</h>

      <input type="number"  placeholder="Por ejemplo: '10' (sin comillas)" className="BPONInput inputprov inputprovmodificado" value={buscador} onChange={(e) => setBuscador(e.target.value)}></input>

      <h className="error errorprov" id="errorCc">La ID ingresada no corresponde a ningun cliente</h>
      
      <button type="button" className="boton botonprov botonprovnueva" onClick={clickerf} id="botonmodificarprov">Modificar cliente</button>

      <button type="button" className="boton botonprov botonprovnueva" onClick={clickerc}>Volver</button>

    </div>

    <div className="cajaprovmodificadoB" id="seccionMPB">

      {/* <input type="number" placeholder="Ingresa la ID del cliente" className="BPONInput inputprov" value={id} onChange={(e) => setId(e.target.value)}></input> */}
      <input type="text" placeholder="Ingresa el nombre del cliente" className="BPONInput inputprov" value={nombre} onChange={(e) => setNombre(e.target.value)}></input>
      <input type="number" placeholder="Ingresa el CUIT del cliente" className="BPONInput inputprov" value={cuit} onChange={(e) => setCuit(e.target.value)}></input>
      <input type="number" placeholder="Ingresa el numero de contacto del cliente" className="BPONInput inputprov" value={numero} onChange={(e) => setNumero(e.target.value)}></input>
      <input type="text" placeholder="Ingresa la URL de la foto laboral del cliente" className="BPONInput inputprov" value={foto} onChange={(e) => setFoto(e.target.value)}></input>

      <h className="exito semi" id="exitoC">Modifique los valores que desee del cliente</h>

      <div className="msgsrespuestanuevoprov">

        <h className="error errorprov" id="errorAa" >Hubo un error</h>
        <h className="error errorprov" id="errorBb">Debe rellenar todas las casillas para modificar al cliente</h>
        <h className="exito exitoprov" id="exitoAa">cliente modificado con exito</h>

      </div>

      <button type="button" className="boton botonprov botonprovnueva" onClick={clickerg} id="botonnuevoprov">Finalizar modificacion</button>

    </div>

    <div className="cajaprovmodificadoC" id="seccionMPC">

     <h className="exito exitoprov">cliente modificado con exito</h>

     <button type="button" className="boton botonprov botonprovnueva" onClick={clickerc}>Volver</button>

    </div>


    <div className="contenedorflex flexi">
      
      {clients.map(cliente => ( 

        <Provsb 
         fotoprov = {cliente.Foto}
         idprov = {cliente.id}
         nombreprov = {cliente.Nombre}
         cuitprov = {cliente.CUIT}
         numprov = {cliente.Contacto}
         />

      ))}
      
    </div>


   </div>

  )

}

export default Clients