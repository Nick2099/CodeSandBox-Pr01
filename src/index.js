import React from "react";
import ReactDOM from "react-dom";
const fName = "FirstName";
const lName = "LastName";
const num = 7;

ReactDOM.render(
  <div>
    <h1>
      Hello {fName} {lName}
    </h1>
    <h1>
      Hello {`${fName} ${lName}`}
    </h1>
    <p>Random number: {Math.floor(Math.random()*10)}</p>
    <p>Your lucky number is {num}</p>
  </div>,
  document.getElementById("root")
);
