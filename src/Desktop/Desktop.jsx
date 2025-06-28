import React, { useState, useEffect } from "react";
import Image from "../wallpaper/image.png";
import Folder from "../assets/folder.png";
import Bottom from "../components/Bottom";
import useDragable from "../utils/useDragable";
import Ubuntu6 from "../assets/Background/Ubuntu6.png";
import Githubs from "../assets/Github1.png";
import Uicontext from "../context/Uicontext.jsx";

import Github from "../components/Github.jsx";

import ChangeBackground from "../utils/ChangeBackground";
const Desktop = () => {
  const [axisX, setaxisX] = useState({});
  const [opengithub, setgithub] = useState(false);
  const [glass, setglass] = useState(false);
  const [open, setOpen] = useState(false);
  const [folder, setFolder] = useState(false);
  let [data, setdata] = useState([]);
  const [create, setcreate] = useState(false);
  const { position, handleMouseUp, handleMouseDown } = useDragable();
  const [change, setChange] = useState(false);
  const [LockScreen, setLockScreen] = useState(true);

  const [BackgrondImage, setBackgroundImage] = useState(Image);

  const hanldclick = (e) => {
    setOpen(!open);
    console.log(e.clientX);
    setaxisX({ X: e.clientX, Y: e.clientY });
    setChange(false);
    e.preventDefault();
  };
  const ram = (e) => {
    setOpen(false);
    const Foldername = prompt("Enter The Folder name ");

    setdata((prev) => [...prev, { x: e.clientX, y: e.clientY, Foldername }]);
  };

  const background = (e) => {
    setOpen(false);
  };
  const BackgroundImagess = (e) => {
    setChange(true);
    setBackgroundImage(ChangeBackground());
  };

  return (
    <>
      {LockScreen ? (
        
        <div
          onClick={background}
          style={{
            backgroundImage: `url(${BackgrondImage}`,
            backgroundSize: "cover",
          }}
          className="w-full h-screen   overflow-hidden relative"
        >
          <div
            onContextMenu={hanldclick}
            className="w-full h-[80%] grid grid-cols-12  grid-rows-12  relative "
          >
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
                  <div
                    onClick={() => setFolder(true)}
                    className="hover:bg-gray-600 px-2 py-1 rounded cursor-pointer"
                  >
                    Open Folder
                  </div>
                  <hr className="border-gray-600" />
                  <div className="hover:bg-gray-600 px-2 py-1 rounded cursor-pointer">
                    Setthings
                  </div>
                  <hr className="border-gray-600" />
                  <div
                    onClick={BackgroundImagess}
                    className="hover:bg-gray-600 px-2 py-1 rounded cursor-pointer"
                  >
                    Change Background...
                  </div>
                    <div
                    onClick={ram}
                    className="hover:bg-gray-600 px-2 py-1 rounded cursor-pointer"
                  >
                    Create Folder
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>

          <div className="w-full h-screen ">
            <div
              onMouseDown={handleMouseDown}
              onMouseOver={() => handleMouseUp()} // onmouseLeave ek problem haeki jab thod mouse div baher gela to kam nahi karega  // onclick to to agar ko use ese hamuse kare // onMouseOver is best in case using this.
              style={{
                position: "absolute",
                top: `${position.y}px`,
                left: `${position.x}px`,
              }}
              className="folder w-fit  hover:bg-gray-500 h-fit"
            >
              <img src={Folder} alt="folder" />
              <h1 className="text-center text-amber-50 ">New Folder</h1>
            </div>

            <div
                onClick={() => setgithub(!opengithub)}
              style={{
                position: "absolute",
                top: "120px",
                left: "20px",
                cursor: "pointer",
                transition: "all 0.3s ease-in-out",
              }}
              className="rounded-xl bg-transparent  hover:scale-105"
              >
              <img
                className="w-20 h-20 object-contain mx-auto transition-transform "
                src={Githubs}
                alt="folder"
              />
              <h1 className="text-center  text-white">
                Github Profile <br />
                Search
              </h1>
            </div>
            {opengithub ? <Github setgithub={setgithub} /> : ""}

            {data?.map((data) => {
              return (
                <div // onmouseLeave ek problem haeki jab thod mouse div baher gela to kam nahi karega  // onclick to to agar ko use ese hamuse kare // onMouseOver is best in case using this.
                  style={{
                    position: "absolute",
                    top: `${data.y}px`,
                    left: `${data.x}px`,
                  }}
                  className="folder w-fit   hover:bg-gray-500 h-fit"
                >
                  <img src={Folder} alt="folder" />
                  <h1 className="text-center text-amber-50">
                    <b>{data.Foldername}</b>
                  </h1>
                </div>
              );
            })}

            <Bottom open={folder} setFolder={setFolder} />
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Desktop;

// Top -- Y
// <div   onContextMenu={hanldclick} className="w-full h-[80%] grid grid-cols-12  grid-rows-12  relative ">
// es par  ham ek kam kare ge jab bhi onclick to tab open false kar dena
//Backgground kah tenstin nahi hae karn  changebackgrond and desktop ekch level hae manun
