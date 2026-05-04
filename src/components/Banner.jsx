import React from "react";
import bannerImg from "@/assets/banner.jpg";
import Image from "next/image";
import Link from "next/link";
const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${bannerImg.src})`,
        }}
      >
        <div className="hero-overlay absolute inset-0"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm sm:text-base md:text-lg">
              Quality Livestock, Raised Naturally ,Delivered with Trust
            </p>
            <h1 className="mb-4 text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
              Halal and Safe Qurbani
            </h1>
            <p className="mb-5 text-xs sm:text-sm md:text-base">
              From Our Farms to Your Qurbani.Celebrate Eid al-Adha Meaningful &
              Responsible.--"Eid Mubarak"
            </p>
            <Link href={"/all-livestock"}>
              <button className="w-full sm:w-auto px-6 py-3 rounded bg-[#4D833D] text-[#fafffa] hover:bg-[#4f8f3e] hover:scale-105 hover:shadow-md transition duration-300">
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
