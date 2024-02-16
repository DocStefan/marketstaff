import React from "react";
import productos from "./prods";

let VENTAS_PRODUCTOS = productos.map(prod => {

 let TOTAL_VENDIDO_PRODUCTO = Math.floor(Math.random() * 201)

 return {

  producto: prod.nombrec,
  cantidadvendida: TOTAL_VENDIDO_PRODUCTO

 }

})

export default VENTAS_PRODUCTOS