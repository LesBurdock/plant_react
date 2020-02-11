import React, { useState, useEffect } from "react";
import PlantCard from "./card.js";
import axios from "axios";

function PlantDisplay(props) {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/plants/")
      .then(result => {
        console.log(result);
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
        <div className = "grid" >
          <PlantCard
            name={plant.name}
            description={plant.description}
            price={plant.price}
            key={plant.id}
            image={plant.photo}
          />
          </div>
          );
      })}
    </div>
  );
}

export default PlantDisplay;
