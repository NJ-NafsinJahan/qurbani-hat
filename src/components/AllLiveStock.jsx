import React from "react";
import LivestockCard from "./LivestockCard";

const AllLiveStock = async () => {
  const res = await fetch("https://qurbani-hat-swart.vercel.app/data.json");
  const allLivestock = await res.json();
  //   console.log("allLivestock", allLivestock);
  const topLivestock = allLivestock.slice(0, 8);
  //   console.log("topLivestock", topLivestock);

  return (
    <div className=" container mx-auto">
      <div className="my-3 bg-gray-50 rounded p-4">
        <h1 className=" text-3xl font-bold text-[#2f302f]">Featured Cattle</h1>
        <p className="text-[#787978] mt-2">
          Choose from our best collection for your Qurbani
        </p>
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
    </div>
  );
};

export default AllLiveStock;
