import React from "react";
import "./App.css";
import Lottery from "./Lottery";
import Info from "./Info"

function App() {
  return (
    <div className="App">
      <h1 className="Lottery-title">LottoMin</h1>
      <Lottery />
      <Info />
    </div>
  );
}

export default App;
