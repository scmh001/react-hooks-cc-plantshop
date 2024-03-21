import React, { useState, useEffect } from "react";

// PlantCard component represents a single plant item with its details and actions
function PlantCard({ plant, onDeletePlant, onUpdatePrice }) {
   // State to track if the plant is sold out
  const [isSoldOut, setIsSoldOut] = useState(false);
   // State to track the price of the plant
  const [price, setPrice] = useState(plant.price);

  // Function to toggle the sold out state of the plant
  const toggleSoldOut = () => {
    setIsSoldOut(!isSoldOut);
  };

  // Handle price change in the input field and update the state and parent component
  const handlePriceChange = (e) => {
    const updatedPrice = e.target.value;
    setPrice(updatedPrice);
    onUpdatePrice(plant.id, updatedPrice);
  };

   // useEffect hook to persist price changes to localStorage whenever the price changes
  useEffect(() => {
    localStorage.setItem(`plant_price_${plant.id}`, price);
  }, [price, plant.id]);

  // useEffect hook to initialize price from localStorage if available when the component mounts
  useEffect(() => {
    const storedPrice = localStorage.getItem(`plant_price_${plant.id}`);
    if (storedPrice) {
      setPrice(storedPrice); // Set the price state to the stored price if it exists
    }
  }, [plant.id]);

  // Render the plant card UI with image, name, price input, and action buttons
  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: 
        <input 
          type="number" 
          value={price} 
          onChange={handlePriceChange} 
          step="0.01" 
        />
      </p>
      <button className={isSoldOut ? "sold-out" : "in-stock"} onClick={toggleSoldOut}>
        {isSoldOut ? "Out of Stock" : "In Stock"}
      </button>
      <button onClick={() => onDeletePlant(plant.id)}>Delete</button>
    </li>
  );
}

export default PlantCard;