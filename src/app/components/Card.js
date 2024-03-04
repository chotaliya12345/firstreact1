// import React from "react";

// function Card(props) {
//   const { name, degree, specialization, desc } = props.dataD;

//   return (
//     <div className="doctor-card">
//       <h2>{name}</h2>
//       <p>{degree}</p>
//       <p>{specialization}</p>
//       <p>{desc}</p>
//     </div>
//   );
// }

// export default Card;

import React from "react";
import style from "./Card.modules.css"

function Card({ data }) {
  return (
    <>
      <p>{data.name}</p>
      <p>{data.price}</p>
    </>
  );
}

export default Card;
