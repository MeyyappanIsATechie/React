import React from "react";

const Child = ({ count }) => {
  return (
    <div>
      <p data-testid="child-count">{count}</p>
    </div>
  );
};

export default Child;
