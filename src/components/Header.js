import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLandmark, faUtensils, faGopuram, faBed} from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

function Header(){
    return (
        <header className="banner">
            <nav className="navbar">
                <div className="logo">
                    <h1>visitPenang.my</h1>
                </div>
                <ul className="menu">
                    <li><Link to="/tourist-attraction">Places to Go</Link></li>
                    <li><Link to="/food-beverages">Yummy Things</Link></li>
                    <li><Link to="/hotels">Places to Stay</Link></li>
                    <li><Link to="/culture-heritage">About Penang</Link></li>
                </ul>
            </nav>
            <div className="banner-content">
                <h1>Welcome to Penang</h1>
                <div className="cta-buttons">
                    <Link to="/tourist-attraction" className="btn"><FontAwesomeIcon icon={faLandmark} /> Tourist Attractions</Link>
                    <Link to="/food-beverages" className="btn"><FontAwesomeIcon icon={faUtensils} /> Food & Beverages</Link>
                    <Link to="/culture-heritage" className="btn"><FontAwesomeIcon icon={faGopuram} /> Culture & Heritages</Link>
                    <Link to="/hotels" className="btn"><FontAwesomeIcon icon={faBed} /> Hotels</Link>
                </div>
            </div>
        </header>
    );
}

export default Header;