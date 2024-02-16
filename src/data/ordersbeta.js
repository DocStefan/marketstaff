import React from "react";
import productos from "./prods";

let ordersbeta = productos.map(prod => {
 
    let cantidad = 0
    let preciototal = 0
    
  return {
    id: prod.id, 
    nombre: prod.nombrec,
    cantidad: cantidad,
    precioindividual: prod.precioap,
    preciototal: preciototal,
    foto: prod.foto
  };
});

export default ordersbeta;