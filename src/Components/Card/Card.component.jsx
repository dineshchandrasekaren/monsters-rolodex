import React from "react";
import './card.styles.css';
const Card = (props) => {
  return (
    <div key={props.id} className="card-container">
      <img
        className="monster"
        src={`https://robohash.org/7f${props.id}.png?set=set2`}
        alt={props.name}
      />
      <h3>{props.name}</h3>
      <p>{ props.email}</p>
    </div>
  );
};

export default Card;
