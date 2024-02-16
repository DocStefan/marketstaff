import React from 'react'
import { useState, useEffect } from 'react'
import productos from '../data/prods'
import "../estilocomponentes/estiloprods.css"
import Prodsb from './Prodsb'
import axios from 'axios'

function Prods() {
 
  let [ocultadornp, setOcultadornp] = useState(false)
  let [ocultadorqp, setOcultadorqp] = useState(false)
  let [ocultadormp, setOcultadormp] = useState(false)
  let [ocultadornpe, setOcultadornpe] = useState(false)
  let [permitidorNPA, setPermitidorNPA] = useState(false)
  let [permitidorNPB, setPermitidorNPB] = useState(false)
  let [prods, setProds] = useState([])       

  // let [id, setId] = useState("")
  let [nombre, setNombre] = useState("")
  let [nombrec, setNombrec] = useState("")
  let [cantidad, setCantidad] = useState("")
  let [precioc, setPrecioc] = useState("")
  let [proveedor, setProveedor] = useState("")
  let [preciop, setPreciop] = useState("")
  let [urlfoto, setUrlfoto] = useState("")

  let [eliminador, setEliminador] = useState("")
  let [permitidorQPA, setPermitidorQPA] = useState(false)

  let [buscador, setBuscador] = useState("")
  let [permitidorBPA, setPermitidorBPA] = useState(false)
  let [permitidorBPB, setPermitidorBPB] = useState(false)
  let [ocultadormpe, setOcultadormpe] = useState(false)
  let [ocultadormpeb, setOcultadormpeb] = useState(false)

  async function GetAllProductos () {

    try 
    {
      let response = await axios.get("http://localhost:3005/auth//GetAllProductosADMIN", {})

      if(response) {
       setProds(prods = [ ...response.data])
      } else {
        throw new Error
      }

     } catch(error) {

       console.log(error)

     }

  }

  // GetAllProductos()

  // console.log(prods)


  useEffect(() => {

    GetAllProductos()

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
    
    let creador = document.getElementById("create")
    let seccionPRINCIPAL = document.getElementById("seccionPRINCIPAL")
    let seccionNPON = document.getElementById("seccionNPON")

    if(ocultadornp === true) {

      creador.style.display= "contents"
      seccionPRINCIPAL.style.display= "none"
      seccionNPON.style.display = "block"
      
    } else {

      creador.style.display= "none"
      seccionPRINCIPAL.style.display= "block"
      seccionNPON.style.display = "none"

      // setNompreProveedor(NombreProveedor = "")
      setNombre(nombre = "")
      setNombrec(nombrec = "")
      setCantidad(cantidad = "")
      setPrecioc(precioc = "")
      setProveedor(proveedor = "")
      setPreciop(preciop = "")
      setUrlfoto(urlfoto = "")
      
    }

  }, [ocultadornp])

  let clickerb = () => {

   let errorC = document.getElementById("errorC")
   let exitoB = document.getElementById("exitoB")
   let eliminado = document.getElementById("eliminado")
   let errorA = document.getElementById("errorA")



   setOcultadorqp(!ocultadorqp)
   setPermitidorQPA(permitidorQPA = false)
   eliminado.style.display="inline"

   exitoB.style.display="none"
   errorC.style.display="none"
   errorA.style.display="none"

  }

  useEffect(() => {

    let seccionPRINCIPAL = document.getElementById("seccionPRINCIPAL")
    let seccionQPON = document.getElementById("seccionQPON")

    if (ocultadorqp === true) {
      
      seccionPRINCIPAL.style.display= "none"
      seccionQPON.style.display= "block"

    } else {

      seccionPRINCIPAL.style.display= "block"
      seccionQPON.style.display= "none"
      setEliminador(eliminador = "")

    }

  }, [ocultadorqp])

  let clickerc = () => {

   let errorC = document.getElementById("errorC")
   let exitoC = document.getElementById("exitoC")  
   let errorA = document.getElementById("errorA") 
   let errorB = document.getElementById("errorB")

   setOcultadormp(!ocultadormp)
   setBuscador(buscador = "")
   setPermitidorBPB(permitidorBPB = false)
   setOcultadormpe(ocultadormpe = false)
   setOcultadormpeb(ocultadormpeb = false)



  //  setId(id = "")
   setNombre(nombre = "")
   setNombrec(nombrec = "")
   setCantidad(cantidad = "")
   setPrecioc(precioc = "")
   setProveedor(proveedor = "")
   setPreciop(preciop = "")
   setUrlfoto(urlfoto = "")
   

   errorC.style.display="none"
   exitoC.style.display="none"
   errorA.style.display="none"
   errorB.style.display="none"

  }

  useEffect(() => {

    let seccionPRINCIPAL = document.getElementById("seccionPRINCIPAL")
    let seccionMPA = document.getElementById("seccionMPA")

    if (ocultadormp === true) {
    
      seccionPRINCIPAL.style.display = "none"
      seccionMPA.style.display = "block"

    } else {

      seccionPRINCIPAL.style.display = "block"
      seccionMPA.style.display = "none"

    }

  }, [ocultadormp])

  let clickerd = async () => {

  //  let errorA = document.getElementById("errorA") 
   let errorB = document.getElementById("errorB")
   let errorA = document.getElementById("errorA")

   errorB.style.display="none"
   errorA.style.display="none"
  

  //  permitidorNPA = false
  //  permitidorNPB = false


  //  prods.map(producto => { 

  //   for (let contador = 0; contador <= productos.length; contador++) {
      
  //     if ((id != producto.id) && (id != "") && (id > 0)) {

  //      errorA.style.display="none"
  //      setPermitidorNPA(permitidorNPA = true)
  //      break

  //     } else if ((id === producto.id) || (id === "") || (id <= 0)) {

  //      setPermitidorNPB(permitidorNPB = true)
  //      break

  //     } 

  //   } 

  //  })

    // if (permitidorNPB != true) {

     //  console.log("adentro")

      if((nombre != "") && (nombrec != "") && (cantidad != "") && (precioc != "") && (proveedor != "") && (preciop != "") && (urlfoto != "")) {

      //  setProds( prods = [
      //   ...prods,
      //   {NombreProveedor: NombreProveedor, nombre: nombre, nombrec: nombrec, cantidadd: cantidad, precioap: precioc, proveedor: proveedor, precioc: preciop, foto: urlfoto}
      //  ])

       let response = await axios.post("http://localhost:3005/auth/NewProduct", {Nombre: nombre, NombreComercial: nombrec, Stock: cantidad, PrecioVentaPublico: precioc, NombreProveedor: proveedor, PrecioCompraProveedor: preciop, Foto: urlfoto})

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
      } else {

       errorB.style.display="block"
      //  errorA.style.display="none"

      }

    // } 
    // else if (permitidorNPB = true) {

    // //  console.log("afuera")
    // //  errorA.style.display="block"  
    //  errorB.style.display="none"
    //  setOcultadornpe(ocultadornpe = false)

    // }

  }

  useEffect(() => {

    let exito = document.getElementById("exito")
    let exitoA = document.getElementById("exitoA")

    if(ocultadornpe === true) {

      exito.style.display = "none"
      exitoA.style.display = "block"
      GetAllProductos()

    } 
    else {

      exito.style.display = "inline"
      exitoA.style.display = "none"

    }

  }, [ocultadornpe])

  let clickere = async () => {

    let errorC = document.getElementById("errorC")
    let exitoB = document.getElementById("exitoB")
    let errorA = document.getElementById("errorA")

    exitoB.style.display="none"
    errorC.style.display="none"
    errorA.style.display="none"
 
  //  prods.map(prod => {
     
  //     if (eliminador === prod.id) {

  //      setProds
  //      (prods.filter(p => p.id !== prod.id))
  //      setPermitidorQPA(permitidorQPA = true)

  //     }
      
  //  })
   if(eliminador != "") {

    let response = await axios.delete("http://localhost:3005/auth/DeleteProduct", {data:{id: eliminador}})

     if(response){
      if(response.data.ok == false){
         if(response.data.codigo == "ErrorNotProduct") { errorC.style.display="block" } else { errorA.style.display="block" }
      } else if (response.data.ok == true) {
        setPermitidorQPA(permitidorQPA = true)
        GetAllProductos()
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

  useEffect(() => {
    
    let eliminado = document.getElementById("eliminado")
    eliminado.style.display="none"

  }, [permitidorQPA])

  let clickerf = async () => {

    let errorC = document.getElementById("errorC")
    let exitoC = document.getElementById("exitoC")
    let errorA = document.getElementById("errorA")
    setPermitidorBPA(permitidorBPA = false)

    errorA.style.display="none"
    errorC.style.display="none"
    exitoC.style.display="none" 

  //  prods.map(prod => {

  //   if(buscador === prod.id) {

  //     setPermitidorBPA(permitidorBPA = true)

  //     setProds
  //     (prods.filter(p => p.id !== prod.id))

  //     // setId(id = prod.id)
  //     setNombre(nombre = prod.nombre)
  //     setNombrec(nombrec = prod.nombrec)
  //     setCantidad(cantidad = prod.cantidadd)
  //     setPrecioc(precioc = prod.precioap)
  //     setProveedor(proveedor = prod.proveedor)
  //     setPreciop(preciop = prod.precioc)
  //     setUrlfoto(urlfoto = prod.foto)

  //    }

  //  }

  //  )
    
     let response = await axios.put("http://localhost:3005/auth/GetProductToUpdateByID", {id: buscador})

     if(response) {
      if(response.data.ok != false) {
      console.log(response)
      setPermitidorBPA(permitidorBPA = true)
      setNombre(nombre = response.data[0].Nombre)
      setNombrec(nombrec = response.data[0].NombreComercial)
      setCantidad(cantidad = response.data[0].Stock)
      setPrecioc(precioc = response.data[0].PrecioVentaPublico)
      setProveedor(proveedor = response.data[0].Proveedor)
      setPreciop(preciop = response.data[0].PrecioCompraProveedor)
      setUrlfoto(urlfoto = response.data[0].Foto)
      } else {
        if(response.data.codigo == "ErrorNotProduct") {
          errorC.style.display="block"
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

      errorC.style.display="none"
      exitoC.style.display="block"    
      console.log("es true")
      setPermitidorBPB(permitidorBPB = true)

    } 
    // else if (permitidorBPA === false) {

    //   errorA.style.display="block"
    //   exitoC.style.display="none"
    //   console.log("es false")

    //  }

  }

  useEffect(() => {

    let seccionMPA = document.getElementById("seccionMPA")
    let seccionMPB = document.getElementById("seccionMPB")
    let modificador = document.getElementById("create")

    if (permitidorBPB === true) {

      seccionMPA.style.display="none"
      seccionMPB.style.display="inline"
      modificador.style.display="contents"

    } else {

      seccionMPB.style.display="none"
      modificador.style.display="none"

    }

  }, [permitidorBPB])

  let clickerg = async () => {

    let errorA = document.getElementById("errorA") 
    let errorB = document.getElementById("errorB")
   
    errorB.style.display="false"
    errorA.style.display="none"
 
    // permitidorNPA = false
    // permitidorNPB = false
 
 
    // prods.map(producto => { 
 
    //  for (let contador = 0; contador <= productos.length; contador++) {
       
    //    if ((id != producto.id) && (id != "") && (id > 0)) {
 
    //     errorA.style.display="none"
    //     setPermitidorNPA(permitidorNPA = true)
    //     break
 
    //    } else if ((id === producto.id) || (id === "") || (id <= 0)) {
 
    //     setPermitidorNPB(permitidorNPB = true)
    //     break
 
    //    } 
 
    //  } 
 
    // })
 
    //  if ((permitidorNPA = true) && (permitidorNPB != true)) {
 
      //  console.log("adentro")
 
       if((nombre != "") && (nombrec != "") && (cantidad != "") && (precioc != "") && (proveedor != "") && (preciop != "") && (urlfoto != "")) {
 
        // setProds( prods = [
        //  ...prods,
        //  {id: id, nombre: nombre, nombrec: nombrec, cantidadd: cantidad, precioap: precioc, proveedor: proveedor, precioc: preciop, foto: urlfoto}
        // ])

        let response = await axios.put("http://localhost:3005/auth/UpdateProductById", {id: buscador, Nombre: nombre, NombreComercial: nombrec, Stock: cantidad, PrecioVentaPublico: precioc, Proveedor: proveedor, PrecioCompraProveedor: preciop, Foto: urlfoto})
        
        if(response) {
          if(response.data.ok != false) {
          setOcultadormpe(ocultadormpe = true)
          errorB.style.display="none"
          GetAllProductos()
          } else {
           errorA.style.display="block"
          }
        } else {
          errorA.style.display="block"
        }

       } else {
 
        errorB.style.display="block"
        errorA.style.display="none"
 
       }
 
    //  } else if (permitidorNPB = true) {
 
    //  //  console.log("afuera")
    //   errorA.style.display="block"  
    //   errorB.style.display="none"
    //   setOcultadormpe(ocultadormpe = false)
 
    //  }

  }

  useEffect(() => {

    let exitob = document.getElementById("exitob")
    let exitoD = document.getElementById("exitoD")
    let exitoC = document.getElementById("exitoC")

    if(ocultadormpe === true) {

      exitob.style.display = "none"
      exitoC.style.display = "none"
      exitoD.style.display = "block"
      setOcultadormpeb(ocultadormpeb = true)

    } 
    else {

      exitob.style.display = "inline"
      exitoD.style.display = "none"

    }

  }, [ocultadormpe])

  useEffect(() => {

    let seccionMPC = document.getElementById("seccionMPC")

   if (ocultadormpeb === true) {

    seccionMPC.style.display="block"

   } else {

    seccionMPC.style.display="none"

   }

  }, [ocultadormpeb])


  return (
    
    <div>
      
      <table className="tabla">

        <tr className='heads'>
          
          <th className="aceldas">ID</th>
          <th className="aceldas">Nombre</th>
          <th className="aceldas">Nombre Comercial</th>
          <th className="aceldas">Cantidad</th>
          <th className="aceldas">Precio comercial</th>
          <th className="aceldas">Proveedor</th>
          <th className="aceldas">Precio proveedor</th>
          <th className="aceldas">Foto</th>

        </tr>

        {prods.map(p => (
          <Prodsb 
            nid={p.id} 
            nnombre={p.Nombre} 
            nnombrec={p.NombreComercial} 
            ncantidad={p.Stock} 
            nprecioc={p.PrecioVentaPublico} 
            nproveedor={p.Proveedor} 
            npreciocc={p.PrecioCompraProveedor} 
            nimg={p.Foto} />
        ))}



        <tr id="create" className="create">

          <td className="creador">
            {/* <input type='text' placeholder='Ingrese el nombre del proveedor' value={NombreProveedor} onChange={(e) => setNompreProveedor(e.target.value)}></input> */}
            IdIsNowAutoCreated
            </td>
          <td className="creador"><input type='text' placeholder='Ingrese el nombre' value={nombre} onChange={(e) => setNombre(e.target.value)}></input></td>
          <td className="creador"><input type='text' placeholder='Ingrese el nombre comercial' value={nombrec} onChange={(e) => setNombrec(e.target.value)}></input></td>
          <td className="creador"><input type='number' placeholder='Ingrese la cantidad' value={cantidad} onChange={(e) => setCantidad(e.target.value)}></input></td>
          <td className="creador"><input type='number' placeholder='Ingrese el precio comercial' value={precioc} onChange={(e) => setPrecioc(e.target.value)}></input></td>
          <td className="creador"><input type='text' placeholder='Ingrese el proveedor' value={proveedor} onChange={(e) => setProveedor(e.target.value)}></input></td>
          <td className="creador"><input type='number' placeholder='Ingrese el precio de compra' value={preciop} onChange={(e) => setPreciop(e.target.value)}></input></td>
          <td className="creador"><input type='text' placeholder='Ingrese la url de la foto' value={urlfoto} onChange={(e) => setUrlfoto(e.target.value)}></input></td>

        </tr>

      </table>

      <div className="msgsrespuesta">

        <h className="error" id="errorA" >Ha ocurrido un error</h>
        <h className="error" id="errorB">Debe rellenar todas las casillas para agregar el producto</h>
        <h className="exito" id="exitoA">Producto agregado con exito</h>
        <h className="error" id="errorC">La id ingresada no corresponde a ningun producto, pruebe otra</h>
        <h className="exito" id="exitoB">El producto con id {eliminador} fue eliminado</h>
        <h className="exito semi" id="exitoC">Modifique los valores que desee del producto</h>
        <h className="exito" id="exitoD">El producto fue modificado con exito</h>

      </div>
                                        
      <div className="botonesb">

        <div className="botonesb1" id="seccionPRINCIPAL">    

        <button type='button' className="boton" onClick={clickera}>Nuevo producto</button>
        <button type='button' className="boton" onClick={clickerb}>Quitar producto</button>
        <button type='button' className="boton" onClick={clickerc}>Modificar producto</button>

        </div>

        <div id="seccionNPON">
        <button type='button' className="boton" id="exito" onClick={clickerd}>Agregar producto</button>
        <button type='button' className="boton" onClick={clickera}>Volver</button>
        </div>

        <div id="seccionQPON">
          <div id="eliminado">
            <label htmlFor='qpi' className="QPONLabel">Ingrese el id del producto que desea eliminar</label>  
            <input type='number' placeholder='Ejemplo: "10" (sin comillas)' id='qpi' className="QPONInput" value={eliminador} onChange={(e) => setEliminador(e.target.value)}></input>
            <button type='button' className="boton" onClick={clickere}>Eliminar producto</button>
         </div>
         <button type='button' className="boton" onClick={clickerb}>Volver</button>                    
        </div>
                                                                                                {/* pase los inputs de text a number, en caso de bug REVISAR ACA */}
        <div id="seccionMPA">
         <label htmlFor='bpi' className="BPONLabel">Ingrese el id del producto que desea modificar</label>  
         <input type='number' placeholder='Ejemplo: "10" (sin comillas)' id="bpi" className="BPONInput" value={buscador} onChange={(e) => setBuscador(e.target.value)}></input>
         <button type='button' className="boton" onClick={clickerf}>Buscar producto</button>
         <button type='button' className="boton" onClick={clickerc}>Volver</button>
        </div>

        <div id="seccionMPB" className="segundaM">
        <button type='button' className="boton" id="exitob" onClick={clickerg}>Finalizar modificacion</button>
        </div>
        <div id="seccionMPC" className="segundaM">
        <button type='button' className="boton" onClick={clickerc}>Volver</button>
        </div>

      </div>

      
    </div>

    )

}

export default Prods