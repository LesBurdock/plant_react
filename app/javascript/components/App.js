import React from "react";
import PlantDisplay from "components/plants";
import Home from "components/home";
import Card from "components/card";
import ReactDom from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

// const Star = ({ selected = false, onClick = f => f }) => (
//   <div className={selected ? "star selected" : "star"} onClick={onClick} />
// );

function App() {
    return (
      <div>
      <nav className = 'navlinks'>
      <div>
        <Link to ='/plant-list'> List</Link>
        <Link to ='/'> Home </Link>
      </div>
    </nav>
          <Route exact path = "/" component={Home}/>
          <Route path = "/plant-list" component = { PlantDisplay }/>
          <Route path= "item-list/:dataID" component={Card}/>
          </div>
    );
}

export default App;
