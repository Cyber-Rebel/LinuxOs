// import { createContext, useContext, useEffect, useState } from "react";
// import { MdNetworkWifi } from "react-icons/md";
// import { AiFillSound } from "react-icons/ai";
// import { MdOutlineBattery4Bar } from "react-icons/md";
// import { MdBattery80 } from "react-icons/md";
// import { MdOutlineSecurity } from "react-icons/md";
// import Button from "../utils/Button";
// import LookScreen from"../components/LookScreen.jsx"
// export const OnLookScreen = createContext(null) // pahele ek constext creation 

// const Uicontext=(props)=>{
//     const [LockScreen,setLockScreen] = useState()
//     const [date,setdate] = useState(Date()) 
//     const [Authvaid,SetAuthvaid]= useState(false)
//     const [openp,setopenp] = useState(false)
//  useEffect(()=>{
//     let interval = setInterval(()=>{

//         setdate(Date())
//         },1000)
// return ()=>clearInterval(interval) 
//  },[])
//     // let data = Date()

// let arr= date.split(' ')

// const handle=(e)=>{
//     console.log(e)
//     setLockScreen(true)
// }

//  return(
//      <OnLookScreen.Provider value={{Authvaid,SetAuthvaid}}>
//    {LockScreen?<LookScreen/>:<div  className="bg-[#1d1a1b]  w-full text-white absolute flex  p-1  justify-evenly" >
// <h1 className="flex-1 text-[20px]"><MdOutlineSecurity /></h1>
// <p className="flex-1 flex gap-3 " >
//       <b>{arr[1]}</b>
//     <b>{arr[2]}</b>
// <b>{arr[4]}</b> 
// </p>
// <div   onClick={()=>setopenp(!openp)}  className="flex justify-center hover:bg-[#433f40] rounded-4xl     px-2 items-center  gap-4"> 
// <div><MdNetworkWifi className="text-[20px]" /></div>    
// <div><AiFillSound  className="text-[20px]" /></div>
// <div><MdBattery80 className="text-[25px]" /></div>

//     </div>
 
//   { openp?  <div className="p-10 bg-gray-700 absolute rounded-2xl   right-[1%] mt-10">
//     <div  onClick={handle}>

//             <Button ></Button>
//     </div>

//     </div>:""}
//     </div>}
//         {props.children}
// </OnLookScreen.Provider> 
//  )}

//  export default Uicontext


// //  flex-1 ek CSS utility class hai jo commonly Tailwind CSS (ya general CSS Flexbox) ke context mein use hoti hai. Iska kaam flex container ke andar kisi element ko jitna possible ho utna available space occupy karne ke liye kehna hota hai.
import React from 'react'

const Uicontext = () => {
  return (
    <div>Uicontext</div>
  )
}

export default Uicontext