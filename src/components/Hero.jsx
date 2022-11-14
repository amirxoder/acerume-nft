import React from "react";

import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillFacebook,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { HiUser } from "react-icons/hi";

const Hero = () => {
  return (
    <div
      className="bg-[url('https://cdn.pixabay.com/photo/2022/03/01/02/51/galaxy-7040416_960_720.png')] 
    bg-no-repeat bg-cover md:min-h-[90vh] bg-center"
    >
      <div className="flex flex-col justify-center items-center mx-auto py-10">
        <h1 className="text-white text-5xl font-bold text-center">
          A.I Arts
          <br />
          <span className="text-gradient">NFTs</span> Collections
        </h1>
        <p className="text-white font-semibold text-sm mt-3">
          Mint and collect the hottest NFTs around.
        </p>
        <button className="shadow-xl shadow-black text-white bg-[#e32970] hover:bg-[#bd255f] p-2 rounded-full cursor-pointer my-4">
          Mint Now
        </button>

        <a
          href="https://github.com/amirxoder"
          target={"_blank"}
          className="flex justify-center items-center space-x-2 bg-[#000000ad] backdrop-blur-sm rounded-full my-4 p-1 pr-3 cursor-pointer"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt="user"
            className="w-11 h-11 object-contain rounded-full"
          />
          <div className="text-white flex flex-col font-semibold">
            <span>0x42sdf...12s4</span>
            <span className="text-[#e32970]">Daltonic</span>
          </div>
        </a>

        <p className="text-center text-white text-sm font-medium  ">
          AmirCodder kick-started his journey as a front-end developer in 2020.
          <br />
          over the years, he has grown full-blown skills in javascript stacks
          such as React and now blockchain
        </p>

        <ul className="flex space-x-4 my-5 text-2xl text-white cursor-pointer ">
          <a href="https:">
            <AiFillGithub className="hover:text-[#000] transition-all duration-200 hover:scale-[1.45] hover:shadow-neutral-700" />
          </a>
          <a href="https:">
            <AiFillFacebook className="hover:text-[#000] transition-all duration-200 hover:scale-[1.45] hover:shadow-neutral-700" />
          </a>
          <a href="https:">
            <AiFillLinkedin className="hover:text-[#000] transition-all duration-200 hover:scale-[1.45] hover:shadow-neutral-700" />
          </a>
          <a href="https:">
            <AiFillTwitterSquare className="hover:text-[#000] transition-all duration-200 hover:scale-[1.54] hover:shadow-neutral-700" />
          </a>
        </ul>

        <div className="flex p-3 cursor-pointer hover:bg-[#bd255f] hover:text-white transition-all duration-200  justify-center shadow-xl shadow-black items-center w-10 h-10 rounded-full bg-white">
          <span className="text-sm font-bold">90</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
