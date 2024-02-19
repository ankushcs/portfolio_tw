import React from "react";

const NoPageFound = () => {
  return (
    <div className="bg-black h-screen w-screen relative z-0">
      <div className="bg-amber-950 w-80 h-80 rounded-md fixed top-4 left-4 z-[-10]"></div>
      <div className="bg-amber-950 w-80 h-80 rounded-md fixed bottom-4 right-4 z-[-10]"></div>
      <div className="flex justify-center items-center h-screen w-screen bg-transparent z-20">
        <div className="bg-slate-800 h-5/6 w-11/12 rounded-md z-auto"></div>
      </div>
    </div>
  );
};

export default NoPageFound;
