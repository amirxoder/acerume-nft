import React from "react";

const Loading = () => {
  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen flex items-center backdrop-blur-[2px] justify-center bg-black bg-opacity-50
    transform transition-transform duration-300 scale-0`}
    >
      <div
        className="flex flex-col justify-center items-center bg-[#151c25] shadow-xl shadow-[#e32790]
      rounded-xl min-w-min px-10 py-2"
      >
        <div className="flex flex-row justify-center items-center">
          <div className="lds-dual-ring"></div>
          <p className="text-lg text-white">Minting...</p>
        </div>
        <small className="text-white">Loading...</small>
      </div>
    </div>
  );
};

export default Loading;
