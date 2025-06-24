import React, { useState,useEffect } from 'react';
import Folder from '../assets/folder2.png';
import Brave from '../assets/brave.png';
import App from '../assets/Ao.png';
import Vscode from '../assets/VScode.png';
import Terminal from '../assets/Termianl2.png';
import Settings from '../assets/Settings2.png';
import Help from '../assets/Help.png';

const Bottom = (props) => {

console.log(props)
      const [openBrave, setOpenBrave] = useState(false);
      const [openApp, setOpenApp] = useState(false);
      const [openVSCode, setOpenVSCode] = useState(false);
      const [openTerminal, setOpenTerminal] = useState(false);
      const [openSettings, setOpenSettings] = useState(false);
      const [openHelp, setOpenHelp] = useState(false);
      const [openFolder,setopenFolder] = useState(false)

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
     <div    className="absolute overflow-hidden  bottom-0 top-[90%] left-[38%]">
            <div className="p-5 bg-black/60 backdrop-blur-md rounded-2xl flex gap-4">
           
          <img     name="File"  className="w-14 h-14 object-contain cursor-pointer hover:scale-110 transition-transform duration-200" onClick={()=>setopenFolder(true)} src={Folder} alt="folder" />
          
          
              <img
                onClick={handleclick}
                // name="brave"
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
            <div style={{ position: 'absolute', top: '10%' }} className="w-[30%]  h-[40%] bg-amber-200 p-5">
              <button onClick={() => setOpenBrave(false)}>Close Brave</button>
            </div>
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
          {openTerminal && (
            <div style={{ position: 'absolute', top: '40%' }} className="w-[30%] h-[40%] bg-blue-500 text-white p-5">
              <button onClick={() => setOpenTerminal(false)}>Close Terminal</button>
            </div>
          )}
          {openSettings && (
            <div style={{ position: 'absolute', top: '50%' }} className="w-[30%] h-[40%] bg-pink-500 p-5">
              <button onClick={() => setOpenSettings(false)}>Close Settings</button>
            </div>
          )}
          {openHelp && (
            <div style={{ position: 'absolute', top: '60%' }} className="w-[30%] h-[40%] bg-slate-900 text-white p-5">
              <button onClick={() => setOpenHelp(false)}>Close Help</button>
            </div>
          )}
             {openFolder || props.open? (
            <div style={{ position: 'absolute', top: '60%' }} className="w-[30%] h-[40%] bg-cyan-900 text-white p-5">
              <button onClick={() => setopenFolder(false)|| props.setFolder(false)}>Close Folder</button>
            </div>
          ):``}
          </>
  )
}

export default Bottom