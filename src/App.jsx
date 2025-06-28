import React, { useContext, useEffect, useState } from 'react'
import Headding from './components/Headding.jsx'
import LockScreen from './components/LockScreen.jsx'
import Hero from './components/Hero.jsx'
import { AuthContext } from './context/Authcontext.jsx'
import LockScreena from './components/LookScreena.jsx'
const App = () => {
     const {Authvaid,SetAuthvaid} = useContext(AuthContext)
  useEffect(()=>{
    if(!localStorage.getItem('password')){
    localStorage.setItem('password',12345678)
    //  localStorage.setItem('valid',false)
  }},[])

  return (
    <div   >


<LockScreen/>
    </div>
  )
}

export default App;

