import LivestockCard from "@/components/LivestockCard";
import React from "react";

const AllLiveStockPage = async () => {
  const res = await fetch("https://qurbani-hat-swart.vercel.app/data.json");
  const allLivestock = await res.json();
  //   console.log("allLivestock", allLivestock);
  return (
    <div>
      <h1 className="text-3xl font-bold">Choose your Cattle Here</h1>
      <div>
        <div className="grid grid-cols-4 items-center gap-6 mx-auto p-2">
          {/* livestock card */}
          {allLivestock.map((livestock) => (
            // <div key={livestock.id}>{livestock.name}</div>
            <LivestockCard
              key={livestock.id}
              livestock={livestock}
            ></LivestockCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllLiveStockPage;
