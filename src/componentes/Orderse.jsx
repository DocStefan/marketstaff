import React from 'react'

function Orderse(props) {
  return (


    <div className="cajaproductosdisponibles cajaproductosdisponiblesb">

     <img className="imgpd" src={props.foto}></img>

      <div className="textopd textopdb">

       <h className="nombrepd nombrepdb">{props.nombre}</h>

       <h className="cantidadpd">Cantidad pedida: {props.cantidad}</h>

       <h className="preciopd">Precio por unidad: ${props.precio}</h>

       <h className="preciopd">Precio total producto: ${props.preciot} </h>

      </div>


    </div>
  )
}

export default Orderse