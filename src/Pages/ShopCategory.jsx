import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import { Items } from "../Components/Items/Items";
export const ShopCategory = (props) => {
  const { all_products } = useContext(ShopContext);
  return (
    <div className="shop-category">
      <img src={props.banner} alt="" />
      <div className="shopCategory-indexSort">
        <p>
          <span>Showing 1-12 </span>out of 36 products.
        </p>
        <div className="shopCategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopCategory-products">
        {all_products.map((items, i) => {
          if (props.category === items.category) {
            return (
              <Items
                key={i}
                id={items.id}
                name={items.name}
                image={items.image}
                new_price={items.new_price}
                old_price={items.old_price}
              />
            );
          } else return null;
        })}
      </div>
    </div>
  );
};
