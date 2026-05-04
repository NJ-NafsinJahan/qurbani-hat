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
    <div className="container mx-auto min-h-screen flex justify-center items-center px-4">
      <div className="grid md:grid-cols-2 gap-6 bg-base-100 shadow-md rounded-2xl p-4 max-w-4xl w-full">
        <figure className="flex justify-center items-center">
          <Image
            src={livestock.image}
            alt={livestock.name}
            height={500}
            width={300}
            className="rounded-xl object-cover w-full h-75 md:h-87.5 hover:scale-105 transition"
          ></Image>
        </figure>

        {/* details */}
        <div className="card-body">
          <div className=" flex flex-col justify-between">
            <div>
              <span
                className={`px-2 py-0.5 rounded-full text-[12px] font-normal border ${
                  livestock.status === "Available"
                    ? "border-green-500 text-green-600"
                    : "border-red-500 text-red-600"
                }`}
              >
                {livestock.status}
              </span>
            </div>
            <h2 className="card-title text-2xl my-1 mt-4 text-[#1E2939]">
              {livestock.name}
            </h2>
            <p className="font-semibold ">
              <span className="text-[16px] font-semibold">price: ৳ </span>
              {livestock.price}
            </p>
            <div className="divider divider-start">SPECIFICATION</div>
          </div>
          <p className="text-[16px] text-[#080d15]">
            <span className="text-[22px] font-medium"> Description: </span>
            {livestock.description}
          </p>

          {/* more details */}
          <div className=" flex justify-center items-center mt-5">
            {/* left side */}
            <div className="">
              <p className="text-[16px] text-[#080d15]">
                <span className="text-[18px] font-medium"> Type: </span>
                {livestock.type}
              </p>
              <p className="text-[16px] text-[#080d15]">
                <span className="text-[18px] font-medium"> Age: </span>
                {livestock.age}
              </p>
              <p className="text-[16px] text-[#080d15]">
                <span className="text-[18px] font-medium"> Weight: </span>
                {livestock.weight}
              </p>
            </div>
            {/* right side */}
            <div className="divider lg:divider-horizontal"></div>
            <div className="">
              <p className="text-[16px] text-[#080d15]">
                <span className="text-[18px] font-medium">Category : </span>
                {livestock.category}
              </p>
              <p className="text-[16px] text-[#080d15]">
                <span className="text-[18px] font-medium"> Breed: </span>
                {livestock.breed}
              </p>
              <p className="text-[16px] text-[#080d15]">
                <span className="text-[18px] font-medium"> Location: </span>
                {livestock.location}
              </p>
            </div>
          </div>

          <div className="card-actions justify-end">
            <button className="btn bg-[#4D833D] btn-block rounded-2xl text-amber-50 text-xl m-3">
              Booking
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default livestockDetailsPage;
