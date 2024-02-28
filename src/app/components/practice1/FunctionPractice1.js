import React from "react";

function Greeting({ name }) {
  return <h1>Hii, {name}!</h1>;
}

export default function Apps() {
  return (
    <>
      <Greeting name="Sara" />
      <Greeting name="Cahal" />
      <Greeting name="Edite" />
    </>
  );
}

