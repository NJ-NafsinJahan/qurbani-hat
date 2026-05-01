import React from "react";
import LivestockCard from "./LivestockCard";

const AllLiveStock = async () => {
  const res = await fetch("https://qurbani-hat-swart.vercel.app/data.json");
  const allLivestock = await res.json();
  //   console.log("allLivestock", allLivestock);
  const topLivestock = allLivestock.slice(0, 8);
  //   console.log("topLivestock", topLivestock);

  return (
    <div>
      <div>
        <h1 className=" text-2xl font-bold">Featured Cattle</h1>
        <p>Choose from our best collection for your Qurbani</p>
      </div>
      {/* livestock card */}
      {topLivestock.map((livestock) => (
        // <div key={livestock.id}>{livestock.name}</div>
        <LivestockCard key={livestock.id} livestock={livestock}></LivestockCard>
      ))}
      <div></div>
    </div>
  );
};

export default AllLiveStock;
