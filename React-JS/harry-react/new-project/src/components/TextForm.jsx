import React, { useState } from 'react';
import PropTypes from 'prop-types';

function TextForm(props) {
   const [text, setText] = useState("Enter the text here...")

   const handleOnClick = () => {
    console.log("Uppercase was clicked ");
    setText("You have clicked on handleUpClicked");
   }
   const handleOnChange = () => {
    console.log ("On change");
    setText(event.target.value)
   }

    return (
        <>
            <div className="container my-3">
                <h1>{props.heading}</h1>
                <div className="mb-5">
                    <label htmlFor="myBox" className="form-label" >Textarea</label>
                    <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleOnClick}>Convert to UpperCase</button>
            </div>
        </>
    );
}

TextForm.propTypes = { heading: PropTypes.string.isRequired };

export default TextForm;
