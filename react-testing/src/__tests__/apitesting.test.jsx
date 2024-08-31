import React from "react";
import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it, jest } from "@jest/globals";
import ApiTesting from "../components/ApiTesting";

describe("api testing file", () => {
  it("check list of users fetching", async () => {
    // Mock fetch response
    globalThis.fetch = jest.fn().mockResolvedValueOnce({
      json: () =>
        Promise.resolve({
          users: [
            { id: 1, firstName: "John", email: "john@example.com" },
            { id: 2, firstName: "Jane", email: "jane@example.com" },
          ],
        }),
    });

    render(<ApiTesting />);

    // Check if the loading text is displayed
    expect(screen.getByText("Loading...")).toBeInTheDocument();

    await waitFor(() => {
      // Check if the user data is displayed
      expect(screen.getByText("John")).toBeInTheDocument();
      expect(screen.getByText("Jane")).toBeInTheDocument();
    });

    // Check if the loading text is removed
    expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
  });
});
