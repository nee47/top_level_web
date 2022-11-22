import React from 'react'
import { useAuth } from '../context/authContext'
import { useNavigate } from 'react-router-dom';

function MyUser() {

  const navigate = useNavigate();
  const {logout} = useAuth();

  const handleLogOut = ()=>{
    try {
      logout();
    } catch (error) {
      console.log(error);
    }
    navigate("/");
  }

  return (
    <div>
      <div className='logoutButton' onClick={handleLogOut}>LOGOUT</div>
    </div>
  )
}

export default MyUser
