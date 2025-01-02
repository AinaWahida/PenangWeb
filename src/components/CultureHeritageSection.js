import React from "react";
import { Link } from "react-router-dom";
import "./Section.css";
import {faArrowCircleRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function CultureHeritageSection() {
    return (
        <div className="heritage-section">
            <div className="title">
                <h2>Culture & Heritages</h2>
                <Link to="/culture-heritage" className="see-more-button">See More <FontAwesomeIcon icon={faArrowCircleRight}/></Link>
            </div>
            <div className="description">Immerse yourself in the vibrant traditions, historic landmarks, and cultural treasures that make Penang unique. Discover stories of the past and celebrate the rich heritage that lives on today.</div>
            <div className="heritage-grid">
                <div className="heritage-item">
                    <img src={require("./Culture/images-heritage/heritage1.1.jpg")} alt="Heritage 1" />
                    <h3>Kek Lok Si Temple</h3>
                    <p>Explore the stunning architecture and peaceful ambiance of Penang's largest Buddhist temple.</p>
                </div>
                <div className="heritage-item">
                    <img src={require("./Culture/images-heritage/heritage2.1.webp")} alt="Heritage 2" />
                    <h3>Pinang Peranakan Mansion</h3>
                    <p>Step back in time and experience the opulence of Peranakan culture and heritage.</p>
                </div>
                <div className="heritage-item">
                    <img src={require("./Culture/images-heritage/heritage3.1.jpg")} alt="Heritage 3" />
                    <h3>George Town UNESCO World Heritage Site</h3>
                    <p>Walk through historic streets filled with unique architecture and rich cultural history.</p>
                </div>
                <div className="heritage-item">
                    <img src={require("./Culture/images-heritage/heritage4.1.jpg")} alt="Heritage 4" />
                    <h3>Armenian Street</h3>
                    <p>Discover vibrant street art and immerse yourself in Penang's creative scene.</p>
                </div>
            </div>
        </div>
    );
}

export default CultureHeritageSection;
