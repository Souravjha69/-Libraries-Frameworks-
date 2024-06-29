// import React from "react";

import Item from "./Item";

function FoodItems({ items }) {

  return (
    <>
      <ul className="list-group listing">
        {items.map((item) => (
          <Item
            key={item}
            foodItem={item}
            handlebuyButton={() => console.log(`${item} is being bought`)}
          />
        ))}
      </ul>
    </>
  );
}
export default FoodItems;
