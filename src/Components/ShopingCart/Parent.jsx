import React, { useState } from 'react'
import Child from './Child'

function Parent() {
    const[totalPrice,setTotalPrice]=useState(0)

    const addTocart=(price)=>{
        setTotalPrice(price+totalPrice)
    }
  return (
    <div>
    <Child addToCart={addTocart}/>
    </div>
  )
}

export default Parent