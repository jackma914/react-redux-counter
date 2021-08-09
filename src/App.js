import "./App.css";
import AddNumberRoot from "./components/AddNumberRoot";
import DisplayRoot from "./components/DisplayRoot";
import React, { useState } from "react";

function App() {
  return (
    <div className="App">
      <h1>Root</h1>
      <AddNumberRoot />
      <DisplayRoot />
    </div>
  );
}

export default App;
