import React from "react";
import ReactDOM from "react-dom";
const fName = "FirstName";
const lName = "LastName";
const num = 7;
var currentDate = new Date();
const currentYear = currentDate.getFullYear();

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      Hello {fName} {lName}
    </h1>
    <h1>Hello {`${fName} ${lName}`}</h1>
    <p>Random number: {Math.floor(Math.random() * 10)}</p>
    <p>Your lucky number is {num}</p>
    <p>Current year {currentYear}</p>
    <h2>My favorit food</h2>
    <ul>
      <li>Pizza</li>
      <li>Pasta</li>
    </ul>
    <div>
      <img className="food-img" src="https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg"></img>
      <img className="food-img" src="https://cdn.gutekueche.de/upload/rezept/1777/spaghetti-carbonara.jpg"></img>
    </div>
  </div>,
  document.getElementById("root")
);
