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
    <div className="card lg:card-side bg-base-100 shadow-sm">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
          alt="Album"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">New album is released!</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Listen</button>
        </div>
      </div>
    </div>

    // <div className="container mx-auto">
    //   <h1>livestock Details Page</h1>
    //   <div className="border flex justify-around items-center">
    //     {/* image */}
    //     <div>
    //       <Image
    //         src={livestock.image}
    //         alt={livestock.name}
    //         height={200}
    //         width={300}
    //         className="rounded my-3 mx-5 hover:scale-105 transition"
    //       ></Image>

    //       {/* <p className="text-red-300 text-xl">{livestock.description}</p> */}
    //     </div>

    //     {/* Details  */}
    //     <div>
    //       <h1>{livestock.name}</h1>
    //       <p>{livestock.price}</p>
    //     </div>
    //   </div>
    // </div>
  );
};

export default livestockDetailsPage;
