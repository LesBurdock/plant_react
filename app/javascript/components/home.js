import React from "react";
import { Link } from "react-router-dom";
// import "../assets/stylesheets/components/banner.scss";

export default function Home(props) {
    return (
        <div className="banner">
            <img className ="banner_img" src='https://images.unsplash.com/photo-1536882240095-0379873feb4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80'/>
            <h4 className ="header_text">Keep your plants happy during your vacation</h4>
              <div className="box">
              <h1>Plant Happy</h1>
              <h5> a place to find a plant sitter</h5>
          </div>
        </div>
    );
}