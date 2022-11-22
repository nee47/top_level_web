import React from 'react'
import {useAuth} from '../context/authContext'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

function Login() {

  const [user, setUser] = useState({
      email: "",
      password: "",
  });

  const handleInput = ({target: {name, value}})=>{
      setUser({...user, [name]: value}); 
  }

  const {login} = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e)=>{
      e.preventDefault();
      console.log(`email> ${user.email} pw: ${user.password}`);
      
      try{
        await login(user.email, user.password);
          navigate('/'); 
      } catch (error){
        console.log(error);
      }
  }

  

  return (
    <div className='form-container login-bg'>
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
        <input type="password" 
          required 
          name='password' 
          placeholder='**********' 
          onChange={handleInput}/>

        <button>Aceptar</button>

      </form>
    </div>
  )
}

export default Login
