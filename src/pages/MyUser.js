import React from 'react'
import { useAuth } from '../context/authContext'
import { useNavigate } from 'react-router-dom';

function MyUser() {

  const navigate = useNavigate();
  const {logout, userState} = useAuth();

  const handleLogOut = ()=>{
    try {
      logout();
    } catch (error) {
      console.log(error);
    }
    navigate("/");
  }

  return (
    <div className='userinfo-container'>
      <div className='emailinfo'>EMAIL: {userState.email}</div>
      <div>
        <div>NICKNAME: </div>
      </div>
      <div className='logoutbutton' onClick={handleLogOut}>LOGOUT</div>
    </div>
  )
}

export default MyUser
