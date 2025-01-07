import React from "react";
import "./FoodBevarage.css";
import {Link} from "react-router-dom";
import Food1 from "../Food/Food1";
import Food2 from "../Food/Food2";
import Food3 from "../Food/Food3";
import Food4 from "../Food/Food4";
import Food5 from "../Food/Food5";


const FoodBeverages = () => {
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
                        <li><Link to="/hotels">Places to Stay</Link></li>
                        <li><Link to="/culture-heritage">About Penang</Link></li>
                    </ul>
                </nav>
                <div className="intro-content">
                    <h1>Food & Beverages</h1>
                </div>
            </div>
            <Food1 />
            <Food2 />
            <Food3 />
            <Food4 />
            <Food5 />
        </div>
    );
};

export default FoodBeverages;
