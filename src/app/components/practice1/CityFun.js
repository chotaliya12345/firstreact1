import React, { useState } from 'react';
import CountryFun from './CountryFun';

function CityFun(props) {

    const [cityName, setCityName] = useState('Surat')
    const [cityArea, setCityArea] = useState('461.6 km²')
    const [cityPopulation, setCityPopulation] = useState('6,520,000')

    const ChangeCity = () => {
        setCityName('New York')
        setCityArea('783.8 km²')
        setCityPopulation('84.7 lakhs')
    }

    return (
        <div>
            <h1>This is City Function based component</h1>

            <h2>My city is {cityName}</h2>
            <h2>My city area is {cityArea}</h2>
            <h2>My city population is {cityPopulation}</h2>

            <button onClick={ChangeCity}> Change city</button>
            <CountryFun cityname={cityName}  />
        </div>
    );
}

export default CityFun;