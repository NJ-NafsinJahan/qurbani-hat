"use client";
import { UpdateUserModal } from "@/components/UpdateUserModal";
import { authClient } from "@/lib/auth-client";

import React from "react";
import { GrFavorite } from "react-icons/gr";
import { LuHistory, LuMessageCircleQuestion } from "react-icons/lu";
import { MdPayment } from "react-icons/md";

const myProfilePage = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;
  // console.log(user);
  //   console.log("USER:", user);

  return (
    // ****
    <div className="mx-auto bg-lime-50 min-h-screen flex items-center justify-center px-4">
      <div className="card w-full max-w-sm sm:max-w-md md:max-w-lg bg-base-100 shadow-lg rounded-2xl">
        <div className="card-body flex flex-col items-center text-center gap-3">
          {/* Profile Image */}
          <div className="avatar">
            <div className="w-24 sm:w-28 md:w-32 rounded-full overflow-hidden">
              {user?.image ? (
                <img
                  src={user.image}
                  alt="user"
                  referrerPolicy="no-referrer"
                  className="object-cover"
                />
              ) : (
                <div className="bg-neutral text-neutral-content w-full h-full flex items-center justify-center text-2xl">
                  {user?.name?.charAt(0).toUpperCase()}
                </div>
              )}
            </div>
          </div>

          {/* Name */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1E2939]">
            {user?.name}
          </h2>

          {/* Email */}
          <p className="text-gray-500 text-sm sm:text-base">{user?.email}</p>

          {/* Static Buttons */}
          <div className="w-full grid grid-cols-2 gap-2 mt-3">
            <button className="btn btn-block shadow">
              {" "}
              <MdPayment></MdPayment> Payment{" "}
            </button>
            <button className="btn btn-block shadow">
              {" "}
              <LuHistory />
              Order History
            </button>
            <button className="btn btn-block shadow">
              {" "}
              <GrFavorite />
              WishList
            </button>
            <button className="btn btn-block shadow">
              {" "}
              <LuMessageCircleQuestion />
              Help Center
            </button>
          </div>

          {/* Modal */}
          <div className="mt-3">
            <UpdateUserModal />
          </div>
        </div>
      </div>
    </div>
  );
};

export default myProfilePage;
