import React from "react";
import {
    Card,
    CardImg,
    CardTitle,
    CardBody,
    Button,
    CardSubtitle
} from "reactstrap";
// import "../index.css";
// import { Container } from "reactstrap";


export default function PlantCard(props) {
  const plantItem = props.find(item => item.id === (props.match.params.dataId))
    return (
      <div className ="grid" key = {props.id}>
        <Card key={props.id} className="card">
          <CardImg src={props.photo} alt="main" className="plantImg" />
          <CardTitle>{props.name}</CardTitle>
          <CardTitle>{props.description}</CardTitle>
          <CardSubtitle>{props.price}</CardSubtitle>
        </Card>
      </div>
    );
}
