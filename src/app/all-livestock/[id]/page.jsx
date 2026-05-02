import Image from "next/image";
import React from "react";

const livestockDetailsPage = async ({ params }) => {
  const { id } = await params;
  console.log(id);

  const res = await fetch("https://qurbani-hat-swart.vercel.app/data.json");
  const allLivestock = await res.json();
  //   console.log(allLivestock);

  const livestock = allLivestock.find((live) => live.id == id);
  //   console.log(livestock, "livestock");

  return (
    <div>
      <h1>livestock Details Page</h1>
      <div>
        <Image
          src={livestock.image}
          alt={livestock.name}
          height={200}
          width={300}
          className="rounded my-3 mx-5 hover:scale-105 transition"
        ></Image>
        <h1 className="text-red-300 text-4xl">{livestock.name}</h1>
        <p className="text-red-300 text-xl">{livestock.description}</p>
      </div>
    </div>
  );
};

export default livestockDetailsPage;
