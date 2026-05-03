"use client";
import { authClient } from "@/lib/auth-client";
// import React, { useState } from "react";
import { FiEdit } from "react-icons/fi";

export function UpdateUserModal() {
  const onSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;
    console.log({ name, image });

    await authClient.updateUser({
      name,
      image,
    });

    document.getElementById("update_user_modal").close();
    window.location.reload();
  };

  return (
    <>
      {/* Open Button */}
      <button
        className="btn bg-[#4D833D] text-amber-50 text-[16px] font-normal"
        onClick={() => document.getElementById("update_user_modal").showModal()}
      >
        {" "}
        <FiEdit />
        Update Profile
      </button>

      {/* Modal */}
      <dialog id="update_user_modal" className="modal">
        <div className="modal-box">
          <h3 className="text-[#1E2939] font-bold text-xl mb-4">
            Update Profile
          </h3>

          <form onSubmit={onSubmit} className="space-y-3 ">
            <div className="flex justify-between items-center  gap-6">
              {/* Name */}
              <fieldset className="fieldset w-full">
                <legend className="fieldset-legend text-[16px] mb-1 text-[#1E2939]">
                  Name
                </legend>
                <input
                  name="name"
                  type="text"
                  className="input w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-green-500 outline-none"
                  placeholder="Type your name"
                />
              </fieldset>
              {/* Image url */}
              <fieldset className="fieldset w-full">
                <legend className="fieldset-legend text-[16px] mb-1 text-[#1E2939]">
                  Image URL
                </legend>
                <input
                  name="image"
                  type="url"
                  className="input w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-green-500 outline-none"
                  placeholder="Image URL"
                />
              </fieldset>
            </div>

            {/* Actions */}
            <div className="modal-action">
              <button type="submit" className="btn btn-success">
                Save
              </button>

              <button
                type="button"
                className="btn"
                onClick={() =>
                  document.getElementById("update_user_modal").close()
                }
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
}
