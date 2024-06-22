// import React from "react";
import FoodItems from "./components/FoodItems";
import ErrorMsg from "./components/ErrorMsg";
import "./App.css";
function App () {

  // let foodItems = [];
  let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk", "Ghee"];

  // 1st way of Doing :-
  // if (foodItems.length === 0) {
  //   return <h3>I'm still hungry.</h3>
  // }

  // 2nd Way of Doing : -
 


  return (
    <>
   
    <h3 className="header">Healthy Food</h3>
    <ErrorMsg items ={foodItems}/>
    <FoodItems items = {foodItems}/>
    </>
  );
}

export default App;