import React from 'react'

function Child({addToCart}) {
  return (
    <div>
        <button onClick={()=> addToCart(100)}>Add 100rs</button>
         <button onClick={()=> addToCart(100)}>Add 200rs</button>
    </div>
  )
}

export default Child