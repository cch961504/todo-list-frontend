import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ItemList from "./ItemList"; // Adjust the import path as necessary

describe("ItemList component", () => {
  test("adds a new item to the list", async () => {
    render(<ItemList />);
    const inputField = screen.getByRole("textbox");
    const addButton = screen.getByText("Add");

    // Simulate user typing a new item and clicking the 'Add' button
    fireEvent.change(inputField, { target: { value: "New Item" } });
    fireEvent.click(addButton);

    expect(screen.getByText("New Item")).toBeInTheDocument();
  });

  test("populate list", async () => {
    localStorage.setItem(
      "items",
      JSON.stringify([
        {
          id: 1,
          content: "Existing Item 1",
          checked: 0,
          owner: "owner",
          modified: 0,
        },
      ]),
    );
    render(<ItemList />);

    expect(screen.getByText("Existing Item 1")).toBeInTheDocument();
  });
});
