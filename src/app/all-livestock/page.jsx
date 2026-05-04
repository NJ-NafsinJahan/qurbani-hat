"use client";

import LivestockCard from "@/components/LivestockCard";
import React, { useEffect, useState } from "react";

const AllLiveStockPage = () => {
  const [allLivestock, setAllLivestock] = useState([]);
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://qurbani-hat-swart.vercel.app/data.json");
      const data = await res.json();
      setAllLivestock(data);
    };

    fetchData();
  }, []);
  //   console.log("allLivestock", allLivestock);
  const sortedLivestock = [...allLivestock].sort((lowPrice, highPrice) => {
    if (sortOrder === "lowToHigh") {
      return lowPrice.price - highPrice.price;
    }
    if (sortOrder === "highToLow") {
      return highPrice.price - lowPrice.price;
    }
    return 0;
  });

  return (
    <div className="container mx-auto">
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold">Choose your Cattle Here</h1>
        <div className="my-4">
          <select
            className="select select-bordered focus:outline-none focus:ring-2 focus:ring-green-500"
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="">Default</option>
            <option value="lowToHigh">Price: Low → High</option>
            <option value="highToLow">Price: High → Low</option>
          </select>
        </div>
      </div>

      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mx-auto p-2">
          {/* livestock card */}
          {sortedLivestock.map((livestock) => (
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
