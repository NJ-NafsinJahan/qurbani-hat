"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const signUpPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignupFunc = async (data) => {
    console.log("data", data);
    const { name, photo, email, password } = data;
    console.log(name, email);

    const { data: res, error } = await authClient.signUp.email({
      name: name, // required
      email: email, // required
      password: password, // required
      image: photo,
      callbackURL: "/",
    });
    console.log(res, error);
    if (error) {
      alert(error.message);
    }
    if (res) {
      alert("SingUp successful");
    }
  };
  // console.log(errors, "error");

  return (
    <div className="container mx-auto min-h-screen my-8 flex justify-center items-center ">
      <div className=" w-full max-w-md p-8 shadow-md rounded-2xl bg-green-50">
        <h2 className="font-bold text-3xl text-center mb-1.5 text-[#1E2939]">
          Create an account
        </h2>
        <p className="font-normal text-sm text-center mb-6 text-[#919192]">
          Create your account to continue
        </p>

        {/* form section */}
        <form className="space-y-3" onSubmit={handleSubmit(handleSignupFunc)}>
          <hr className="text-gray-200 border" />
          {/* Name */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-[18px] mb-1 text-[#1E2939]">
              Full Name
            </legend>
            <input
              type="text"
              className="input w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-green-500 outline-none"
              placeholder="Type your name"
              {...register("name", {
                required: "Email field is required",
              })}
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </fieldset>

          {/* photo-url */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-[18px] mb-1 text-[#1E2939]">
              Photo URL
            </legend>
            <input
              type="text"
              className="input w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-green-500 outline-none"
              placeholder="Type your photo url"
              {...register("photo", {
                required: "Photo URL field is required",
              })}
            />
            {errors.photo && (
              <p className="text-red-500">{errors.photo.message}</p>
            )}
          </fieldset>

          {/* Email */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-[18px] mb-1 text-[#1E2939]">
              Email Address
            </legend>

            <input
              type="email"
              className="input w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-green-500 outline-none"
              placeholder="Type your Email"
              {...register("email", {
                required: "Email field is required",
              })}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </fieldset>

          {/* password */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend  text-[18px] text-[#1E2939]">
              Password
            </legend>
            <input
              type="password"
              className="input w-full px-4  border rounded-xl focus:ring-2 focus:ring-green-500 outline-none"
              placeholder="Type your Password"
              {...register("password", {
                required: "Password field is required",
              })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </fieldset>

          {/* Remember + Forgot */}
          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-green-600" />
              Remember me
            </label>
            <a href="#" className="text-[#4f8f3e] hover:underline">
              Forgot password?
            </a>
          </div>

          {/* signin btn */}

          <button className=" btn w-full rounded-full mb-0.5 bg-[#4D833D] text-[20px] font-light text-[#fefefe]  hover:bg-[#4f8f3e] hover:scale-105 hover:shadow-md transition duration-300">
            SignUp
          </button>
        </form>
        {/* for sign up */}
        <p className="mt-3 text-center">
          Already have an account?
          <Link href={"/signin"} className="text-[#4f8f3e] font-medium">
            {" "}
            SignIn here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default signUpPage;
