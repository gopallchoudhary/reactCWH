import React from "react";
import { memo } from "react";

const Navbar = ({ adjective, getAdjective }) => {
  console.log("Navbar is rendered");

  return (
    <div>
      I'm a high end {adjective} Navbar
      <button
        onClick={() => {
          getAdjective();
        }}
      >
        {getAdjective()}
      </button>
    </div>
  );
};

export default memo(Navbar); //props change hoga to render hoga i..e naye props aaye to re-render hoga
