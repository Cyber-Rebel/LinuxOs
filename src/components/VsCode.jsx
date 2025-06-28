import React, { useEffect, useState } from 'react'
import useDragable from "../utils/useDragable";
import { IoRemoveCircleSharp } from "react-icons/io5";
import Editor from '@monaco-editor/react';
import axios from 'axios'
import { VscRunCoverage } from "react-icons/vsc";

const Vscode = ({setVsCode}) => {
    const [width,setwidth]= useState({w:30,h:40})    
    const [bool,setbool]= useState(true)
    const [code,setCode ]=useState('')
    const [output,setoutput] = useState('Wattings.....')
    const [err,seterr]=useState('')
  const { position, handleMouseUp, handleMouseDown } = useDragable();
const handle=()=>{  

setwidth({w:80,h:80}) 
setbool(!bool)
}
const rizemin=()=>{
setwidth({w:30,h:40}) 
setbool(!bool)
}
    console.log(code)
console.log(width.h)


const Runngi = async()=>{
  try{
    const responce = await axios.post('https://emkc.org/api/v2/piston/execute',{

  "language": "javascript",
  "version": "18.15.0",
  "files": [
    {
      "name": "main.js",
      "content": code,
    }
  ]
})
const {stdout,stderr}= responce.data.run
// (datas.)
// setoutput(datas)
setoutput(stdout)
seterr(stderr)

  }catch(e){
    console.log('erro occuirin calling rungin',e) // try caltch fix error open api cath sllove instagram
  }



}


console.log(err)






  return (
   
  <div
    style={{
      position: 'absolute',
      top: `${position.y}px`,
      left: `${position.x}px`,
      width: `${width.w}%`,
      height: `${width.h}%`,
    }}
    className="resize overflow-hidden z-10 text-white font-mono rounded-lg shadow-xl border border-gray-700"
  >
    <div className="bg-[#1E1E1E] w-full h-full flex flex-col">
     
      <div className="flex items-center justify-between bg-[#2D2D2D] px-2 py-1">
        <div className="flex items-center gap-2">
          <div
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            className="w-6 h-6 bg-cyan-500 cursor-alias hover:scale-110 transition rounded-full"
          ></div> 
          <div
            onClick={bool ? handle : rizemin}
            className="w-6 h-6 bg-yellow-400 hover:scale-110 transition rounded-full"
          ></div>
          <div
            onClick={() => setVsCode(false)}
            className="text-red-500 hover:scale-110 transition"
          >
            <IoRemoveCircleSharp className="w-7  h-7" />
          </div>
        </div>
        <span className="text-xs text-gray-400">
          cyber-rebel@HP:~/LinuxOS
        </span>
      </div>

      
      <div className="flex w-full flex-1">
       
        <div className="w-1/2 flex flex-col bg-[#1E1E1E] border-r border-gray-700">
          <div className="flex justify-between items-center px-3 py-2 bg-[#252526] border-b border-gray-700">
            <h1 className="text-2xl font-semibold">Linus.js</h1>
            <button
              onClick={()=>Runngi()}
              className="bg-green-500 flex gap-1 items-center hover:bg-green-400 text-black px-6 py-2 text-sm font-bold rounded"
            >
              Run<VscRunCoverage className='font-bold text-xl' />
            </button>
          </div>
          <Editor
            
            value={code}
            onChange={(value) => setCode(value || '')}
            theme="vs-dark"
            className="flex-1"
            options={{ fontSize: 20, minimap: { enabled: false } }}
          />
        </div>

        <div className="w-[50%] ">
          <h2 className="text-2xl text-green-400  ">Output</h2>
          <p className=" p-4 rounded  h-full overflow-auto">
            <p className='text-green-400 text-2xl'>{output}</p> 
            <p className='text-red-500 text-2xl '>{err}</p> 
          </p>

          <p className=" p-4  text-green-300 h-full overflow-auto">
          </p>
        </div>
      </div>
    </div>
  </div>
);

  
};

export default Vscode;
