import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  
  const [currentTab, setCurrentTab] = useState(1);
  const logged = false;
  const toggleTab = (index)=>{
    setCurrentTab(index);
  }

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link className={currentTab === 1 ? "selected-tab" : ""} onClick={()=>{toggleTab(1)}} id='home' to='/'>Inicio</Link>
          <Link className={currentTab === 2 ? "selected-tab" : ""} onClick={()=>{toggleTab(2)}} to='/'>Acerca</Link>
          <Link className={currentTab === 3 ? "selected-tab" : ""} onClick={()=>{toggleTab(3)}} to='/'>Mi Usuario</Link>
        </div>
        
        {
            logged ? console.log("YA ESTA LOGGEADO") :
            <div className="navbar__buttons">
              <Link className="navbar__button" to='/Login'>Acceder</Link>
              <Link className="navbar__button" to='/Register'>Registrarse</Link>
            </div>
        }
        
      </nav>
    </>
  )
}
