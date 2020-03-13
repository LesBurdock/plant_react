import React,  { useState } from "react";
import PlantDisplay from "components/plants";
import Home from "components/home";
import PlantCard from "components/card";
import useFetchPlants from '../data/plantData';
import ReactDom from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";


function App() {
const plants = useFetchPlants();
    return (
      <div>
      <nav className = 'navlinks'>
      <div>
        <Link to ='/plant-list'> List</Link>
        <Link to ='/'> Home </Link>
      </div>
    </nav>
          <Route exact path = "/" component={Home}/>
          <Route exact path = "/plant-list" render = { props => <PlantDisplay {...props} plantList = {plants}/> }/>
          <Route path = "/plant-list/:id" render = { props => <PlantCard {...props} plantList = {plants} />} />
           </div>
    );
}

export default App;
