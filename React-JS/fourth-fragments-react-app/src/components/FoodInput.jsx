import classes from "./FoodInput.module.css";
function FoodInput({ handleKeyDown }) {
  return (
    <>
      <input
        type="text"
        placeholder="Enter Food Item Here"
        className={classes.input}
        onKeyDown={handleKeyDown}
      ></input>
    </>
  );
}
export default FoodInput;
