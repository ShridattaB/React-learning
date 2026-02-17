import React, { useEffect, useMemo, useState } from 'react'
import ChildMemo from './ChildMemo'

function ParentMemo() {
    const[value,setValue]=useState(0)
    const[productList,setProductList]=useState([])

    let url="https://dummyjson.com/products"

useEffect(()=>{
      async function fetchData (){
        const res= await fetch(url)
        const data= await res.json()
        setProductList(data.products)
        console.log(data.products)    
    }
   fetchData ()

  },[])

  const filterdata=useMemo(()=>{
   return      productList.filter((ele)=>ele.weight=="7")

  },[productList])
   
    


  return (
    <div>
    
    <h1>{value}</h1>
    <button onClick={()=>setValue(value+1)}>Increment</button>

    {filterdata.map((ele)=>(
        <>
<h1>{ele.id}</h1>
<p>{ele.weight}</p>
</>

    ))}

    <ChildMemo />
    </div>
  )
}

export default ParentMemo