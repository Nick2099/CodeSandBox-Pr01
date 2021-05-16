import React from "react";
import ReactDOM from "react-dom";
const fName = "FirstName";
const lName = "LastName";
const num = 7;
var currentDate = new Date();
const currentYear = currentDate.getFullYear();

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
    <p>Current year {currentYear}</p>
  </div>,
  document.getElementById("root")
);
