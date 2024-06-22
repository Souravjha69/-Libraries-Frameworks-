import classes from "./Buttonscontainer.module.css";

function Buttonscontainer() {
  const buttonNames = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', 
    '7', '8', '/', '=', '9', '0', '0'
  ]
  return (
    <>
      <div className={classes.buttonscontainer}>
        {buttonNames.map(buttonName=> {
        return <button className={classes.button}>{buttonName}</button>} )}
      </div>
    </>
  );
}
export default Buttonscontainer;
