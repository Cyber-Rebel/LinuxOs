import React, { useState } from 'react'
import useDragable from "../utils/useDragable";
import { IoRemoveCircleSharp } from "react-icons/io5";

const Terminal = ({setOpenSettings}) => {
    const [width,setwidth]= useState({w:30,h:40})    
    const [bool,setbool]= useState(true)
    const [SystemInfo,SetSystemInfo]=useState(false)
    const [Power,setPower] = useState(false)
    const [tab,settab]=useState("System")
  const { position, handleMouseUp, handleMouseDown } = useDragable();
const handle=()=>{

setwidth({w:80,h:80}) 
setbool(!bool)
}
const rizemin=()=>{
setwidth({w:30,h:40}) 
setbool(!bool)
}
    
console.log(width.h)

  return (
    <div
      style={{ position: 'absolute',top: `${position.y}px`, left: `${position.x}px`,width:`${width.w}%`,height:`${width.h}%` }}
      className={` resize overflow-auto  z-10  text-white font-mono`}
    >
      <div className="bg-[#1E1E1E] rounded-md flex flex-col overflow-hidden shadow-lg w-full h-full ">
        <div className='navsection'>
<div className="w-full flex items-center justify-between bg-[#2D2D2D] p-1">
          <div className="flex items-center gap-2  ">
             <div
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              className="w-5 h-5 bg-cyan-500 rounded-full relative"
            ></div>
            <div onClick={bool?handle:rizemin} className="w-5 h-5 bg-yellow-400 rounded-full"></div>
           
                        <div onClick={()=>setOpenSettings(false)} className="  text-red-600 "><IoRemoveCircleSharp className='w-6 h-6' /></div>

          </div>
          <span className="text-xs text-gray-400 pr-2">
            codebreaker@Acer-Predator-Helios:~/Desktop/LinuxOS
          </span>
        </div>
        </div>
            <div className='  w-full flex  h-full'>
                <div className="w-[30%] h-full bg-gray-800 text-white rounded shadow-md border border-gray-700 p-1 px-4 space-y-1 text-[120%]   font-normal">
            <div onClick={()=>settab("System")} className="hover:bg-gray-600 px-2 py-1 rounded cursor-pointer">
              System Info 
            </div>
             <hr className="border-gray-600 w-full" />
             <div onClick={()=>settab("Power")} className="hover:bg-gray-600 px-2 py-1 rounded cursor-pointer">
              Status
            </div>
             <hr className="border-gray-600" /> 
             <div onClick={() => settab("Background")}  className="hover:bg-gray-600 px-2 py-1 rounded cursor-pointer">
              Change Backgruoud
            </div>
 <hr className="border-gray-600 " />
                         <div   onClick={() => settab("Network")}  className="hover:bg-gray-600 px-1 py-1 rounded cursor-pointer">
              Network Info
            </div>
 <hr className="border-gray-600" />

   <div  onClick={() => settab("Battery")} className="hover:bg-gray-600 px-1 py-1 rounded cursor-pointer">
              Battery Status
            </div>
 <hr className="border-gray-600" />

           


            </div>

        <div className='w-full h-full p-10 bg-[#1E2939] text-sm space-y-4'>

  {tab === 'System' && (
    <div className="space-y-1">
      <div><b>Browser:</b> {navigator.userAgent}</div>
      <div><b>Language:</b> {navigator.language}</div>
      <div><b>Screen:</b> {`${window.screen.width}x${window.screen.height}`}</div>
      <div><b>RAM:</b> {navigator.deviceMemory} GB</div>
      <div><b>CPU Cores:</b> {navigator.hardwareConcurrency}</div>
    </div>
  )}

  {tab === 'Power' && (
    <div className="space-y-2">
      <div className="font-semibold">Online Status</div>
      {navigator.onLine ? (
        <div className='flex items-center gap-2'>
          <div className='bg-green-400 w-3 h-3 rounded-full'></div>
          <span>System Online - Network Connected</span>
        </div>
      ) : (
        <div className='flex items-center gap-2'>
          <div className='bg-red-500 w-3 h-3 rounded-full'></div>
          <span>System Offline - Network Disconnected</span>
        </div>
      )}
    </div>
  )}

  {tab === 'Background' && (
    <div>
      <b>Theme:</b> You can change background color by <i>Right Click → Change Background</i>
    </div>
  )}

  {tab === 'Network' && (
    <div className="space-y-1">
      <div><b>Connection Type:</b> {navigator.connection?.effectiveType}</div>
      <div><b>Downlink Speed:</b> {navigator.connection?.downlink} Mb/s</div>
      <div><b>RTT:</b> {navigator.connection?.rtt} ms</div>
    </div>
  )}

  {tab === 'Battery' && (
    <div>
      <b>Battery Status:</b> (Coming Soon... Need `navigator.getBattery()`)
    </div>
  )}

  {tab === 'Sound' && (
    <div>
      <b>Sound Info:</b> (Coming Soon... Mic/Audio analysis requires permissions)
    </div>
  )}

</div>

            </div>
            
            
            </div>
            </div>
  );
};

export default Terminal;
//               <iframe
//   width="560"
// {/* 
// {SystemInfo&&<div>hellow</div>}
// {Power&&<div>Helolllllllllll</div>} */}
//   height="315"
//   src="https://www.youtube.com/embed/dQw4w9WgXcQ"
//   title="YouTube video player"
//   frameBorder="0"
//   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//   allowFullScreen
// ></iframe>
