import React from 'react'
import { useState, useEffect } from 'react'
import "../estilocomponentes/estiloorders.css"
import clientes from '../data/clients'
import productos from '../data/prods'
import pedidos from '../data/orders'
import ordenes from '../data/ordersb'
import Ordersb from './Ordersb'
import ordersbeta from '../data/ordersbeta'
import Ordersc from './Ordersc'
import Ordersd from './Ordersd'
import Orderse from './Orderse'


function Orders() {

 let [peds, setPeds] = useState(pedidos)
 let [id, setId] = useState("")
 let [carga, setCarga] = useState("")
 let [entrega, setEntrega] = useState("")
 let [client, setClient] = useState("")
 let [nombre, setNombre] = useState("")
 let [foto, setFoto] = useState("")

 let [cantidad, setCantidad] = useState(1)

 let [ocultadorEP, setOcultadorEP] = useState(false)

 let [ocultadorCP, setOcultadorCP] = useState(false)
 let [permitidorNPA, setPermitidorNPA] = useState(false)
 let [permitidorNPB, setPermitidorNPB] = useState(false)
 let [permitidorNPC, setPermitidorNPC] = useState(false)          
 let [permitidorVP, setPermitidorVP] = useState(false)


 let clickera = () => {

  let idbotone = event.target.id

  setPeds(peds.filter(p => p.id !== idbotone))

 }

 let clickerb = () => {
  
  setOcultadorEP(!ocultadorEP)

 }

 useEffect(() => {

  let botonese = document.getElementById("container")

  if(ocultadorEP === true){

    for (let cont = 0; cont < peds.length; cont++) {
      
      botonese.getElementsByClassName("botoneliminarpedido")[cont].style.display="inline"

    }

  } else {

    for (let cont = 0; cont < peds.length; cont++) {
      
      botonese.getElementsByClassName("botoneliminarpedido")[cont].style.display="none"

    }
    
  }

 }, [ocultadorEP])

 let clickerc = () => {

  ordersbeta.map(ob => {

   if(ob.cantidad > 0) {

     ob.cantidad = 0

   }

  })

  console.log(ordersbeta)

  setOcultadorCP(!ocultadorCP)
  setId(id = "")
  setCarga(carga = "")
  setEntrega(entrega = "")

  let exitoA = document.getElementById(exitoA)
  exitoA.style.display="none"

 }

 let clickerd = () => {

  let errorA = document.getElementById("errorA") 
  let errorB = document.getElementById("errorB")
 

  permitidorNPA = false
  permitidorNPB = false


  peds.map(ped => { 

   for (let contador = 0; contador <= peds.length; contador++) {
     
     if ((id != ped.id) && (id != "") && (id > 0)) {

      errorA.style.display="none"
      setPermitidorNPA(permitidorNPA = true)
      break

     } else if ((id === ped.id) || (id === "") || (id <= 0)) {

      setPermitidorNPB(permitidorNPB = true)
      break

     } 

   } 

  })

   if ((permitidorNPA = true) && (permitidorNPB != true)) {


     if((carga != "") && (entrega != "") && (client != "")) {

      setPeds( peds = [
       ...peds,
       {id: id, carga: carga, entrega: entrega, nombre: nombre, foto: foto, preciot: ordersbeta
        .filter(ordprod => ordprod.cantidad > 0)
        .map(ordprod => {
          if (ordprod.cantidad > 0) {
            return {
              prodEid: ordprod.id,
              prodEnombre: ordprod.nombre,
              prodEcantidad: ordprod.cantidad,
              prodEprecioindividual: ordprod.precioindividual,
              prodEpreciototal: ordprod.preciototal,
              prodEfoto: ordprod.foto
            };
          }
        })
        .reduce((sum, ordprod) => sum + ordprod.prodEpreciototal, 0),
         productospedido: ordersbeta.filter(ordprod => ordprod.cantidad > 0)
        .map(ordprod => {if(ordprod.cantidad > 0){return{
        
        prodEid: ordprod.id,
        prodEnombre: ordprod.nombre,
        prodEcantidad: ordprod.cantidad,
        prodEprecioindividual: ordprod.precioindividual,
        prodEpreciototal: ordprod.preciototal,
        prodEfoto: ordprod.foto
        
       }}})}
      ])

      console.log(peds)

      let exitoA = document.getElementById("exitoA")
      let botonagregarpedido = document.getElementById("botonagregarpedido")
      exitoA.style.display="block"
      botonagregarpedido.style.display="none"

      errorB.style.display="none"

     } else {

      errorB.style.display="block"
      errorA.style.display="none"

     }

   } else if (permitidorNPB = true) {

    errorA.style.display="block"  
    errorB.style.display="none"

   }

 }


 let clickere = () => {

 setPermitidorNPC(!permitidorNPC)

 }

 let clickerf = () => {
  
  let idbotona = event.target.id

 productos.map(prod =>{

  if(idbotona === prod.id) {

    if(prod.cantidadd > 0) {

      prod.cantidadd = prod.cantidadd - 1 
      setCantidad(cantidad + 1)                     //si esta linea no estuviese el prod.cantidad - 1 no andaria (no tiene relacion pero afecta igualmente)
      // setProductosEL(productosEL = [...productosEL, {id: prod.id, nombre: prod.nombrec, cantidad: cantidad, precioindividual: prod.precioap, preciototal: prod.precioap * cantidad}])

     ordersbeta.map(pedb => {

      if(pedb.id === prod.id) {

        pedb.cantidad++
        pedb.preciototal = pedb.cantidad * pedb.precioindividual
        

      }

     })


    } else if (prod.cantidadd === 0) {

     console.log("no hay stock")

    }

  }

 })

 }

 let clickerg = () => {

 let idbotons = event.target.id

 productos.map(prod =>{

  if(idbotons === prod.id) {

    ordersbeta.map(pedb => {

     if(pedb.id === prod.id) {

      if(pedb.cantidad > 0) {

      prod.cantidadd = prod.cantidadd + 1 
      setCantidad(cantidad + 1)
      pedb.cantidad--
      pedb.preciototal = pedb.cantidad * pedb.precioindividual
    
      } else if (pedb.cantidad === 0) {

      console.log("no hay nada")

      }

     }

    })


  }

 })

 }

 let preciotb =    ordersbeta
  .filter(ordprod => ordprod.cantidad > 0)
  .map(ordprod => {
    if (ordprod.cantidad > 0) {
      return {
        prodEid: ordprod.id,
        prodEnombre: ordprod.nombre,
        prodEcantidad: ordprod.cantidad,
        prodEprecioindividual: ordprod.precioindividual,
        prodEpreciototal: ordprod.preciototal,
        prodEfoto: ordprod.foto
      };
    }
  })
  .reduce((sum, ordprod) => sum + ordprod.prodEpreciototal, 0)

 let clickerh = () => {

  setPermitidorVP(!permitidorVP)



 }

 let clickerz = () => {

  setOcultadorCP(ocultadorCP = false)

  let idbotonvp = event.target.id

  peds.forEach(ped => {

   if(idbotonvp === ped.id){

     let seccion = document.getElementById(ped.nombre)

     seccion.style.display="flex"

   }

  })
  
 }

 let clickerzb = () => {

  setOcultadorCP(ocultadorCP = false)

  let idbotonvp = event.target.id

  peds.forEach(ped => {

   if(idbotonvp === ped.id){

     let seccion = document.getElementById(ped.nombre)

     seccion.style.display="none"

   }

  })

 }
 

  return (

    <div>

      {ocultadorCP || ocultadorEP || <button type="button" className="boton botonprov" onClick={clickerc}>Crear pedido</button>}
      {ocultadorCP || ocultadorEP || <button type="button" className="boton botonprov" onClick={clickerb}>Eliminar pedido</button>}
      {ocultadorCP || ocultadorEP && <button type="button" className="boton botonprov botonfe" onClick={clickerb}>Finalizar eliminacion</button>}

      {ocultadorCP && <div className="seccionCP">

        <select className="selectclientes" id="clientes" onChange={(e) => [setClient(e.target.value), setNombre(e.target.options[e.target.selectedIndex].text), setFoto(e.target.options[e.target.selectedIndex].getAttribute('name'))]}  >

         <option defaultValue hidden>Seleccione el cliente</option>

          {clientes.map(client => <Ordersc options={<option  value={client.id} name={client.foto}>{client.nombre}</option>}/>)}

        </select>

       <input type="text" className="Inputcrearpedido" value={carga} placeholder="Ingrese la fecha de carga" onChange={(e) => setCarga(e.target.value)} onBlur={(e) => e.target.type = "text"} onFocus={(e) => e.target.type = "date" } ></input>

       <input type="text" className="Inputcrearpedido" value={entrega} placeholder="Ingrese la fecha de entrega" onChange={(e) => setEntrega(e.target.value)} onFocus={(e) => e.target.type = 'date'} onBlur={(e) => e.target.type = 'text'}></input>

       <input type="number" placeholder="Ingrese un ID para el pedido" className="Inputcrearpedido" value={id} onChange={(e) => setId(e.target.value)}></input>

       <h className="preciototalpedidob">PRECIO TOTAL: ${preciotb}</h>

       <div className="botonesverpedido">

       <button type="button" className="boton botonprov" onClick={clickere}>Ver productos</button> 

       <button type="button" className="boton botonprov" onClick={clickerh}>Ver pedido</button> 

       </div>

       <h id="errorA" className="error errorps">Debe ingresar una ID valida</h>
       <h id="errorB" className="error errorps">Debe rellenar todas las casillas</h>
       <h id="exitoA" className="exito exitops">Pedido generado con exito</h>

       <div className="botonescrearpedido">

       <button type="button" className="boton botonprov" id="botonagregarpedido" onClick={clickerd}>Agregar pedido</button> 

       <button type="button" className="boton botonprov" onClick={clickerc}>Volver</button>

       </div>

      </div>}

      {permitidorNPC && <div className="catalogodisponiblepedido">

      <button type="button" className="boton botonprov botoncerrarcatalogo" onClick={clickere}>Volver</button>

       {productos.map(prod => <Ordersd
        foto={prod.foto}
        nombre={prod.nombrec}
        cantidad={prod.cantidadd}
        precio={prod.precioap}
        sacarpd={<button className="boton botonsacarpd" id={prod.id} onClick={clickerg}>-</button>}
        agregarpd={<button className="boton botonagregarpd" id={prod.id} onClick={clickerf}>+</button>}
        
       />)}

      </div>}

      {permitidorVP && <div className="catalogodisponiblepedido">

        <button type="button" className="boton botonprov botoncerrarcatalogo" onClick={clickerh}>Volver</button>   

        {ordersbeta.map(pedbb => {
        if (pedbb.cantidad > 0) {
         return (
         <Orderse
          foto={pedbb.foto}
          nombre={pedbb.nombre}
          cantidad={pedbb.cantidad}
          precio={pedbb.precioindividual}
          preciot={pedbb.preciototal}
         />
         );
        }})}


      </div>}

      <div className="containerpedidos" id="container">
      {peds.map(ped => (
      <Ordersb
      id={ped.id}
      foto={ped.foto}
      cliente={ped.nombre}
      carga={ped.carga}
      entrega={ped.entrega}
      preciototal={ped.preciot}
      botone={<button className="boton botoneliminarpedido" id={ped.id} onClick={clickera}>X</button>}
      botonvp={<button className="boton botonverpedido" id={ped.id} onClick={clickerz}>Ver pedido</button>}
      />
        ))}
      </div>

      {peds.map(ped => (
      <div id={ped.nombre} className="catalogodisponiblepedido bis">
      <button type="button" className="boton botonprov botoncerrarcatalogo botonbis" id={ped.id} onClick={clickerzb}>Volver</button> 
        
       {ped.productospedido.map(pedpp => (
       <Orderse
        foto={pedpp.prodEfoto}
        nombre={pedpp.prodEnombre}
        cantidad={pedpp.prodEcantidad}
        precio={pedpp.prodEprecioindividual}
        preciot={pedpp.prodEpreciototal}
        />
       ))}
      </div>
      ))}

      
      
    </div>

  )
}

export default Orders