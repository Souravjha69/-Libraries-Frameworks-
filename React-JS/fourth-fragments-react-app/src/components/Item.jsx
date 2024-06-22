import classes from "./Items.module.css";



function Item (props) {
    return (
        <>
        <li  className= "list-group-item" id={classes.listing}>
          <span className={classes.span}>{props.foodItem}</span>
          </li>
        </>
    )
}

export default Item;