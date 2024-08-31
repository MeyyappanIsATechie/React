import React from "react";
import { useTheme } from "./ThemeProvider";

const ThemeContent = () => {
  const { theme } = useTheme();

  return (
    <div className={`content ${theme}`}>
      <h1>{theme === "light" ? "Light Theme" : "Dark Theme"}</h1>
      <p>This is some random content!</p>
    </div>
  );
};

export default ThemeContent;
