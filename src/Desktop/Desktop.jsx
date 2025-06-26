import React, { useState, useEffect } from "react";
import Image from "../wallpaper/image.png";
import Folder from "../assets/folder.png";
import Bottom from "../components/Bottom";
import useDragable from "../utils/useDragable";

const Desktop = () => {
  const [axisX, setaxisX] = useState({});
  const [open, setOpen] = useState(false);
  const [folder ,setFolder] = useState(false)
  let [data,setdata]= useState([])
  const [create,setcreate] = useState(false)
  const {position , handleMouseUp, handleMouseDown} = useDragable()

  const hanldclick = (e) => {
    setOpen(!open);
    console.log(e.clientX);
    setaxisX({ X: e.clientX, Y: e.clientY });
    console.log(create)
    
    e.preventDefault(); // Browser ka context menu rokta hai hamesah dyan rak bhaii ese linek me nilesh 
  };
  // console.log("The value of left axis aadvi"+position.x)
  // console.log("The value of Top axis Uugi"+position.y)
// console.log(data[0].x) pan map madhe sirf esa karna hae data.x
const ram = (e)=>{
setOpen(false)
  const Foldername = prompt("Enter The Folder name ")
  
    setdata(prev=>[...prev,{x:e.clientX,y:e.clientY,Foldername}])
}

  return (
    <div
   
    
      style={{ backgroundImage: `url(${Image})`, backgroundSize: "cover" }}
      className="w-full h-screen   overflow-hidden relative"
    >
      <div   onContextMenu={hanldclick} className="w-full h-[80%] grid grid-cols-12  grid-rows-12  relative ">

      {open ? (
        <div
          div
          style={{
            position: "absolute",
            top: `${axisX.Y}px`,
            left: `${axisX.X}px`,
          }}
        >
          <div className="w-56 bg-gray-800 text-white rounded shadow-md border m-10  border-gray-700 p-1 space-y-1 text-sm font-normal">
            <div onClick={()=>setFolder(true)} className="hover:bg-gray-600 px-2 py-1 rounded cursor-pointer">
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
            {/* <div onClick={()=>setcreate(true)} className="hover:bg-gray-600 px-2 py-1 rounded cursor-pointer"> */}
            <div onClick={ram} className="hover:bg-gray-600 px-2 py-1 rounded cursor-pointer">
            Create Folder
            </div>
          </div>
        </div>
      ) : (
        ""
      )}


      
      </div>

      <div className="w-full h-screen ">
        <div  onMouseDown={ handleMouseDown } onMouseOver={()=>handleMouseUp()}  // onmouseLeave ek problem haeki jab thod mouse div baher gela to kam nahi karega  // onclick to to agar ko use ese hamuse kare // onMouseOver is best in case using this.
          style={{ position: "absolute", top: `${position.y}px`, left:`${position.x}px` }}
          className="folder w-fit  hover:bg-gray-500 h-fit"
        >
          <img  src={Folder} alt="folder" />
          <h1 className="text-center text-amber-50 ">RR</h1>
        </div>

        {data?.map((data)=>{
          return (
            <div  // onmouseLeave ek problem haeki jab thod mouse div baher gela to kam nahi karega  // onclick to to agar ko use ese hamuse kare // onMouseOver is best in case using this.
          style={{ position: "absolute", top:`${data.y}px`, left:`${data.x}px`  }}
          className="folder w-fit   hover:bg-gray-500 h-fit"
        >
          <img  src={Folder} alt="folder" />
          <h1 className="text-center text-amber-50"><b>{data.Foldername}</b></h1>
        </div>
          )
        })}

        <Bottom open={folder} setFolder={setFolder} />
      </div>
    </div>
  );
};

export default Desktop;

// Top -- Y 
      // <div   onContextMenu={hanldclick} className="w-full h-[80%] grid grid-cols-12  grid-rows-12  relative ">
// es par  ham ek kam kare ge jab bhi onclick to tab open false kar dena 