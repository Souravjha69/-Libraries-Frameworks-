import React from "react";

function App () {

  // let foodItems = [];
  let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk", "Ghee"];

  // 1st way of Doing :-
  // if (foodItems.length === 0) {
  //   return <h3>I'm still hungry.</h3>
  // }

  // 2nd Way of Doing : -
  let emptyMsg = foodItems.length === 0 ? <h3>I'm still hungry.</h3> : null


  return (
    <>
   
    <h3>Healthy Food</h3>
    {emptyMsg}
    {/* 3rd Way of Doing :- 
    {foodItems.length === 0 ? <h3>I'm still hungry.</h3> : null} */}
    <ul className="list-group">
      {foodItems.map(item => <li key={item} className="list-group-item">{item}</li>)}
</ul>
    </>
  )
};

export default App;