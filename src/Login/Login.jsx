import React, { useState } from 'react'
import './Loginstyle.css'
import { useNavigate } from 'react-router-dom'
import { setToken } from '../Utils/Utils'


function Login() {
    const [userName,setUsername]=useState()
    const [userPass,setUserPass]=useState()
    const navigate=useNavigate()
  const handleSubmit=(e)=>{
    e.preventDefault()
  }
  const handleLogin=()=>{

    const url="https://dummyjson.com/auth/login"
    const fetchData=async()=>{
      const res= await fetch(url,{
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
    
    username: userName, //'emilys',
    password:  userPass,//'emilyspass',
    expiresInMins: 1, // optional, defaults to 60
  }),
  credentials: 'include'
      })
      const data = await res.json()
      console.log(data);
      setToken("accessToken", data.accessToken);
      setToken("refreshToken", data.refreshToken);

      
      navigate('/userDetails')
    }
    fetchData()

  }
  return (
    <div>

<form onSubmit={handleSubmit}>
    <div>
    <span>Enter the UserName: </span>
      <input  type='text' placeholder='Enter the userName' name='username' onChange={(e)=>setUsername(e.target.value)}/>
    </div>
    <br/>
    <div>
          <span>Enter the Password: </span>
      <input type='password' placeholder='Enter the password' name='password' onChange={((e)=>setUserPass(e.target.value))}/>
    </div>
    <div>
      <button type='submit' onClick={handleLogin}>Login</button>
    </div>
</form>
    </div>
  )
}

export default Login