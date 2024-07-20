import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
import { useDarkMode } from '../context/DarkModeContext'

import DarkModeToggle from './DarkModeToggle'

const Navbar = () => {
  const {isDarkMode} = useDarkMode()

  const {Logout} = useLogout()
  const {user} = useAuthContext()

  const logoutHandler = () =>{
    Logout()
  }

  return (
    <header className={`${isDarkMode?'dark-mode':''}`}>
      <div className="container">
      <DarkModeToggle/>
        <Link to="/">
          <h1>Workout Buddy</h1>
        </Link>
        <nav>
          { user &&(
            <div>
              <span className={`mr1rem user-email ${isDarkMode ? 'dark-mode':''}`}>{user.email}</span>
              <button onClick={logoutHandler} >Logout</button>
            </div>
          )}

          {!user &&(
            <div>
              <Link to='/login'>Login</Link>
              <Link to='/signup'>Signup</Link>
            </div>
          )}
          
        </nav>
      </div>
    </header>
  )
}

export default Navbar