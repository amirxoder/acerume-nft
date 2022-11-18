import React from "react";
import { FaEthereum } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
      <div className="w-full flex flex-col justify-between items-center my-4">
        <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full text-white">
          <p className="mx-2 cursor-pointer ">Expolre</p>
          <p className="mx-2 cursor-pointer ">Features</p>
          <p className="mx-2 cursor-pointer ">Community</p>
        </div>

        <div className="flex justify-center items-center mt-7 text-[rgba(255,255,255,.6)] text-sm ">
          <FaEthereum />
          <span className="text-[.7rem] md:text-[1rem]">Acerume © 2020 - 2022 | code with ♥ by AmirCodder</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
