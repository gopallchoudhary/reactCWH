import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [showBtn, setshowBtn] = useState(false);
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "hey todo 1",
      desc: "todo 1 description",
    },
    {
      id: 2,
      title: "hey todo  2",
      desc: "todo 2 description",
    },
    {
      id: 3,
      title: "hey todo 3",
      desc: "todo 3 description",
    },
  ]);

  const Todo = ({ todo }) => {
    return (
      <div className="m-4 border-2 border-purple-600">
        <div className="todo">{todo.title}</div>
        <div className="todo">{todo.desc}</div>
      </div>
    );
  };

  const handleClick = () => {
    setCount(count + 1);
    setshowBtn(!showBtn);
  };

  return (
    <>
      <h1>Vite + React</h1>

      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} />;
      })}

      {showBtn ? (
        <button>showBtn is true</button>
      ) : (
        <button>showBtn is false</button>
      )}
      {/* {showBtn && (
        <button>I will shown only when second button is clicked</button>
      )} */}
      <div className="card">
        <button onClick={handleClick}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
