import React from "react";
import { FaEthereum } from "react-icons/fa";

const Artwork = () => {
  const BASE_URL =
    "https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg";

  return (
    <div className="bg-[#131835] py-10">
      <div className="w-4/5 mx-auto">
        <h3 className="text-gradient uppercase text-2xl font-bold">Artworks</h3>
        <div className="flex flex-wrap justify-center items-center mt-4">
          {Array(5)
            .fill()
            .map((nft, i) => (
              <div
                key={i}
                className={`relative shadow-xl shadow-black p-3 m-5 bg-white rounded-lg w-64 h-64 object-contain bg-no-repeat bg-cover
            overflow-hidden mr-2 mb-2 cursor-pointer hover:shadow-[#bd255f] transition-all bg-center duration-150`}
                style={{
                  backgroundImage: `url(${BASE_URL})`,
                }}
              >
                <div className="absolute bottom-0 left-0 right-0 backdrop-blur-[2px] flex justify-between items-center label-gradient p-2 w-full text-white text-sm">
                  <p>Adulam NFT #{i + 1}</p>
                  <div className="flex justify-center items-center space-x-2">
                    <FaEthereum className="cursor-pointer" />
                    <span>3.5</span>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="flex justify-center items-center mx-auto mt-4">
          <button className="shadow-xl cursor-pointer my-4 shadow-black text-white rounded-full bg-[#e32970] hover:bg-[#bd255f] py-1 px-4 ">
            Laod More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Artwork;
