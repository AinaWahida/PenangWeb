import React from "react";
import "./CultureHeritage.css";
import {Link} from "react-router-dom";
import Heritage1 from "./Heritage1";

const CultureHeritage = () => {
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
                        <li><Link to="/hotels">Places to Stay</Link></li>
                    </ul>
                </nav>
                <div className="intro-content">
                    <h1>Culture & Heritage</h1>
                </div>
            </div>
            <Heritage1 />
        </div>
    );
};

export default CultureHeritage;
