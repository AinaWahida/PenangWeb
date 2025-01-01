import React from "react";
import { Link } from "react-router-dom";
import "./Section.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowCircleRight} from "@fortawesome/free-solid-svg-icons";

function TouristAttractionSection() {
    return (
        <div className="attraction-section">
            <div className="title">
                <h2>Uncover hidden treasures around every corner</h2>
                <Link to="/tourist-attraction" className="see-more-button">See More <FontAwesomeIcon icon={faArrowCircleRight}/></Link>
            </div>
            <div className="description">Embark on a journey through captivating destinations – uncover hidden treasures, create memories that last a lifetime and endless inspiration for your next adventure.</div>
            <div className="attraction-grid">
                <div className="attraction-item">
                    <img src={require('./Attraction/images-attraction/spot1.2.webp')} alt="Spot 1"/>
                    <h3>Penang National Park</h3>
                    <p>Explore lush forests and pristine beaches in nature’s sanctuary.</p>
                </div>
                <div className="attraction-item">
                    <img src={require('./Attraction/images-attraction/spot2.1.jpg')} alt="Spot 2" />
                    <h3>Penang Hill</h3>
                    <p>Enjoy panoramic views and cool breezes from the island’s peak.</p>
                </div>
                <div className="attraction-item">
                    <img src={require('./Attraction/images-attraction/spot3.1.jpg')} alt="Spot 3" />
                    <h3>ESCAPE Penang</h3>
                    <p>Dive into thrilling adventures and outdoor fun.</p>
                </div>
                <div className="attraction-item">
                    <img src={require('./Attraction/images-attraction/spot4.1.jpeg')} alt="Spot 4" />
                    <h3>Entopia Butterfly Farm</h3>
                    <p>Discover a vibrant world of fluttering butterflies.</p>
                </div>
                <div className="attraction-item">
                    <img src={require('./Attraction/images-attraction/spot5.1.jpeg')} alt="Spot 5" />
                    <h3>Komtar The Top Penang</h3>
                    <p>Enjoy stunning views and enjoy indoor theme park at Penang’s tallest tower.</p>
                </div>
            </div>
        </div>
    );
}

export default TouristAttractionSection;
