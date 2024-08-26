import React from "react";
import { useSelector } from "react-redux";

const Value = () => {
  const state = useSelector((state) => state);
  const { value } = state;
  return <p>Counter value is {value}</p>;
};

export default Value;
