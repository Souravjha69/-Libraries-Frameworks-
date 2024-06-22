import classes from "./AppName.module.css";

function TodoItem({todoName, todoDate}) {
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
    );
}

export default TodoItem;