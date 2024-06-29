import classes from "./Items.module.css";

function Item(props ) {

  return (
    <>
      <li className="list-group-item " id={classes.listing}>
        <span className={classes.span}>{props.foodItem}</span>
        <button
          className="btn btn-info"
          id={classes.button}
          onClick={props.handlebuyButton}
        >
          Buy
        </button>
      </li>
    </>
  );
}

export default Item;
