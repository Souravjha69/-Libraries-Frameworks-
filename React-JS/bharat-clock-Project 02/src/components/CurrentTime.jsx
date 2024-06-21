import React from "react";
import classes from "./Content.module.css";

function CurrentTime() {
    let time = new Date();
  return (
    <>
      <div className={classes.time}>
        <h4>This is the Current time: {time.toLocaleDateString()} - {time.toLocaleTimeString()}</h4>
      </div>
    </>
  );
}

export default CurrentTime;
