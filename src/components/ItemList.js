import React, { useState, useEffect } from "react";

const ItemList = () => {
  // Initialize state from local storage if available
  const [items, setItems] = useState(() => {
    const storedItems = localStorage.getItem("items");
    return storedItems ? JSON.parse(storedItems) : [];
  });

  // Update local storage when items change
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const [inputValue, setInputValue] = useState("");

  // Add a new item
  const addItem = () => {
    if (inputValue.trim() !== "") {
      const itemId = items.length + 1;
      setItems([
        {
          id: itemId,
          content: inputValue,
          checked: 0,
          owner: "owner",
          modified: Date.now(),
        },
        ...items,
      ]);
    }
  };

  // Handle input field changes
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <div>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button onClick={addItem}>Add</button>
      </div>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {items.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              checked={item.checked > 0}
              id={`checked-${item.id}`}
            />
            <label htmlFor={`checked-${item.id}`}>{item.content}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
