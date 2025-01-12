import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Section.css";
import { faArrowCircleRight, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CultureHeritageSection() {
    const [selectedHeritage, setSelectedHeritage] = useState(null);

    return (
        <div className="heritage-section">
            <div className="title">
                <h2>Discover the beauty in every place of culture and heritage</h2>
                <Link to="/culture-heritage" className="see-more-button">
                    See More <FontAwesomeIcon icon={faArrowCircleRight} />
                </Link>
            </div>
            <div className="description">
                Immerse yourself in the vibrant traditions, historic landmarks, and cultural treasures that make Penang unique. Discover stories of the past and celebrate the rich heritage that lives on today.
            </div>
            <div className="heritage-grid">
                <div
                    className="heritage-item"
                    onClick={() =>
                        setSelectedHeritage({
                            videoSrc: require("./Culture/videos/kekloksi.mp4"),
                            title: "Kek Lok Si Temple",
                        })
                    }
                >
                    <img src={require("./Culture/images-heritage/heritage1.1.jpg")} alt="Kek Lok Si Temple" />
                    <h3>Kek Lok Si Temple</h3>
                    <p>Explore the stunning architecture and peaceful ambiance of Penang's largest Buddhist temple.</p>
                </div>
                <div
                    className="heritage-item"
                    onClick={() =>
                        setSelectedHeritage({
                            videoSrc: require("./Culture/videos/peranakanmansion.mp4"),
                            title: "Pinang Peranakan Mansion",
                        })
                    }
                >
                    <img src={require("./Culture/images-heritage/heritage2.1.webp")} alt="Pinang Peranakan Mansion" />
                    <h3>Pinang Peranakan Mansion</h3>
                    <p>Step back in time and experience the opulence of Peranakan culture and heritage.</p>
                </div>
                <div
                    className="heritage-item"
                    onClick={() =>
                        setSelectedHeritage({
                            videoSrc: require("./Culture/videos/heritagesite.mp4"),
                            title: "George Town UNESCO World Heritage Site",
                        })
                    }
                >
                    <img src={require("./Culture/images-heritage/heritage3.1.jpg")} alt="George Town" />
                    <h3>George Town UNESCO World Heritage Site</h3>
                    <p>Walk through historic streets filled with unique architecture and rich cultural history.</p>
                </div>
                <div
                    className="heritage-item"
                    onClick={() =>
                        setSelectedHeritage({
                            videoSrc: require("./Culture/videos/armenianstreet.mp4"),
                            title: "Armenian Street",
                        })
                    }
                >
                    <img src={require("./Culture/images-heritage/heritage4.1.jpg")} alt="Armenian Street" />
                    <h3>Armenian Street</h3>
                    <p>Discover vibrant street art and immerse yourself in Penang's creative scene.</p>
                </div>
                <div
                    className="heritage-item"
                    onClick={() =>
                        setSelectedHeritage({
                            videoSrc: require("./Culture/videos/kapitankeling.mp4"),
                            title: "Kapitan Keling Mosque",
                        })
                    }
                >
                    <img src={require("./Culture/images-heritage/heritage5.1.jpeg")} alt="Kapitan Keling Mosque" />
                    <h3>Kapitan Keling Mosque</h3>
                    <p>Visit the Kapitan Keling Mosque in Georgetown, a stunning landmark of Moghul architecture and cultural heritage.</p>
                </div>
            </div>

            {selectedHeritage && (
                <div className="video-overlay">
                    <div className="video-container">
                        <button className="close-button" onClick={() => setSelectedHeritage(null)}>
                            <FontAwesomeIcon icon={faTimesCircle} />
                        </button>
                        <h3>{selectedHeritage.title}</h3>
                        <video controls autoPlay>
                            <source src={selectedHeritage.videoSrc} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CultureHeritageSection;
