import classes from "./AppName.module.css";

function TodoItem1() {

    let todoName = 'Buy Milk';
    let todoDate = '4/10/2023';
    return (
        <>
        <div className="container text-center">
        <div className="row" id={classes.row}>
            <div className="col-6" id={classes.col}>{todoName}</div>
            <div className="col-4" id={classes.col}>{todoDate}</div>
            <div className="col-2"  id={classes.btn}>
              <button type="button" className="btn btn-danger">
                Delete
              </button>
            </div>
          </div>
        </div>
        </>
    )
}
export default TodoItem1;