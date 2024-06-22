// import React from "react";

import Item from "./Item";



function FoodItems({items}) {
    // let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk", "Ghee"];
  return (
    <>
      <ul className="list-group listing">
        {items.map((item) => (
          <Item key= {item} foodItem={item}/>
        ))}
      </ul>
    </>
  );
}
export default FoodItems;
 