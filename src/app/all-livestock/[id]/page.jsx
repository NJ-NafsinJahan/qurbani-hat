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
    <div className="container mx-auto mb-5">
      <h1>livestock Details Page</h1>
      <div className="border flex justify-around items-center">
        {/* image */}
        <div>
          <Image
            src={livestock.image}
            alt={livestock.name}
            height={500}
            width={600}
            className="rounded my-3 mx-5 hover:scale-105 transition"
          ></Image>

          {/* <p className="text-red-300 text-xl">{livestock.description}</p> */}
        </div>

        {/* Details  */}
        <div>
          <div>
            <h1>{livestock.name}</h1>
            <p>{livestock.price}</p>
            <p>{livestock.description}</p>
          </div>
          <p>Specification </p>
          <div>
            <div>
              <p>Breed: {livestock.breed}</p>
              <p>Age: {livestock.age}</p>
              <p>Weight: {livestock.weight}</p>
              <p>Location: {livestock.location}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default livestockDetailsPage;
