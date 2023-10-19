import React from "react";
import './Card.css';

const Card = ({ suit, value }) => (
  <div className={`card ${suit}`}>
    <span className="value">{value}</span>
    <div className="suit">{suit}</div>
  </div>
);

export default Card;
