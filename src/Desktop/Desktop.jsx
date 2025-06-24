import React, { useState, useEffect } from "react";
import Image from "../wallpaper/image.png";
import Folder from "../assets/folder2.png";
import Bottom from "../components/Bottom";

const Desktop = () => {
const [axisX, setaxisX] = useState([])


const hanldemove = (e)=>{
  console.log(e)
  // setaxisX([...axisX,e.pageX])
}


 
  return (
    <div   onMouseEnte={hanldemove}   
      style={{ backgroundImage: `url(${Image})`, backgroundSize: "cover" }}
      className="w-full h-screen   overflow-hidden relative" >

      <div  className="w-full h-screen ">

       <div style={{  position: "absolute", top: `40px` }}  className="folder w-fit  hover:bg-gray-500 h-fit">
          <img src={Folder} alt="folder" />
          <h1 className="text-center text-ambe${pos.y}px`,r-50">
          RR
          </h1>
        </div>



      


 <Bottom />


      </div>
 
    </div>
  );
};

export default Desktop;

