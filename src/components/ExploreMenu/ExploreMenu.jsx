import React from "react";
import { menu_list } from "../../assets/assets";
import "./ExploreMenu.css";

function ExploreMenu({ category, setCategory }) {
  return (
    <div className="explore-menu flex flex-col gap-[20px]">
      <h1 className="sm:text-[1.8vw] text-[20px] font-semibold">Explore menu</h1>
      <p className="sm:max-w-[60%] max-w-[100%]">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque qui
        fugiat architecto.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => (
          <div
            onClick={() =>
              setCategory((prev) =>
                prev === item.menu_name ? "All" : item.menu_name
              )
            }
            key={index}
            className="explore-menu-item"
          >
            <img
              className={category === item.menu_name ? "active" : ""}
              src={item.menu_image}
              alt="menu_images"
            />
            <h3>{item.menu_name}</h3>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
}

export default ExploreMenu;
