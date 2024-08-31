import { fireEvent, getByTestId, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { test, expect } from "@jest/globals";
import Child from "../components/Child";

test("check props value", () => {
  const { getByTestId } = render(<Child count={500} />);
  const getElement = getByTestId("child-count");
  expect(getElement.textContent).toBe("500");
});

test("check toggle text", () => {
  const { getByTestId } = render(<Child count={100} />);
  const toggleButton = getByTestId("toggle-button");
  const toggleText = getByTestId("toggle-text");
  expect(toggleText.textContent).toBe("false");
  fireEvent.click(toggleButton);
  expect(toggleText.textContent).toBe("true");
  fireEvent.click(toggleButton);
  expect(toggleText.textContent).toBe("false");
});
