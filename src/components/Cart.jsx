import React, { useState, useEffect } from "react";

import "./Cart.css";

export default function Cart({ propsData, handleDelete }) {
  //   const selectedItem = props.propsData;

  //   const [items, setItems] = useState([]);

  const [count, setCount] = useState(1);

  //   useEffect(() => {
  //     setItems(selectedItem);
  //   }, [props]);

  const handlePlus = (id) => {
    console.log(id);
    const clickedItem = items.filter((item) => item.id === id);
    //   setCount(count + 1);

    // console.log(clickedItem);
  };

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {propsData &&
        propsData.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={`../img/${item.img}`} alt={item.img} />
            <h3>{item.name}</h3>
            <span onClick={() => handlePlus(item.id)}>+</span>
            <span id={item.id}>{count}</span>
            <span onClick={() => setCount(count - 1)}>-</span>
            <button onClick={() => handleDelete(item.id)}>X</button>
          </div>
        ))}
    </div>
  );
}
