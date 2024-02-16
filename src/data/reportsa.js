import React from "react";
import productos from "./prods";

let VENTAS_FECHA = productos.map(prod => {

 let VENTAS_MES = Array.from({ length: 12 }, () => Math.floor(Math.random() * 101));

 return {

  producto: prod.nombrec,
  cantidad_vendida: VENTAS_MES

 }

})

export default VENTAS_FECHA