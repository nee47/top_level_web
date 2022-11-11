import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

function Hndler(){
  useEffect(()=>{
    console.log("probando al inicio")
    const tabHome = document.getElementById("home")
    console.log(tabHome)
    const tabs = document.querySelector(".navbar-container").children
    console.log(tabs)
  }, [])
}

export default function NavBar() {
  
  
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link onClick={Hndler} id='home' to='/Home'>Inicio</Link>
          <Link to='/About'>Acerca</Link>
          <Link to='/MyUser'>Mi Usuario</Link>
        </div>
      </nav>
    </>
  )
}
