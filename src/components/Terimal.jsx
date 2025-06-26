import React, { useState } from 'react'
import useDragable from "../utils/useDragable";
import { IoRemoveCircleSharp } from "react-icons/io5";

const Terminal = ({openTerminal,setOpenTerminal}) => {
    const [width,setwidth]= useState({w:30,h:40})    
    
  const { position, handleMouseUp, handleMouseDown } = useDragable();
const handle=()=>{

setwidth({w:75,h:75}) 
}
const rizemin=()=>{
setwidth({w:30,h:40}) 

}
    
console.log(width.h)

  return (
    <div
      style={{ position: 'absolute',top: `${position.y}px`, left: `${position.x}px`,width:`${width.w}%`,height:`${width.h}%` }}
      className={` flex flex-col   text-white font-mono`}
    >
      <div className="bg-[#1E1E1E] rounded-md overflow-hidden shadow-lg flex flex-col h-full">
     
        <div className="w-full flex items-center justify-between bg-[#2D2D2D] p-1">
          <div className="flex items-center gap-2  ">
             <div
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              className="w-5 h-5 bg-cyan-500 rounded-full relative"
            ></div>
            <div onClick={handle} className="w-5 h-5 bg-yellow-400 rounded-full"></div>
            <div onClick={rizemin}  className="w-5 h-5 bg-green-500 rounded-full"></div>
                        <div onClick={()=>setOpenTerminal(false)} className="  text-red-600 "><IoRemoveCircleSharp className='w-6 h-6' /></div>

          </div>
          <span className="text-xs text-gray-400 pr-2">
            cyber-rebel@HP-EliteBook-840-G5:~/Desktop/LinuxOS
          </span>
        </div>

        <div className="flex-2 w-full bg-black p-2 text-green-400 overflow-y-auto">
          <p>$ Welcome to your custom Linux terminal</p>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
