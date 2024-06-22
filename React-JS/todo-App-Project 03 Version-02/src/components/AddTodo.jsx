import classes from "./AppName.module.css";

function AddTodo() {
  return (
    <>
      <div className="container text-center">
        <div className="row" id={classes.row}>
          <div className="col-6" id={classes.input}>
            <input type="text" placeholder="Enter Todo Here" required></input>
          </div>
          <div className="col-4" id={classes.input}>
            <input type="date" required></input>
          </div>
          <div className="col-2" id={classes.btn}>
            <button type="button" className="btn btn-success">
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddTodo;
