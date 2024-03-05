import React, { useState } from "react";

function Counter(props) {
  const [count, setCount] = useState(0);
  return (
    <div>
      
      <h2>Your choices {count}</h2>
      <button onClick={() => setCount(count + 1)} disabled = {count < 5 ? false : true} >+</button>
      <button onClick={() => setCount(count - 1)} disabled = {count === 0 ? true : false} >-</button>
    </div>
  );
}

export default Counter;
