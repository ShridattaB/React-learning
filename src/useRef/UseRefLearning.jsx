import React, { useEffect, useRef } from 'react'

function UseRefLearning() {
      const usename=useRef()
    const Password=useRef('shree')
    const FocusOnCOntent=useRef()



  const handleSubmit=(e)=>{
    e.preventDefault()
    //   console.log(usename.current);
    //      console.log(Password.current.value);
  }


useEffect(()=>{
    console.log(Password.current);
    //  console.log(Password.current.value);
    
    
},[])
  
  return (
    <div>

<input placeholder='Enter your name' ref={FocusOnCOntent}/>
<button onClick={()=>FocusOnCOntent .current.focus()}>focus  </button>

<form onSubmit={handleSubmit}>
<input id='userName' placeholder='Enter the userName' ref={usename}/>
<br/>
<input id='password' placeholder='Enter the passWord'  />

<br/>
<button>Submit</button>
</form>
    </div>
    //reference value that not need to redaring
    //it will not rerendaring the project
    //we can aceess the value of its using Youref.current

   

     
  )
}

export default UseRefLearning