import React from "react";
import { useTheme } from "./ThemeProvider";

const ThemeToggleButton = () => {
  const { toggleTheme } = useTheme();

  return (
    <button data-testid="toggle-btn" onClick={toggleTheme}>
      Toggle Theme
    </button>
  );
};

export default ThemeToggleButton;
