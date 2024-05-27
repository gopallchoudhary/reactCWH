import React from "react";
import { Link, NavLink } from "react-router-dom";

const active = (e) => {
  return e.isActive ? "red" : "";
};

const Navbar = () => {
  return (
    <nav>
      <li>
        <NavLink className={active} to="/">
          Home
        </NavLink>
      </li>

      <li>
        <NavLink className={active} to="/about">
          About
        </NavLink>
      </li>

      <li>
        <NavLink className={active} to="/login">
          Login
        </NavLink>
      </li>
    </nav>
  );
};

export default Navbar;
