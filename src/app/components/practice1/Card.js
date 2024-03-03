import React from "react";

function Card(props) {
  const { name, degree, specialization, desc } = props.dataD;

  return (
    <div className="doctor-card">
      <h2>{name}</h2>
      <p>{degree}</p>
      <p>{specialization}</p>
      <p>{desc}</p>
    </div>
  );
}

export default Card;
