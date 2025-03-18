import React, { useState } from "react";
import PropTypes from "prop-types";
function Textform(props) {
  const handleUpClick = () => {
    setText(text.toUpperCase());
  };
  const clearClick = () => {
    setText("");
  };
  const handleloClick = () => {
    setText(text.toLowerCase());
  };
  const copyText = () => {
    navigator.clipboard.writeText(text);
    alert("Text copied to clipboard!");
  };
  const handleOnchange = (event) => {
    setText(event.target.value);
  };
  //declare a new state variable which we call const
  const [text, setText] = useState("");
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <label form="exampleInputEmail1" className="form-label">
          {props.logoName}
        </label>
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnchange}
          rows="7"
        />
      </div>
      <button className="btn btn-outline-dark mx-1" onClick={handleUpClick}>
        Convert To Uppercase
      </button>
      <button className="btn btn-outline-dark mx-1" onClick={handleloClick}>
        Convert To Lowercase
      </button>
      <button className="btn btn-outline-dark mx-1" onClick={clearClick}>
        Clear Text
      </button>
      <button className="btn btn-outline-dark mx-1" onClick={copyText}>
        Copy Text
      </button>
      <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>
          {
            text
              .replace(/\n/g, " ")
              .split(" ")
              .filter((value) => value !== "").length
          }{" "}
          words and {text.trim().length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}

Textform.propTypes = {
  heading: PropTypes.string.isRequired,
  logoName: PropTypes.string.isRequired,
};
Textform.defaultProps = {
  heading: "Enter your heading",
  logoName: "Enter your logo name",
};

export default Textform;
