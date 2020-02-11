import React, { useState, useEffect } from "react";
import PlantCard from "./card.js";
import axios from "axios";

function PlantDisplay(props) {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/plants/")
      .then(result => {
        setPlants(result.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className="plant-cards">
      {plants.map(plant => {
        return (
          <PlantCard
            name={plant.name}
            description={plant.description}
            price={plant.price}
            key={plant.id}
            image={plant.photo}
          />
          );
      })}
    </div>
  );
}

export default PlantDisplay;
