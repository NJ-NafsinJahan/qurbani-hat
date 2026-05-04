import Image from "next/image";
import React from "react";
import { BsArrowUpRightCircle, BsTruck } from "react-icons/bs";
import { PiHandCoins } from "react-icons/pi";

const StaticFirst = () => {
  return (
    <div className="w-full max-w-full p-4 shadow rounded-2xl border border-gray-300 flex flex-col sm:flex-row justify-center items-center gap-4 mt-3">
      <div className="rounded-2xl flex justify-center items-center gap-1 m-2">
        <div className="avatar">
          <div className="w-18 h-18 rounded-full text-gray-400 flex items-center justify-center">
            <BsArrowUpRightCircle size={40} />
          </div>
        </div>
        <div>
          <h2 className="font-medium text-xl text-gray-400 p-0.5">
            Choose Your Qurbani
          </h2>
          <p className="font-normal text-[12px] text-gray-400">
            Select your Qurbani from our extensive Collection
          </p>
        </div>

        {/* 02 */}
      </div>
      <div className=" rounded-2xl flex justify-center items-center gap-1 m-2">
        <div className="avatar">
          <div className="w-18 h-18 rounded-full text-gray-400 flex items-center justify-center">
            <PiHandCoins size={40} />
          </div>
        </div>
        <div>
          <h2 className="font-medium text-xl text-gray-400 p-0.5">
            Pay at shop or online
          </h2>
          <p className="font-normal text-[12px] text-gray-400">
            You can pay via card in our site or cash in our store
          </p>
        </div>
      </div>
      {/* 3 */}
      <div className="rounded-2xl flex justify-center items-center gap-1 m-2">
        <div className="avatar">
          <div className="w-18 h-18 rounded-full text-gray-400 flex items-center justify-center">
            <BsTruck size={40} />
          </div>
        </div>
        <div>
          <h2 className="font-medium text-xl text-gray-400 p-0.5">
            Get delivered at your doorstep
          </h2>
          <p className="font-normal text-[12px] text-gray-400">
            You will get your delivery at the right time at your place
          </p>
        </div>
      </div>
    </div>
  );
};

export default StaticFirst;
