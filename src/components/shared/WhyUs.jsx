import React from "react";
import farmImg1 from "@/assets/farm3.jpg";
import farmImg2 from "@/assets/farm1.jpg";
import farmImg3 from "@/assets/farm2.jpg";
import Image from "next/image";

const WhyUsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-gray-50">
      <div className="">
        <div className="my-3 bg-gray-50 rounded p-4">
          <h1 className=" text-3xl font-bold text-[#2f302f]">
            What make our cattle great?
          </h1>
          <p className="text-[#787978] mt-2">
            Learn why you should choose our cattle
          </p>
        </div>
      </div>
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* div 1 */}
        <div className="">
          <div className="card bg-base-100 w-96 shadow-sm">
            <figure className="px-10 pt-10">
              <Image
                src={farmImg1}
                alt="farm1"
                height={200}
                width={300}
                className="rounded my-3 mx-5 hover:scale-105 transition"
              ></Image>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Farming practices</h2>
              <p className="text-justify">
                The crucial aspect to great quality meat is in the nurturing of
                the livestock. We at Bengal Meat, practice all-natural processes
                in the upbringing of the cattle, its food habit and habitat. So,
                all cattle in our farm grow up in freedom & comfort, they eat &
                drink to their desire.
              </p>
            </div>
          </div>
        </div>

        {/* div 2 */}
        <div className="">
          <div className="card bg-base-100 w-96 shadow-sm">
            <figure className="px-10 pt-10">
              <Image
                src={farmImg2}
                alt="farm1"
                height={400}
                width={300}
                className="rounded my-3 mx-5 hover:scale-105 transition"
              ></Image>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Naturally Grown</h2>
              <p className="text-justify">
                Our cattle are fed organic feed grown at our own farm without
                any kind of steroids or growth hormones. Artificial chemicals
                may make the cattle gain mass quicker but it is harmful to the
                cattle and is also not Halal or Safe to consume. Our natural
                feed practices ensure our cattle grow right. FMD and other
                diseases, grown naturally, and anti-biotic free. We inspect
                their blood and stool to make sure that no diseased cattle get
                past our best practices so that only the healthy
              </p>
            </div>
          </div>
        </div>

        {/* div 3 */}
        <div className="">
          <div className="card bg-base-100 w-96 shadow-sm">
            <figure className="px-10 pt-10">
              <Image
                src={farmImg3}
                alt="farm1"
                height={200}
                width={300}
                className="rounded my-3 mx-5 hover:scale-105 transition"
              ></Image>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Healthy & Disease-free</h2>
              <p className="text-justify">
                Our cattle are routinely health-checked and certified by
                veterinarians. All cattle are vaccinated against Anthrax, FMD
                and other diseases, grown naturally, and anti-biotic free. We
                inspect their blood and stool to make sure that no diseased
                cattle get past our best practices so that only the healthy and
                safe reach you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUsPage;
