import React from "react";
import { AiTwotoneMail } from "react-icons/ai";
import { GrInstagram } from "react-icons/gr";
import { HiOutlineMail } from "react-icons/hi";
import { IoLogoYoutube } from "react-icons/io";
import { LuMapPinHouse, LuPhoneCall } from "react-icons/lu";
import { SiFacebook } from "react-icons/si";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center md:footer-horizontal bg-[#111827] text-primary-content p-6 md:p-10 gap-4 md:gap-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* about qurbani hat */}
          <div className=" text-left p-3 md:p-5">
            <h1 className="text-[26px] font-medium text-[#5ceb58]  ">
              Qurbani Hat
            </h1>
            <br />
            <p className=" text-[12px] sm:text-[14px] md:text-[14px] font-light leading-relaxed mt-2">
              <span className="text-[18px] font-medium">Qurbani Hat </span>is a
              modern livestock marketplace, where people can explore animals for
              Qurbani such as cows and goats.It producing highest quality and
              standard livestock in markets. Established in 2006 at Dhaka,
              Qurbani Hat is the first approved world-class abattoir in the
              country who offers Halal, Safe, Hygienic, and Superior Quality
              Cow, Goat, Sheep, and Camel.{" "}
            </p>
          </div>

          {/* useful links */}
          <div className=" text-left">
            <div className="text-left text-[20px] ">
              <h1 className="text-[18px] font-medium text-[#5ceb58] ">
                Contacts
              </h1>
              <ul className="text-[14px] p-4">
                {/* pay */}
                <li className="relative cursor-pointer group inline-flex ">
                  Where to Pay?
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#6eeb48] transition-all duration-300 group-hover:w-full"></span>
                </li>

                {/* conditions */}
                <li className="relative cursor-pointer group">
                  Terms & Conditions
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#6eeb48] transition-all duration-300 group-hover:w-full"></span>
                </li>

                {/* privacy */}
                <li className="relative cursor-pointer group inline-flex gap-3">
                  Privacy Policy
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#6eeb48] transition-all duration-300 group-hover:w-full"></span>
                </li>
              </ul>
            </div>
          </div>

          {/* contacts */}
          <div className="text-left text-[20px] ">
            <h1 className="text-[18px] font-medium text-[#5ceb58] ">
              Contacts
            </h1>
            <ul className="text-[14px] p-3">
              {/* Phone */}
              <li className="relative cursor-pointer group inline-flex gap-3">
                <span className="text-[20px]">
                  {" "}
                  <LuPhoneCall />
                </span>
                Phone: 90128-444-333
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#6eeb48] transition-all duration-300 group-hover:w-full"></span>
              </li>

              {/* email */}
              <li className="relative cursor-pointer group inline-flex  gap-3">
                {" "}
                <span className="text-[20px]">
                  <HiOutlineMail />
                </span>
                Email: qurbanihat@gmail.com
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#6eeb48] transition-all duration-300 group-hover:w-full"></span>
              </li>

              {/* address */}
              <li className="relative cursor-pointer group inline-flex gap-3">
                {" "}
                <span className="text-[20px]">
                  <LuMapPinHouse />
                </span>
                Address: 383-192 Tejgoan, Dhaka-1208, Bangladesh
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#6eeb48] transition-all duration-300 group-hover:w-full"></span>
              </li>
            </ul>
          </div>
        </div>

        {/* copy right div */}
        <div className="text-center md:text-left">
          <div className="mb-6">
            <p>Social Links</p>
            <hr className="text-gray-500 " />
            <div className="flex gap-4 mt-2">
              <SiFacebook />
              <GrInstagram />
              <IoLogoYoutube />
            </div>
          </div>
          <h1>© 2026 Qurbani Hat. All rights reserved.</h1>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
