import React, { useState,useEffect } from 'react';
import Folder from '../assets/folder4.png';
import Brave from '../assets/brave.png';
import App from '../assets/Ao.png';
import Vscode from '../assets/VScode.png';
import Terminal from '../assets/Termianl2.png';
import Settings from '../assets/Settings2.png';
import Help from '../assets/Help.png';
import useDragable from "../utils/useDragable";
import Terimal from '../components/Terimal.jsx'
import Braves from '../components/Brave.jsx'
const Bottom = (props) => {

console.log(props)
      const [openBrave, setOpenBrave] = useState(false);
      const [openApp, setOpenApp] = useState(false);
      const [openVSCode, setOpenVSCode] = useState(false);
      const [openTerminal, setOpenTerminal] = useState(false);
      const [openSettings, setOpenSettings] = useState(false);
      const [openHelp, setOpenHelp] = useState(false);
      const [openFolder,setopenFolder] = useState(false)
  const {position , handleMouseUp, handleMouseDown} = useDragable()

      const handleclick = (e) => {
        const { name } = e.target;
        if (name === 'brave') {
        setOpenBrave(true);
      } else if (name === 'App') {
        setOpenApp(true);
      } else if (name === 'VScode') {
        setOpenVSCode(true);
      } else if (name === 'Terminal') {
        setOpenTerminal(true);
      } else if (name === 'Settings') {
        setOpenSettings(true);
      } else if (name === 'Help') {
        setOpenHelp(true);
      }
    };


  return (
    <>
     <div    className="absolute overflow-hidden  bottom-0 top-[90%] left-[37%]">
            <div className="p-5 bg-black/60 backdrop-blur-md rounded-2xl flex gap-4">
           
          <img     name="File"  className="w-14 h-14 object-contain cursor-pointer hover:scale-110 transition-transform duration-200" onClick={()=>setopenFolder(true)} src={Folder}  alt="folder" />
          
          
              <img
                onClick={handleclick}
                name="brave"
                className="w-14 h-14 object-contain cursor-pointer hover:scale-110 transition-transform duration-200"
                src={Brave}
                alt=""
              />
              <img
                onClick={handleclick}
                name="App"
                className="w-14 h-14 object-contain cursor-pointer hover:scale-110 transition-transform duration-200"
                src={App}
                alt=""
              />
              <img
                onClick={handleclick}
                name="VScode"
                className="w-14 h-14 object-contain cursor-pointer hover:scale-110 transition-transform duration-200"
                src={Vscode}
                alt=""
              />
              <img
                onClick={handleclick}
                name="Terminal"
                className="w-14 h-14 object-contain cursor-pointer hover:scale-110 transition-transform duration-200"
                src={Terminal}
                alt=""
              />
              <img
                onClick={handleclick}
                name="Settings"
                className="w-14 h-14 object-contain cursor-pointer hover:scale-110 transition-transform duration-200"
                src={Settings}
                alt=""
              />
              <img
                onClick={handleclick}
                name="Help"
                className="w-14 h-14 object-contain cursor-pointer hover:scale-110 transition-transform duration-200"
                src={Help}
                alt=""
              />
            </div>
          </div>
    
          {openBrave && (
          <Braves openBrave={openBrave} setOpenBrave={setOpenBrave}  />
          )}
          {openApp && (
            <div style={{ position: 'absolute', top: '20%' }} className="w-[30%] h-[40%] bg-black text-white p-5">
              <button onClick={() => setOpenApp(false)}>Close App</button>
            </div>
          )}
          {openVSCode && (
            <div style={{ position: 'absolute', top: '30%' }} className="w-[30%] h-[40%] bg-red-200 p-5">
              <button onClick={() => setOpenVSCode(false)}>Close VSCode</button>
            </div>
          )}
          {openTerminal && (<Terimal openTerminal={openTerminal} setOpenTerminal={setOpenTerminal}/>)}
         
          {openSettings && (<div  onMouseDown={ handleMouseDown } onMouseOver={()=>handleMouseUp()}   style={{ position: 'absolute',top: `${position.y}px`, left:`${position.x}px`}} className="w-[30%] h-[40%] flex  cursor-n-resize resize overflow-auto  bg-pink-500  ">
              
            <div className='bg-gray-800 w-[40%] '>
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
              <button className='"hover:bg-gray-600 px-1 py-1 rounded cursor-pointer' onClick={() => setOpenSettings(false)}>Close Settings</button>
            </div>
            <hr />
            <div className='line bg-white p-[0.1%]'></div>
              <div  className='w-[100%] bg-gray-800 '></div>
            
            
            </div>
          )}
          {openHelp && (
            <div style={{ position: 'absolute', top: '60%' }} className="w-[30%] h-[40%] bg-slate-900 text-white p-5">
              <button onClick={() => setOpenHelp(false)}>Close Help</button>
            </div>
          )}
             {openFolder || props.open? (
            <div  style={{ position: 'absolute', top: '60%' }} className="w-[30%] h-[40%] bg-cyan-900 text-white p-5">
              <button  onClick={() => setopenFolder(false)|| props.setFolder(false)}>Close Folder</button>
            </div>
          ):``}
          </>
  )
}

export default Bottom


// Sytem ko dray elemlemt bando

// fOLDER ONLY COLORM AND ROW ME FOLDER SHOW HO EK --- 3 CR---