import React from 'react'
import productos from '../data/prods'

function Prodsb(props) {
  return (
    <tr>
      <td className="celdas">{props.nid}</td>
      <td className="celdas">{props.nnombre}</td>
      <td className="celdas">{props.nnombrec}</td>
      <td className="celdas">{props.ncantidad}u</td>
      <td className="celdas">${props.nprecioc}</td>
      <td className="celdas">{props.nproveedor}</td>
      <td className="celdas">${props.npreciocc}</td>
      <td className="celdas"><img src={props.nimg}></img></td>
    </tr>
  )
}

export default Prodsb