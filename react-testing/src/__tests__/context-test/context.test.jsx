import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it, jest } from "@jest/globals";
import { ThemeProvider, useTheme } from "../../context-test/ThemeProvider";
import App from "../../App";
import ThemeContent from "../../context-test/Theme";

const ToggleConsumer = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <button role="button" onClick={toggleTheme}>
        Toggle theme
      </button>
      <ThemeContent />
    </div>
  );
};

describe("test theme provider context", () => {
  it("renders with initial light theme", () => {
    const { getByText } = render(
      <ThemeProvider>
        <div>child component</div>
      </ThemeProvider>
    );

    expect(getByText("child component")).toBeInTheDocument();
  });

  it("renders light-dark theme", () => {
    const { getByText, getByRole } = render(
      <ThemeProvider initialTheme="dark">
        <ToggleConsumer />
      </ThemeProvider>
    );

    const getToggleButtonByRole = getByRole("button", {
      name: /toggle theme/i,
    });
    expect(getByText("Light Theme")).toBeInTheDocument();
    fireEvent.click(getToggleButtonByRole);
    waitFor(() => {
      expect(getByText("Dark Theme")).toBeInTheDocument();
    });
    fireEvent.click(getToggleButtonByRole);
    waitFor(() => {
      expect(getByText("Light Theme")).toBeInTheDocument();
    });
  });
});
