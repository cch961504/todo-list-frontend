import React, { useState } from "react";

const ItemList = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      content: "Existing Item 1",
      checked: 0,
      owner: "owner",
      modified: 0,
    },
    {
      id: 2,
      content: "Existing Item 2",
      checked: 0,
      owner: "owner",
      modified: 0,
    },
  ]);

  return (
    <div>
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
