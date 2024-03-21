import React, { useState } from "react";

// NewPlantForm component allows users to add a new plant with its details
function NewPlantForm({ onAddPlant }) {
  // State to handle form data for the new plant
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: "",
  });

// handleChange updates the formData state when input fields change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData, // Spread operator to retain other field values
      [name]: value, // Computed property name to update the right field
    });
  };

  // handleSubmit is called when the form is submitted
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submit action
    onAddPlant(formData); // Calls the onAddPlant function passed as a prop with the form data
    setFormData({ name: "", image: "", price: "" }); // Reset form fields
  };

  // The form UI with inputs for plant name, image URL, and price
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Plant name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;