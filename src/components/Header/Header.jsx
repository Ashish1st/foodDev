import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="headercontainer h-[34vw] my-[30px] mx-auto">
      <div className="headerContent absolute flex flex-col items-start gap-[1.5vw] max-w-[65%] sm:max-w-[50%] bottom-[10%] left-[6vw]">
        <h2 className="font-semibold text-white text-[max(4.5vw,22px)] leading-[max(4.5vw,22px)]">
          Bringing delicious meals to your doosteps ,
        </h2>
        <p className="text-[1.3vw] text-white font-semibold leading-[1.3vw] hidden sm:block">
          because good food is always just a click away.
        </p>
        <button className="py-[1vw] px-[2.3vw] border-2 bg-white text-[max(1vw,13px)] rounded-full">
          view more
        </button>
      </div>
    </div>
  );
}

export default Header;
