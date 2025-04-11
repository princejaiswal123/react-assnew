import React, { useState, useEffect } from 'react';

const CreateCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Counter current value:", count);
  }, [count]);

  return (
    <div className="container">
      <h2>Counter with React</h2>
      <p className="show">Count: {count}</p>

      <div className="btn">
          <button onClick={() => setCount(count + 1)}>Increment </button>
          <button onClick={() => setCount(count - 1)}>Decrement </button>
           <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
};

export default CreateCounter;
