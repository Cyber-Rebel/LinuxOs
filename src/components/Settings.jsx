import React, { useState } from 'react'
import useDragable from "../utils/useDragable";
import { IoRemoveCircleSharp } from "react-icons/io5";

const Terminal = ({setOpenSettings}) => {
    const [width,setwidth]= useState({w:30,h:40})    
    const [bool,setbool]= useState(true)
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
            <div className='  w-full h-full'>
                <div className="w-full bg-gray-800 text-white rounded shadow-md border border-gray-700 p-1 px-4 space-y-1 text-[120%]   font-normal">
            <div  className="hover:bg-gray-600 px-2 py-1 rounded cursor-pointer">
              System Info
            </div>
             <hr className="border-gray-600 w-full" />
             <div  className="hover:bg-gray-600 px-2 py-1 rounded cursor-pointer">
              Power
            </div>
             <hr className="border-gray-600" /> 
             <div  className="hover:bg-gray-600 px-2 py-1 rounded cursor-pointer">
              Change Backgruoud
            </div>
 <hr className="border-gray-600 " />
                         <div  className="hover:bg-gray-600 px-1 py-1 rounded cursor-pointer">
              Network Info
            </div>
 <hr className="border-gray-600" />

   <div  className="hover:bg-gray-600 px-1 py-1 rounded cursor-pointer">
              Battery Status
            </div>
 <hr className="border-gray-600" />

            <div  className="hover:bg-gray-600 px-1 py-1 rounded cursor-pointer">
              Sounds Info
            </div>


            </div>
            </div>
            <hr />
            <div className='line bg-white p-[0.1%]'></div>
              <div  className='w-[100%] bg-gray-800 '></div>
            
            
            </div>
            </div>
  );
};

export default Terminal;
//               <iframe
//   width="560"
//   height="315"
//   src="https://www.youtube.com/embed/dQw4w9WgXcQ"
//   title="YouTube video player"
//   frameBorder="0"
//   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//   allowFullScreen
// ></iframe>
