import React from "react";
import "./TouristAttractions.css";
import {Link} from "react-router-dom";
import Spot1 from "./Spot1";
import Spot2 from "./Spot2";
import Spot3 from "./Spot3";
import Spot4 from "./Spot4";
import Spot5 from "./Spot5";

function TouristAttractions() {
    return (
        <div className="page">
            <div className="intro">
                <nav className="bar">
                    <div className="logo">
                        <h1>visitPenang.my</h1>
                    </div>
                    <ul className="Menu">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/food-beverages">Yummy Things</Link></li>
                        <li><Link to="/hotels">Places to Stay</Link></li>
                        <li><Link to="/culture-heritage">About Penang</Link></li>
                    </ul>
                </nav>
                <div className="intro-content">
                    <h1>Tourist Attractions</h1>
                </div>
            </div>
            <Spot1 />
            <Spot2 />
            <Spot3 />
            <Spot4 />
            <Spot5 />
        </div>
    );
}

export default TouristAttractions;
