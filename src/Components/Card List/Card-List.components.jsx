import React from "react";
import Card from "../Card/Card.component";
import './card-list.styles.css';
const CardList = (props) => {
  return (
    <div className="card-list">
      {props.monsters.map((monster) => (
        <Card {...monster} />
      ))}
    </div>
  );
};

export default CardList;
