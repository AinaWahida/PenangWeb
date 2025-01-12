import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Section.css";
import { faArrowCircleRight, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function HotelsSection() {
    const [selectedHotel, setSelectedHotel] = useState(null);

    return (
        <div className="hotels-section">
            <div className="title">
                <h2>Discover the perfect place to stay</h2>
                <Link to="/hotels" className="see-more-button">
                    See More <FontAwesomeIcon icon={faArrowCircleRight} />
                </Link>
            </div>
            <div className="description">
                Escape to paradise with our handpicked stays – indulge in luxury, discover hidden gems, or enjoy budget-friendly comfort in the heart of the city.
            </div>
            <div className="hotels-grid">
                <div
                    className="hotel-item"
                    onClick={() =>
                        setSelectedHotel({
                            videoSrc: require("./Hotel/videos/shangrila.mp4"),
                            title: "Shangri-La Golden Sands",
                        })
                    }
                >
                    <img src={require("./Hotel/images-hotel/hotel1.jpg")} alt="Shangri-La Golden Sands" />
                    <h3>Shangri-La Golden Sands</h3>
                    <p>Batu Feringgi</p>
                    <div className="hotel-rating">★★★★</div>
                    <p>Indulge in serene luxury with breathtaking sea views and lush tropical gardens.</p>
                </div>
                <div
                    className="hotel-item"
                    onClick={() =>
                        setSelectedHotel({
                            videoSrc: require("./Hotel/videos/hardrock.mp4"),
                            title: "Hard Rock Hotel",
                        })
                    }
                >
                    <img src={require("./Hotel/images-hotel/hotel2.jpg")} alt="Hard Rock Hotel" />
                    <h3>Hard Rock Hotel</h3>
                    <p>Batu Feringgi</p>
                    <div className="hotel-rating">★★★★★</div>
                    <p>Experience rock-star treatment with vibrant entertainment and a stunning poolside.</p>
                </div>
                <div
                    className="hotel-item"
                    onClick={() =>
                        setSelectedHotel({
                            videoSrc: require("./Hotel/videos/lexis.mp4"),
                            title: "Lexis Suites",
                        })
                    }
                >
                    <img src={require("./Hotel/images-hotel/Hotel3_1.jpg")} alt="Lexis Suites" />
                    <h3>Lexis Suites</h3>
                    <p>George Town</p>
                    <div className="hotel-rating">★★★★</div>
                    <p>Relax in spacious rooms with private pools overlooking the serene waterfront.</p>
                </div>
                <div
                    className="hotel-item"
                    onClick={() =>
                        setSelectedHotel({
                            videoSrc: require("./Hotel/videos/tidohostel.mp4"),
                            title: "TIDO Hostel Penang",
                        })
                    }
                >
                    <img src={require("./Hotel/images-hotel/hotel4.jpg")} alt="TIDO Hostel Penang" />
                    <h3>TIDO Hostel Penang</h3>
                    <p>George Town</p>
                    <div className="hotel-rating">★★★</div>
                    <p>Enjoy budget-friendly comfort in a modern setting close to local attractions.</p>
                </div>
                <div
                    className="hotel-item"
                    onClick={() =>
                        setSelectedHotel({
                            videoSrc: require("./Hotel/videos/mqube.mp4"),
                            title: "M Qube Hotel",
                        })
                    }
                >
                    <img src={require("./Hotel/images-hotel/hotel5.jpg")} alt="M Qube Hotel" />
                    <h3>M Qube Hotel</h3>
                    <p>Bayan Lepas</p>
                    <div className="hotel-rating">★★★</div>
                    <p>Sleep in futuristic capsule-style accommodations designed for a unique stay.</p>
                </div>
            </div>

            {selectedHotel && (
                <div className="video-overlay">
                    <div className="video-container">
                        <button className="close-button" onClick={() => setSelectedHotel(null)}>
                            <FontAwesomeIcon icon={faTimesCircle} />
                        </button>
                        <h3>{selectedHotel.title}</h3>
                        <video controls autoPlay>
                            <source src={selectedHotel.videoSrc} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            )}
        </div>
    );
}

export default HotelsSection;
