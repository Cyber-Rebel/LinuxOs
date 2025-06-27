import React from 'react';
import { CiLock } from "react-icons/ci";

const LookScreena = () => {
  return (
    <div className="w-full h-screen bg-black flex items-center justify-center">
      <div className="flex flex-col items-center">
        <CiLock className="text-white text-[150px] mb-8" />
        <h1 className="text-white text-5xl font-semibold tracking-wider">POWER OFF</h1>
      </div>
    </div>
  );
};

export default LookScreena;
