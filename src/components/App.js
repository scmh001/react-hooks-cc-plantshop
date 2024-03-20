import React, { useState, useEffect } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";
import NewPlantForm from "./NewPlantForm";

function App() {
  // State to hold the list of plants
  const [plants, setPlants] = useState([]);


  useEffect(() => {
    // Fetch initial plants data from the server and set it to the state
    fetch("http://localhost:6001/plants")
      .then(response => response.json())
      .then(data => setPlants(data))
      .catch(error => console.error('Error:', error));
  }, []);




  // Function to add a new plant
  const onAddPlant = (newPlant) => {
    // API call to add the plant, then update state
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "Application/JSON",
      },
      body: JSON.stringify(newPlant),
    })
    .then(response => response.json())
    .then(addedPlant => {
      setPlants(prevPlants => [...prevPlants, addedPlant]);
    })
    .catch(error => console.error('Error:', error));
  };



  return (
    <div className="app">
      <Header />
      <NewPlantForm onAddPlant={onAddPlant} />
      <PlantPage plants={plants} />
    </div>
  );
}

export default App;