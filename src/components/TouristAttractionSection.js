import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Section.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowCircleRight, faTimesCircle} from "@fortawesome/free-solid-svg-icons";

function TouristAttractionSection() {
    const [selectedAttraction, setSelectedAttraction] = useState(null);

    return (
        <div className="attraction-section">
            <div className="title">
                <h2>Uncover hidden treasures around every corner</h2>
                <Link to="/tourist-attraction" className="see-more-button">
                    See More <FontAwesomeIcon icon={faArrowCircleRight} />
                </Link>
            </div>
            <div className="description">
                Embark on a journey through captivating destinations – uncover hidden treasures, create memories that last a lifetime, and endless inspiration for your next adventure.
            </div>
            <div className="attraction-grid">
                <div
                    className="attraction-item"
                    onClick={() =>
                        setSelectedAttraction({
                            videoSrc: require('./Attraction/videos/nationalpark.mp4'),
                            title: "Penang National Park",
                        })
                    }
                >
                    <img src={require('./Attraction/images-attraction/spot1.2.webp')} alt="Penang National Park" />
                    <h3>Penang National Park</h3>
                    <p>Explore lush forests and pristine beaches in nature’s sanctuary.</p>
                </div>
                <div className="attraction-item"
                    onClick={() =>
                        setSelectedAttraction({
                            videoSrc: require('./Attraction/videos/penanghill.mp4'),
                            title: "Penang Hill",
                        })
                    }
                >
                    <img src={require('./Attraction/images-attraction/spot2.1.jpg')} alt="Penang Hill" />
                    <h3>Penang Hill</h3>
                    <p>Enjoy panoramic views and cool breezes from the island’s peak.</p>
                </div>
                <div className="attraction-item"
                    onClick={() =>
                        setSelectedAttraction({
                            videoSrc: require('./Attraction/videos/escape.mp4'),
                            title: "ESCAPE Penang",
                        })
                    }
                >
                    <img src={require('./Attraction/images-attraction/spot3.1.jpg')} alt="ESCAPE Penang" />
                    <h3>ESCAPE Penang</h3>
                    <p>Dive into thrilling adventures and outdoor fun.</p>
                </div>
                <div className="attraction-item"
                    onClick={() =>
                        setSelectedAttraction({
                            videoSrc: require('./Attraction/videos/entopia.mp4'),
                            title: "Entopia Butterfly Farm",
                        })
                    }
                >
                    <img src={require('./Attraction/images-attraction/spot4.1.jpeg')} alt="Entopia Butterfly Farm" />
                    <h3>Entopia Butterfly Farm</h3>
                    <p>Discover a vibrant world of fluttering butterflies.</p>
                </div>
                <div className="attraction-item"
                    onClick={() =>
                        setSelectedAttraction({
                            videoSrc: require('./Attraction/videos/thetop.mp4'),
                            title: "Komtar The Top Penang",
                        })
                    }
                >
                    <img src={require('./Attraction/images-attraction/spot5.1.jpeg')} alt="Komtar The Top Penang" />
                    <h3>Komtar The Top Penang</h3>
                    <p>Enjoy stunning views and indoor theme park fun at Penang’s tallest tower.</p>
                </div>
            </div>

            {selectedAttraction && (
                <div className="video-overlay">
                    <div className="video-container">
                        <button className="close-button" onClick={() => setSelectedAttraction(null)}>
                            <FontAwesomeIcon icon={faTimesCircle} />
                        </button>
                        <h3>{selectedAttraction.title}</h3>
                        <video controls>
                            <source src={selectedAttraction.videoSrc} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            )}
        </div>
    );
}

export default TouristAttractionSection;
