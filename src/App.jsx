import React, { useContext, useEffect, useState } from 'react'
import Headding from './components/Headding.jsx'
import LockScreen from './components/LockScreen.jsx'
import Hero from './components/Hero.jsx'
import { AuthContext } from './context/Authcontext.jsx'
const App = () => {
 // <motion.div animate={{ x: [null, 100, 0] }} />
   const {Authvaid,SetAuthvaid} = useContext(AuthContext)
  useEffect(()=>{
    if(!localStorage.getItem('password')){
    localStorage.setItem('password',12345678)
    //  localStorage.setItem('valid',false)
  }},[])

  console.log(Authvaid)
  return (
    <div>

{/* {Authvaid=='true'? <Desktop/>:<LockScreen/>} */}
<LockScreen/>
    </div>
  )
}

export default App;
// import React from "react";

// const RightClickExample = () => {
//   const handleRightClick = (e) => {
//   console.log(e)
//     e.preventDefault(); // Default context menu ko disable karta hai
//     alert("Right click detected!");
//   };

//   return (
//   <div>



//    grid grid-flow-col grid-rows-4 gap-4
//   </div>
//   );
// };

// export default RightClickExample;
