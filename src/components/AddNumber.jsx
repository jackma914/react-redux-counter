import React, { useState } from "react";
import store from "../store";

export default function AddNumber(props) {
  const [size, setSize] = useState("0");

  const addNumber = () => {
    store.dispatch({ type: "INCREMENT", size: size });
    // props.onClick(size);
  };

  const addNumberInput = (e) => {
    setSize(e.target.value);
  };

  return (
    <div>
      <h1>Add Number</h1>
      <input type="button" value="+" onClick={addNumber} />
      <input type="text" value={size} onChange={addNumberInput} />
    </div>
  );
}
