import React, { useEffect, useState } from 'react'
import ChildUseEffect from './ChildUseEffect';

function UseEffeec() {
    const[data,setData]=useState([])
    const handleClick=()=>{
    console.log("clicked");
}

useEffect(()=>{
    const url='https://dummyjson.com/products'
    const fetcData=async()=>{
        const res= await fetch(url)
        const data= await res.json()
        console.log(data);
        
        setData(data.products)
    
    }
    fetcData()
},[])



  return (
    <>
    <div>UseEffeec</div>
    <button onClick={handleClick}>Learning use Effect</button>

    <div style={{
        display:'flex',
        gap:'10px',
        flexWrap:'wrap'
    }}>

    {data.map((ele)=>

    <>
        <div style={{
            display:'flex'

        }}>
            <h1>{ele.id}</h1>
            <h1>{ele.title}</h1>
        </div>
    </>

    )}

    </div>
    </>
  )
}

export default UseEffeec