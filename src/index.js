import React from "react";
import ReactDOM from "react-dom";
const fName = "FirstName";
const lName = "LastName";
const num = 7;
var currentDate = new Date();
const currentYear = currentDate.getFullYear();

const customStyle = {
  color: "indigo",
  backgroundColor: "silver",
  fontSize: "2rem",
  border: "1px solid black"
};

customStyle.color = "darkgreen";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      Hello {fName} {lName}
    </h1>
    <h1 style={{color: "red"}}>Hello {`${fName} ${lName}`}</h1>
    <p>Random number: {Math.floor(Math.random() * 10)}</p>
    <p>Your lucky number is {num}</p>
    <p>Current year {currentYear}</p>
    <h2 style={customStyle}>My favorit food</h2>
    <ul>
      <li>Pizza</li>
      <li>Pasta</li>
    </ul>
    <div>
      <img className="food-img" alt="random photo" src="https://picsum.photos/300/150"></img>
      <img className="food-img" alt="random photo" src="https://picsum.photos/400/200"></img>
    </div>
  </div>,
  document.getElementById("root")
);
