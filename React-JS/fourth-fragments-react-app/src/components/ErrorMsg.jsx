// import React from "react";


function ErrorMsg ({items}) {
    // let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk", "Ghee"];

    let emptyMsg = items.length === 0 ? <h3>Im still hungry.</h3> : null
    return <>
    {emptyMsg}
    </>
}
export default ErrorMsg;