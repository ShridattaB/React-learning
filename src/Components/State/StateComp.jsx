import React, { useState } from 'react'

function StateComp() {
    const[toggle,setToggle]=useState('show')
    const[inputType,setInputType]=useState('text')


    const handleClick=()=>{
        if(toggle=="show"){
            setToggle("hide")
            setInputType("text")
        }
        else{
            setToggle("show")
            setInputType("password")
        }



    }
  return (
    <div>
        <input   type={inputType}/>
        <button onClick={()=>{handleClick()}}>{toggle}</button>
    </div>
  )
}

export default StateComp


// import React, { useState } from 'react'

// function StateComp() {
//   const [isVisible, setIsVisible] = useState(false)

//   const handleClick = () => {
//     setIsVisible(!isVisible)
//   }

//   return (
//     <div>
//       <input type={isVisible ? "text" : "password"} />
//       <button onClick={handleClick}>
//         {isVisible ? "Hide" : "Show"}
//       </button>
//     </div>
//   )
// }

// export default StateComp
