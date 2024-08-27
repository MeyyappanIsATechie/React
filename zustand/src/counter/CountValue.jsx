import React from "react";
import useCounter from "../store/useCounter";

const CountValue = () => {
  const count = useCounter((state) => state.count);
  return <div>count : {count}</div>;
};

export default CountValue;
