import { useEffect, useState } from 'react'
import './App.css'
import Registro from './componentes/Registro'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import Navbar from './componentes/Navbar'
import Prods from './componentes/Prods'
import Cata from './componentes/Cata'
import Provs from './componentes/Provs'
import Clients from './componentes/Clients'
import Orders from './componentes/Orders'
import Reports from './componentes/Reports'
import Footer from './componentes/Footers'
import {auth} from "./Config_Firebase/firebase"

function App() {
  
  return (

    <div>
      
      <BrowserRouter>
        <Routes>
         <Route path="/" element={<Registro />}></Route>
         <Route path="/productos" element={<LogRequestedRoute><Navbar /><Prods /> <Footer /></LogRequestedRoute>}></Route>
         <Route path="/catalogo" element={[<Navbar />, <Cata />, <Footer />]}></Route>
         <Route path="/proveedores" element={<LogRequestedRoute><Navbar /> <Provs /> <Footer /></LogRequestedRoute>}></Route>   
         <Route path="/clientes" element={<LogRequestedRoute><Navbar /> <Clients /> <Footer /></LogRequestedRoute>}></Route>       
         <Route path="/pedidos" element={<LogRequestedRoute><Navbar /> <Orders /> <Footer /></LogRequestedRoute>}></Route>
         <Route path="/reportes" element={<LogRequestedRoute><Navbar /> <Reports /> <Footer /></LogRequestedRoute>}></Route>
        </Routes>
      </BrowserRouter>

    </div>
    
  )

  

}

const LogRequestedRoute = ({redirectPath = "/", children}) => {

 let Firebase_Token = localStorage.getItem("Token_Firebase")
 let Token = localStorage.getItem("Token")
 let user = JSON.parse(localStorage.getItem("user"))

 console.log(user)

 let navegar = useNavigate()

  useEffect(() => {

    if(Firebase_Token || Token ) {

      // auth.onAuthStateChanged((user) => {

      //   if(!user) {
      //    navegar(redirectPath)
      //   }

      // })

      if(user.role != "Admin") {

       navegar("/catalogo")

      }

    } else {

      navegar(redirectPath)

    }

    if(!Token) {

      localStorage.removeItem("Token_Firebase")
      localStorage.removeItem("user") 
      navegar(redirectPath)

    }

  }, [])

  return children

}

export default App
