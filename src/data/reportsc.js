import React from "react";
import clientes from "./clients";

let VENTAS_CLIENTES = clientes.map(client => {

 let NUMERO_TOTAL_VENTAS =  Math.random() * 1001 

 return {

  cliente: client.nombre,
  total_ventas: NUMERO_TOTAL_VENTAS

 }

})

export default VENTAS_CLIENTES