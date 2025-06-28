import React, { useContext, useEffect, useState } from 'react'
import Headding from './components/Headding.jsx'
import LockScreen from './components/LockScreen.jsx'
import Hero from './components/Hero.jsx'
import { AuthContext } from './context/Authcontext.jsx'
import LockScreena from './components/LookScreena.jsx'

const App = () => {
  const { Authvaid, SetAuthvaid } = useContext(AuthContext)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    
    const checkScreen = () => { // un
      setIsMobile(window.innerWidth < 768)// un
    }

    checkScreen()
    window.addEventListener('resize', checkScreen) //un
    return () => window.removeEventListener('resize', checkScreen)//un
  }, [])

  useEffect(() => {
    if (!localStorage.getItem('password')) {
      localStorage.setItem('password', 12345678)
    }
  }, [])

  if (isMobile) {
    return (
      <div className="fixed inset-0 bg-black text-white flex items-center justify-center text-center p-5 z-50">
        <div>
          <h1 className="text-2xl font-bold">This app is not supported on mobile devices.</h1>
        </div>
      </div>
    )
  }

  return (
    <div>
      <LockScreen />
    </div>
  )
}

export default App;
