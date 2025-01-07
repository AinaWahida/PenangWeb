import React from "react";
import { Link } from "react-router-dom";
import "./Section.css";
import {faArrowCircleRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function FoodBeveragesSection() {
    return (
        <div className="food-section">
            <div className="title">
                <h2>Food & Beverages</h2>
                <Link to="/food-beverages" className="see-more-button">See More <FontAwesomeIcon icon={faArrowCircleRight}/></Link>
            </div>
            <div className="food-grid">
                <div className="food-item">
                    <img src={require("./Food/images/image1.1.jpg")} alt="Food 1"/>
                    <h3>Mee Goreng Sotong</h3>
                </div>
                <div className="food-item">
                    <img src={require("./Food/images/image1.2.jpg")} alt="Food 2"/>
                    <h3>Street Food</h3>
                </div>
                <div className="food-item">
                    <img src={require("./Food/images/image1.3.jpg")} alt="Food 3" />
                    <h3>Fine Dining</h3>
                </div>
                <div className="food-item">
                    <
                    <img src={require("./Food/images/image1.4.jpg")} alt="Food 4" />
                    <h3>Fine Dining</h3>
                </div>
                <div className="food-item">
                    <
                    <img src={require("./Food/images/image1.5.jpg")} alt="Food 5" />
                    <h3>Fine Dining</h3>
                </div>
            </div>

        </div>
    );
}

export default FoodBeveragesSection;
