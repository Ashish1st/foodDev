import React from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
// import "../navbar/Navbar.css";
function Navbar({ setshowLogin }) {
  return (
    <div className="w-full flex justify-between py-2 items-center  ">
      <Link to="/">
        <img
          src={assets.logo}
          alt="logo"
          className="logo w-[100px] sm:w-[150px]"
        />
      </Link>
      <nav className="nav-menu md:flex hidden gap-[20px] text-[18px] items-center ">
        <Link to="/">Home</Link>
        <div>menu</div>
        <div>contact-us</div>
      </nav>
      <div className="nav-right flex items-center gap-[20px] sm:gap-[20px]">
        <div className="searchicn w-[20px] ">
          <img src={assets.search_icon} alt="search" className="w-full" />
        </div>
        <div className="cartbtn relative w-[20px]">
          <Link to="/Cart">
            <img src={assets.basket_icon} alt="addToCart" className="w-full" />
          </Link>
          <div className="dot absolute min-w-[10px] min-h-[10px] bg-red-500 rounded-full top-[-4px] right-[-6px]"></div>
        </div>
        <button
          onClick={() => setshowLogin(true)}
          className="text-[16px] border-solid border-2 border-[tomato] px-[10px] py-[4px] sm:px-[16px] rounded-full hover:bg-[#fff4f2]"
        >
          sign in
        </button>
      </div>
    </div>
  );
}

export default Navbar;
