import React from "react";
import ReactDOM from "react-dom";
import Hello from "./Hello";
import App from "./App";
import Welcome from "./Welcome"

ReactDOM.render(
  <div>
    <App />
    <Welcome name="Rahul" city="Delhi" />
    <Welcome name="Ajay" city="Benglore" />
    <Hello name="Dhananjay" />
  </div>,
  document.getElementById("root")
);
