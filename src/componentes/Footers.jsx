import React from 'react'
import "../estilocomponentes/estilofooter.css"

function Footer() {

  return (
    <footer>

  <div className="containerfooter">

   <div className="info">
      <h3>Contacto</h3>
      <p>Email: MStaff@gmail.com</p>
      <p>Teléfono: +5491112345678</p>
    </div>
    <div className="info">
      <h3>Dirección</h3>
      <p>Calle Principal 123</p>
      <p>C.A.B.A., Argentina, 1234</p>
    </div>
    <div className="info">
      <h3>Sobre Nosotros</h3>
      <p>Somos una empresa gestora de mercados</p>
    </div>
    <div className="info">
      <h3>Redes Sociales</h3>
      <p>Síguenos en:</p>
      <ul>
        <li>Facebook</li>
        <li>Twitter</li>
        <li>Instagram</li>
      </ul>
    </div>
  
     </div>

    </footer>
  )
}

export default Footer