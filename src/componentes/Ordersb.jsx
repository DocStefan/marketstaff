import React from 'react'
import { useState, useEffect } from 'react'
import "../estilocomponentes/estiloorders.css"
import clientes from '../data/clients'
import pedidos from '../data/orders'


function Ordersb(props) {

  return (

    <div className="cajapedido">

      
        
     <img className="fotopedido" src={props.foto}></img>

     <h className="tituloclientepedido">{props.cliente}</h>

      <div className="fechaspedidos">

        <h>Fecha de carga: {props.carga}</h>

        <h>Fecha de entrega: {props.entrega}</h>

        <h>ID: {props.id}</h>

      </div>

     <h className="preciototalpedido">Precio final: ${props.preciototal}</h>

     {props.botone}

     {props.botonvp}
     
     {props.lista}

     {props.cont}

    </div>

  )
}

export default Ordersb