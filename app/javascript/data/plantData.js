import React, { useState, useEffect } from "react";
import axios from "axios";

export default function useFetchPlants(){
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

  return plants;
}
