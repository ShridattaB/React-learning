import { Route, Routes } from "react-router-dom"
import Login from "./Login/Login"
import UserDetails from "./Login/UserDetails"


function App() {


  return (
    <>
<Routes>
  <Route path='/' element={<Login/>}></Route>
  <Route  path='/userDetails' element={<UserDetails/>}></Route>
</Routes>
</>
  )
}

export default App
