"use client";
import React from "react";
import logoImg from "@/assets/logo1.jpeg";
import Link from "next/link";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;
  // console.log(user);

  const handleSignOut = async () => {
    await authClient.signOut();
  };
  return (
    <div className="shadow px-5 ">
      <nav className=" flex justify-between items-center  py-1 max-w-7xl mx-auto w-full">
        <ul className="flex items-center gap-5 text-[19px] text-[#1E2939] font-semibold">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/all-livestock"}>All Livestock</Link>
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
          <h3 className="text-[#1E2939] text-3xl font-bold text-center">
            Qurbani<span className="text-[#4D833D] font-bold text-4xl">H</span>
            {/* Qurbani<span className="text-[#156D12] font-bold text-4xl">H</span> */}
            at
          </h3>
        </div>

        <div className=" flex justify-center items-center gap-3 ">
          <div className="flex">
            {!user && (
              <ul className="flex items-center gap-4  text-[20px] text-[#1E2939] font-semibold">
                <li>
                  <Link href={"/signup"} className="font-normal">
                    SignUp
                  </Link>
                </li>
                <li>
                  <Link href={"/signin"}>SignIn</Link>
                </li>
              </ul>
            )}

            {user && (
              <div>
                <div className="avatar">
                  {user?.image ? (
                    <div className="w-10.5 rounded-full">
                      <img
                        src={user.image}
                        alt="user"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ) : (
                    <div className="avatar placeholder">
                      <div className="bg-neutral text-neutral-content w-11 rounded-full flex items-center justify-center">
                        <span>{user?.name?.charAt(0).toUpperCase()}</span>
                      </div>
                    </div>
                  )}
                </div>

                <button
                  onClick={handleSignOut}
                  className="btn btn-soft btn-error btn-sm text-[14px] rounded-full"
                >
                  SignOut
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
