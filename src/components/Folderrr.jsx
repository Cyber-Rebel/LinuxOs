import React, { useState } from 'react'
import useDragable from "../utils/useDragable";
import { IoRemoveCircleSharp } from "react-icons/io5";
import { Folder, FolderOpen } from "lucide-react";

const Folderr = ({setopenFolder,Folderss}) => {
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

const folders = [
  "New Folder",
];

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
           
                        <div onClick={()=>setopenFolder(false)} className="  text-red-600 "><IoRemoveCircleSharp className='w-6 h-6' /></div>

          </div>
          <span className="text-xs text-gray-400 pr-2">
            codebreaker@Acer-Predator-Helios:~/Desktop/LinuxOS
          </span>
        </div>
        </div>
            <div className='  w-full h-full'>

    <div className="bg-[#1E1E1E] text-white min-h-screen p-4 font-mono">
      
     
      <div className="bg-[#2E2E2E] text-sm text-gray-300 p-2 px-4 rounded mb-4 flex items-center gap-2">
        <span>🏠</span>
        <span>Home</span>
      </div>


     {Folderss.length < 0 ? (
  <div className="text-gray-400 text-sm">No folders found.</div>
) : (
  <div className="grid grid-cols-6 gap-4">
    {Folderss.map((folder, index) => (
      <div key={index} className="flex flex-col items-center text-xs">
        <div className="w-12 h-12 bg-gradient-to-b from-purple-500 to-gray-600 rounded-md shadow-inner flex items-center justify-center">
          <Folder className="w-6 h-6 text-white" />
        </div>
        <span className="mt-2 text-center break-words">{folder.Foldername}</span>
      </div>
    ))}
  </div>
)}

    </div>



                
            </div>
      </div>
    </div>
  );
};

export default Folderr;
//               <iframe
//   width="560"
//   height="315"
//   src="https://www.youtube.com/embed/dQw4w9WgXcQ"
//   title="YouTube video player"
//   frameBorder="0"
//   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//   allowFullScreen
// ></iframe>
