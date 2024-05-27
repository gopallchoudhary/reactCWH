import React from "react";
import "./Card.css";

const Card = ({ title, desc, imgSrc }) => {
  return (
    <div className="card">
      <img src={imgSrc} alt="" style={{ border: "2px solid aqua" }} />
      <h1>{title}</h1>
      <p>{desc}</p>
    </div>
  );
};

export default Card;
