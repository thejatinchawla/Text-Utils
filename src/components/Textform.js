import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("");

  const onChange = (event) => {
    setText(event.target.value);
  };

  const upperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "Success :");
  };
  const lowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "Success :");
  };
  const clear = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared", "Success :");
  };
  const copy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied to clipboard", "Success :");
  };
  return (
    <div className={`text-${props.mode === "light" ? "dark" : "light"}`}>
      <div className="mb-3">
        <p>
          <span id="enterText">TEXT UTILS :</span>&nbsp;Word Counter | UpperCase
          | LowerCase{" "}
        </p>
        <textarea
          className="form-control"
          style={{
            backgroundColor: props.mode === "dark" ? "#212529" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
          value={text}
          onChange={onChange}
          placeholder="Enter or Paste your Text : "
          rows="6"
          id="myBox"
        ></textarea>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mt-3 mx-1"
          onClick={upperCase}
        >
          Convert to UpperCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mt-3 mx-1"
          onClick={lowerCase}
        >
          Convert to LowerCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-secondary mt-3 mx-1"
          onClick={copy}
        >
          Copy to Clipboard
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-secondary mt-3 mx-1"
          onClick={clear}
        >
          Clear Text
        </button>
      </div>
      <hr />
      <h3>Text Summary</h3>
      <p>
        {
          text.split(" ").filter((element) => {
            return element.length !== 0;
          }).length
        }{" "}
        words and {text.length} Characters{" "}
      </p>
      <hr />
      <h2>Preview</h2>
      <p>{text.length > 0 ? text : "Nothing to preview"} </p>
    </div>
  );
}
