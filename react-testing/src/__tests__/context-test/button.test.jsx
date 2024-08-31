import React from "react";
import "@testing-library/jest-dom";
import { describe, expect, it } from "@jest/globals";
import { render } from "@testing-library/react";
import ThemeToggleButton from "../../context-test/Button";
import { ThemeProvider } from "../../context-test/ThemeProvider";

describe("test button", () => {
  it("render button", () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <ThemeToggleButton />
      </ThemeProvider>
    );
    const getToggleButton = getByTestId("toggle-btn");
    expect(getToggleButton).toBeInTheDocument();
  });
});
