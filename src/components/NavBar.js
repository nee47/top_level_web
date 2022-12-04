import { Link } from 'react-router-dom'
import { useAuth } from '../context/authContext';

export default function NavBar() {
  
  const {userState} = useAuth()
  const logged = userState != null;


  return (
    <>
      <nav className='navbar'>
        <div className='logo'>Top Level</div>
        {
            logged ?
            <div className='navbar-container'>
              <Link id='home' to='/'>Inicio</Link>
              <Link to='/app'>Jugar</Link>
              <Link to='/user'>Mi Usuario</Link>
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
