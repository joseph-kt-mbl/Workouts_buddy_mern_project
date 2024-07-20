import { useState } from "react"
import { useLogin } from "../hooks/useLogin"

import { useDarkMode } from "../context/DarkModeContext"


const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {login,IsLoading,error} = useLogin()

  const {isDarkMode} = useDarkMode()

  const [seePwd,setSeePwd]  = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    await login(email,password)
  }

  return (
    <form className={`login ${isDarkMode ? 'dark-mode':''}`} onSubmit={handleSubmit}>
      <h3>Log In</h3>
      
      <label>Email address:</label>
      <input 
        type="email" 
        onChange={(e) => setEmail(e.target.value)} 
        value={email} 
        className={isDarkMode?'dark-mode':''}

      />
      <label>Password:</label>
      <div className="pwd-container">
        <input 
          type={!seePwd? 'text':'password'} 
          onChange={(e) => setPassword(e.target.value)} 
          value={password} 
          className={isDarkMode?'dark-mode':''}
        />
        <i className={`fa-regular fa-eye${seePwd ?'':'-slash'}`} onClick={() => setSeePwd(!seePwd)}></i>
      </div>

      <button disabled = {IsLoading}>Log in</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default Login