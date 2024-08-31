import React from "react";
import "@testing-library/jest-dom";
import { describe, expect, it } from "@jest/globals";
import { render } from "@testing-library/react";
import { ThemeProvider } from "../../context-test/ThemeProvider";
import ThemeContent from "../../context-test/Theme";

describe("test toggle content", () => {
  it("should render correctly", () => {
    const { getByText } = render(
      <ThemeProvider>
        <ThemeContent />
      </ThemeProvider>
    );
    expect(getByText("Light Theme")).toBeInTheDocument();
  });
});
