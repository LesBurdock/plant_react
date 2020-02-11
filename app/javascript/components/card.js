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
    return (
        <Card key={props.id} className="card">
        <CardImg src={props.photo} alt="main" className="plantImg" />
        <CardTitle>{props.name}</CardTitle>
        <CardTitle>{props.description}</CardTitle>
        <CardSubtitle />
    </Card>
    );
}