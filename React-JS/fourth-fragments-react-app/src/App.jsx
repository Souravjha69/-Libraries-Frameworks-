// import React from "react";
import FoodItems from "./components/FoodItems";
import ErrorMsg from "./components/ErrorMsg";
import "./App.css";
import Container from "./components/Container";
function App() {
  // let foodItems = [];
  let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk", "Ghee"];

  // 1st way of Doing :-
  // if (foodItems.length === 0) {
  //   return <h3>I'm still hungry.</h3>
  // }

  // 2nd Way of Doing : -

  return (
    <>
      <Container>
        <h3 className="header">Healthy Food</h3>
        <ErrorMsg items={foodItems} />
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
