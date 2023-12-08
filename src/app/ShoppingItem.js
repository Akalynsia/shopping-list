import React from "react";

const ShoppingItem = ({ item, deleteItem }) => {
  const { id, name } = item;
  return (
    <div className="list">
      <li>{name}</li>
      <button onClick={() => deleteItem(id)}>x</button>
    </div>
  );
};

export default ShoppingItem;
