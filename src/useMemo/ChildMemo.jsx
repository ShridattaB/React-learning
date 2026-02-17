import React from 'react'

function ChildMemo() {
    console.log("this is child ")
  return (
    <div>ChildMemo</div>
  )
}

// const ChildMemo=React.memo(({value})=>{
//     console.log("this is child ")
//   return (
//     <>
//    <div>ChildMemo</div>
//    <h1> Value from parent{value}</h1>
//    </>
//  )
// })


export default React.memo(ChildMemo)