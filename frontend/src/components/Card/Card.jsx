import React from "react";
import "./card.css";

function Card({ title, picture, releaseDate, genre, rate }) {
  return (
    <div className="card">
      {" "}
      <h3>{title}</h3>
      <img src={picture} alt={title} />
      <p>Release in : {releaseDate}</p>
      <p>Genre : {genre}</p>
      <p>Rate : {rate}/10</p>
    </div>
  );
}

export default Card;
