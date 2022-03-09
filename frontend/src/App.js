import { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  }

  return (
    <div className="App">
      <p id="Count-label">Count: {count}</p>
      <button id="Increment-button" onClick={incrementCount}>Increment count</button>
    </div>
  );
};

export default App;
