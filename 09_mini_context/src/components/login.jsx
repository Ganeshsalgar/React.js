import { useState , useContext } from "react"
import React from 'react'
import UserContext from "../context/userContext"

function Login() {
    const [username, setusername] = useState("")
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault()

        setUser({username , password})
    }
    

  return (
   <div>
        <h2>Login</h2>
        <input type="text"
        value={username}
        onChange={(e) => setusername(e.target.value)}
        placeholder="UserName"

        />
        <br />
        <br />
        <input type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
         />
         <br /><br />
         <button type="submit"
         onClick={handleSubmit}>
            Submit
         </button>
   </div> 
  )
}

export default Login