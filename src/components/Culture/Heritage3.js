import React, { useState } from "react";

function Heritage3() {
    const [isOpen, setIsOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState("");

    const openModal = (imageSrc) => {
        setCurrentImage(imageSrc);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setCurrentImage("");
    };

    return (
        <div className="heritageSection">
            <h1>George Town UNESCO World Heritage Site</h1>
            <div className="Part1">
                <div className="image-container">
                    <div className="right-image">
                        <img
                            src={require("./images-heritage/heritage3.2.jpg")}
                            alt="UNESCO 1"
                            onClick={() => openModal(require("./images-heritage/heritage3.2.jpg"))}
                        />
                        <img
                            src={require("./images-heritage/heritage3.7.jpg")}
                            alt="UNESCO 2"
                            onClick={() => openModal(require("./images-heritage/heritage3.7.jpg"))}
                        />
                    </div>

                    <div className="left-image">
                        <img
                            src={require("./images-heritage/heritage3.8.jpg")}
                            alt="UNESCO 3"
                            onClick={() => openModal(require("./images-heritage/heritage3.8.jpg"))}
                        />
                        <img
                            src={require("./images-heritage/heritage3.6.jpg")}
                            alt="UNESCO 4"
                            onClick={() => openModal(require("./images-heritage/heritage3.6.jpg"))}
                        />
                    </div>
                </div>

                <div className="description-container">
                    <p>
                        George Town, a UNESCO World Heritage Site, is a treasure trove of history and culture, offering a glimpse into Penang's multifaceted past.
                        Its well-preserved colonial architecture, traditional shophouses, and cultural landmarks create a charming cityscape that reflects a blend of Eastern and Western influences.
                        Visitors can explore a variety of historical sites, from the iconic Clan Jetties to the grand Cheong Fatt Tze Mansion, each contributing to the city’s vibrant heritage.
                        George Town's designation as a UNESCO site highlights its importance as a cultural crossroads in Southeast Asia.
                        Its streets are alive with stories, making it an essential destination for anyone looking to experience the soul of Penang.
                    </p>
                </div>
            </div>

            <div className="Part2">
                <div className="description-container">
                    <p>
                        In addition to its rich architectural wonders, George Town's UNESCO World Heritage status underscores its significance as a cultural melting pot where diverse communities have lived harmoniously for centuries.
                        The city’s vibrant street art, traditional festivals, and preserved heritage buildings tell the story of Penang’s evolution, showcasing how different cultures have influenced its growth.
                        From the colorful murals on Armenian Street to the tranquil gardens of the Khoo Kongsi clan house, every corner of George Town offers a piece of history waiting to be discovered.
                        This recognition not only protects the city's cultural legacy but also promotes its continued appreciation by future generations.
                    </p>
                </div>

                <div className="map-container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.999760550612!2d100.3379775!3d5.4170036999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304ac391217398d1%3A0xe3374c478de7ca59!2sGeorgetown%20UNESCO%20Historic%20Site!5e0!3m2!1sen!2smy!4v1736094382747!5m2!1sen!2smy"
                        width="600"
                        height="450"
                        style={{border: 0}}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">

                    </iframe>
                </div>
            </div>

            {isOpen && (
                <div className="modal" onClick={closeModal}>
                    <span className="close" onClick={closeModal}>
                        &times;
                    </span>
                    <img className="modal-content" src={currentImage} alt="Popup"/>
                </div>
            )}
        </div>
    );
}

export default Heritage3;

