import React from 'react';

function Card({ data }) {
    console.log(data);
    return (
        <div>
            <h1>{data.name}</h1>
            <p>{data.price}</p>
        </div>
    );
}

export default Card;