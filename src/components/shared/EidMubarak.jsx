import React from "react";
import Marquee from "react-fast-marquee";

const EidMubarakMarquee = () => {
  return (
    <div className="flex justify-center items-center gap-1 py-4">
      <button className="btn btn-ghost text-xl bg-linear-to-r from-[#1ab45a] to-[#0f9d58]">
        Greetings
      </button>
      <Marquee pauseOnHover={true}>
        <div className="flex gap-10 text-gray-600 text-xl">
          <span>🌙 Eid Mubarak!</span>
          <span>🐄 Happy Qurbani</span>
          <span>🌙 Eid Mubarak! My Allah accept our sacrifice</span>
          <span>🐐 Please, dispose all immediate waste and deep burial.</span>
          <span>🌙 Hammba Mubarak!</span>
          <span>🐏 Safe & Halal</span>
          <span>🌙 Eid Mubarak!</span>
          <span>🐪 Thorough disinfection of the slaughter area.</span>
        </div>
      </Marquee>
    </div>
  );
};

export default EidMubarakMarquee;
