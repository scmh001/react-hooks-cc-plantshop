import React, { useState } from "react";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plants }) {
  // State to hold the search query
  const [searchQuery, setSearchQuery] = useState("");

  // Function to update the search query state
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  // Filter plants based on the search query
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchQuery)
  );

  return (
    <main>
      <Search searchQuery={searchQuery} onSearchChange={handleSearchChange} />
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;


