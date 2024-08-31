import { useState } from "react";

const Child = ({ count }) => {
  const [theme, setTheme] = useState(false);
  return (
    <div>
      <p data-testid="child-count">{count}</p>
      <button data-testid="toggle-button" onClick={() => setTheme(!theme)}>
        Toggle Theme
      </button>
      <h1 data-testid="toggle-text">{theme ? "true" : "false"}</h1>
    </div>
  );
};

export default Child;
