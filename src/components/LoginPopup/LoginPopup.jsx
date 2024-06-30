import React, { useState } from "react";
import { assets } from "../../assets/assets";

const LoginPopup = ({ setshowLogin }) => {
  const [currentState, setcurrentState] = useState("Sign Up");
  return (
    <div className="login-popup absolute z-10 bg-[#00000090] grid w-full h-full">
      <form className="login-form-container place-self-center w-[max(23vw,330px)] bg-white flex flex-col py-[25px] px-[30px] gap-[25px] rounded-xl text-[14px] ">
        <div className="login-popup-title flex justify-between items-center">
          <h2 className="text-[17px] font-semibold">{currentState}</h2>
          <img
            className="w-[16px] cursor-pointer"
            onClick={() => setshowLogin(false)}
            src={assets.cross_icon}
            alt="cross icon"
          />
        </div>
        <div className="login-popup-input flex flex-col gap-[20px]  ">
          {currentState === "Login" ? (
            <></>
          ) : (
            <input
              className="border-2 w-full border-[#c9c9c9] p-[10px] rounded-md "
              type="text"
              placeholder="Name"
              required
            />
          )}

          <input
            className="border-2 w-full border-[#c9c9c9] p-[10px] rounded-md "
            type="text"
            placeholder="Email"
            required
          />
          <input
            className="border-2 w-full border-[#c9c9c9] p-[10px] rounded-md "
            type="password"
            placeholder="Password"
            required
          />
        </div>
        <button className="p-[10px] bg-[#ff6347] rounded-md text-white">
          {currentState === "Sign Up" ? "Create Account" : "Login"}
        </button>
        <div className="login-popup-condition flex items-start justify-center gap-[10px]">
          <input className="mt-[6px]" type="checkbox" required />
          <p>By contnuing, i agree to the terms of use & privacy policy.</p>
        </div>
        {currentState === "Sign Up" ? (
          <p>
            Already have an account?
            <span
              className="text-[#ff6347] cursor-pointer text-[16px]"
              onClick={() => setcurrentState("Login")}
            >{" "}
              Login
            </span>
          </p>
        ) : (
          <p>
            Create a new account? 
            <span
              className="text-[#ff6347] cursor-pointer text-[16px]"
              onClick={() => setcurrentState("Sign Up")}
            > {" "} Click here
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
