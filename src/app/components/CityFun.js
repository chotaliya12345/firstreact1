import React, { useState } from "react";

function CityFun({countryFunName}) {
  const [cityName, setCityName] = useState("Surat");
  const [cityArea, setCityArea] = useState("461.6 km²");
  const [cityPopulation, setCityPopulation] = useState("6,520,000");

  const ChangeCity = () => {
    setCityName("New York");
    setCityArea("783.8 km²");
    setCityPopulation("84.7 lakhs");
  };

  return (
    <div>
      <h1>This is City Function based component</h1>

      <h1>
        My City Is {countryFunName === "India" ? "Surat" : "New York"}
      </h1>
      <h2>
        City area is:{" "}
        {countryFunName === "India" ? "461.6 km²" : "783.8 km²"}
      </h2>
      <h2>
        City population is:{" "}
        {countryFunName === "India" ? "6,520,000" : "84.7 lakhs"}
      </h2>

      <button onClick={ChangeCity}> Change city</button>
    </div>
  );
}

export default CityFun;
