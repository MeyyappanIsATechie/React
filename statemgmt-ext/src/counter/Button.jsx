import React from "react";
import { useDispatch } from "react-redux";
import { decrement, increment, reset } from "../store/slices/counter";

const Button = () => {
  const dispatch = useDispatch();
  const handleIncrement = () => dispatch(increment({ id: 1 }));
  const handleDecrement = () => dispatch(decrement());
  const handleReset = () => dispatch(reset());
  return (
    <div className="">
      <button
        onClick={handleIncrement}
        className="bg-black text-white font-bold"
      >
        Increase count
      </button>
      <button
        onClick={handleDecrement}
        className="bg-black text-white font-bold"
      >
        Decrease count
      </button>
      <button onClick={handleReset} className="bg-black text-white font-bold">
        reset count
      </button>
    </div>
  );
};

export default Button;
