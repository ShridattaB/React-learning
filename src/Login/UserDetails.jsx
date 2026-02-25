import React, { useEffect } from 'react'

function UserDetails() {
    const url='https://dummyjson.com/auth/me'
    useEffect(()=>{
    const fetchUserDetails=async()=>{
        const res= await fetch(url,{
            method: 'GET',
  headers: {
    'Authorization': 'Bearer /* YOUR_ACCESS_TOKEN_HERE */', 
  }, 
  credentials: 'include' 
        })
        const data = await res.json()


    }
    fetchUserDetails()

    },[])
  return (
    <div>UserDetails</div>
  )
}

export default UserDetails