import React from "react";
import proveedores from "./provs";

let COMPRAS_PROVEEDORES = proveedores.map(prov => {

 let TOTAL_COMPRADO_PROVEEDOR = Math.random() * 3001

 return {

  proveedor: prov.nombre,
  cantidad_comprada: TOTAL_COMPRADO_PROVEEDOR

 }

})

export default COMPRAS_PROVEEDORES