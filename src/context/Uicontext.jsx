import { createContext, useContext, useEffect, useState } from "react";
import { MdNetworkWifi } from "react-icons/md";
import { AiFillSound } from "react-icons/ai";
import { MdOutlineBattery4Bar } from "react-icons/md";
import { MdBattery80 } from "react-icons/md";
import { MdOutlineSecurity } from "react-icons/md";
import Button from "../utils/Button";
import LookScreen from"../components/LockScreen"
export const OnLookScreen = createContext(null) // pahele ek constext creation 

const Uicontext=(props)=>{
    const [LockScreen,setLockScreen] = useState()
    const [date,setdate] = useState(Date()) 
    const [Authvaid,SetAuthvaid]= useState(false)
    const [openp,setopenp] = useState(false)
    const [battary,setbattary] = useState({x:0})
    const [color,setColor] = useState('green')
    // let data = Date()
    const [set,setSet]= useState('')
    
    
    try{
        const resp=async()=>{
            const result = await  navigator.getBattery()
        }



    }catch(err){
        console.log(err)
    }

let arr= date.split(' ')

const handle=(e)=>{
    console.log(e)
    setLockScreen(true)
}
 useEffect(()=>{
    let interval = setInterval(async()=>{
        setdate(Date())
    const res= await navigator.getBattery()
    setSet((res.level)*100)
        },1000)
return ()=>clearInterval(interval) 
 },[])
 // if (set > 93) {
 //   setColor('red');
 // } else if (set > 60) {
 //   setColor('green');
 // } else if (set > 40) {
 //   setColor('white');
 // } else if (set > 20) {
 //   setColor('red');
 // }
 

 


 return(
     <OnLookScreen.Provider value={{Authvaid,SetAuthvaid}}>
   {LockScreen?<LookScreen/>:<div  className="bg-[#1d1a1b]  w-full text-white absolute flex  p-1  justify-evenly" >
<h1 className="flex-1 text-[20px]"><MdOutlineSecurity /></h1>
<p className="flex-1 flex gap-3 " >
      <b>{arr[1]}</b>
    <b>{arr[2]}</b>
<b>{arr[4]}</b> 
</p>
<div   onClick={()=>setopenp(!openp)}  className="flex justify-center hover:bg-[#433f40] rounded-4xl     px-2 items-center  gap-4"> 
<div><MdNetworkWifi className="text-[20px]" /></div>    
<div><AiFillSound  className="text-[20px]" /></div>
<div>
<div className="w-19 h-6 border border-white rounded-sm relative flex items-center px-1 bg-black">
  <div
    className="h-4 rounded-sm transition-all duration-300"
    style={{
      width: `${set}%`,
      backgroundColor: color,
    }}
  ></div>
  <div className="absolute right-[-4px] top-[6px] w-[4px] h-[10px] bg-white rounded-sm"></div>
  <span className="absolute text-xs left-1 text-white  ml-3 font-semibold">{Math.floor(set)}%</span>
</div>

</div>

    </div>
 
  { openp?  <div className="p-10 bg-gray-700 absolute rounded-2xl   right-[1%] mt-10">
    <div  onClick={handle}>

            <Button ></Button>
    </div>

    </div>:""}
    </div>}
        {props.children}
</OnLookScreen.Provider> 
 )}

 export default Uicontext;


