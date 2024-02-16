import React from 'react'

function Catab(props) {


  return (
   
    <div className="caja">
      
      <img className="fotoprod" src={props.urlimg}></img>

      <h className="nombreprod">{props.nombreprod}</h>

      <h className="precioprod">${props.precioprod}</h>
    
    </div>
   
  )


}

export default Catab