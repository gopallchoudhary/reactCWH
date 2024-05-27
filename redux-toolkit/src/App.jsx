import { useState } from "react";
import Navbar from "./components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  multiply,
  divide,
} from "./redux/counter/counterSlice";
import "./App.css";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <Navbar />
      <div>
        <button
          onClick={() => {
            dispatch(divide());
          }}
        >
          /2
        </button>
        <button
          onClick={() => {
            dispatch(decrement());
          }}
        >
          -
        </button>
        counter is {count}
        <button
          onClick={() => {
            dispatch(increment());
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            dispatch(multiply());
          }}
        >
          x2
        </button>
      </div>
    </>
  );
}

export default App;
