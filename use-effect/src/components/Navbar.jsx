import React, { useEffect } from "react";

const Navbar = ({ color }) => {
  //Case 1
  useEffect(() => {
    alert("I will run on every render");
  });
  //Case 2
  useEffect(() => {
    alert("I will run on first render");
  }, []);

  //Case 3
  useEffect(() => {
    alert("color was changed");
  }, [color]);

  return <div>Hey I'm a navbar of {color} color</div>;
};

export default Navbar;
