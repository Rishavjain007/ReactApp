import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const changeTextToUpper = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to uppercase!", "success");
  };

  const changeTextToLower = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to lowercase!", "success");
  };

  const clearText = () => {
    setText("");
    props.showAlert("All text has been cleared!", "warning");
  };

  const onChanged = (e) => {
    setText(e.target.value);
  };

  const wordCount = text.trim().split(/\s+/).filter(word => word.length !== 0).length;

  return (
    <>
      <div className="container">
        <h1>Enter your text here</h1>
        <div className="form-floating">
          <textarea
            className="form-control"
            value={text}
            id="floatingTextarea2"
            style={{
              height: "100px",
              backgroundColor: props.mode === "dark" ? "#253744" : "white",
              color: props.mode === "light" ? "#253744" : "white",
            }}
            onChange={onChanged}
          ></textarea>
          <label htmlFor="floatingTextarea2">{props.heading}</label>
        </div>
        <div>
          <button
            className="btn btn-primary mt-2 mx-3"
            onClick={changeTextToUpper}
            disabled={text.length === 0}
          >
            Convert to Uppercase
          </button>
          <button
            className="btn btn-primary mt-2 mx-3"
            onClick={changeTextToLower}
            disabled={text.length === 0}
          >
            Convert to Lowercase
          </button>
          <button
            className="btn btn-primary mt-2 mx-3"
            onClick={clearText}
            disabled={text.length === 0}
          >
            Clear All Text
          </button>
        </div>
      </div>
      <div className="container mt-4">
        <h1>Your text summary</h1>
        <p>{wordCount} words and {text.length} characters</p>
        <h2>Preview</h2>
        <div className="border border-dark px-3 py-2">
          <pre>{text.length > 0 ? text : "Enter something above to preview it here!"}</pre>
        </div>
      </div>
    </>
  );
}
