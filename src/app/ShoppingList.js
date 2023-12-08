"use client";
import React, { useState } from "react";
import ShoppingItem from "./ShoppingItem";

const ShoppingList = () => {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState("");
  const [idCounter, setIdCounter] = useState(0);

  const addItem = () => {
    if (itemName.trim() !== "") {
      const newItem = {
        id: idCounter,
        name: itemName,
      };
      setItems([...items, newItem]);
      setItemName("");
      setIdCounter(idCounter + 1);
    }
  };
  const deleteItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };
  return (
    <div>
      <h1>Shopping List</h1>
      <div>
        <input
          type="text"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
        <button onClick={addItem}>Add Item</button>
      </div>
      <ul>
        {items.map((item) => (
          <ShoppingItem key={item.id} item={item} deleteItem={deleteItem} />
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
