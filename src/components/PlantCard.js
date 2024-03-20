import React, { useState } from "react";

function PlantCard({ plant }) {
  // State to track if the plant is sold out
  const [isSoldOut, setIsSoldOut] = useState(false);

  // Function to toggle the sold out state
  const toggleSoldOut = () => {
    setIsSoldOut(!isSoldOut);
  };




  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      <button className={isSoldOut ? "sold-out" : "in-stock"} onClick={toggleSoldOut}>
        {isSoldOut ? "Out of Stock" : "In Stock"}
      </button>
      <button>Delete</button>
    </li>
  );
}

export default PlantCard;