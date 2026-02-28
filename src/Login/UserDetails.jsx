import React, { useEffect, useState } from 'react'
import { getToken, setToken } from '../Utils/Utils'


function UserDetails() {
  const[userDetails,setUserDetails]=useState({})
  const accessToken = getToken("accessToken");
  const refreshToken=getToken("refreshToken")
    const url='https://dummyjson.com/auth/me'
    useEffect(()=>{
    const fetchUserDetails=async()=>{
        const res= await fetch(url,{
            method: 'GET',
  headers: {
    'Authorization':`Bearer ${accessToken}`,
  }, 
  credentials: 'include' 
        })
        const data = await res.json()
        console.log(data);
        setUserDetails(data)
        



    }
    fetchUserDetails()
    
    },[])

    const handleRefresh=()=>{
      
   let currentStatus=  userDetails.message=="Token Expired!"?CreateAccesstoken():"data is found"
   console.log(currentStatus);
   
    }

    const CreateAccesstoken=async ()=>{
      const res= await fetch('https://dummyjson.com/auth/refresh', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
            refreshToken: refreshToken, // Optional, if not provided, the server will use the cookie
            expiresInMins: 1, 
  }),
  credentials: 'include' // Include cookies (e.g., accessToken) in the request
})
      const data= await res.json()
         console.log(data);
         setToken("accessToken",data.accessToken)
    }
  return (
    <>

    <button onClick={handleRefresh}>Refresh The Tokens</button>
    <div>UserDetails</div>
    <h2>ID:- {userDetails.id}</h2>
    <h2>FirstName:- {userDetails.firstName}</h2>
    {/* <h1>{userDetails.id}</h1> */}
    </>
  )
}

export default UserDetails