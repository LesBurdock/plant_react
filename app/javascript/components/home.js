import React from "react";
import { Link } from "react-router-dom";
import Personal from "images/personal.png";
// import "../assets/stylesheets/components/banner.scss";

export default function Home(props) {
    return (
        <div className="banner">
            <img className ="banner_img" src= {Personal} />
            <h4 className ="header_text"> Keep your plants happy during your vacation </h4>
              <div className="box">
              <h1>Plant Happy</h1>
              <h5> a place to find a plant sitter</h5>
          </div>
        </div>
    );
}
