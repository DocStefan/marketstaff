import React from "react";
import productos from "./prods";

let COMPRAS_PRODUCTOS = productos.map(prod => {

 let TOTAL_COMPRADO_PRODUCTO = Math.floor(Math.random() * 101)

 return {

 producto: prod.nombrec,
 cantidad_comprada: TOTAL_COMPRADO_PRODUCTO

 }

})

export default COMPRAS_PRODUCTOS