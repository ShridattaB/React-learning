// import React, { useCallback, useEffect, useState } from "react";
// import UseCallbackChild from "./UseCallbackChild";

// function UseCallback() {
//   const [productList, setProductList] = useState([]);
//   const [num1, setNum1] = useState(0);
//   const [num2, setNum2] = useState(0);

//   useEffect(() => {
//     const fetchData = async () => {
//       const res = await fetch("https://dummyjson.com/products");
//       const data = await res.json();

//       setProductList(data.products);
//     };

//     fetchData();
//   }, []);

//   // recreated only when num1 changes
//   const consoleData = useCallback(() => {
//     console.log(`useCallback function executed ${num1}` );
//   }, []);

//   return (
//     <div>
//       <h1>Use Callback</h1>

//       <UseCallbackChild consoleData={consoleData} />

//       <h2>Num1: {num1}</h2>
//       <button onClick={() => setNum1(num1 + 1)}>
//         Change Num1
//       </button>

//       <h2>Num2: {num2}</h2>
//       <button onClick={() => setNum2(num2 + 1)}>
//         Change Num2
//       </button>
//     </div>
//   );
// }


// export default UseCallback;



import React, { useCallback, useState } from 'react'

function UseCallback() {
    const[num1,setNum1]=useState(0)
    const handlCLick=useCallback(()=>{
        console.log("the value of num1 is ", num1)
    },[num1])
  return (
    <div>

<button onClick={(()=>setNum1(num1+1))}>increaseNum</button>
<button onClick={handlCLick}>checkLog</button>
<h1>{num1}</h1>

    </div>
  )
}

export default UseCallback