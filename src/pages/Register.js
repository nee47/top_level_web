import React, { useState } from 'react'
import {useAuth} from '../context/authContext'

function Register() {
    
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    
    const handleInput = ({target: {name, value}})=>{
        setUser({...user, [name]: value}); 
    }

    const {register} = useAuth();
    const handleSubmit = (e)=>{
        e.preventDefault();
        register(user.email, user.password);
        console.log(user);
    }

  return (
    <div className='login-container'>
      <form className='form' onSubmit={handleSubmit}>
        <label className='form__title'>TOP LEVEL</label>

        <label >Email</label>
        <input 
            type="email" 
            required 
            name="email" 
            placeholder='youremail@example.com'
            onChange={handleInput}
        />

        <label htmlFor="">Contraseña</label>
        <input type="password" required name='password' placeholder='**********' onChange={handleInput}/>

        <label htmlFor="">Confirmar contraseña</label>
        <input type="password" required placeholder='**********' />
        <button>Aceptar</button>

      </form>
    </div>
  )
}

export default Register
