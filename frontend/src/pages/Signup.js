import { useState } from "react"
import { useSignup } from "../hooks/useSignup"
import { useDarkMode } from "../context/DarkModeContext"

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {signup, error, isLoading} = useSignup()

  const {isDarkMode} = useDarkMode()

  const [seePwd,setSeePwd]  = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    await signup(email, password)
  }

  return (
    <form className={`signup ${isDarkMode ?'dark-mode':''}`} onSubmit={handleSubmit}>
      <h3>Sign Up</h3>
      
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

      <button disabled={isLoading}>Sign up</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default Signup