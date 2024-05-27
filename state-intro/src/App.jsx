import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(10);

  const addValue = () => {
    if (count < 20) {
      setCount(count + 1);
    }
  };

  const removeValue = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <h1>Counter value: {count}</h1>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
