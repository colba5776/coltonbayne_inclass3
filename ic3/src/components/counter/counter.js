import React, { useState } from "react";

import "./counter.css";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleClick1 = () => {
    setCounter(counter + 1);
  };
  const handleClick2 = () => {
    setCounter(counter - 1);
  };
  return (
    <div className="container-wrapper">
      <div className="container">
        <h2>Current Number: {counter}</h2>
        <div className="buttons">
          <button onClick={handleClick1}>Increment [+]</button>
          <button onClick={handleClick2}>Decrement [-]</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
