import React, { useState } from "react";
import CityFun from "./CityFun";

function CountryFun(props) {
  const [countryName, setCountryName] = useState("India");
  const [timeZone, setTimeZone] = useState("GMT + 5:30");

  const changeCountry = () => {
    setCountryName("USA");
    setTimeZone("GMT -5");
  };

  return (
    <div>
      <h1>This is Country Function based component</h1>
      <h2>My country name is {countryName}</h2>
      <h2>My country time zone is {timeZone}</h2>

      <button onClick={changeCountry}>Change Country</button>
{/* 
      <h2>Your choices {count}</h2>
      <button onClick={() => setCount(count + 1)}>Click me</button> */}

      <CityFun countryFunName = {countryName} />
    </div>
  );
}

export default CountryFun;
