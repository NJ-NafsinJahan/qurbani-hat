import React from "react";
import logoImg from "@/assets/logo1.jpeg";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="shadow px-5 ">
      <nav className=" flex justify-between items-center  py-1 max-w-7xl mx-auto w-full">
        <ul className="flex items-center gap-5 text-[20px] text-[#434643] font-semibold">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/all-animals"}>All Animals</Link>
          </li>
        </ul>

        <div className="flex items-center gap-1 py-2">
          <Image
            src={logoImg}
            alt="logo"
            loading="eager"
            width={50}
            height={50}
            // className="object-cover h-auto w-auto"
          />
          <h3 className="text-[#434643] text-3xl font-bold text-center">
            Qurbani<span className="text-[#4D833D] font-bold text-4xl">H</span>
            {/* Qurbani<span className="text-[#156D12] font-bold text-4xl">H</span> */}
            at
          </h3>
        </div>

        <div className="flex">
          <ul className="flex items-center gap-4  text-[20px] text-[#434643] font-semibold">
            <li>
              <Link href={"/login"}>LogIn</Link>
            </li>
            <li>
              <Link href={"/logout"}>LogOut</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
