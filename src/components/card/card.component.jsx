import React from "react";
import "./card.styles.css";

export const Card = props => (
    <li className="card-container">
      <img
        src={require(`${"../../../public/assets/images/"}${props.character.id}${".png"}`).default}
        alt="Mass Effect Character"
      />
      <h3>{props.character.name}</h3>
      <h4>{props.character.username}</h4>
      <p>{props.character.email}</p>
    </li>
  );
