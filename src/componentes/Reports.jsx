import React from 'react'
import "../estilocomponentes/estiloreports.css"
import { useState, useEffect } from 'react'
import VENTAS_FECHA from '../data/reportsa'
import VENTAS_CLIENTES from '../data/reportsc'
import VENTAS_PRODUCTOS from '../data/reportsb'
import COMPRAS_PRODUCTOS from '../data/reportse'
import COMPRAS_PROVEEDORES from '../data/reportsd'
import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2'
import { Line } from 'react-chartjs-2'



function Reports() {

  let MESES = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre" ]

  let [ocultadorA, setOcultadorA] = useState(true)
  let [ocultadorB, setOcultadorB] = useState(false)
  let [ocultadorC, setOcultadorC] = useState(false)
  let [ocultadorD, setOcultadorD] = useState(false)
  let [ocultadorE, setOcultadorE] = useState(false)
  let [ocultadorF, setOcultadorF] = useState(false)
  let [ocultadorG, setOcultadorG] = useState(false)
  let [ocultadorH, setOcultadorH] = useState(false)

  let [datapv, setDatapv] = useState([])

  const dataPPM = {
    labels: MESES,
    datasets: [
        {
          data: datapv,
          backgroundColor: [
            'rgba(173, 216, 230)',
          ],
          borderColor: ['blue'],
          borderWidth: 1,
        }
    ]
  }

  const dataIPC = {
    labels: VENTAS_CLIENTES.map(VF => VF.cliente),
    datasets: [
        {
          data: VENTAS_CLIENTES.map(VF => VF.total_ventas),
          backgroundColor: [
            'rgba(173, 216, 230)',
          ],
          borderWidth: 1,
        }
    ]
  }

  const dataUV = {
    labels: VENTAS_PRODUCTOS.map(VP => VP.producto),
    datasets: [
        {
          data: VENTAS_PRODUCTOS.map(VP => VP.cantidadvendida),
          backgroundColor: [
            'rgba(173, 216, 230)',
          ],
          borderWidth: 1,
        }
    ]
  }

  const dataGP = {
    labels: COMPRAS_PROVEEDORES.map(CP => CP.proveedor),
    datasets: [
        {
          data: COMPRAS_PROVEEDORES.map(CP => CP.cantidad_comprada),
          backgroundColor: [
            'rgba(173, 216, 230)',
          ],
          borderWidth: 1,
        }
    ]
  }

  const dataPC = {
    labels: COMPRAS_PRODUCTOS.map(CPO => CPO.producto),
    datasets: [
        {
          data: COMPRAS_PRODUCTOS.map(CPO => CPO.cantidad_comprada),
          backgroundColor: [
            'rgba(173, 216, 230)',
          ],
          borderWidth: 1,
        }
    ]
  }


  let clickera = () => {

    setOcultadorA(ocultadorA = false)
    setOcultadorB(ocultadorB = true)

  }

  let clickerb = () => {

    setOcultadorA(ocultadorA = false)
    setOcultadorC(ocultadorB = true)

  }

  let clickerc = () => {

   setOcultadorB(ocultadorB = false)
   setOcultadorD(ocultadorD = true)

  }

  let clickerd = () => {

   setOcultadorE(ocultadorE = true)
   setOcultadorB(ocultadorB = false)

  }

  let clickere = () => {

   setOcultadorF(ocultadorF = true)
   setOcultadorB(ocultadorB = false)

  }

  let clickerf = () => {

   setOcultadorA(ocultadorA = true)
   setOcultadorB(ocultadorB = false)
   setOcultadorC(ocultadorC = false)

  }

  let clickerg = () => {

   setOcultadorG(ocultadorG = true)
   setOcultadorC(ocultadorC = false)

  }

  let clickerh = () => {

   setOcultadorH(ocultadorH = true)
   setOcultadorC(ocultadorC = false)

  }

  let clickeri = () => {

   setOcultadorD(ocultadorD = false)
   setOcultadorB(ocultadorB = true)

  }

  let clickerl = () => {

    setOcultadorE(ocultadorE = false)
    setOcultadorB(ocultadorB = true)

  }

  let clickerj = () => {

    setOcultadorF(ocultadorF = false)
    setOcultadorB(ocultadorB = true)

  }

  let clickerk = () => {

    setOcultadorG(ocultadorG = false)
    setOcultadorC(ocultadorC = true)

  }

  let clickerr = () => {

    setOcultadorH(ocultadorH = false)
    setOcultadorC(ocultadorC = true)

  }

  let clickerPPM = () => {

   let idb = event.target.id
   VENTAS_FECHA.map(VF => { if(idb === VF.producto){
   setDatapv(datapv = VF.cantidad_vendida)
   }})
  }

  return (
    
    <div className="contenedor_reportes">

{ocultadorA &&  <div className="primera_seccion_botones">

        <button type="button" className="boton" onClick={clickera}>Ventas</button>

        <button type="button" className="boton" onClick={clickerb}>Compras</button>

      </div>}

{ocultadorB &&  <div className="segunda_seccion_botones">

        <button type="button" className="boton" onClick={clickerc}>Productos por mes</button>

        <button type="button" className="boton" onClick={clickerd}>Ingresos por cliente</button>

        <button type="button" className="boton" onClick={clickere}>Unidades vendidas</button>

        <button type="button" className="boton" onClick={clickerf}>Volver</button>

      </div>}

{ocultadorC &&  <div className="tercera_seccion_botones">

        <button type="button" className="boton" onClick={clickerg}>Gastos por proveedor</button>

        <button type="button" className="boton" onClick={clickerh}>Productos comprados</button>

        <button type="button" className="boton" onClick={clickerf}>Volver</button>

      </div>}

{ocultadorD &&  <div className="seccionPPM">

        <div className="topPPM">
        <button type="button" className="boton" onClick={clickeri}>Volver</button>
        </div>

        <div className="izqPPM">
         {VENTAS_FECHA.map(VF => {return(<button className="boton botonreportesPPM" type="button" onClick={clickerPPM} id={VF.producto}>{VF.producto}</button>)})}
        </div>
        <div className="derPPM">
        <Line
        data={dataPPM}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Cantidad vendida cada mes"
            },
            legend: {
              display: false
            }
          }
        }}
       />
        </div>

      </div>}

{ocultadorE &&  <div className="seccionIPC">

        <button type="button" className="boton" onClick={clickerl}>Volver</button>

       <Bar
        data={dataIPC}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Ingresos por cliente ($)"
            },
            legend: {
              display: false
            }
          }
        }}
       />

      </div>}

{ocultadorF &&  <div className="seccionUV">

        <button type="button" className="boton" onClick={clickerj}>Volver</button>

       <Bar
        data={dataUV}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Unidades vendidas por producto"
            },
            legend: {
              display: false
            }
          }
        }}
       />

      </div>}

{ocultadorG &&  <div className="seccionGP">

        <button type="button" className="boton" onClick={clickerk}>Volver</button>

       <Bar
        data={dataGP}
        options={{
        plugins: {
        title: {
        display: true,
        text: "Gastos por proveedor ($)"
        },
       legend: {
       display: false
        }
       }
       }}
       />

      </div>}

{ocultadorH &&  <div className="seccionPC">

         <button type="button" className="boton" onClick={clickerr}>Volver</button>

        <Bar
        data={dataPC}
        options={{
        plugins: {
        title: {
        display: true,
        text: "Productos comprados"
        },
        legend: {
        display: false
        }
        }
        }}
        />

      </div>}



    </div>

  )
}

export default Reports