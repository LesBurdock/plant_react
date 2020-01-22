
import React from "react";
import PlantDisplay from "components/plants";
import "bootstrap/dist/css/bootstrap.css";

// const Star = ({ selected = false, onClick = f => f }) => (
//   <div className={selected ? "star selected" : "star"} onClick={onClick} />
// );

function App() {
  return (
    <div className="card-body">
      <PlantDisplay />
    </div>
  );
}

export default App;
