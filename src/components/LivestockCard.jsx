import Image from "next/image";
import React from "react";

const LivestockCard = ({ livestock }) => {
  console.log(livestock);
  return (
    <div className="">
      <div className="card bg-base-100 shadow-sm border ">
        <figure>
          <Image
            src={livestock.image}
            alt={livestock.name}
            height={200}
            width={300}
            className="rounded my-3 mx-4"
          ></Image>
        </figure>
        <div className="card-body">
          <h2 className="flex justify-between items-center gap-4 text-lg">
            {livestock.name}
            <div className=" btn bg-pink-400 text-[14px]">
              {livestock.status}
            </div>
          </h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LivestockCard;
