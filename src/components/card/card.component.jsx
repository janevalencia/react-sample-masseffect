import React from "react";
import "./card.styles.css";

export const Card = (props) => {
  return (
    <li className="card-container">
      <img
        src={`${"/assets/images/"}${props.character.id}${".png"}`}
        alt="Mass Effect Character"
      />
      <h3>{props.character.name}</h3>
      <h4>{props.character.username}</h4>
      <p>{props.character.email}</p>
    </li>
  );
};
