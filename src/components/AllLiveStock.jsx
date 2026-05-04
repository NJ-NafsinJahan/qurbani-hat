import React from "react";
import LivestockCard from "./LivestockCard";
import StaticFirst from "./shared/StaticFirst";
import TipsBreedsPage from "./shared/TipsBreeds";
import EidMubarakMarquee from "./shared/EidMubarak";
import Link from "next/link";
import WhyUsPage from "./shared/WhyUs";

const AllLiveStock = async () => {
  const res = await fetch("https://qurbani-hat-swart.vercel.app/data.json");
  const allLivestock = await res.json();
  //   console.log("allLivestock", allLivestock);
  const topLivestock = allLivestock.slice(0, 4);
  //   console.log("topLivestock", topLivestock);

  return (
    <div className=" container mx-auto">
      <StaticFirst></StaticFirst>
      <EidMubarakMarquee></EidMubarakMarquee>
      <div className=" flex justify-between items-center ">
        <div className="my-3 bg-gray-50 rounded p-4">
          <h1 className=" text-3xl font-bold text-[#2f302f]">
            Featured Cattle
          </h1>
          <p className="text-[#787978] mt-2">
            Choose from our best collection for your Qurbani
          </p>
        </div>
        <Link href={"/all-livestock"} className=" m-2 mr-5  p-3">
          <p className="text-xl font-semibold text-[#09b852]"> See All....</p>
        </Link>
      </div>
      <div className="grid grid-cols-4 items-center gap-6 mx-auto p-2">
        {/* livestock card */}
        {topLivestock.map((livestock) => (
          // <div key={livestock.id}>{livestock.name}</div>
          <LivestockCard
            key={livestock.id}
            livestock={livestock}
          ></LivestockCard>
        ))}
      </div>
      <TipsBreedsPage></TipsBreedsPage>
      <WhyUsPage></WhyUsPage>
    </div>
  );
};

export default AllLiveStock;
