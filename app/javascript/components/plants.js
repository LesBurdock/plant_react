import React, { useState, useEffect } from "react";
import axios from "axios";


function PlantDisplay(props) {
  return (
    <div className="grid">
      {props.plantList.map(plant => (
          <div className ="card" key={plant.id} >
            <img src = {plant.photo} alt="main" className="card-img"/>
            <div className="card-info">
            <h3  onClick={() => props.history.push(`/plant-list/${plant.id}`)}>
            {plant.name}
            </h3>
            <p>{plant.description}</p>
            </div>
            <p>€ {plant.price} per day</p>
          </div>
      ))}
    </div>
  );
}

export default PlantDisplay;
