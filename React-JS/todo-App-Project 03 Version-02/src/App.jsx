// import React from "react";

import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
// import TodoItem1 from "./components/TodoItem1";

import "./App.css";
// import TodoItem from "./components/TodoItem";
import TodoItems from "./components/TodoItems";

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "04/10/2023",
    },
    {
      name: "Go to College",
      dueDate: "04/10/2023",
    },
    {
      name: "Going in School",
      dueDate: "04/10/2023"
    }
  ];

  return (
    <>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <TodoItems todoItemss= {todoItems}/>
      </center>
    </>
  );
}
export default App;
