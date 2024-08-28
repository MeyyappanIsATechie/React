import React from "react";
import Child from "./Child";

const Counter = () => {
  const [count, setCount] = React.useState(0);
  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <div>
      <p>Count is: {count}</p>
      <button onClick={handleClick}>Click</button>
      <Child count={count} />
    </div>
  );
};

export default Counter;
