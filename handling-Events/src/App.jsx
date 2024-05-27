import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [form, setForm] = useState("");

  const handleChange = () => {
    alert("Hey I'm elite coder");
  };

  const inputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form);
    //setForm is asynchronous function so it will take some time to execute so console will run first
  };

  return (
    <>
      <div className="button">
        <button onClick={handleChange}>Click Me </button>
      </div>
      <input
        type="text"
        name="email"
        value={form.email ? form.email : ""}
        onChange={inputChange}
      />
      <input
        type="text"
        name="phone"
        value={form.phone ? form.phone : ""}
        onChange={inputChange}
      />
    </>
  );
}

export default App;
