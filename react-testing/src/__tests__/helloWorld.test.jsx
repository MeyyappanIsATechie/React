import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { test, expect } from "@jest/globals";
import HelloWorld from "../components/HelloWorld";

test("render hello world text", () => {
  const { getByText } = render(<HelloWorld />);
  const checkText = getByText("Hello World");
  expect(checkText).toBeInTheDocument();
});

test("check name by test id", () => {
  const { getByTestId } = render(<HelloWorld />);
  const getElement = getByTestId("name");
  expect(getElement.textContent).toBe("Meyyappan");
});
