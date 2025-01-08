import React from "react";
import { Link } from "react-router-dom";
import "./Section.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowCircleRight} from "@fortawesome/free-solid-svg-icons";

function FoodBeveragesSection() {
    return (
        <div className="food-section">
            <div className="title">
                <h2>Discover hidden flavors in every bite and sip</h2>
                <Link to="/food-beverages" className="see-more-button">See More <FontAwesomeIcon icon={faArrowCircleRight}/></Link>
            </div>
            <div className="description"> Delight in every bite and sip as you uncover unique flavors and hidden culinary gems, crafted to satisfy your cravings and elevate your dining experience.
            </div>
            <div className="food-grid">
                <div className="food-item">
                    <img src={require("./Food/images/image1.1.jpg")} alt="Food 1"/>
                    <h3>Mee Goreng Sotong</h3>
                    <p>Spicy stir-fried noodles with tender squid and sambal.</p>
                </div>
                <div className="food-item">
                    <img src={require("./Food/images/image0.1.jpeg")} alt="Food 2"/>
                    <h3>Laksa Kuah Pekat</h3>
                    <p>A tangy, spicy broth with fish and fresh herbs.</p>
                </div>
                <div className="food-item">
                    <img src={require("./Food/images/image3.3.jpg")} alt="Food 3"/>
                    <h3>Ais Tingkap</h3>
                    <p>A refreshing shaved ice treat with colorful syrups.</p>
                </div>
                <div className="food-item">
                    <img src={require("./Food/images/image4.4.jpg")} alt="Food 4"/>
                    <h3>Pasembur Kareem</h3>
                    <p>Crispy fritters and vegetables in a savory sauce.</p>
                </div>
                <div className="food-item">
                    <img src={require("./Food/images/image5.1.jpeg")} alt="Food 5"/>
                    <h3>Wantan Mee</h3>
                    <p>Tender noodles and savory wontons in soy sauce.</p>
                </div>
            </div>

        </div>
    );
}

export default FoodBeveragesSection;
