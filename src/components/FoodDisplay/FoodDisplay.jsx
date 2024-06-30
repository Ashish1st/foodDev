import React, { useContext } from "react";
import FoodItemsData from "../FoodItemsData/FoodItemsData";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";

function FoodDisplay({ category }) {
  const { food_list } = useContext(StoreContext);
  return (
    <div className="food-display sm:mt-[30px] mt-[10px]">
      <h2 className="text-[max(2vw,24px)] font-[600] ">Top Dishes Near You</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return <FoodItemsData data={item} key={index} />;
          }
        })}
      </div>
    </div>
  );
}

export default FoodDisplay;
