import React from "react";
import { FaRegTimesCircle } from "react-icons/fa";
import { BsCheck2Circle } from "react-icons/bs";

const Alert = () => {
  return (
    <div
      className={`fixed top-0 w-screen h-screen backdrop-blur-sm flex items-center justify-center bg-black bg-opacity-50 transform
  transition-transform duration-300 scale-0`}
    >
      <div
        className="flex flex-col justify-center bg-center items-center bg-[#151c25]
      shadow-xl shadow-[#e32970] rounded-xl min-w-min py-3 px-10"
      >
        {false ? (
          <FaRegTimesCircle className="text-red-600 text-4xl" />
        ) : (
          <BsCheck2Circle className="text-green-600 text-4xl" />
        )}
        
      </div>
    </div>
  );
};

export default Alert;
