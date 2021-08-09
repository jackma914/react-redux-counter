import React from "react";

function Display(props) {
  return (
    //container의 DisplayNumber의 코드와
    <div>
      <h1>Display Add Number</h1>
      <input type="text" value={props.number} readOnly />
    </div>
  );
}

export default Display;
