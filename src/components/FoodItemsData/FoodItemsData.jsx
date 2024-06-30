import { useContext } from "react";
import { assets } from "../../assets/assets";
import "./FoodItemsData.css";
import { StoreContext } from "../../context/StoreContext";

const FoodItemsData = ({ data }) => {
  const { id, name, image, description, price } = data;
  const { cartItems, addTocart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="food-item ">
      <div className="food-item-image-container relative">
        <img src={image} alt="" className="food-image" />
        {!cartItems[id] ? (
          <img
            className="absolute size-[40px] right-[15px] bottom-[15px] cursor-pointer object-cover"
            onClick={() => addTocart(id)}
            src={assets.add_icon_white}
          />
        ) : (
          <div className="food-item-counter absolute bottom-[15px] right-[15px] flex gap-[10px] items-center justify-center ">
            <img
              className="size-[40px] object-cover"
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt="remove_icon_red"
            />
            <span className="bg-white size-[40px] rounded-full flex items-center justify-center font-semibold">
              {cartItems[id]}
            </span>
            <img
              className="size-[40px] object-cover"
              onClick={() => addTocart(id)}
              src={assets.add_icon_green}
              alt="add_icon_green"
            />
          </div>
        )}
      </div>
      <div className="food-item-info px-[20px] my-[20px]">
        <div className="food-item-name-rating flex justify-between items-center mb-[10px]">
          <p className="text-[20px] leading-[20px] font-[500]">{name}</p>
          <img src={assets.rating_starts} alt="ratings" className="w-[70px]" />
        </div>
      </div>
      <p className="food-item-description opacity-80 text-[12px] px-[20px]">
        {description}
      </p>
      <p className="food-item-price text-[22px] leading-[22px] text-red-500 px-[20px] font-semibold my-[10px]">
        ${price}
      </p>
    </div>
  );
};

export default FoodItemsData;
