import React from "react";

// import "../index.css";
// import { Container } from "reactstrap";


export default function PlantCard(props) {
  if (!props.plantList){
    return (
      <div>
        <h1>loading...</h1>
      </div>
      );
  } else {
  const specificPlant = props.plantList.find(plant => plant.id === Number(props.match.params.id));
  console.log(specificPlant);
    return (
      <div key = {specificPlant.id }>
        <div key = {specificPlant.id } className="card">
          <img src={specificPlant.photo} alt="main" className="card-img"/>
          <div className ="card-info">
          <h1>{specificPlant.name}</h1>
          <p>{specificPlant.description}</p>
          <p>{specificPlant.price}</p>
          </div>
        </div>
      </div>
    );
}
}
