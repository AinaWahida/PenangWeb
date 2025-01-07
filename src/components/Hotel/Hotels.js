import React from "react";
import {Link} from "react-router-dom";
import "./Hotels.css";
import Hotel1 from "./Hotel1";
import Hotel2 from "./Hotel2";

const Hotels = () => {
    return (
        <div className="page">
            <div className="intro">
                <nav className="bar">
                    <div className="logo">
                        <h1>visitPenang.my</h1>
                    </div>
                    <ul className="Menu">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/tourist-attraction">Places to Go</Link></li>
                        <li><Link to="/food-beverages">Yummy Things</Link></li>
                        <li><Link to="/culture-heritage">About Penang</Link></li>
                    </ul>
                </nav>
                <div className="intro-content">
                    <h1>Hotels</h1>
                </div>
            </div>
            <Hotel1 />
            <Hotel2 />
        </div>
    );
};

export default Hotels;
