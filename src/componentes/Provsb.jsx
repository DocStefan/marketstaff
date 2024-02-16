import React from "react";



function Provsb(props) {


  return (

    <div className="cajaprov">
        
        <button type="button" id={props.idprov} className="boton botoneliminador">X</button>

        <img className="fotoprov" src={props.fotoprov}></img>

        <h className="idprov">ID: {props.idprov}</h>

        <h className="nombreprov">{props.nombreprov}</h>

        <h className="cuitprov">CUIT: {props.cuitprov}</h>

        <h className="contactoprov">Contacto: +54911 {props.numprov}</h>
    
    </div>

  )


}

export default Provsb