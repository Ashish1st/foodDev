import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";
function Cart() {
  const { food_list, cartItems, removeFromCart, getTotalAmmount } =
    useContext(StoreContext);
    const navigate = useNavigate()
  return (
    <div className="cart mt-[100px] w-full">
      <div className="card-items">
        <div className="card-items-titles grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] grid-rows-1 items-center text-[max(1vw,12px)]">
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr className="w-full bg-transparent border-1 border-zinc-300" />
        {food_list.map((items, index) => {
          if (cartItems[items.id] > 0) {
            return (
              <div key={index} className="my-[10px]">
                <div className="w-full grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-[max(1vw,12px)] my-[20px]">
                  <img
                    src={items.image}
                    alt="items-image"
                    className="w-[50px] object-cover"
                  />
                  <p>{items.name} </p>
                  <p>${items.price} </p>
                  <p>{cartItems[items.id]}</p>
                  <p>${items.price * cartItems[items.id]}</p>
                  <button onClick={() => removeFromCart(items.id)}>X</button>
                </div>
                <hr className="w-full bg-transparent border-1 border-zinc-300" />
              </div>
            );
          }
        })}
      </div>
      <div className="card-bottom mt-[60px] capitalize w-full md:w-[60%]">
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
          <button onClick={()=> navigate("/Order")} className=" my-[20px] bg-[#ff6347] py-[12px] rounded-md w-[max(15vw,200px)] capitalize text-white">
            proceed to case out
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
