import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  
  const [currentTab, setCurrentTab] = useState(1);

  const toggleTab = (index)=>{
    setCurrentTab(index);
  }

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link className={currentTab === 1 ? "selected-tab" : ""} onClick={()=>{toggleTab(1)}} id='home' to='/Home'>Inicio</Link>
          <Link className={currentTab === 2 ? "selected-tab" : ""} onClick={()=>{toggleTab(2)}} to='/About'>Acerca</Link>
          <Link className={currentTab === 3 ? "selected-tab" : ""} onClick={()=>{toggleTab(3)}} to='/MyUser'>Mi Usuario</Link>
        </div>
      </nav>
    </>
  )
}
