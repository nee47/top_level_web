import React, { useState } from 'react'
import {useAuth} from '../context/authContext'
import { useNavigate } from 'react-router-dom';

function Register() {
    
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    
    const [resultPopup, setResultPopup] = useState("sign-result");

    const handleInput = ({target: {name, value}})=>{
        setUser({...user, [name]: value}); 
    }

    const {register} = useAuth();
    
    const navigate = useNavigate();
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(user.password !== user.repassword){
          setResultPopup('sign-result show');
        }else{
          register(user.email, user.password);
          navigate('/');
        }
        console.log(user);
    }

  return (
    <div className='form-container'>
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
        <input type="password" required placeholder='**********' 
        onChange={handleInput}
        name='repassword' />
        <div className={resultPopup}>Las contraseñas no coinciden</div>
        <button>Aceptar</button>

      </form>
    </div>
  )
}

export default Register
