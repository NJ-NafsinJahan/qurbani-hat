import Image from "next/image";
import Link from "next/link";
import React from "react";

const LivestockCard = ({ livestock }) => {
  // console.log(livestock);
  return (
    <div className="">
      <div className="card bg-base-100 mx-auto shadow-md w-full">
        <figure>
          <Image
            src={livestock.image}
            alt={livestock.name}
            height={200}
            width={300}
            className="rounded my-3 mx-5 sm:mx-5 hover:scale-105 transition"
          ></Image>
        </figure>
        <div className="card-body mb-1">
          <h2 className="card-title font-semibold text-lg sm:text-xl md:text-2xl">
            {livestock.name}
          </h2>
          <p className="text-sm sm:text-base">{livestock.description}</p>
          <div className="divider divider-horizontal"></div>
          <div className=" flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-4">
            <p className="font-semibold ">
              <span className="text-[14px] sm:text-[16px] font-semibold">
                price: ৳{" "}
              </span>
              {livestock.price}
            </p>

            <div className="flex justify-between">
              <div></div>
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
          </div>
          <Link href={`/all-livestock/${livestock.id}`}>
            <button className=" btn w-full mt-3 rounded-full bg-[#4D833D] text-[14px] sm:text-[16px] md:text-[18px] font-light text-[#fafffa] hover:bg-[#4f8f3e] hover:scale-105 hover:shadow-md transition duration-300">
              See Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LivestockCard;
