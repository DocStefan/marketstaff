import React from 'react'

function Ordersd(props) {
  return (


    <div className="cajaproductosdisponibles">

     <img className="imgpd" src={props.foto}></img>

      <div className="textopd">

       <h className="nombrepd">{props.nombre}</h>

       <h className="cantidadpd">Cantidad disponible: {props.cantidad}</h>

       <h className="preciopd">Precio por unidad: ${props.precio}</h>

      </div>

      <div className="botonespd">

       {props.sacarpd}

       {props.agregarpd}

      </div>

    </div>
  )
}

export default Ordersd