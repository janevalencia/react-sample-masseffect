import React from "react";
import "./card-list.styles.css";
import { Card } from "../card/card.component";

export const CardList = props => (
    <ul className="cardlist">
      {props.characters.length === 0 ? <li style={{color: "white"}} >{"No Result"}</li> : props.characters.map(
        (character) => (
          <Card key={character.id} character={character} />
        )
      )}
    </ul>
  );
