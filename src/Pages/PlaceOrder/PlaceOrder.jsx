import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

const PlaceOrder = () => {
  const { getTotalAmmount } = useContext(StoreContext);
  return (
    <form className="place-order flex flex-col md:flex-row items-start justify-between gap-[50px] my-[100px]">
      <div className="place-order-left max-w-[30%,500px] ">
        <p className="title capitalize text-[30px] font-semibold "> delivery information</p>
        <div className="place-order-inputs flex gap-[10px]">
          <input className="mb-[15px] w-full p-[10px] border rounded-md outline-[tomato] " type="text" placeholder="First Name" />
          <input className="mb-[15px] w-full p-[10px] border rounded-md outline-[tomato] " type="text" placeholder="Last Name" />
        </div>
        <div className="email-input">
          <input className="mb-[15px] w-full p-[10px] border rounded-md outline-[tomato] " type="email" placeholder="example@gmail.com" />
          <textarea className="mb-[15px] w-full p-[10px] border rounded-md outline-[tomato] " type="text" placeholder="Address" />
        </div>
        <div className="place-order-inputs flex gap-[10px]">
          <input className="mb-[15px] w-full p-[10px] border rounded-md outline-[tomato] " type="text" placeholder="city" />
          <input className="mb-[15px] w-full p-[10px] border rounded-md outline-[tomato] " type="text" placeholder="state" />
        </div>
        <div className="place-order-inputs flex gap-[10px]">
          <input className="mb-[15px] w-full p-[10px] border rounded-md outline-[tomato] " type="text" placeholder="zipcode" />
          <input className="mb-[15px] w-full p-[10px] border rounded-md outline-[tomato] " type="text" placeholder="country" />
        </div>
        <div className="place-order-inputs flex gap-[10px]">
          <input className="mb-[15px] w-full p-[10px] border rounded-md outline-[tomato] " type="text" placeholder="phone" />
        </div>
      </div>
      <div className="place-order-right w-[max(40%,300px)] ">
      <div className="bottom-title text-2xl font-semibold my-[20px]">
          Cart Total
        </div>
        <div className="card-bottom-details">
          <div className="subtotal flex justify-between items-center">
            <h3>subtotal</h3>
            <p>${getTotalAmmount()}</p>
          </div>
          <hr className="w-full bg-transparent border-1 border-zinc-300 my-[10px]" />
          <div className="totale-dilevery-charges flex justify-between items-center">
            <h3>delivery fee</h3>
            <p>$2 </p>
          </div>
          <hr className="w-full bg-transparent border-1 border-zinc-300 my-[10px]" />
          <div className="total-ammount flex justify-between items-center">
            <h3>total ammount</h3>
            <p>${getTotalAmmount() + 2}</p>
          </div>
          <hr className="w-full bg-transparent border-1 border-zinc-300 my-[10px]" />
          <div className=" my-[20px] bg-[#ff6347] py-[12px] rounded-md w-[max(15vw,200px)] capitalize text-white text-center cursor-pointer">
            proceed to payment
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
