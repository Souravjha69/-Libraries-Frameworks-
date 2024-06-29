import React, { useState } from "react";
import PropTypes from "prop-types";

function TextForm(props) {
  const [text, setText] = useState("");

  const handleOnClick = () => {
    console.log("Uppercase was clicked ");
    let newtext = text.toUpperCase();
    setText(newtext);
  };
  const handlelowClick = () => {
    console.log("Lower case was clicked");
    let newText2 = text.toLowerCase();
    setText(newText2);
  };
  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };
  const handleClearClick = () => {
    console.log("Clear button is clicked.");
    let newwText = "";
    setText(newwText);
  };
  const handleCopy = () => {
    console.log("I am Copy ");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  return (
    <>
      <div className="container my-3">
        <h1>{props.heading}</h1>
        <div className="mb-5">
          <label htmlFor="myBox" className="form-label">
            Textarea
          </label>
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary " onClick={handleOnClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-2 " onClick={handlelowClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-outline-success" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-outline-success mx-2" onClick={handleCopy}>
          Copy Text
        </button>
      </div>
      <div className="container my-4">
        <div className="card">
          <h2>Your Text Summary</h2>
          <div className="card-body">
            <p>
              {text.split(" ").length} words and {text.length} characters
            </p>
            <p>{text.split(" ").length * 0.008} Minutes to read</p>
            <h3>Preview</h3>
            <p>{text} </p>
          </div>
        </div>
      </div>
    </>
  );
}

TextForm.propTypes = { heading: PropTypes.string.isRequired };

export default TextForm;
