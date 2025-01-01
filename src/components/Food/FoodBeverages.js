import React from "react";
import {Link} from "react-router-dom";

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
            <h2>Food & Beverages</h2>
            <p>Explore delicious Penang cuisine and drinks!</p>
        </div>
    );
};

export default FoodBeverages;
