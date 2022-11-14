import React from "react";
import { FaEthereum } from "react-icons/fa";

const Header = () => {
  return (
    <nav className="w-4/5 flex md:justify-center justify-between items-center py-4 mx-auto">
      <div className="flex flex-row justify-start items-center md:flex-[0.5] flex-initial">
        <FaEthereum className="text-2xl text-white cursor-pointer" />
        <span className="text-white text-2xl ml-2">Acerume</span>
      </div>

      <ul className="md:flex-[0.5] md:flex text text-white hidden list-none flex-row justify-between items-center flex-initial">
        <li className="mx-4 cursor-pointer">Explore</li>
        <li className="mx-4 cursor-pointer">Features</li>
        <li className="mx-4 cursor-pointer">Cummunity</li>
      </ul>
      <button className="shadow-xl shadow-black text-white bg-[#e32930] hover:bg-[#bd255f] md:text-xs p-2 rounded-full ">
        Connect Wallet
      </button>
    </nav>
  );
};

export default Header;
