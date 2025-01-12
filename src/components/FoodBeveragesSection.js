import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Section.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight, faTimesCircle } from "@fortawesome/free-solid-svg-icons";

function FoodBeveragesSection() {
    const [selectedFood, setSelectedFood] = useState(null);

    return (
        <div className="food-section">
            <div className="title">
                <h2>Discover hidden flavors in every bite and sip</h2>
                <Link to="/food-beverages" className="see-more-button">
                    See More <FontAwesomeIcon icon={faArrowCircleRight} />
                </Link>
            </div>
            <div className="description">
                Delight in every bite and sip as you uncover unique flavors and hidden culinary gems, crafted to satisfy your cravings and elevate your dining experience.
            </div>
            <div className="food-grid">
                <div
                    className="food-item"
                    onClick={() =>
                        setSelectedFood({
                            videoSrc: require("./Food/videos/meesotong.mp4"),
                            title: "Mee Goreng Sotong",
                        })
                    }
                >
                    <img src={require("./Food/images/image1.1.jpg")} alt="Mee Goreng Sotong" />
                    <h3>Mee Goreng Sotong</h3>
                    <p>Spicy stir-fried noodles with tender squid and sambal.</p>
                </div>
                <div
                    className="food-item"
                    onClick={() =>
                        setSelectedFood({
                            videoSrc: require("./Food/videos/laksakuahpekat.mp4"),
                            title: "Laksa Kuah Pekat",
                        })
                    }
                >
                    <img src={require("./Food/images/image0.1.jpeg")} alt="Laksa Kuah Pekat" />
                    <h3>Laksa Kuah Pekat</h3>
                    <p>A tangy, spicy broth with fish and fresh herbs.</p>
                </div>
                <div
                    className="food-item"
                    onClick={() =>
                        setSelectedFood({
                            videoSrc: require("./Food/videos/aistingkap.mp4"),
                            title: "Ais Tingkap",
                        })
                    }
                >
                    <img src={require("./Food/images/image3.3.jpg")} alt="Ais Tingkap" />
                    <h3>Ais Tingkap</h3>
                    <p>A refreshing shaved ice treat with colorful syrups.</p>
                </div>
                <div
                    className="food-item"
                    onClick={() =>
                        setSelectedFood({
                            videoSrc: require("./Food/videos/pasemburkareem.mp4"),
                            title: "Pasembur Kareem",
                        })
                    }
                >
                    <img src={require("./Food/images/image4.4.jpg")} alt="Pasembur Kareem" />
                    <h3>Pasembur Kareem</h3>
                    <p>Crispy fritters and vegetables in a savory sauce.</p>
                </div>
                <div
                    className="food-item"
                    onClick={() =>
                        setSelectedFood({
                            videoSrc: require("./Food/videos/wantanmee.mp4"),
                            title: "Wantan Mee",
                        })
                    }
                >
                    <img src={require("./Food/images/image5.1.jpeg")} alt="Wantan Mee" />
                    <h3>Wantan Mee</h3>
                    <p>Tender noodles and savory wontons in soy sauce.</p>
                </div>
            </div>

            {selectedFood && (
                <div className="video-overlay">
                    <div className="video-container">
                        <button className="close-button" onClick={() => setSelectedFood(null)}>
                            <FontAwesomeIcon icon={faTimesCircle} />
                        </button>
                        <h3>{selectedFood.title}</h3>
                        <video controls autoPlay>
                            <source src={selectedFood.videoSrc} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            )}
        </div>
    );
}

export default FoodBeveragesSection;
