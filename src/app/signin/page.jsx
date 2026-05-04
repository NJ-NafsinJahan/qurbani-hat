"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

const signInPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSigninFunc = async (data) => {
    console.log("data", data);

    const { data: res, error } = await authClient.signIn.email({
      email: data.email, // required
      password: data.password, // required
      rememberMe: true,
      callbackURL: "/",
    });
    console.log(res, error);
    // ************
    if (error) {
      toast.error(error.message);
    }

    if (res) {
      toast.success("SignIn successful");
      router.push("/signin");
    }
  };
  console.log(errors, "error");
  // google authentication
  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };
  return (
    <div className="container mx-auto min-h-screen flex justify-center items-center ">
      <div className=" w-full max-w-md p-8 shadow-md rounded-2xl bg-green-50">
        <h2 className="font-bold text-3xl text-center mb-1.5 text-[#1E2939]">
          Welcome Back ! 👋
        </h2>
        <p className="font-normal text-sm text-center mb-6 text-[#919192]">
          SingIn to explore premium livestock
        </p>

        {/* form section */}
        <form className="space-y-4" onSubmit={handleSubmit(handleSigninFunc)}>
          <hr className="text-gray-200 border" />
          {/* Email */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-[18px] mb-1 text-[#1E2939]">
              Email
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
            SignIn
          </button>
        </form>
        <div className="divider">OR</div>
        <button
          onClick={handleGoogleSignIn}
          className=" btn w-full rounded-full mb-0.5 bg-[#4D833D] text-[20px] font-light text-[#fefefe]  hover:bg-[#4f8f3e] hover:scale-105 hover:shadow-md transition duration-300"
        >
          SignIn with Google
        </button>

        {/* for sign up */}
        <p className="mt-3 text-center">
          Don't have an account?
          <Link href={"/signup"} className="text-[#4f8f3e] font-medium">
            {" "}
            SignUp
          </Link>
        </p>
      </div>
    </div>
  );
};

export default signInPage;
