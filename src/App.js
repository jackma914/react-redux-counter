import "./App.css";
import AddNumberRoot from "./components/AddNumberRoot";

function App() {
  return (
    <div className="App">
      <h1>Root</h1>
      <AddNumberRoot />
      <DisplayRoot />
    </div>
  );
}

function Display() {
  return (
    <div>
      <h1>Display Add Number</h1>
      <input type="text" value="0" readOnly />
    </div>
  );
}

function DisplayRoot() {
  return (
    <div>
      <h1>Display Add Rumber Root</h1>
      <Display />
    </div>
  );
}

export default App;
