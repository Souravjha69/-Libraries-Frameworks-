import React from "react";
import classes from "./Header.module.css";

function Header() {
  return (
    <>
      <div className="header text-center" id={classes.header}>
        <h1>Bharat Clock</h1>
      </div>
    </>
  );
}

export default Header;
