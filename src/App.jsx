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
    <div  >

{/* {Authvaid=='true'? <Desktop/>:<LockScreen/>} */}
<LockScreen/>
    </div>
  )
}

export default App;

