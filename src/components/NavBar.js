import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/authContext';

export default function NavBar() {
  
  const [currentTab, setCurrentTab] = useState(1);
  const {userState} = useAuth()
  const logged = userState != null;
  const toggleTab = (index)=>{
    setCurrentTab(index);
  }

  return (
    <>
      <nav className='navbar'>
        <div className='logo'>Top Level</div>
        {
            logged ?
            <div className='navbar-container'>
              <Link className={currentTab === 1 ? "selected-tab" : ""} onClick={()=>{toggleTab(1)}} id='home' to='/'>Inicio</Link>
              <Link className={currentTab === 2 ? "selected-tab" : ""} onClick={()=>{toggleTab(2)}} to='/app'>Jugar</Link>
              <Link className={currentTab === 3 ? "selected-tab" : ""} onClick={()=>{toggleTab(3)}} to='/user'>Mi Usuario</Link>
            </div>:
            <div className="navbar__buttons">
              <Link className="navbar__button" to='/'></Link>
              <Link className="navbar__button" to='/Login'>Acceder</Link>
              <Link className="navbar__button" to='/Register'>Registrarse</Link>
            </div>
        }
        
      </nav>
    </>
  )
}
