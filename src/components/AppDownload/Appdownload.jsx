import React from "react";
import { assets } from "../../assets/assets";

const Appdownload = () => {
  return (
    <>
      <div className=" text-center my-[50px] text-[max(3vw,20px)] capitalize font-semibold">
        <h1 className="">
          for better experience download <br /> <span className="text-[#ff6347]">tomato</span> app
        </h1>
        <div className="app-download-platforms  flex items-center justify-center gap-[max(2vw,10px)] mt-[40px]">
          <img  className="w-[max(30vw,120px)] max-w-[180px]" src={assets.app_store} alt="app-store" />
          <img  className="w-[max(30vw,120px)] max-w-[180px]" src={assets.play_store} alt="play-store" />
        </div>
      </div>
    </>
  );
};

export default Appdownload;
