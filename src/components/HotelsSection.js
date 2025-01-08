import React from "react";
import { Link } from "react-router-dom";
import "./Section.css";
import {faArrowCircleRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function HotelsSection() {
    return (
        <div className="hotels-section">
            <div className="title">
                <h2>Discover the perfect place to stay</h2>
                <Link to="/hotels" className="see-more-button">See More <FontAwesomeIcon icon={faArrowCircleRight}/></Link>
            </div>
            <div className="description">Escape to paradise with our handpicked stays – indulge in luxury, discover hidden gems, or enjoy budget-friendly comfort in the heart of the city.</div>
            <div className="hotels-grid">
                <div className="hotel-item">
                    <img src={require('./Hotel/images-hotel/hotel1.jpg')} alt="Hotel 1"/>
                    <h3>Shangri-La Golden Sands</h3>
                    <p>Batu Feringgi</p>
                    <div className="hotel-rating">★★★★</div>
                    <p>Indulge in serene luxury with breathtaking sea views and lush tropical gardens.</p>
                </div>
                <div className="hotel-item">
                    <img src={require('./Hotel/images-hotel/hotel2.jpg')} alt="Hotel 2"/>
                    <h3>Hard Rock Hotel</h3>
                    <p>Batu Feringgi</p>
                    <div className="hotel-rating">★★★★★</div>
                    <p>Experience rock-star treatment with vibrant entertainment and a stunning poolside.</p>
                </div>
                <div className="hotel-item">
                    <img src={require('./Hotel/images-hotel/hotel3.jpg')} alt="Hotel 3"/>
                    <h3>Lexis Suites</h3>
                    <p>Georgetown</p>
                    <div className="hotel-rating">★★★★</div>
                    <p>Relax in spacious rooms with private pools overlooking the serene waterfront.</p>
                </div>
                <div className="hotel-item">
                    <img src={require('./Hotel/images-hotel/hotel4.jpg')} alt="Hotel 4"/>
                    <h3>Tido Hostel</h3>
                    <p>Penang Island</p>
                    <div className="hotel-rating">★★★</div>
                    <p>Enjoy budget-friendly comfort in a modern setting close to local attractions.</p>
                </div>
                <div className="hotel-item">
                    <img src={require('./Hotel/images-hotel/hotel5.jpg')} alt="Hotel 5"/>
                    <h3>M Qube</h3>
                    <p>Bayan Lepas</p>
                    <div className="hotel-rating">★★★</div>
                    <p>Sleep in futuristic capsule-style accommodations designed for a unique stay.</p>
                </div>
            </div>
        </div>
    );
}

export default HotelsSection;
