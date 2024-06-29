// import React from "react";
import FoodItems from "./components/FoodItems";
import ErrorMsg from "./components/ErrorMsg";
import "./App.css";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";
function App() {
  // let foodItems = [];
  // let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk", "Ghee"];
  // let textStateArr = useState("Food Item Entered By User: -");
  // let textToShow = textStateArr[0];
  // let setTextToState = textStateArr[1];

  // const [textToShow, setTextToState] = useState("Food Item Entered By User: -");

  let [foodItems, setFoodItems] = useState([]);

  // 1st way of Doing :-
  // if (foodItems.length === 0) {
  //   return <h3>I'm still hungry.</h3>
  // }
  // console.log (`Current value of textToShow is ${textToShow}`)
  // 2nd Way of Doing : -
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItems = event.target.value;
      let newItems = [...foodItems, newFoodItems]
      setFoodItems(newItems);
      console.log('Food value entered is ' + newFoodItems)
    }
    // console.log(event);
    // setTextToState(event.target.value);
  };

  return (
    <>
      <Container>
        <h3 className="header">Healthy Food</h3>
        <ErrorMsg items={foodItems} />
        <FoodInput handleKeyDown={handleKeyDown} />
        <FoodItems items={foodItems} />
      </Container>
      <Container>
        <p>
          Above is the list of healthy foods that are good for your health and
          well being.
        </p>
      </Container>
    </>
  );
}

export default App;
