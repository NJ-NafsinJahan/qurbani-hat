import React from "react";
import bannerImg from "@/assets/banner.jpg";
import Image from "next/image";
import Link from "next/link";
const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${bannerImg.src})`,
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="">
            <p className="mb-5 text-lg">
              Quality Livestock, Raised Naturally ,Delivered with Trust
            </p>
            <h1 className="mb-5 text-6xl font-bold">Halal and Safe Qurbani</h1>
            <p className="mb-5 text-l">
              From Our Farms to Your Qurbani.Celebrate Eid al-Adha Meaningful &
              Responsible.--"Eid Mubarak"
            </p>
            <Link href={"/all-livestock"}>
              <button className=" w-125 m-4 p-2 rounded bg-[#4D833D] text-[#fafffa]  hover:bg-[#4f8f3e] hover:scale-105 hover:shadow-md transition duration-300">
                Explore All Livestock
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
