import React, { useState, useEffect } from "react";
import Image from "../wallpaper/image.png";
import Folder from "../assets/folder2.png";
import Bottom from "../components/Bottom";
import useDragable from "../utils/useDragable";

const Desktop = () => {
  const [axisX, setaxisX] = useState({});
  const [open, setOpen] = useState(false);
  const [folder ,setFolder] = useState(false)
 const {position , handleMouseUp, handleMouseDown} = useDragable()
  const hanldclick = (e) => {
    setOpen(!open);
    console.log(e);
    setaxisX({ X: e.screenX, Y: e.screenY });
  };
  console.log("The value of left axis aadvi"+position.x)
  console.log("The value of Top axis Uugi"+position.y)



  return (
    <div
     
      style={{ backgroundImage: `url(${Image})`, backgroundSize: "cover" }}
      className="w-full h-screen   overflow-hidden relative"
    >
      <div   onDoubleClick={hanldclick} className="w-full h-[80%] grid grid-cols-12  grid-rows-12  relative ">

      {open ? (
        <div
          div
          style={{
            position: "absolute",
            top: `${axisX.Y}px`,
            left: `${axisX.X}px`,
          }}
        >
          <div className="w-56 bg-gray-800 text-white rounded shadow-md border border-gray-700 p-1 space-y-1 text-sm font-normal">
            <div onClick={()=>setFolder(!folder)} className="hover:bg-gray-600 px-2 py-1 rounded cursor-pointer">
              Open Folder
            </div>
            <hr className="border-gray-600" />
            <div className="hover:bg-gray-600 px-2 py-1 rounded cursor-pointer">
              Setthings
            </div>
            <hr className="border-gray-600" />
            <div className="hover:bg-gray-600 px-2 py-1 rounded cursor-pointer">
              Change Background...
            </div>
            <div className="hover:bg-gray-600 px-2 py-1 rounded cursor-pointer">
              Display Settings
            </div>
          </div>
        </div>
      ) : (
        ""
      )}


      
      </div>

      <div className="w-full h-screen ">
        <div  onMouseDown={ handleMouseDown } onClick={()=>handleMouseUp()}
          style={{ position: "absolute", top: `${position.y}px`, bottom:`${position.x}px` }}
          className="folder w-fit  hover:bg-gray-500 h-fit"
        >
          <img  src={Folder} alt="folder" />
          <h1 className="text-center text-ambe${pos.y}px`,r-50">RR</h1>
        </div>

        <Bottom open={folder} setFolder={setFolder} />
      </div>
    </div>
  );
};

export default Desktop;

// Top -- Y 
//