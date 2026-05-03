import Image from "next/image";
import React from "react";
import cow1 from "@/assets/cow5.jpg";
import cow2 from "@/assets/cow3.jpg";
import cow3 from "@/assets/cow6.jpg";

const TipsBreedsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Title */}
      <h1 className="text-3xl font-bold text-center mb-6 text-[#1E2939]">
        🐄 Qurbani Tips & Top Breeds
      </h1>

      {/* Tips Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-[#4D833D]">
          💡 Qurbani Tips
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-green-50 rounded-xl shadow">
            ✔️ Choose a healthy and active animal.
          </div>
          <div className="p-4 bg-green-50 rounded-xl shadow">
            ✔️ Check eyes, teeth, and overall body condition.
          </div>
          <div className="p-4 bg-green-50 rounded-xl shadow">
            ✔️ Make sure the animal meets the required age.
          </div>
          <div className="p-4 bg-green-50 rounded-xl shadow">
            ✔️ Avoid sick, weak, or injured animals.
          </div>
          <div className="p-4 bg-green-50 rounded-xl shadow">
            ✔️ Please, dispose all immediate waste and deep burial.
          </div>
          <div className="p-4 bg-green-50 rounded-xl shadow">
            ✔️ Thorough disinfection of the slaughter area.
          </div>
        </div>
      </div>

      {/* Breeds Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-[#4D833D]">
          ✨ Top Breeds in Bangladesh
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Breed 1 */}
          <div className="card card-sm bg-base-100 shadow-md">
            <figure>
              <Image
                src={cow1}
                alt="cow 1"
                loading="eager"
                width={300}
                height={300}
                className="rounded-xl"
              />
            </figure>
            <div className="card-body">
              <h3 className="font-bold text-2xl text-[#2f302f]">Deshi Cow</h3>
              <p className="text-[#2f302f]">
                Most common and easy-to-maintain breed in Bangladesh. Well
                adapted to local climate and requires low maintenance and
                feeding cost.
              </p>
            </div>
          </div>

          {/* Breed 2 */}
          <div className="card bg-base-100 shadow-md">
            <figure>
              <Image
                src={cow3}
                alt="cow 1"
                loading="eager"
                width={300}
                height={300}
                className="rounded-xl"
              />
            </figure>
            <div className="card-body">
              <h3 className="font-bold text-2xl text-[#2f302f]">Sahiwal</h3>
              <p className="text-[#2f302f]">
                Known for high milk production and good meat quality. Well
                adapted to local climate and requires low maintenance and
                feeding cost.
              </p>
            </div>
          </div>

          {/* Breed 3 */}
          <div className="card bg-base-100 shadow-md">
            <figure>
              <Image
                src={cow2}
                alt="cow 1"
                loading="eager"
                width={300}
                height={100}
                className="rounded-xl"
              />
            </figure>
            <div className="card-body">
              <h3 className="font-bold text-2xl text-[#2f302f]">Brahman</h3>
              <p className="text-[#2f302f]">
                Popular for its large size and heavy weight.Often preferred for
                its strong build, high meat yield, and impressive physical
                presence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TipsBreedsPage;
