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
});
