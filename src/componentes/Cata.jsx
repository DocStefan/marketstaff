import React from "react";
import { useState } from "react";
import { useEffect } from "react";
// import productos from "../data/prods";
import "../estilocomponentes/estilocata.css"
import Catab from "./Catab";
import axios from "axios";



function Cata() {

  let [productos, setProductos] = useState([])

    async function GetAllProductos () {

     try 
     {
       let response = await axios.get("https://marketstaffinicial-e5bf41af8855.herokuapp.com/auth/GetAllProductos", {})

       if(response) {
        setProductos(response.data)
       } else {
         throw new Error
       }

      } catch(error) {

        console.log(error)

      }

    }

    useEffect(() => {
      GetAllProductos()

      const intervalId = setInterval(GetAllProductos,  600000);

      return () => clearInterval(intervalId);

    }, [])


  return (
    <div className="contenedorflex">
    {productos.map(prod => (

     <Catab
     urlimg={prod.Foto}
     nombreprod={prod.Nombre}
     precioprod={prod.PrecioVentaPublico}
     />

    ))}

    </div>
    
  )

}

export default Cata