import React, { useState } from 'react';

function CityFun(props) {

    const [cityName, setCityName] = useState('Surat')
    const [cityArea, setCityArea] = useState('461.6 km²')
    const [cityPopulation, setCityPopulation] = useState('6,520,000')

    const ChangeCity = () => {
        setCityName('GandhiNagar')
        setCityArea('326 km²')
        setCityPopulation('14.54 Lakhs')
    }

    return (
        <div>
            <h1>This is City Function based component</h1>

            <h2>My city is {cityName}</h2>
            <h2>My city area is {cityArea}</h2>
            <h2>My city population is {cityPopulation}</h2>

            <button onClick={ChangeCity}> Change city</button>
        </div>
    );
}

export default CityFun;